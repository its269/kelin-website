import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';

const config = {
  host: process.env.MYSQL_HOST || '190.92.233.232',
  port: Number(process.env.MYSQL_PORT || 3306),
  user: process.env.MYSQL_USER || 'alecdb',
  password: process.env.MYSQL_PASSWORD || '#Kelin2026',
  database: process.env.MYSQL_WEBSITE_DATABASE || 'db_kelin_website',
  multipleStatements: true,
  connectTimeout: 20000,
};

async function main() {
  const conn = await mysql.createConnection(config);

  await conn.query(`
CREATE TABLE IF NOT EXISTS admin_users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  email VARCHAR(255) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS inquiries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  first_name VARCHAR(150) NULL,
  last_name VARCHAR(150) NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  country_code VARCHAR(20) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  subject VARCHAR(500) NOT NULL,
  message TEXT NOT NULL,
  inquiry_type VARCHAR(100) NOT NULL DEFAULT 'general',
  product_name VARCHAR(255) NULL,
  page_source VARCHAR(255) NULL,
  page_url TEXT NULL,
  status ENUM('new','read','replied','archived') NOT NULL DEFAULT 'new',
  admin_reply TEXT NULL,
  replied_at DATETIME NULL,
  replied_by INT NULL,
  export_batch INT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_status (status),
  INDEX idx_created (created_at),
  INDEX idx_email (email),
  CONSTRAINT fk_inquiries_replied_by FOREIGN KEY (replied_by) REFERENCES admin_users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS inquiry_export_log (
  id INT AUTO_INCREMENT PRIMARY KEY,
  batch_number INT NOT NULL,
  inquiry_count INT NOT NULL,
  exported_by INT NULL,
  file_name VARCHAR(255) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_export_admin FOREIGN KEY (exported_by) REFERENCES admin_users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
`);

  const hash = await bcrypt.hash('KelinAdmin2026!', 10);
  await conn.query(
    `INSERT INTO admin_users (username, password_hash, email)
     VALUES (?, ?, ?)
     ON DUPLICATE KEY UPDATE password_hash = VALUES(password_hash), email = VALUES(email)`,
    ['admin', hash, 'johnpaulpolendey22@gmail.com']
  );

  const [tables] = await conn.query('SHOW TABLES');
  console.log('TABLES_OK:', tables.map((t) => Object.values(t)[0]).join(', '));
  await conn.end();
}

main().catch((err) => {
  console.error('FAIL', err.message);
  process.exit(1);
});
