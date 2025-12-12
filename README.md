## Overview

Codex Web selling starter built with Next.js and Tailwind CSS. The landing page is a modern dark theme that highlights dynamic instruction flows, Codex features, and a guided path to deploy on Vercel.

Key routes:

- `/` — Home (selling-focused hero and sections)
- `/selling` — Plan cards and deployment notes
- `/about` — Project overview and stack
- `/login` — User login form (admins can also sign in here)
- `/admin` — Admin dashboard (credential-gated)

## Local development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Environment variables (Vercel / GitHub Secrets)

There is no `.env` committed. Set these in Vercel Project → Settings → Environment Variables (and mirror in GitHub secrets if using CI):

- `ADMIN_USERNAME` — required. Admin login username.
- `ADMIN_PASSWORD` — required. Admin login password.
- `ADMIN_SESSION_SECRET` — required. Long random string for signing admin session cookies.
- `ADMIN_SESSION_SALT` — optional. Extra salt for deterministic session secret fallback.
- `AUTH_SECRET` — optional. Alternate secret if you prefer one shared value.

Recommended values for production:

```text
ADMIN_USERNAME=your-admin-user
ADMIN_PASSWORD=generate-a-strong-password
ADMIN_SESSION_SECRET=openssl rand -hex 32
ADMIN_SESSION_SALT=openssl rand -hex 16
```

## Vercel deployment (step by step)

1. Push this repository to GitHub.
2. In Vercel, **Add New Project** → Import the repo → Framework: **Next.js** (auto-detected).
3. Build command: `npm run build` (default). Output directory: `.next` (default). Install command: `npm install` (default).
4. Add environment variables:
   - `ADMIN_USERNAME` = your chosen admin username.
   - `ADMIN_PASSWORD` = your chosen admin password.
   - `ADMIN_SESSION_SECRET` = a secure random string.
   - Optional: `ADMIN_SESSION_SALT` for extra entropy; `AUTH_SECRET` if you prefer a single shared secret.
5. Deploy. Every push triggers a new preview; promote to production when ready.
6. Visit `/admin` with the configured credentials. Admins can still browse the public site (`/`, `/selling`, `/about`) and the user login page (`/login`).

## Admin panel

- Path: `/admin`
- Uses the secrets above to gate access and sign an HTTP-only session cookie.
- Development fallback credentials (local only): `admin` / `fancyvinoadmin2025`.

## Quality checks

- Lint: `npm run lint`
- Production build: `npm run build`
