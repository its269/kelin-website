/**
 * Postgres (Supabase) access with MySQL-style `?` placeholders for existing routes.
 */
import pg from 'pg';

const { Pool } = pg;

let pool;

function cleanEnv(value) {
  if (value == null) return value;
  let v = String(value).trim();
  if (
    (v.startsWith("'") && v.endsWith("'")) ||
    (v.startsWith('"') && v.endsWith('"'))
  ) {
    v = v.slice(1, -1);
  }
  return v;
}

export function toPgParams(sql, params = []) {
  let index = 0;
  const text = String(sql).replace(/\?/g, () => {
    index += 1;
    return `$${index}`;
  });
  return { text, values: params };
}

export function getDbConfig() {
  const connectionString = cleanEnv(process.env.DATABASE_URL || process.env.SUPABASE_DB_URL);
  const projectUrl = cleanEnv(process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL);
  let projectRef = null;
  try {
    if (projectUrl) projectRef = new URL(projectUrl).hostname.split('.')[0];
  } catch {
    projectRef = null;
  }

  const host = cleanEnv(process.env.SUPABASE_DB_HOST);
  let user = cleanEnv(process.env.SUPABASE_DB_USER);
  // Pooler requires postgres.<project-ref>, not bare "postgres"
  if ((!user || user === 'postgres') && projectRef && host?.includes('pooler.supabase.com')) {
    user = `postgres.${projectRef}`;
  }
  if (!user) user = 'postgres';

  // Next.js env expansion mangles `$`; allow URL-encoded passwords (%24 = $)
  let password = cleanEnv(process.env.SUPABASE_DB_PASSWORD);
  if (password && /%[0-9A-Fa-f]{2}/.test(password)) {
    try {
      password = decodeURIComponent(password);
    } catch {
      // keep raw value
    }
  }

  return {
    connectionString,
    host,
    port: Number(cleanEnv(process.env.SUPABASE_DB_PORT) || 6543),
    user,
    password,
    database: cleanEnv(process.env.SUPABASE_DB_NAME) || 'postgres',
  };
}

/** Reset cached pool (e.g. after env fix / hot reload). */
export function resetPool() {
  if (pool) {
    const closing = pool;
    pool = null;
    closing.end().catch(() => {});
  }
}

export function assertDbConfig() {
  const config = getDbConfig();
  if (config.connectionString) return config;
  const missing = [];
  if (!config.host) missing.push('SUPABASE_DB_HOST');
  if (!config.password) missing.push('SUPABASE_DB_PASSWORD');
  if (missing.length) {
    const error = new Error(`Missing database env: ${missing.join(', ')}`);
    error.code = 'DB_ENV_MISSING';
    error.status = 500;
    throw error;
  }
  return config;
}

export function getPool() {
  if (!pool) {
    const config = assertDbConfig();
    pool = config.connectionString
      ? new Pool({
          connectionString: config.connectionString,
          ssl: { rejectUnauthorized: false },
          max: 3,
          connectionTimeoutMillis: 15000,
          idleTimeoutMillis: 10000,
        })
      : new Pool({
          host: config.host,
          port: config.port,
          user: config.user,
          password: config.password,
          database: config.database,
          ssl: { rejectUnauthorized: false },
          max: 3,
          connectionTimeoutMillis: 15000,
          idleTimeoutMillis: 10000,
        });
  }
  return pool;
}

export async function query(sql, params = []) {
  let finalSql = String(sql).trim().replace(/;+\s*$/, '');
  const isInsert = /^\s*INSERT\s+/i.test(finalSql);
  if (isInsert && !/\bRETURNING\b/i.test(finalSql)) {
    finalSql = `${finalSql} RETURNING id`;
  }

  const { text, values } = toPgParams(finalSql, params);
  const result = await getPool().query(text, values);

  if (isInsert) {
    const rows = result.rows || [];
    rows.insertId = rows[0]?.id ?? null;
    rows.rowCount = result.rowCount;
    return rows;
  }

  return result.rows;
}

export function isDbConnectionError(error) {
  const code = String(error?.code || '');
  const message = String(error?.message || '');
  return (
    code === 'ETIMEDOUT' ||
    code === 'ECONNREFUSED' ||
    code === 'ENOTFOUND' ||
    code === 'EHOSTUNREACH' ||
    code === 'ECONNRESET' ||
    code === '28P01' ||
    code === 'DB_ENV_MISSING' ||
    /connect etimedout/i.test(message) ||
    /missing database env/i.test(message) ||
    /timeout expired/i.test(message)
  );
}
