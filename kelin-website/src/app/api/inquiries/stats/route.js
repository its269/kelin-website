import { NextResponse } from 'next/server';
import { requireAdmin } from '../../../../lib/auth';
import { query } from '../../../../lib/db';

export async function GET() {
  try {
    await requireAdmin();

    const [totals] = await query(`
      SELECT
        COUNT(*)::int AS total,
        COALESCE(SUM(CASE WHEN unread_for_admin = 1 THEN 1 ELSE 0 END), 0)::int AS unread,
        COALESCE(SUM(CASE WHEN status = 'new' THEN 1 ELSE 0 END), 0)::int AS status_new,
        COALESCE(SUM(CASE WHEN status = 'read' THEN 1 ELSE 0 END), 0)::int AS status_read,
        COALESCE(SUM(CASE WHEN status = 'replied' THEN 1 ELSE 0 END), 0)::int AS status_replied,
        COALESCE(SUM(CASE WHEN created_at >= NOW() - INTERVAL '7 days' THEN 1 ELSE 0 END), 0)::int AS last_7_days,
        COALESCE(SUM(CASE WHEN created_at >= NOW() - INTERVAL '30 days' THEN 1 ELSE 0 END), 0)::int AS last_30_days
      FROM inquiries
    `);

    const byType = await query(`
      SELECT inquiry_type AS label, COUNT(*)::int AS count
      FROM inquiries
      GROUP BY inquiry_type
      ORDER BY count DESC
      LIMIT 8
    `);

    const bySource = await query(`
      SELECT COALESCE(NULLIF(page_source, ''), 'Unknown') AS label, COUNT(*)::int AS count
      FROM inquiries
      GROUP BY COALESCE(NULLIF(page_source, ''), 'Unknown')
      ORDER BY count DESC
      LIMIT 8
    `);

    const daily = await query(`
      SELECT DATE(created_at) AS day, COUNT(*)::int AS count
      FROM inquiries
      WHERE created_at >= CURRENT_DATE - INTERVAL '13 days'
      GROUP BY DATE(created_at)
      ORDER BY day ASC
    `);

    const responseTimes = await query(`
      SELECT
        AVG(EXTRACT(EPOCH FROM (replied_at - created_at)) / 3600.0) AS avg_hours_to_reply,
        COUNT(*)::int AS replied_count
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
