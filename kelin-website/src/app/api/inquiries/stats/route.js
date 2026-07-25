import { NextResponse } from 'next/server';
import { requireAdmin } from '../../../../lib/auth';
import { query } from '../../../../lib/db';

export async function GET() {
  try {
    await requireAdmin();

    const [totals] = await query(`
      SELECT
        COUNT(*) AS total,
        SUM(CASE WHEN unread_for_admin = 1 THEN 1 ELSE 0 END) AS unread,
        SUM(CASE WHEN status = 'new' THEN 1 ELSE 0 END) AS status_new,
        SUM(CASE WHEN status = 'read' THEN 1 ELSE 0 END) AS status_read,
        SUM(CASE WHEN status = 'replied' THEN 1 ELSE 0 END) AS status_replied,
        SUM(CASE WHEN created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY) THEN 1 ELSE 0 END) AS last_7_days,
        SUM(CASE WHEN created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY) THEN 1 ELSE 0 END) AS last_30_days
      FROM inquiries
    `);

    const byType = await query(`
      SELECT inquiry_type AS label, COUNT(*) AS count
      FROM inquiries
      GROUP BY inquiry_type
      ORDER BY count DESC
      LIMIT 8
    `);

    const bySource = await query(`
      SELECT COALESCE(NULLIF(page_source, ''), 'Unknown') AS label, COUNT(*) AS count
      FROM inquiries
      GROUP BY COALESCE(NULLIF(page_source, ''), 'Unknown')
      ORDER BY count DESC
      LIMIT 8
    `);

    const daily = await query(`
      SELECT DATE(created_at) AS day, COUNT(*) AS count
      FROM inquiries
      WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 13 DAY)
      GROUP BY DATE(created_at)
      ORDER BY day ASC
    `);

    const responseTimes = await query(`
      SELECT
        AVG(TIMESTAMPDIFF(HOUR, created_at, replied_at)) AS avg_hours_to_reply,
        COUNT(*) AS replied_count
      FROM inquiries
      WHERE replied_at IS NOT NULL
    `);

    return NextResponse.json({
      ok: true,
      stats: {
        totals: {
          total: Number(totals.total || 0),
          unread: Number(totals.unread || 0),
          status_new: Number(totals.status_new || 0),
          status_read: Number(totals.status_read || 0),
          status_replied: Number(totals.status_replied || 0),
          last_7_days: Number(totals.last_7_days || 0),
          last_30_days: Number(totals.last_30_days || 0),
          avg_hours_to_reply: responseTimes[0]?.avg_hours_to_reply
            ? Number(Number(responseTimes[0].avg_hours_to_reply).toFixed(1))
            : null,
          replied_count: Number(responseTimes[0]?.replied_count || 0),
        },
        byType,
        bySource,
        daily,
      },
    });
  } catch (error) {
    const status = error.status || 500;
    return NextResponse.json({ ok: false, error: error.message || 'Failed to load stats' }, { status });
  }
}
