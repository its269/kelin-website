import { NextResponse } from 'next/server';
import { requireAdmin } from '../../../../lib/auth';
import { syncInquiryRepliesFromImap } from '../../../../lib/imapSync';

export async function POST(request) {
  try {
    await requireAdmin();

    let lookbackDays = 14;
    try {
      const body = await request.json();
      if (body?.lookbackDays) lookbackDays = Number(body.lookbackDays) || 14;
    } catch {
      // empty body is fine
    }

    const result = await syncInquiryRepliesFromImap({ lookbackDays });
    const status = result.ok ? 200 : 502;
    return NextResponse.json(result, { status });
  } catch (error) {
    console.error('sync-mail failed:', error);
    const status = error.status || 500;
    return NextResponse.json(
      { ok: false, error: error.message || 'Failed to sync mail', imported: 0, scanned: 0 },
      { status }
    );
  }
}
