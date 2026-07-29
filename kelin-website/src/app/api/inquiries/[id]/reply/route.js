import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { requireAdmin } from '../../../../../lib/auth';
import { query } from '../../../../../lib/db';
import { sendInquiryReply } from '../../../../../lib/mail';

async function loadMessages(inquiryId) {
  return query(
    `SELECT id, inquiry_id, sender_type, sender_name, body, created_at
     FROM inquiry_messages
     WHERE inquiry_id = ?
     ORDER BY created_at ASC, id ASC`,
    [inquiryId]
  );
}

export async function POST(request, { params }) {
  try {
    const admin = await requireAdmin();
    const { id } = await params;
    const body = await request.json();
    const reply = (body.reply || '').trim();

    if (!reply) {
      return NextResponse.json({ ok: false, error: 'Reply message is required' }, { status: 400 });
    }

    const rows = await query('SELECT * FROM inquiries WHERE id = ? LIMIT 1', [id]);
    if (!rows.length) {
      return NextResponse.json({ ok: false, error: 'Inquiry not found' }, { status: 404 });
    }

    const inquiry = rows[0];
    let replyToken = inquiry.reply_token;
    if (!replyToken) {
      replyToken = crypto.randomBytes(24).toString('hex');
      await query('UPDATE inquiries SET reply_token = ? WHERE id = ?', [replyToken, id]);
      inquiry.reply_token = replyToken;
    }

    const inserted = await query(
      `INSERT INTO inquiry_messages (inquiry_id, sender_type, sender_name, body, source)
       VALUES (?, 'admin', ?, ?, 'cms')`,
      [id, admin.username || 'Kelin Support', reply]
    );
    const adminMessageId = inserted.insertId;

    await query(
      `UPDATE inquiries
       SET admin_reply = ?, replied_at = NOW(), replied_by = ?, status = 'replied',
           unread_for_admin = 0, last_message_at = NOW()
       WHERE id = ?`,
      [reply, admin.id, id]
    );

    let emailSent = true;
    let emailError = null;
    try {
      const mailResult = await sendInquiryReply({
        inquiry,
        replyBody: reply,
        adminEmail: admin.email || process.env.SMTP_USER,
        replyToken,
      });
      if (mailResult?.messageId) {
        await query(
          'UPDATE inquiries SET last_outbound_message_id = ? WHERE id = ?',
          [mailResult.messageId, id]
        );
        if (adminMessageId) {
          await query(
            'UPDATE inquiry_messages SET email_message_id = ? WHERE id = ?',
            [mailResult.messageId, adminMessageId]
          );
        }
      }
    } catch (mailError) {
      emailSent = false;
      emailError = mailError.message || 'Email failed';
      console.error('Reply email failed:', mailError);
    }

    const messages = await loadMessages(id);

    return NextResponse.json({
      ok: true,
      emailSent,
      emailError,
      messages,
    });
  } catch (error) {
    console.error('Reply failed:', error);
    const status = error.status || 500;
    return NextResponse.json({ ok: false, error: error.message || 'Failed to send reply' }, { status });
  }
}
