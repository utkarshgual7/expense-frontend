# Expense Tracker — Frontend

Next.js (App Router) + React Query. Calls the backend API over HTTP.

## Setup

```bash
npm install
cp .env.example .env.local    # NEXT_PUBLIC_API_URL=http://localhost:4000
npm run dev                   # :3000
```

Needs the backend running separately.

## Deploy (Render → Web Service)

| | |
| --- | --- |
| Build | `npm ci && npm run build` |
| Start | `npm start` |
| Root dir | *(blank)* |

Env var:
- `NEXT_PUBLIC_API_URL` — the backend's full origin, including `https://`, no trailing slash

**This value is inlined into the JS bundle at build time, not read at runtime.** To change
it, use *Clear build cache & deploy* — a restart silently keeps the old URL.

Deploy the backend first, then set its `CORS_ORIGINS` to this app's origin and redeploy it.

`src/shared/expense.ts` is the Zod contract, duplicated from the backend repo, and drives
both the form's inline validation and the response types. Keep the copies in sync.
