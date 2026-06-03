# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS/JS site for a not-for-profit affiliate shopping initiative. No build tools, no frameworks, no package manager — plain files served directly. Hosted on Durable (`linktocharity.durablesites.com`).

## Development

Open `index.html` directly in a browser, or use any static file server:
```bash
npx serve .
# or
python -m http.server 8080
```

There are no lint, test, or build commands.

## Architecture

### CSS split across three files (all must be linked in every page)
- `css/base.css` — reset, CSS custom properties (`--accent`, `--head-font`, `--body-font`), typography, `.container`
- `css/layout.css` — header, footer, responsive breakpoints (≤1024px, ≤640px)
- `css/components.css` — all section-level styles keyed by `id` selector

### JS
- `js/stores.js` — exports a global `stores` array (`{ name, url }`) — the single source of truth for all affiliate links
- `js/search.js` — reads `stores[]`, filters on input, renders dropdown. Depends on `stores.js` being loaded first
- `js/nav.js` — hamburger toggle only; no dependencies

### Page creation pattern
Every page needs the same `<head>` block (fonts, 3 CSS files, GTM/GA scripts), copy of the header (sticky nav + mobile nav), copy of the footer, and `js/nav.js`. Only pages with a search box need `stores.js` + `search.js`. See `info.md` for the full skeleton template.

## Design System

| Token | Value |
|---|---|
| Accent | `#720000` (dark red) |
| Dark bg | `#000` |
| Light bg | `#fff` |
| Dark text | `#111827` |
| Heading font | `Barlow Semi Condensed 700` |
| Body font | `Hanken Grotesk 300/400/500` |

Button classes: `.btn.btn-primary` (red filled), `.btn.btn-outline` (white border). Section body copy uses `<pre>` tags styled to the body font for multi-line text blocks.

## Key Constraints

- All images are hosted on `cdn.durable.co` — do not change image URLs
- Affiliate link IDs are sensitive — never alter tracking parameters (`pid`, `offer_id`, `bta`, `aff_id`, etc.)
- The `stores[]` array in `stores.js` is the canonical affiliate link list; the Popular Links grid in `index.html` is a manual curated subset of it
- 11 sub-pages are linked in the nav but not yet built — see `info.md` for the full list and priority order
