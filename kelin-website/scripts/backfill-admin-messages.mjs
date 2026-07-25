import mysql from 'mysql2/promise';

const conn = await mysql.createConnection({
  host: process.env.MYSQL_HOST || '190.92.233.232',
  port: Number(process.env.MYSQL_PORT || 3306),
  user: process.env.MYSQL_USER || 'alecdb',
  password: process.env.MYSQL_PASSWORD || '#Kelin2026',
  database: process.env.MYSQL_WEBSITE_DATABASE || 'db_kelin_website',
});

const [rows] = await conn.query(
  `SELECT id, name, admin_reply, replied_at
   FROM inquiries
   WHERE admin_reply IS NOT NULL AND TRIM(admin_reply) <> ''`
);

let added = 0;
for (const row of rows) {
  const [existing] = await conn.query(
    `SELECT COUNT(*) AS c
     FROM inquiry_messages
     WHERE inquiry_id = ? AND sender_type = 'admin' AND body = ?`,
    [row.id, row.admin_reply]
  );

  if (Number(existing[0].c) === 0) {
    await conn.query(
      `INSERT INTO inquiry_messages (inquiry_id, sender_type, sender_name, body, created_at)
       VALUES (?, 'admin', 'Kelin Support', ?, COALESCE(?, NOW()))`,
      [row.id, row.admin_reply, row.replied_at]
    );
    added += 1;
    console.log('BACKFILL', row.id);
  }
}

const [messages] = await conn.query(
  `SELECT inquiry_id, sender_type, LEFT(body, 60) AS body
   FROM inquiry_messages
   ORDER BY inquiry_id, id`
);
console.log(JSON.stringify(messages, null, 2));
console.log('ADDED', added);
await conn.end();
