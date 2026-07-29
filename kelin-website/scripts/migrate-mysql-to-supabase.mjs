/**
 * Copy inquiry data from legacy MySQL into Supabase Postgres (if MySQL is reachable).
 */
import mysql from 'mysql2/promise';
import pg from 'pg';

const mysqlConfig = {
  host: process.env.MYSQL_HOST || '190.92.233.232',
  port: Number(process.env.MYSQL_PORT || 3306),
  user: process.env.MYSQL_USER || 'alecdb',
  password: (process.env.MYSQL_PASSWORD || '#Kelin2026').replace(/^['"]|['"]$/g, ''),
  database: process.env.MYSQL_WEBSITE_DATABASE || 'db_kelin_website',
  connectTimeout: 15000,
};

const pgPool = new pg.Pool({
  host: process.env.SUPABASE_DB_HOST || 'aws-0-ap-southeast-2.pooler.supabase.com',
  port: Number(process.env.SUPABASE_DB_PORT || 6543),
  user: process.env.SUPABASE_DB_USER || 'postgres.igbbkjabhbfedaypvpjh',
  password: process.env.SUPABASE_DB_PASSWORD || 'SUPABASEpa$$2026',
  database: process.env.SUPABASE_DB_NAME || 'postgres',
  ssl: { rejectUnauthorized: false },
  max: 1,
  connectionTimeoutMillis: 20000,
});

async function main() {
  let mysqlConn;
  try {
    mysqlConn = await mysql.createConnection(mysqlConfig);
  } catch (err) {
    console.log('MYSQL_SKIP', err.message);
    console.log('No MySQL source — schema/admin only. Done.');
    await pgPool.end();
    return;
  }

  const pg = await pgPool.connect();
  try {
    const [admins] = await mysqlConn.query('SELECT * FROM admin_users ORDER BY id');
    for (const row of admins) {
      await pg.query(
        `INSERT INTO admin_users (id, username, password_hash, email, created_at)
         VALUES ($1,$2,$3,$4,COALESCE($5, NOW()))
         ON CONFLICT (username) DO UPDATE
           SET password_hash = EXCLUDED.password_hash,
               email = EXCLUDED.email`,
        [row.id, row.username, row.password_hash, row.email, row.created_at]
      );
    }

    await pg.query(`SELECT setval(pg_get_serial_sequence('admin_users','id'), GREATEST((SELECT MAX(id) FROM admin_users), 1))`);

    const [inquiries] = await mysqlConn.query('SELECT * FROM inquiries ORDER BY id');
    for (const row of inquiries) {
      await pg.query(
        `INSERT INTO inquiries (
           id, name, first_name, last_name, email, company, address, country_code, phone,
           subject, message, inquiry_type, product_name, page_source, page_url, reply_token,
           status, unread_for_admin, last_message_at, last_outbound_message_id, admin_reply,
           replied_at, replied_by, export_batch, created_at, updated_at
         ) VALUES (
           $1,$2,$3,$4,$5,$6,$7,$8,$9,
           $10,$11,$12,$13,$14,$15,$16,
           $17,$18,$19,$20,$21,
           $22,$23,$24,COALESCE($25,NOW()),COALESCE($26,NOW())
         )
         ON CONFLICT (id) DO NOTHING`,
        [
          row.id,
          row.name,
          row.first_name,
          row.last_name,
          row.email,
          row.company,
          row.address,
          row.country_code,
          row.phone,
          row.subject,
          row.message,
          row.inquiry_type,
          row.product_name,
          row.page_source,
          row.page_url,
          row.reply_token,
          row.status || 'new',
          row.unread_for_admin ?? 1,
          row.last_message_at,
          row.last_outbound_message_id || null,
          row.admin_reply,
          row.replied_at,
          row.replied_by,
          row.export_batch,
          row.created_at,
          row.updated_at,
        ]
      );
    }

    if (inquiries.length) {
      await pg.query(
        `SELECT setval(pg_get_serial_sequence('inquiries','id'), GREATEST((SELECT MAX(id) FROM inquiries), 1))`
      );
    }

    let messages = [];
    try {
      const [msgRows] = await mysqlConn.query('SELECT * FROM inquiry_messages ORDER BY id');
      messages = msgRows;
    } catch {
      messages = [];
    }

    for (const row of messages) {
      await pg.query(
        `INSERT INTO inquiry_messages (
           id, inquiry_id, sender_type, sender_name, body, email_message_id, source, created_at
         ) VALUES ($1,$2,$3,$4,$5,$6,COALESCE($7,'web'),COALESCE($8,NOW()))
         ON CONFLICT (id) DO NOTHING`,
        [
          row.id,
          row.inquiry_id,
          row.sender_type,
          row.sender_name,
          row.body,
          row.email_message_id || null,
          row.source || 'web',
          row.created_at,
        ]
      );
    }

    if (messages.length) {
      await pg.query(
        `SELECT setval(pg_get_serial_sequence('inquiry_messages','id'), GREATEST((SELECT MAX(id) FROM inquiry_messages), 1))`
      );
    }

    let exports = [];
    try {
      const [exportRows] = await mysqlConn.query('SELECT * FROM inquiry_export_log ORDER BY id');
      exports = exportRows;
    } catch {
      exports = [];
    }

    for (const row of exports) {
      await pg.query(
        `INSERT INTO inquiry_export_log (id, batch_number, inquiry_count, exported_by, file_name, created_at)
         VALUES ($1,$2,$3,$4,$5,COALESCE($6,NOW()))
         ON CONFLICT (id) DO NOTHING`,
        [row.id, row.batch_number, row.inquiry_count, row.exported_by, row.file_name, row.created_at]
      );
    }

    console.log(
      JSON.stringify({
        ok: true,
        admins: admins.length,
        inquiries: inquiries.length,
        messages: messages.length,
        exports: exports.length,
      })
    );
  } finally {
    pg.release();
    await pgPool.end();
    await mysqlConn.end();
  }
}

main().catch(async (err) => {
  console.error('FAIL', err.message);
  try {
    await pgPool.end();
  } catch {
    // ignore
  }
  process.exit(1);
});
