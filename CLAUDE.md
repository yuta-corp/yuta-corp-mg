# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project context

YUTA Corporation is a Malagasy startup building software solutions. This repository is the source for its corporate website. The product is marketing-facing (presenting the company, services, and contact), not a SaaS app — design polish and content clarity matter more than backend complexity.

## Commands

Package manager: **pnpm** (lockfile is `pnpm-lock.yaml`).

- `pnpm dev` — start Next.js dev server with Turbopack
- `pnpm build` — production build (`next build`)
- `pnpm start` — serve the production build
- `pnpm lint` — ESLint (flat config, `eslint-config-next` core-web-vitals + TS)
- `pnpm typecheck` — `tsc --noEmit`
- `pnpm format` — Prettier write on all `**/*.{ts,tsx}`

There is no test runner configured.

## Stack and architecture

- **Next.js 16** (App Router, RSC enabled) on **React 19**, TypeScript strict.
- **Tailwind CSS v4** via `@tailwindcss/postcss` — no `tailwind.config.*`; theme tokens live in `app/globals.css` under `@theme inline` and `:root` / `.dark` CSS variables (OKLCH). Edit colors / radii there, not in a JS config.
- **shadcn/ui** with the `radix-nova` style and `mist` base color (see `components.json`). Add components with `pnpm dlx shadcn@latest add <name>` — they land in `components/ui/` per the configured aliases.
- **Path aliases** (`tsconfig.json` + `components.json`): `@/components`, `@/components/ui`, `@/lib`, `@/lib/utils`, `@/hooks`. Use them instead of relative paths.
- **Theming**: `components/theme-provider.tsx` wraps the app in `next-themes` with `attribute="class"` and `defaultTheme="system"`. It also registers a global hotkey — pressing `d` (outside inputs) toggles dark mode. `app/layout.tsx` sets `suppressHydrationWarning` on `<html>` because of this; preserve that when editing the root layout.
- **Fonts**: Inter (`--font-sans`) and Geist Mono (`--font-mono`) are loaded via `next/font/google` in `app/layout.tsx` and exposed as CSS variables consumed by the Tailwind theme.
- **Icons**: `lucide-react` (configured as the shadcn icon library).
- **Utility helper**: `cn()` in `lib/utils.ts` (clsx + tailwind-merge). Use it for conditional class composition; Prettier's `tailwindcss` plugin is configured to sort classes inside `cn` and `cva`.

## Conventions

- Prettier: no semicolons, double quotes, 2-space indent, `printWidth: 80`, `trailingComma: "es5"`. Run `pnpm format` before committing non-trivial changes.
- Default to **Server Components**; only add `"use client"` when needed (hooks, browser APIs, event handlers) — see `theme-provider.tsx` as the existing example.
- New shadcn primitives belong in `components/ui/`; composed/page-specific components belong directly in `components/`.
- Static assets (logo, images) go in `public/` and are referenced by absolute path (`/logo.png`).
