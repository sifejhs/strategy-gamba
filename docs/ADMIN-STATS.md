# Admin stats (protected)

## Access

- **URL:** `/admin/stats`
- **Login:** `/admin/login`
- **Username:** `Admin`
- **Password:** Set in env as `ADMIN_PASSWORD`, or default (see below).

The whole `/admin` section is protected: without a valid login cookie you are redirected to `/admin/login`.

## What is tracked

- **Live visitors:** Unique sessions with a pageview in the last 5 minutes.
- **Download button clicks:** Total and per minute / hour / day / week.
- **Page views:** Per minute / hour / day / week.

Stats refresh every 5 seconds on the stats page.

## Security

- Use a strong password in production. Set `ADMIN_PASSWORD` in your host (e.g. Vercel env).
- Default password is only for local/dev. Change it for production.
- `/admin` is excluded from crawlers via `robots: noindex, nofollow` in the admin layout.

## Production (persistent stats)

The stats store is in-memory. On Vercel (serverless) it resets on cold starts. For persistent stats across restarts and instances:

1. Add **Vercel KV** (or Upstash Redis) in the Vercel dashboard.
2. In `src/lib/stats-store.ts`, replace the in-memory array with KV get/set (e.g. append events to a list in KV and trim by date).
3. Keep the same API and stats page; only the store implementation changes.
