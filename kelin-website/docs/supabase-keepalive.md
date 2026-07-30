# Supabase Free Keep-Alive (Safe, Read-Only)

This project includes a safe keep-alive flow for Supabase Free:

- Scheduler runs every 3 days.
- It calls `GET /api/admin/health/`.
- That endpoint executes `SELECT 1 AS ok` only.
- No inserts, updates, or deletes are performed.

## Why this is safe

- Read-only check (`SELECT 1`) touches no user records.
- Lightweight payload and short timeout.
- Modest frequency (every 3 days) to avoid unnecessary load.

## Implemented files

- `.github/workflows/supabase-keepalive.yml`
- `.github/workflows/supabase-keepalive-fallback.yml`
- `scripts/keepalive-ping.mjs`
- `src/app/api/admin/health/route.js` (already existed and already uses `SELECT 1`)

## Setup (GitHub Actions - free and simple)

1. Deploy your app so the health endpoint is reachable, e.g.:
   - `https://www.kelingraphics.com/api/admin/health/`
2. In GitHub repo settings, add secret:
   - **Name:** `KEEPALIVE_URL`
   - **Value:** full health URL above
3. Push this repository with the workflow file.
4. In GitHub Actions, run **Supabase Keep Alive** once via **Run workflow** to validate.
5. Confirm logs show JSON with `"ok": true`.

### Fallback scheduler behavior

- Primary workflow: every 3 days at `03:17 UTC`
- Fallback workflow: every 3 days at `11:43 UTC`
- Both use the same read-only health ping and same `KEEPALIVE_URL` secret.

## Local or server cron alternative

You can run:

```bash
KEEPALIVE_URL="https://your-domain.com/api/admin/health/" npm run keepalive:ping
```

Then schedule it with cron / Task Scheduler / any server scheduler every 2-4 days.

## Other free scheduler options

- **GitHub Actions (recommended):** Easy if your code is on GitHub.
- **Cron-job.org / EasyCron:** External HTTP scheduler; point to health URL.
- **Cloudflare Workers Cron:** Free tier available, issue periodic fetch.
- **Vercel Cron (if available for your plan):** Call the same endpoint.

## Risks and limitations

- This is a best-effort mitigation, not a guaranteed prevention if provider policies change.
- Scheduler outages or disabled GitHub Actions can still lead to inactivity pauses.
- If your deployment URL changes, update `KEEPALIVE_URL`.
- If endpoint returns non-200, keep-alive fails until fixed.

## Best practices

- Keep interval moderate (every 2-4 days is enough).
- Monitor action failures (email/notification in GitHub).
- Avoid high-frequency pings; they add noise without extra benefit.
