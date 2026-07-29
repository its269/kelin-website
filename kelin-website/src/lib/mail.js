import nodemailer from 'nodemailer';

function getTransporter() {
  return nodemailer.createTransport({
    service: process.env.SMTP_SERVICE || 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function siteBaseUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kelinph.com').replace(/\/$/, '');
}

export async function sendInquiryNotification(inquiry) {
  const transporter = getTransporter();
  const to = process.env.INQUIRY_NOTIFY_EMAIL || process.env.SMTP_USER;
  const from = process.env.EMAIL_FROM || process.env.SMTP_USER;

  const subject = `[Kelin Website] New Inquiry #${inquiry.id} — ${inquiry.subject} [KGS-${inquiry.id}]`;
  const text = [
    `New website inquiry received.`,
    ``,
    `ID: ${inquiry.id}`,
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Phone: ${inquiry.country_code} ${inquiry.phone}`,
    `Company: ${inquiry.company}`,
    `Address: ${inquiry.address}`,
    `Type: ${inquiry.inquiry_type}`,
    `Product: ${inquiry.product_name || 'N/A'}`,
    `Subject: ${inquiry.subject}`,
    `Page: ${inquiry.page_source || 'N/A'}`,
    `URL: ${inquiry.page_url || 'N/A'}`,
    ``,
    `Message:`,
    inquiry.message,
    ``,
    `Open CMS: ${siteBaseUrl()}/kgs-admin/`,
    `[KGS-${inquiry.id}]`,
  ].join('\n');

  await transporter.sendMail({
    from: `"Kelin Website Inquiries" <${from}>`,
    to,
    replyTo: inquiry.email,
    subject,
    text,
    headers: {
      'X-Kelin-Inquiry-Id': String(inquiry.id),
    },
  });
}

export async function sendInquiryReply({ inquiry, replyBody, adminEmail, replyToken }) {
  const transporter = getTransporter();
  const from = process.env.EMAIL_FROM || process.env.SMTP_USER;
  // Prefer the real SMTP mailbox so customer "Reply" lands in Gmail, not a fake admin@ address.
  const replyTo = process.env.SMTP_USER || adminEmail || from;
  const replyUrl = `${siteBaseUrl()}/inquiry-reply/${replyToken || inquiry.reply_token}/`;
  const tag = `[KGS-${inquiry.id}]`;
  const messageId = `<kgs-inquiry-${inquiry.id}-${Date.now()}@kelinph.com>`;

  const info = await transporter.sendMail({
    from: `"Kelin Graphics System" <${from}>`,
    to: inquiry.email,
    replyTo,
    messageId,
    subject: `Re: ${inquiry.subject} ${tag}`,
    headers: {
      'X-Kelin-Inquiry-Id': String(inquiry.id),
    },
    text: [
      `Hi ${inquiry.name},`,
      ``,
      replyBody,
      ``,
      `You can continue this conversation here:`,
      replyUrl,
      ``,
      `---`,
      `Kelin Graphics System`,
      `info@kelinph.com | (02) 8711-1888`,
      tag,
    ].join('\n'),
    html: `
      <p>Hi ${escapeHtml(inquiry.name)},</p>
      <p>${escapeHtml(replyBody).replace(/\n/g, '<br/>')}</p>
      <p><a href="${replyUrl}" style="display:inline-block;padding:10px 16px;background:#111827;color:#fff;text-decoration:none;border-radius:8px;">Continue conversation</a></p>
      <p style="color:#6b7280;font-size:13px;">Kelin Graphics System · info@kelinph.com · (02) 8711-1888 · ${tag}</p>
    `,
  });

  const outboundId = String(info.messageId || messageId)
    .replace(/^<|>$/g, '')
    .toLowerCase();

  return { messageId: outboundId };
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
