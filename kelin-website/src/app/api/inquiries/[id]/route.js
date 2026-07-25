import { NextResponse } from 'next/server';
import { requireAdmin } from '../../../../lib/auth';
import { query } from '../../../../lib/db';

async function ensureConversationMessages(inquiry) {
  const existing = await query(
    `SELECT COUNT(*) AS c FROM inquiry_messages WHERE inquiry_id = ?`,
    [inquiry.id]
  );

  if (Number(existing[0]?.c || 0) === 0 && inquiry.message) {
    await query(
      `INSERT INTO inquiry_messages (inquiry_id, sender_type, sender_name, body, created_at)
       VALUES (?, 'visitor', ?, ?, ?)`,
      [inquiry.id, inquiry.name, inquiry.message, inquiry.created_at]
    );
  }

  // Backfill older admin replies that were emailed before chat messages existed
  if (inquiry.admin_reply) {
    const adminCount = await query(
      `SELECT COUNT(*) AS c
       FROM inquiry_messages
       WHERE inquiry_id = ? AND sender_type = 'admin' AND body = ?`,
      [inquiry.id, inquiry.admin_reply]
    );
    if (Number(adminCount[0]?.c || 0) === 0) {
      await query(
        `INSERT INTO inquiry_messages (inquiry_id, sender_type, sender_name, body, created_at)
         VALUES (?, 'admin', 'Kelin Support', ?, COALESCE(?, NOW()))`,
        [inquiry.id, inquiry.admin_reply, inquiry.replied_at]
      );
    }
  }
}

export async function GET(_request, { params }) {
  try {
    await requireAdmin();
    const { id } = await params;
    const rows = await query('SELECT * FROM inquiries WHERE id = ? LIMIT 1', [id]);
    if (!rows.length) {
      return NextResponse.json({ ok: false, error: 'Inquiry not found' }, { status: 404 });
    }

    await ensureConversationMessages(rows[0]);

    await query(
      `UPDATE inquiries
       SET status = CASE WHEN status = 'new' THEN 'read' ELSE status END,
           unread_for_admin = 0
       WHERE id = ?`,
      [id]
    );

    const messages = await query(
      `SELECT id, inquiry_id, sender_type, sender_name, body, created_at
       FROM inquiry_messages
       WHERE inquiry_id = ?
       ORDER BY created_at ASC, id ASC`,
      [id]
    );

    const item = {
      ...rows[0],
      status: rows[0].status === 'new' ? 'read' : rows[0].status,
      unread_for_admin: 0,
    };

    return NextResponse.json({ ok: true, item, messages });
  } catch (error) {
    const status = error.status || 500;
    return NextResponse.json({ ok: false, error: error.message || 'Failed to load inquiry' }, { status });
  }
}
