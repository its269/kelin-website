# Database Setup Report — Kelin Website Inquiries

**Date:** July 25, 2026  
**Status:** SUCCESS

## Result

A **new dedicated database** was created successfully:

- **Database name:** `db_kelin_website`
- **Host:** `190.92.233.232:3306`
- **User:** `alecdb`

Existing databases (`db_purchase`, `db_kelin_inventory`, `db_kelinconnect`, etc.) were **not modified** and no existing tables were removed.

## Tables created (new only)

| Table | Purpose |
|-------|---------|
| `admin_users` | CMS admin login accounts |
| `inquiries` | Website visitor inquiries + reply status |
| `inquiry_messages` | Messenger-style conversation thread |
| `inquiry_export_log` | Export batch history when inquiries are exported |

## Admin CMS

- **Private URL:** `/kgs-admin/`
- **Legacy redirects:** `/admin/` and `/admin/inquiries/` → `/kgs-admin/`
- **Username:** `admin`
- **Password:** `#Kelin2026`
- Session stays signed in until intentional sign-out
- Page is `noindex` / not linked from the public website

### Chat / messenger

- Conversation messages are stored in `inquiry_messages`
- Admin replies appear in a scrollable messenger thread
- Inquirer can continue the chat via email link: `/inquiry-reply/[token]/`
- Unread / read indicators show on each inquiry

### Analytics

- Toggle **Show Analytics** in the CMS for advanced inquiry stats

Please change the admin password after first login.

## Environment updates

`.env` now includes:

- `MYSQL_WEBSITE_DATABASE=db_kelin_website`
- `ADMIN_JWT_SECRET=...`
- Gmail SMTP vars (`SMTP_SERVICE`, `SMTP_USER`, `SMTP_PASS`, `EMAIL_FROM`, `INQUIRY_NOTIFY_EMAIL`)

## Production (Vercel)

Admin login needs a live MySQL connection from Vercel functions.

1. In Vercel → Project → Settings → Environment Variables, set for **Production**:
   - `MYSQL_HOST`
   - `MYSQL_PORT` (`3306`)
   - `MYSQL_USER`
   - `MYSQL_PASSWORD` (value only — do **not** wrap in quotes)
   - `MYSQL_WEBSITE_DATABASE` (`db_kelin_website`)
   - `ADMIN_JWT_SECRET`
   - SMTP / IMAP vars used by inquiry mail
   - `NEXT_PUBLIC_SITE_URL`
2. On the MySQL server / cloud firewall, allow inbound **TCP 3306** from the public internet (or Vercel egress).  
   `connect ETIMEDOUT` on `/api/admin/login/` means Vercel cannot open a TCP connection to the database.
3. Functions are pinned to **Singapore (`sin1`)** via `vercel.json` so they run closer to Asia-hosted MySQL.
4. After deploy, check `/api/admin/health/` — it reports whether the DB is reachable (no passwords returned).

## Notes

- Formspree has been removed from all inquiry forms.
- New inquiries are saved to MySQL and emailed to your Gmail (`INQUIRY_NOTIFY_EMAIL`).
- Admin CMS can list inquiries, reply by email, and export CSV.
- When pending (unexported) inquiries reach **100**, the CMS shows an export popup.
- Static export (`output: 'export'`) was disabled so API routes / CMS can run. Use `npm run dev` or `npm run start` (not a pure static host) for this feature set.
