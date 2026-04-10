# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build
npm run lint     # Run ESLint
npm start        # Start production server
```

There are no tests. Pre-commit hooks run Prettier via lint-staged on all staged files automatically.

## Architecture

**Next.js 15 App Router** portfolio site for Ujual P S (photographer & frontend engineer) deployed at `www.talesofuj.com`.

### Routing

| Route | File                                                     |
| ----- | -------------------------------------------------------- |
| `/`   | `src/app/page.tsx` — Photography landing page            |
| `/me` | `src/app/me/page.tsx` — Personal/dev portfolio & contact |
| `/*`  | `src/app/not-found.tsx` — Redirects to `/`               |

### Key directories

- `src/app/components/` — Section components for the `/` landing page
- `src/app/me/components/` — Section components scoped to the `/me` page
- `src/components/ui/` — shadcn/ui primitives (Button, Card, Badge, Separator)
- `src/lib/constants.ts` — Static image arrays and site data (Cloudinary URLs)
- `src/lib/utils.ts` — `cn()` helper for className merging
- `prisma/` — Database schema (User, TheyyamEvent, EventMedia) — defined but not used in the frontend yet

### Image handling

Images are served from Cloudinary. Remote image domains are configured in `next.config.ts`. Static image data lives in `src/lib/constants.ts`.

### Styling

Tailwind CSS v4 with PostCSS. Global styles in `src/app/globals.css`. Use `cn()` from `src/lib/utils.ts` for conditional class merging.

### Path alias

`@/*` maps to `src/*` (configured in `tsconfig.json`).
