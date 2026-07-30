# Database Setup — Kelin Website Inquiries (Supabase)

**Status:** Migrated to Supabase Postgres for Vercel production access

## Supabase project

- **URL:** `https://igbbkjabhbfedaypvpjh.supabase.co`
- **Region:** Asia Pacific (Sydney / `ap-southeast-2`)
- **Pooler host:** `aws-0-ap-southeast-2.pooler.supabase.com:6543`

## Tables (same structure as before)

| Table | Purpose |
|-------|---------|
| `admin_users` | CMS admin login accounts |
| `inquiries` | Website visitor inquiries + reply status |
| `inquiry_messages` | Messenger-style conversation thread |
| `inquiry_export_log` | Export batch history |

## Admin CMS

- **Private URL:** `/kgs-admin/`
- **Username:** `admin`
- **Password:** `#Kelin2026`
- Session stays signed in until intentional sign-out

## Local setup scripts

```bash
npm run setup:supabase
npm run migrate:mysql-to-supabase   # optional, if old MySQL still reachable
```

## Vercel Environment Variables (Production)

Set these in Vercel → Project → Settings → Environment Variables (do **not** commit secrets):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SECRET_KEY`
- `SUPABASE_JWKS_URL`
- `SUPABASE_DB_HOST` = `aws-0-ap-southeast-2.pooler.supabase.com`
- `SUPABASE_DB_PORT` = `6543`
- `SUPABASE_DB_USER` = `postgres.igbbkjabhbfedaypvpjh`
- `SUPABASE_DB_PASSWORD` (if it contains `$`, escape for Next.js: write `$$$$` to get `$$`)
- `SUPABASE_DB_NAME` = `postgres`
- `ADMIN_JWT_SECRET`
- SMTP / IMAP vars
- `NEXT_PUBLIC_SITE_URL`

Functions are pinned to **Sydney (`syd1`)** via `vercel.json`.

After deploy, check `/api/admin/health/`.

## Notes

- Legacy MySQL (`190.92.233.232`) is no longer used by the app runtime.
- `.env` is gitignored — never commit database passwords or API keys.
- Formspree has been removed; inquiries save to Supabase and email via Gmail SMTP.
- **RLS is enabled** on all inquiry tables with no public policies (anon Data API blocked; server CMS still works).
