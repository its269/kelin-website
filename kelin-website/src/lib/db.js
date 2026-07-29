import mysql from 'mysql2/promise';

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

export function getDbConfig() {
  const host = cleanEnv(process.env.MYSQL_HOST);
  const user = cleanEnv(process.env.MYSQL_USER);
  const password = cleanEnv(process.env.MYSQL_PASSWORD);
  const database = cleanEnv(process.env.MYSQL_WEBSITE_DATABASE) || 'db_kelin_website';
  const port = Number(cleanEnv(process.env.MYSQL_PORT) || 3306);

  return { host, user, password, database, port };
}

export function assertDbConfig() {
  const config = getDbConfig();
  const missing = [];
  if (!config.host) missing.push('MYSQL_HOST');
  if (!config.user) missing.push('MYSQL_USER');
  if (!config.password && config.password !== '') missing.push('MYSQL_PASSWORD');
  if (!config.database) missing.push('MYSQL_WEBSITE_DATABASE');
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
    pool = mysql.createPool({
      host: config.host,
      port: config.port,
      user: config.user,
      password: config.password,
      database: config.database,
      waitForConnections: true,
      connectionLimit: 5,
      connectTimeout: 15000,
      enableKeepAlive: true,
      namedPlaceholders: true,
      timezone: '+08:00',
    });
  }
  return pool;
}

export async function query(sql, params) {
  const [rows] = await getPool().execute(sql, params);
  return rows;
}

export function isDbConnectionError(error) {
  const code = String(error?.code || '');
  const message = String(error?.message || '');
  return (
    code === 'ETIMEDOUT' ||
    code === 'ECONNREFUSED' ||
    code === 'ENOTFOUND' ||
    code === 'EHOSTUNREACH' ||
    code === 'PROTOCOL_CONNECTION_LOST' ||
    code === 'DB_ENV_MISSING' ||
    /connect etimedout/i.test(message) ||
    /missing database env/i.test(message)
  );
}
