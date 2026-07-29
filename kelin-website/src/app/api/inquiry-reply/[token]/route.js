import { NextResponse } from 'next/server';
import { query } from '../../../../lib/db';

export async function GET(_request, { params }) {
  try {
    const { token } = await params;
    const rows = await query(
      `SELECT id, name, email, subject, company, status, created_at
       FROM inquiries WHERE reply_token = ? LIMIT 1`,
      [token]
    );
    if (!rows.length) {
      return NextResponse.json({ ok: false, error: 'Conversation not found' }, { status: 404 });
    }

    const messages = await query(
      `SELECT id, sender_type, sender_name, body, created_at
       FROM inquiry_messages
       WHERE inquiry_id = ?
       ORDER BY created_at ASC, id ASC`,
      [rows[0].id]
    );

    return NextResponse.json({
      ok: true,
      inquiry: rows[0],
      messages,
    });
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'Failed to load conversation' }, { status: 500 });
  }
}

export async function POST(request, { params }) {
  try {
    const { token } = await params;
    const body = await request.json();
    const message = (body.message || '').trim();

    if (!message) {
      return NextResponse.json({ ok: false, error: 'Message is required' }, { status: 400 });
    }

    const rows = await query('SELECT * FROM inquiries WHERE reply_token = ? LIMIT 1', [token]);
    if (!rows.length) {
      return NextResponse.json({ ok: false, error: 'Conversation not found' }, { status: 404 });
    }

    const inquiry = rows[0];
    await query(
      `INSERT INTO inquiry_messages (inquiry_id, sender_type, sender_name, body)
       VALUES (?, 'visitor', ?, ?)`,
      [inquiry.id, inquiry.name, message]
    );

    await query(
      `UPDATE inquiries
       SET unread_for_admin = 1,
           last_message_at = NOW(),
           status = CASE WHEN status = 'replied' THEN 'read' ELSE status END,
           message = ?
       WHERE id = ?`,
      [message, inquiry.id]
    );

    const messages = await query(
      `SELECT id, sender_type, sender_name, body, created_at
       FROM inquiry_messages
       WHERE inquiry_id = ?
       ORDER BY created_at ASC, id ASC`,
      [inquiry.id]
    );

    return NextResponse.json({ ok: true, messages });
  } catch (error) {
    console.error('Visitor reply failed:', error);
    return NextResponse.json({ ok: false, error: 'Failed to send reply' }, { status: 500 });
  }
}
