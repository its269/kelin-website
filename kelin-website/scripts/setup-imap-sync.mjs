import mysql from 'mysql2/promise';

const config = {
  host: process.env.MYSQL_HOST || '190.92.233.232',
  port: Number(process.env.MYSQL_PORT || 3306),
  user: process.env.MYSQL_USER || 'alecdb',
  password: process.env.MYSQL_PASSWORD || '#Kelin2026',
  database: process.env.MYSQL_WEBSITE_DATABASE || 'db_kelin_website',
  connectTimeout: 20000,
};

async function columnExists(conn, table, column) {
  const [rows] = await conn.query(
    `SELECT COUNT(*) AS c
     FROM INFORMATION_SCHEMA.COLUMNS
     WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ? AND COLUMN_NAME = ?`,
    [config.database, table, column]
  );
  return Number(rows[0].c) > 0;
}

async function indexExists(conn, table, indexName) {
  const [rows] = await conn.query(
    `SELECT COUNT(*) AS c
     FROM INFORMATION_SCHEMA.STATISTICS
     WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ? AND INDEX_NAME = ?`,
    [config.database, table, indexName]
  );
  return Number(rows[0].c) > 0;
}

async function main() {
  const conn = await mysql.createConnection(config);

  if (!(await columnExists(conn, 'inquiry_messages', 'email_message_id'))) {
    await conn.query(
      `ALTER TABLE inquiry_messages
       ADD COLUMN email_message_id VARCHAR(255) NULL AFTER body`
    );
  }

  if (!(await columnExists(conn, 'inquiry_messages', 'source'))) {
    await conn.query(
      `ALTER TABLE inquiry_messages
       ADD COLUMN source VARCHAR(32) NOT NULL DEFAULT 'web' AFTER email_message_id`
    );
  }

  if (!(await indexExists(conn, 'inquiry_messages', 'uniq_inquiry_email_message_id'))) {
    await conn.query(
      `ALTER TABLE inquiry_messages
       ADD UNIQUE KEY uniq_inquiry_email_message_id (email_message_id)`
    );
  }

  if (!(await columnExists(conn, 'inquiries', 'last_outbound_message_id'))) {
    await conn.query(
      `ALTER TABLE inquiries
       ADD COLUMN last_outbound_message_id VARCHAR(255) NULL AFTER last_message_at`
    );
  }

  console.log('IMAP_SYNC_SCHEMA_OK');
  await conn.end();
}

main().catch((err) => {
  console.error('FAIL', err.message);
  process.exit(1);
});
