import { NextResponse } from 'next/server';
import { assertDbConfig, getPool, isDbConnectionError } from '../../../../lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Production diagnostics for CMS DB connectivity (no secrets returned).
 */
export async function GET() {
  try {
    const config = assertDbConfig();
    const started = Date.now();
    const pool = getPool();
    const [rows] = await pool.query('SELECT 1 AS ok');
    return NextResponse.json({
      ok: true,
      database: config.database,
      host: config.host,
      port: config.port,
      latencyMs: Date.now() - started,
      ping: rows?.[0]?.ok === 1,
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
          MYSQL_HOST: Boolean(process.env.MYSQL_HOST),
          MYSQL_USER: Boolean(process.env.MYSQL_USER),
          MYSQL_PASSWORD: Boolean(process.env.MYSQL_PASSWORD),
          MYSQL_WEBSITE_DATABASE: Boolean(process.env.MYSQL_WEBSITE_DATABASE),
          ADMIN_JWT_SECRET: Boolean(process.env.ADMIN_JWT_SECRET),
        },
      },
      { status: 503 }
    );
  }
}
