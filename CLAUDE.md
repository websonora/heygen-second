# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (localhost:3000)
npm run build      # Production build
npm run lint       # Run ESLint (flat config, ESLint 9)
npm start          # Start production server
npx shadcn add <component>  # Add new shadcn/ui components
```

No test framework is configured yet.

## Architecture

- **Framework:** Next.js 16 (App Router) with React 19, TypeScript (strict mode)
- **Backend:** Supabase (`@supabase/ssr` + `@supabase/supabase-js`) — not yet wired up with env vars
- **UI:** shadcn/ui (new-york style, Radix UI primitives) with Tailwind CSS 4
- **Path alias:** `@/*` maps to project root (e.g., `@/components`, `@/lib`)

### Project Structure

- `app/` — Next.js App Router pages and layouts
- `components/ui/` — shadcn/ui components (avatar, button, card, dialog, dropdown-menu, input, label, sheet)
- `lib/utils.ts` — `cn()` helper combining `clsx` + `tailwind-merge` for Tailwind class composition

### Styling

- Tailwind CSS 4 with OkLCh color variables defined in `app/globals.css`
- Light/dark themes via CSS custom properties
- shadcn/ui components use `class-variance-authority` for variants and `data-slot` attributes
- All shadcn/ui components are client components (`"use client"`)

### shadcn/ui Configuration

`components.json` defines the shadcn setup: new-york style, RSC-aware, slate base color, lucide icons. Component aliases follow `@/components/ui`, utils at `@/lib/utils`.
