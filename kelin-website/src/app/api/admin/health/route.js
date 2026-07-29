import { NextResponse } from 'next/server';
import { assertDbConfig, getPool, isDbConnectionError } from '../../../../lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const config = assertDbConfig();
    const started = Date.now();
    const result = await getPool().query('SELECT 1 AS ok');
    return NextResponse.json({
      ok: true,
      provider: 'supabase-postgres',
      host: config.host || 'connection-string',
      port: config.port || null,
      latencyMs: Date.now() - started,
      ping: result.rows?.[0]?.ok === 1,
      regionHint: process.env.VERCEL_REGION || null,
    });
  } catch (error) {
    console.error('DB health check failed:', error);
    return NextResponse.json(
      {
        ok: false,
        error: isDbConnectionError(error)
          ? 'Database unreachable from this deployment'
          : error.message || 'Health check failed',
        code: error.code || null,
        regionHint: process.env.VERCEL_REGION || null,
        envPresent: {
          SUPABASE_DB_HOST: Boolean(process.env.SUPABASE_DB_HOST),
          SUPABASE_DB_PASSWORD: Boolean(process.env.SUPABASE_DB_PASSWORD),
          SUPABASE_URL: Boolean(process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL),
          SUPABASE_SECRET_KEY: Boolean(process.env.SUPABASE_SECRET_KEY),
          ADMIN_JWT_SECRET: Boolean(process.env.ADMIN_JWT_SECRET),
        },
      },
      { status: 503 }
    );
  }
}
