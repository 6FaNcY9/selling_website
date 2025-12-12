## Overview

Codex Web selling starter built with Next.js and Tailwind CSS. The landing page is a modern dark theme that highlights dynamic instruction flows, Codex features, and a guided path to deploy on Vercel.

## Local development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Admin panel

- Path: `/admin`
- Default credentials: `admin` / `fancyvinoadmin2025`
- Override with secrets:
  - `ADMIN_USERNAME`
  - `ADMIN_PASSWORD`
  - `ADMIN_SESSION_SECRET`
- Store these in GitHub repository secrets and sync to Vercel Project → Settings → Environment Variables for secure storage. The admin session cookie is HTTP-only and scoped to this site.

## Quality checks

- Lint: `npm run lint`
- Production build: `npm run build`

## Deploying to Vercel

1. Push this repository to GitHub.
2. In the Vercel dashboard, import the project and select **Next.js** as the framework.
3. Keep the default build command `npm run build` and output directory `.next`.
4. Deploy. Each push will trigger new previews automatically.
