import { query } from './db';

const KGS_TAG_RE = /\[KGS-(\d+)\]/i;

function imapConfig() {
  return {
    host: process.env.IMAP_HOST || 'imap.gmail.com',
    port: Number(process.env.IMAP_PORT || 993),
    secure: true,
    auth: {
      user: process.env.IMAP_USER || process.env.SMTP_USER,
      pass: process.env.IMAP_PASS || process.env.SMTP_PASS,
    },
    logger: false,
  };
}

function normalizeMessageId(value) {
  if (!value) return null;
  const raw = Array.isArray(value) ? value[0] : value;
  const id = String(raw).trim();
  if (!id) return null;
  return id.replace(/^<|>$/g, '').toLowerCase();
}

function extractEmailAddress(value) {
  if (!value) return '';
  const text = String(value);
  const match = text.match(/<([^>]+)>/);
  return (match ? match[1] : text).trim().toLowerCase();
}

function stripQuotedReply(text) {
  if (!text) return '';
  let body = String(text).replace(/\r\n/g, '\n');

  const cutMarkers = [
    /\nOn .+ wrote:\s*\n/i,
    /\n-{2,}\s*Original Message\s*-{2,}/i,
    /\nFrom:\s.+\nSent:\s/i,
    /\n_{5,}\n/,
    /\n>+ /,
  ];

  for (const marker of cutMarkers) {
    const idx = body.search(marker);
    if (idx > 40) {
      body = body.slice(0, idx);
      break;
    }
  }

  // Drop leading quote lines if the whole remainder is quoted
  const lines = body.split('\n');
  const cleaned = [];
  for (const line of lines) {
    if (/^>+\s?/.test(line) && cleaned.length > 2) break;
    cleaned.push(line.replace(/^>+\s?/, ''));
  }

  return cleaned.join('\n').trim();
}

function parseInquiryIdFromSubject(subject) {
  const match = String(subject || '').match(KGS_TAG_RE);
  return match ? Number(match[1]) : null;
}

async function findInquiryForEmail({ subject, fromEmail, inReplyTo, references }) {
  const taggedId = parseInquiryIdFromSubject(subject);
  if (taggedId) {
    const rows = await query('SELECT * FROM inquiries WHERE id = ? LIMIT 1', [taggedId]);
    if (rows.length) return rows[0];
  }

  const refIds = [
    normalizeMessageId(inReplyTo),
    ...(Array.isArray(references)
      ? references.map(normalizeMessageId)
      : String(references || '')
          .split(/\s+/)
          .map(normalizeMessageId)
          .filter(Boolean)),
  ].filter(Boolean);

  for (const messageId of refIds) {
    const byOutbound = await query(
      'SELECT * FROM inquiries WHERE last_outbound_message_id = ? LIMIT 1',
      [messageId]
    );
    if (byOutbound.length) return byOutbound[0];

    const byMsg = await query(
      'SELECT inquiry_id FROM inquiry_messages WHERE email_message_id = ? LIMIT 1',
      [messageId]
    );
    if (byMsg.length) {
      const rows = await query('SELECT * FROM inquiries WHERE id = ? LIMIT 1', [byMsg[0].inquiry_id]);
      if (rows.length) return rows[0];
    }
  }

  if (!fromEmail) return null;

  const candidates = await query(
    `SELECT * FROM inquiries
     WHERE LOWER(email) = ?
     ORDER BY COALESCE(last_message_at, created_at) DESC
     LIMIT 12`,
    [fromEmail]
  );
  if (!candidates.length) return null;

  const subjectNorm = String(subject || '')
    .replace(/^((re|fw|fwd)\s*:\s*)+/i, '')
    .replace(KGS_TAG_RE, '')
    .trim()
    .toLowerCase();

  if (!subjectNorm) return null;

  // Require subject overlap so unrelated inbox mail is not attached
  return (
    candidates.find((row) => {
      const inquirySubject = String(row.subject || '').trim().toLowerCase();
      if (!inquirySubject) return false;
      return (
        subjectNorm === inquirySubject ||
        subjectNorm.includes(inquirySubject) ||
        inquirySubject.includes(subjectNorm)
      );
    }) || null
  );
}

async function messageAlreadyImported(emailMessageId) {
  if (!emailMessageId) return false;
  const rows = await query(
    'SELECT id FROM inquiry_messages WHERE email_message_id = ? LIMIT 1',
    [emailMessageId]
  );
  return rows.length > 0;
}

async function importParsedEmail(parsed) {
  const emailMessageId = normalizeMessageId(parsed.messageId);
  if (!emailMessageId) return { imported: false, reason: 'missing-message-id' };
  if (await messageAlreadyImported(emailMessageId)) {
    return { imported: false, reason: 'duplicate' };
  }

  const fromEmail = extractEmailAddress(parsed.from?.text || parsed.from?.value?.[0]?.address);
  const ourMailbox = String(process.env.IMAP_USER || process.env.SMTP_USER || '').toLowerCase();
  if (fromEmail && ourMailbox && fromEmail === ourMailbox) {
    return { imported: false, reason: 'outbound-skip' };
  }

  const inquiry = await findInquiryForEmail({
    subject: parsed.subject,
    fromEmail,
    inReplyTo: parsed.inReplyTo,
    references: parsed.references,
  });

  if (!inquiry) return { imported: false, reason: 'no-match' };

  const body = stripQuotedReply(parsed.text || '') || stripQuotedReply(
    String(parsed.html || '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
  );

  if (!body || body.length < 2) return { imported: false, reason: 'empty-body' };

  const createdAt = parsed.date instanceof Date && !Number.isNaN(parsed.date.getTime())
    ? parsed.date
    : new Date();

  await query(
    `INSERT INTO inquiry_messages
      (inquiry_id, sender_type, sender_name, body, email_message_id, source, created_at)
     VALUES (?, 'visitor', ?, ?, ?, 'email', ?)`,
    [inquiry.id, inquiry.name || fromEmail || 'Visitor', body, emailMessageId, createdAt]
  );

  await query(
    `UPDATE inquiries
     SET unread_for_admin = 1,
         last_message_at = GREATEST(COALESCE(last_message_at, TIMESTAMPTZ '1970-01-01'), ?::timestamptz)
     WHERE id = ?`,
    [createdAt, inquiry.id]
  );

  return { imported: true, inquiryId: inquiry.id };
}

/**
 * Pull recent inbox mail and import visitor Gmail replies into inquiry chat.
 */
export async function syncInquiryRepliesFromImap({ lookbackDays = 14 } = {}) {
  const [{ ImapFlow }, { simpleParser }] = await Promise.all([
    import('imapflow'),
    import('mailparser'),
  ]);

  const authUser = process.env.IMAP_USER || process.env.SMTP_USER;
  const authPass = process.env.IMAP_PASS || process.env.SMTP_PASS;
  if (!authUser || !authPass) {
    return {
      ok: false,
      error: 'IMAP credentials missing. Set IMAP_USER/IMAP_PASS or SMTP_USER/SMTP_PASS.',
      imported: 0,
      scanned: 0,
    };
  }

  const ourMailbox = String(authUser).toLowerCase();
  const knownSenders = new Set(
    (
      await query(
        `SELECT DISTINCT LOWER(email) AS email
         FROM inquiries
         WHERE email IS NOT NULL AND email <> ''
           AND COALESCE(last_message_at, created_at) >= NOW() - (? * INTERVAL '1 day')`,
        [Math.max(lookbackDays, 30)]
      )
    ).map((row) => String(row.email || '').toLowerCase()).filter(Boolean)
  );

  const client = new ImapFlow(imapConfig());
  let scanned = 0;
  let imported = 0;
  const reasons = {};

  try {
    await client.connect();
    const lock = await client.getMailboxLock('INBOX');
    try {
      const since = new Date();
      since.setDate(since.getDate() - lookbackDays);

      const taggedUids = (await client.search({ since, subject: 'KGS-' }, { uid: true })) || [];
      const recentUids = (await client.search({ since }, { uid: true })) || [];

      // Cap broad scan so large inboxes stay responsive
      const recentCap = recentUids.slice(-120);
      const uidSet = new Set([...taggedUids, ...recentCap]);
      const uids = [...uidSet];
      if (!uids.length) {
        return { ok: true, imported: 0, scanned: 0, reasons };
      }

      const candidateUids = [];
      for await (const msg of client.fetch(
        uids,
        { envelope: true, uid: true },
        { uid: true }
      )) {
        const envelope = msg.envelope || {};
        const subject = String(envelope.subject || '');
        const fromEmail = extractEmailAddress(
          envelope.from?.[0]?.address ||
            (envelope.from?.[0]?.name
              ? `${envelope.from[0].name} <${envelope.from[0].address || ''}>`
              : '')
        );

        if (fromEmail && fromEmail === ourMailbox) continue;

        const hasTag = KGS_TAG_RE.test(subject);
        const knownFrom = fromEmail && knownSenders.has(fromEmail);
        if (hasTag || knownFrom) {
          candidateUids.push(msg.uid);
        }
      }

      if (!candidateUids.length) {
        return { ok: true, imported: 0, scanned: 0, reasons: { no_candidates: 1 } };
      }

      for await (const msg of client.fetch(
        candidateUids,
        { source: true, uid: true },
        { uid: true }
      )) {
        scanned += 1;
        try {
          const parsed = await simpleParser(msg.source);
          const result = await importParsedEmail(parsed);
          if (result.imported) imported += 1;
          else {
            const key = result.reason || 'skipped';
            reasons[key] = (reasons[key] || 0) + 1;
          }
        } catch (err) {
          reasons.parse_error = (reasons.parse_error || 0) + 1;
          console.error('IMAP message parse failed:', err.message);
        }
      }
    } finally {
      lock.release();
    }

    return { ok: true, imported, scanned, reasons };
  } catch (error) {
    console.error('IMAP sync failed:', error);
    return {
      ok: false,
      error: error.message || 'IMAP sync failed',
      imported,
      scanned,
      reasons,
    };
  } finally {
    try {
      await client.logout();
    } catch {
      // ignore logout errors
    }
  }
}
