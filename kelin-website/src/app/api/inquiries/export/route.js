import { NextResponse } from 'next/server';
import { requireAdmin } from '../../../../lib/auth';
import { query } from '../../../../lib/db';

function toCsv(rows) {
  const headers = [
    'id', 'name', 'email', 'company', 'address', 'country_code', 'phone',
    'subject', 'message', 'inquiry_type', 'product_name', 'page_source',
    'page_url', 'status', 'admin_reply', 'created_at', 'replied_at',
  ];

  const escape = (value) => {
    const str = value === null || value === undefined ? '' : String(value);
    if (/[",\n]/.test(str)) return `"${str.replace(/"/g, '""')}"`;
    return str;
  };

  const lines = [headers.join(',')];
  for (const row of rows) {
    lines.push(headers.map((key) => escape(row[key])).join(','));
  }
  return lines.join('\n');
}

export async function GET() {
  try {
    const admin = await requireAdmin();
    const rows = await query(
      `SELECT * FROM inquiries
       WHERE export_batch IS NULL
       ORDER BY created_at ASC`
    );

    if (!rows.length) {
      return NextResponse.json({ ok: false, error: 'No inquiries to export' }, { status: 400 });
    }

    const batchRows = await query(
      'SELECT COALESCE(MAX(batch_number), 0) + 1 AS next_batch FROM inquiry_export_log'
    );
    const batchNumber = Number(batchRows[0]?.next_batch || 1);
    const fileName = `inquiries-export-batch-${batchNumber}-${new Date().toISOString().slice(0, 10)}.csv`;

    await query(
      `UPDATE inquiries SET export_batch = ? WHERE export_batch IS NULL`,
      [batchNumber]
    );

    await query(
      `INSERT INTO inquiry_export_log (batch_number, inquiry_count, exported_by, file_name)
       VALUES (?, ?, ?, ?)`,
      [batchNumber, rows.length, admin.id, fileName]
    );

    const csv = toCsv(rows);
    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'X-Export-Batch': String(batchNumber),
        'X-Export-Count': String(rows.length),
      },
    });
  } catch (error) {
    const status = error.status || 500;
    return NextResponse.json({ ok: false, error: error.message || 'Export failed' }, { status });
  }
}
