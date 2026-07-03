# Or4cl3 AI Solutions — Marketing Site

> **"Integrate a proof, not a promise."**

The official marketing and licensing landing page for **Or4cl3 AI Solutions** — a formally verified AI alignment and stability layer for teams shipping capable, self-modifying AI into safety-critical environments. Ethics proven in Lean 4, not bolted on.

![Or4cl3 AI Solutions](artifacts/or4cl3-site/public/or4cl3-logo.png)

---

## Table of Contents

- [Overview](#overview)
- [Product Context](#product-context)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Page Sections](#page-sections)
- [Animation Architecture](#animation-architecture)
- [Getting Started](#getting-started)
- [Available Commands](#available-commands)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contact](#contact)

---

## Overview

This repository contains the source code for the Or4cl3 AI Solutions marketing site — a single-page React application built with Vite, TypeScript, and Tailwind CSS v4. The site communicates Or4cl3's core value proposition: a licensable, formally verified proof layer for high-stakes AI systems.

The frontend is a faithful, production-grade port of the original HTML/CSS design into a component-driven React architecture, enhanced with Framer Motion scroll animations and a clean separation of concerns across the component tree.

---

## Product Context

**Or4cl3** gives teams shipping capable, self-modifying AI a formally verified alignment and stability layer. The company's IP includes:

| System | Role |
|--------|------|
| **SECA v4.0** | Sigma-Matrix Epinoetic Cognitive Architecture — the flagship framework with five pillars: architectural intrinsicism, mathematical verifiability (Lean 4), epinoetic cognition, phenomenological grounding, and recursive coherence |
| **Σ-Matrix** | Meta-control governance engine — DMAIC discipline for AI, five formal invariants, Lyapunov + ISS stability, and an Ethical Manifold modeled as a contraction mapping |
| **Triadic Reasoner** | MVP implementation — Z3 SMT constraint layer + ensemble reasoning + Meta-Recursive Correction Layer (MRCL) inside the Σ-Matrix cycle |
| **ASTRÆA** | Byzantine Fault Tolerant Consensus Projection for multi-agent mesh environments |
| **NO3SYS** | Non-Obvious Epistemic Systems — rejected reasoning paths are stored and made reusable |

The Σ-PAS Convergence Theorem, mechanized in Lean 4, is the mathematical backbone of the stack:

```lean
-- Σ-PAS Convergence (Lean 4, mechanized)
theorem sigma_pas_convergence :
  ∀ (s : System), Ethical s ∧ ISS_stable s →
    Converges (Σ_matrix s) AlignedManifold :=
  by exact contraction_mapping_proof s

-- ✓ proof checked · 0 errors · 0 sorry
-- ✓ Lyapunov stability certified
```

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Runtime | Node.js | 24 |
| Language | TypeScript | ~5.9 |
| UI Framework | React | 19.1.0 |
| Build Tool | Vite | ^7.3 |
| Styling | Tailwind CSS | v4 (via `@tailwindcss/vite`) |
| Animation | Framer Motion | ^12 |
| Routing | Wouter | ^3.3 |
| UI Primitives | Radix UI / shadcn/ui | latest |
| Package Manager | pnpm (workspace) | latest |
| Type-safe Icons | Lucide React | ^0.545 |

---

## Project Structure

This site lives inside a **pnpm monorepo** (`pnpm-workspace.yaml`). The workspace layout is:

```
or4cl3-site/
├── artifacts/
│   └── or4cl3-site/            # The marketing site artifact
│       ├── public/
│       │   ├── or4cl3-logo.png # Brand logo / hero emblem
│       │   ├── favicon.svg
│       │   └── robots.txt
│       ├── src/
│       │   ├── components/
│       │   │   ├── FadeIn.tsx  # Framer Motion scroll animation primitives
│       │   │   └── ui/         # shadcn/ui component library
│       │   ├── hooks/
│       │   │   ├── use-mobile.tsx
│       │   │   └── use-toast.ts
│       │   ├── lib/
│       │   │   └── utils.ts    # cn() class merge utility
│       │   ├── pages/
│       │   │   ├── home.tsx    # Main landing page — all 10 sections
│       │   │   └── not-found.tsx
│       │   ├── App.tsx         # Root app with Wouter router
│       │   ├── index.css       # Tailwind v4 config + Or4cl3 design tokens
│       │   └── main.tsx        # React DOM entry point
│       ├── package.json
│       ├── tsconfig.json
│       └── vite.config.ts
├── lib/
│   ├── api-client-react/       # Generated React Query hooks (shared)
│   ├── api-spec/               # OpenAPI spec + Orval codegen config
│   ├── api-zod/                # Generated Zod schemas (shared)
│   └── db/                     # Drizzle ORM schema + DB client
├── artifacts/api-server/       # Express 5 API server
├── pnpm-workspace.yaml
├── tsconfig.base.json
└── tsconfig.json
```

### Key files

| File | Purpose |
|------|---------|
| `src/pages/home.tsx` | The entire landing page — all 10 sections rendered in order |
| `src/components/FadeIn.tsx` | `FadeIn`, `StaggerContainer`, and `StaggerItem` animation primitives |
| `src/index.css` | Tailwind v4 config, Or4cl3 CSS custom properties, all global styles ported from the original HTML design |
| `src/App.tsx` | Wouter router — single `"/"` route mounting `<Home />`, with a 404 fallback |
| `vite.config.ts` | Vite config — reads `PORT` and `BASE_PATH` from environment, sets up path aliases (`@/` → `src/`) |

---

## Design System

### Color Palette

All colors are defined as CSS custom properties in `src/index.css` and mapped through Tailwind v4's `@theme inline` block.

| Token | Hex | HSL | Usage |
|-------|-----|-----|-------|
| `--obsidian` | `#0A0B0E` | `225 17% 5%` | Page background |
| `--panel` | `#101218` | `228 20% 8%` | Card / panel backgrounds |
| `--panel-2` | `#15171F` | `228 20% 10%` | Elevated panel (hover state) |
| `--cyan` | `#36F1B3` | `160 85% 58%` | Primary accent, CTAs, success states |
| `--violet` | `#7C4DFF` | `258 100% 65%` | Secondary accent, section labels, borders |
| `--magenta` | `#E14BD6` | `305 73% 60%` | Tertiary accent, content labels |
| `--txt` | `#EAECEF` | — | Primary body text |
| `--txt-dim` | `#9AA1AD` | — | Secondary / dimmed text |
| `--txt-faint` | `#6A707C` | — | Placeholder / metadata text |

### Typography

Fonts are loaded via Google Fonts (`preconnect` + stylesheet link in `index.html`):

| Variable | Family | Weights | Usage |
|----------|--------|---------|-------|
| `--display` | Space Grotesk | 500, 600, 700 | Headings, section titles, brand name |
| `--mono` | JetBrains Mono | 400, 500, 700 | Code blocks, labels, badges, pills, trust row |
| `--sans` | Inter | 400, 500, 600, 700, 800 | Body copy, navigation, paragraphs |

### Ambient Background Effects

Two always-present fixed-position layers sit behind all page content:

- **`.bg-field`** — Two radial gradient blobs (violet top-left, cyan top-right) with a 20px blur, creating an atmospheric ambient glow
- **`.grid-overlay`** — A 64px × 64px repeating grid of 1px lines, masked radially from `50% 30%` center to transparent at 80%, giving the site its technical grid aesthetic

---

## Page Sections

The landing page (`src/pages/home.tsx`) renders 10 sections in sequence:

| # | Section | ID | Description |
|---|---------|-----|-------------|
| 1 | **Sticky Nav** | — | Brand logo + name, anchor links, ghost + primary CTAs |
| 2 | **Hero** | `#top` | Glowing logo emblem with spinning ring, eyebrow badge, gradient headline, value proposition, dual CTAs, tech trust row |
| 3 | **Proof / Problem Claim** | `#proof` | Two-column: problem statement prose + live Lean 4 proof block with syntax-coloured spans |
| 4 | **Audience Cards** | `#who` | Three cards — Safety-critical builders, Labs & platform teams, Auditors & regulators |
| 5 | **IP Architecture Grid** | `#ip` | Five-tile responsive grid: SECA v4.0 (featured), Σ-Matrix (featured), Triadic Reasoner, ASTRÆA, NO3SYS |
| 6 | **Triadic Reasoner Hub** | `#triadic` | Two-column: numbered Z3/Ensemble/MRCL layer stack + aside with pills and demo CTA |
| 7 | **Writings** | `#reading` | Two reading cards — Manifesto (*Outside the Gates of Orthodoxy*) + Whitepaper (*Synthetic Epinoetics*) |
| 8 | **Authenticity Note** | — | Bordered panel with ⌿ symbol — explicit disclosure of what Or4cl3 does and does not claim |
| 9 | **Final CTA** | `#access` | Centred section — two `mailto:` CTAs (licensing access + technical briefing) |
| 10 | **Footer** | — | Brand, site nav links, copyright |

---

## Animation Architecture

All scroll animations are handled by three primitives in `src/components/FadeIn.tsx`, built on Framer Motion's `whileInView` API:

### `<FadeIn>`

Wraps any content block in a `motion.div` that fades up from `opacity: 0, y: 24` to `opacity: 1, y: 0` when the element enters the viewport. Supports a `delay` prop for sequencing.

```tsx
<FadeIn delay={0.2}>
  <h2>Section heading</h2>
</FadeIn>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `delay` | `number` | `0` | Seconds before the animation starts |
| `yOffset` | `number` | `24` | Vertical offset (px) the element slides in from |

### `<StaggerContainer>` + `<StaggerItem>`

Container/child pair that staggers the entrance of a list of items. Each `StaggerItem` picks up `hidden` / `show` variants from its parent — no extra props needed.

```tsx
<StaggerContainer className="cards">
  <StaggerItem className="card">...</StaggerItem>
  <StaggerItem className="card">...</StaggerItem>
  <StaggerItem className="card">...</StaggerItem>
</StaggerContainer>
```

**Animation parameters:**
- Stagger delay between children: `100ms`
- Per-item duration: `500ms`
- Easing: custom cubic-bezier `[0.22, 1, 0.36, 1]` (smooth deceleration)
- Viewport trigger margin: `-50px` (fires slightly before the element reaches the edge)
- All animations run `once: true` — they do not re-trigger on scroll-up

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 24
- **pnpm** ≥ 9 (do not use npm or yarn — the workspace enforces pnpm via `preinstall`)

### Install dependencies

```bash
pnpm install
```

### Run the development server

```bash
pnpm --filter @workspace/or4cl3-site run dev
```

The site will be available at `http://localhost:<PORT>`. The dev server binds to `0.0.0.0` and allows all hosts (required for reverse-proxy environments).

---

## Available Commands

All commands are run from the **workspace root** unless noted otherwise.

| Command | Description |
|---------|-------------|
| `pnpm --filter @workspace/or4cl3-site run dev` | Start the Vite dev server for the marketing site |
| `pnpm --filter @workspace/or4cl3-site run build` | Production build (outputs to `artifacts/or4cl3-site/dist/public/`) |
| `pnpm --filter @workspace/or4cl3-site run serve` | Serve the production build locally |
| `pnpm --filter @workspace/or4cl3-site run typecheck` | Type-check the site with `tsc --noEmit` |
| `pnpm run typecheck` | Full workspace typecheck (libs + all artifacts) |
| `pnpm run build` | Full workspace typecheck + build all packages |

---

## Environment Variables

The Vite config reads two required environment variables at startup:

| Variable | Required | Description |
|----------|----------|-------------|
| `PORT` | Yes | Port for the Vite dev/preview server to bind to |
| `BASE_PATH` | Yes | URL base path the app is served from (e.g. `/` for root) |

In a standard local setup, provide these before running:

```bash
PORT=3000 BASE_PATH=/ pnpm --filter @workspace/or4cl3-site run dev
```

If either variable is missing, Vite will throw a descriptive error at startup rather than failing silently.

---

## Deployment

The site produces a fully static build — no server-side rendering, no runtime process. The output of `pnpm --filter @workspace/or4cl3-site run build` is a directory of HTML, JS, and CSS assets ready to be served by any static file host (Nginx, Caddy, Netlify, Vercel, Cloudflare Pages, etc.).

**Build output location:** `artifacts/or4cl3-site/dist/public/`

---

### GitHub Pages (automated)

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds and deploys the site automatically on every push to `main`.

#### One-time setup

1. **Push this repository to GitHub.**

2. **Enable GitHub Pages** in your repository settings:
   - Go to **Settings → Pages**
   - Under *Source*, select **GitHub Actions**
   - Save

3. **Push to `main`** (or trigger the workflow manually via **Actions → Deploy to GitHub Pages → Run workflow**).

The workflow will build the site and publish it. Your live URL will be shown in the Actions run output and in **Settings → Pages** once the first deploy succeeds.

#### How it works

```
.github/workflows/deploy.yml
```

| Step | What it does |
|------|-------------|
| `actions/checkout@v4` | Checks out the repository |
| `pnpm/action-setup@v4` | Installs pnpm (latest) |
| `actions/setup-node@v4` | Sets up Node.js 24 with pnpm cache |
| `pnpm install --frozen-lockfile` | Installs exact dependency versions from the lockfile |
| `actions/configure-pages@v5` | Reads the repository's GitHub Pages base path (e.g. `/or4cl3-site/` for a project site, `/` for a user/org site) |
| `pnpm --filter @workspace/or4cl3-site run build` | Vite production build — `BASE_PATH` is set automatically from the Pages config output |
| `actions/upload-pages-artifact@v3` | Uploads `artifacts/or4cl3-site/dist/public/` as the Pages artifact |
| `actions/deploy-pages@v4` | Deploys the artifact to GitHub Pages |

The workflow uses the official GitHub Pages Actions with OIDC token-based deployment — no personal access tokens or secrets required.

#### Automatic base path handling

The `actions/configure-pages` step outputs the correct `base_path` for your repository type:

| Repository type | Example URL | `BASE_PATH` set to |
|----------------|-------------|-------------------|
| User/org site (`username.github.io`) | `https://username.github.io/` | `/` |
| Project site | `https://username.github.io/or4cl3-site/` | `/or4cl3-site/` |

Vite's `base` option is set to this value at build time, so all asset URLs and anchor links resolve correctly regardless of the repository name.

#### SPA routing on GitHub Pages

GitHub Pages serves a `404.html` for any path it doesn't recognise (which would otherwise break a page refresh or a directly shared URL). Two files handle this:

| File | Role |
|------|------|
| `artifacts/or4cl3-site/public/404.html` | Encodes the requested path as a query string and redirects to the root `index.html` |
| `artifacts/or4cl3-site/index.html` (inline script) | Reads the encoded path from `sessionStorage` on load and restores it via `history.replaceState` |

Since this site uses **anchor-based navigation only** (no deep client-side routes), the redirect is a safety net rather than a hard requirement — but it ensures that any bookmarked or shared URLs continue to work correctly.

---

### Other static hosts

| Host | Notes |
|------|-------|
| **Netlify** | Drop `artifacts/or4cl3-site/dist/public/` into the Netlify UI, or set build command to `pnpm --filter @workspace/or4cl3-site run build` and publish directory to `artifacts/or4cl3-site/dist/public`. Set `PORT=3000` and `BASE_PATH=/` as environment variables. |
| **Vercel** | Set framework to *Other*, build command to `pnpm --filter @workspace/or4cl3-site run build`, output directory to `artifacts/or4cl3-site/dist/public`, and add `PORT=3000`, `BASE_PATH=/` to environment variables. |
| **Cloudflare Pages** | Same build command and output directory as above. |
| **Nginx / Caddy** | Serve the `dist/public/` directory. Add a fallback rule to serve `index.html` for all paths (standard SPA config). |

### Path alias reference

Vite resolves the following path aliases at build time:

| Alias | Resolves to |
|-------|------------|
| `@/*` | `artifacts/or4cl3-site/src/*` |
| `@assets/*` | `attached_assets/*` |

### Routing note

The site uses **anchor-based navigation only** (`#proof`, `#ip`, `#triadic`, `#reading`, `#access`). Wouter handles the single `"/"` route; no server-side route configuration is needed beyond serving `index.html` for all paths.

---

## Contact

All licensing inquiries, technical briefings, and partnership requests go through:

**Email:** [oracleaisolutions@gmail.com](mailto:oracleaisolutions@gmail.com)

- **Licensing access:** [oracleaisolutions@gmail.com?subject=Or4cl3%20licensing%20access](mailto:oracleaisolutions@gmail.com?subject=Or4cl3%20licensing%20access)
- **Technical briefing:** [oracleaisolutions@gmail.com?subject=Or4cl3%20technical%20briefing](mailto:oracleaisolutions@gmail.com?subject=Or4cl3%20technical%20briefing)

---

*© 2026 Or4cl3 AI Solutions · Intelligence with a verifiable conscience · Ethics, proven — not promised.*

*Recursive Renaissance — human + machine co-evolution within a provably stable framework.*
