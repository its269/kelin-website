import mysql from 'mysql2/promise';
import crypto from 'crypto';

const config = {
  host: process.env.MYSQL_HOST || '190.92.233.232',
  port: Number(process.env.MYSQL_PORT || 3306),
  user: process.env.MYSQL_USER || 'alecdb',
  password: process.env.MYSQL_PASSWORD || '#Kelin2026',
  database: process.env.MYSQL_WEBSITE_DATABASE || 'db_kelin_website',
  multipleStatements: true,
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

async function main() {
  const conn = await mysql.createConnection(config);

  await conn.query(`
CREATE TABLE IF NOT EXISTS inquiry_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  inquiry_id INT NOT NULL,
  sender_type ENUM('visitor','admin') NOT NULL,
  sender_name VARCHAR(255) NULL,
  body TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_inquiry_created (inquiry_id, created_at),
  CONSTRAINT fk_inquiry_messages_inquiry
    FOREIGN KEY (inquiry_id) REFERENCES inquiries(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
`);

  if (!(await columnExists(conn, 'inquiries', 'reply_token'))) {
    await conn.query(`ALTER TABLE inquiries ADD COLUMN reply_token VARCHAR(64) NULL UNIQUE AFTER page_url`);
  }
  if (!(await columnExists(conn, 'inquiries', 'unread_for_admin'))) {
    await conn.query(`ALTER TABLE inquiries ADD COLUMN unread_for_admin TINYINT(1) NOT NULL DEFAULT 1 AFTER status`);
  }
  if (!(await columnExists(conn, 'inquiries', 'last_message_at'))) {
    await conn.query(`ALTER TABLE inquiries ADD COLUMN last_message_at DATETIME NULL AFTER unread_for_admin`);
  }

  const [inquiries] = await conn.query('SELECT * FROM inquiries ORDER BY id ASC');
  for (const inquiry of inquiries) {
    let token = inquiry.reply_token;
    if (!token) {
      token = crypto.randomBytes(24).toString('hex');
      await conn.query('UPDATE inquiries SET reply_token = ? WHERE id = ?', [token, inquiry.id]);
    }

    const [msgCount] = await conn.query(
      'SELECT COUNT(*) AS c FROM inquiry_messages WHERE inquiry_id = ?',
      [inquiry.id]
    );
    if (Number(msgCount[0].c) === 0) {
      await conn.query(
        `INSERT INTO inquiry_messages (inquiry_id, sender_type, sender_name, body, created_at)
         VALUES (?, 'visitor', ?, ?, ?)`,
        [inquiry.id, inquiry.name, inquiry.message, inquiry.created_at]
      );
      if (inquiry.admin_reply) {
        await conn.query(
          `INSERT INTO inquiry_messages (inquiry_id, sender_type, sender_name, body, created_at)
           VALUES (?, 'admin', 'Kelin Support', ?, COALESCE(?, NOW()))`,
          [inquiry.id, inquiry.admin_reply, inquiry.replied_at]
        );
      }
    }

    await conn.query(
      `UPDATE inquiries
       SET last_message_at = COALESCE(last_message_at, replied_at, created_at),
           unread_for_admin = CASE WHEN status = 'new' THEN 1 ELSE unread_for_admin END
       WHERE id = ?`,
      [inquiry.id]
    );
  }

  console.log('CHAT_SCHEMA_OK');
  await conn.end();
}

main().catch((err) => {
  console.error('FAIL', err.message);
  process.exit(1);
});
