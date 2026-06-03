# Link To Charity — Project Guide

A static HTML/CSS/JS website for a not-for-profit affiliate shopping initiative. When users shop through the site's links, commissions are earned and donated to charity. No build tools, no frameworks — plain files served as-is.

---

## File Structure

```
Link to charity/
├── index.html          # Homepage (only page currently built)
├── info.md             # This file
├── css/
│   ├── base.css        # Reset, CSS variables, typography, .container
│   ├── layout.css      # Header, footer, responsive breakpoints
│   └── components.css  # Every section's styles (hero, stats, cards, etc.)
└── js/
    ├── stores.js       # Master list of all affiliate stores (name + URL)
    ├── search.js       # Search box logic — filters stores[] and shows dropdown
    └── nav.js          # Mobile hamburger toggle
```

### Pages that exist as nav links but are NOT yet built:
- `/nz-links` — full list of New Zealand affiliate links
- `/us-links` — full list of US affiliate links
- `/about` — about the initiative
- `/google-extension` — Chrome extension info + install link
- `/donate` — direct donation page
- `/how-it-works` — step-by-step explainer
- `/progress` — fundraising progress/impact tracker
- `/contact` — contact form
- `/newsletter` — newsletter signup
- `/terms-of-service`
- `/privacy-policy`

Each of these needs its own `.html` file created in the root folder.

---

## Design System

### Colors
- Background: `#000` (black)
- Text: `#fff` (white) on dark sections, `#111827` on light sections
- Accent / buttons: `#720000` (dark red)
- Light section backgrounds: `#fff`

### Fonts (loaded from Google Fonts)
- Headings: `Barlow Semi Condensed`, weight 700
- Body: `Hanken Grotesk`, weights 300 / 400 / 500

### CSS Variables (set on `<html>`)
```css
--accent: #720000
--head-font: 'Barlow Semi Condensed', sans-serif
--body-font: 'Hanken Grotesk', sans-serif
```

### Buttons
```html
<a class="btn btn-primary" href="#">Red filled button</a>
<a class="btn btn-outline" href="#">White outline button</a>
```

### Typography classes
- `h1`, `h2`, `h3` — heading font, fluid sizing via `clamp()`
- `p.large` — body text at 1.1rem
- `<pre>` — styled to use body font, wraps normally (used for multi-line body copy)

---

## How to Copy a Section from index.html to a New Page

Every page shares the same header and footer. To create a new page:

1. **Copy this skeleton** and save it as e.g. `about.html` in the root folder:

```html
<!DOCTYPE html>
<html lang="en" style="scroll-padding-top: 108px; --head-fontFamily: 'Barlow Semi Condensed', sans-serif; --head-fontWeight: 700; --head-fontStyle: normal; --head-fontSize: 1.25; --head-fontHeight: 1.15; --body-fontFamily: 'Hanken Grotesk', sans-serif; --body-fontWeight: 300; --body-fontStyle: normal; --header-logo-fontFamily: 'Barlow Semi Condensed', sans-serif; --footer-logo-fontFamily: 'Barlow Semi Condensed', sans-serif; --header-logo-fontWeight: 700; --footer-logo-fontWeight: 700;">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>PAGE TITLE - Link To Charity</title>
  <link rel="icon" href="https://cdn.durable.co/logos/172gn1vMuW4GVfID7VxuaEDSb9XJtOUuUkf7mS4Nl9H1UBrrrRCoXhWsqWJztAU1.png">
  <meta name="robots" content="all">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@700&family=Hanken+Grotesk:wght@300;400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/layout.css">
  <link rel="stylesheet" href="css/components.css">
</head>
<body>

<!-- PASTE HEADER FROM index.html HERE (lines 49–97) -->

<!-- YOUR PAGE SECTIONS GO HERE -->

<!-- PASTE FOOTER FROM index.html HERE (lines 246–265) -->

<script src="js/nav.js"></script>
</body>
</html>
```

2. **Copy the header block** from `index.html` lines 49–97 (`<header id="site-header">` ... `</header>`).
3. **Copy the footer block** from `index.html` lines 246–265 (`<footer>` ... `</footer>`).
4. Add `<script src="js/nav.js"></script>` before `</body>` — this powers the mobile menu.
5. Only add `<script src="js/stores.js"></script>` and `<script src="js/search.js"></script>` on pages that have the store search box.

---

## Section Templates (copy-paste ready)

### Dark section (black background)
```html
<section id="your-id">
  <div class="container">
    <h2>Section Heading</h2>
    <p class="large">Subtext here.</p>
  </div>
</section>
```
Add to `components.css`: `#your-id { background: #000; padding: 5rem 1.5rem; color: #fff; }`

### Light section (white background)
```html
<section id="your-id">
  <div class="container">
    <h2>Section Heading</h2>
    <p>Body text here.</p>
  </div>
</section>
```
Add to `components.css`: `#your-id { background: #fff; padding: 5rem 1.5rem; color: #111827; }`

### Hero with background image (same pattern as homepage hero)
```html
<section id="page-hero">
  <div class="hero-bg">
    <img src="IMAGE_URL" alt="description">
    <div class="hero-overlay"></div>
  </div>
  <div class="hero-content">
    <div class="hero-text">
      <h1>Page Title</h1>
      <pre>Subtitle or description text.</pre>
    </div>
  </div>
</section>
```
Reuses `.hero-bg`, `.hero-overlay`, `.hero-content`, `.hero-text` from `components.css` — no extra CSS needed.

### Card grid
```html
<div class="charities-grid">
  <div class="charity-item"><h3>Item One</h3></div>
  <div class="charity-item"><h3>Item Two</h3></div>
</div>
```

### Testimonial card
```html
<div class="testimonials-grid">
  <div class="testimonial-card">
    <h3>Quote text here.</h3>
    <p>- Person Name</p>
  </div>
</div>
```

---

## Adding New Affiliate Stores

All stores live in `js/stores.js` as an array of `{ name, url }` objects. The search box on the homepage reads from this array automatically.

To add a store:
```js
{ name: "Store Name", url: "https://your-affiliate-link.com" },
```

To show a store in the **Popular Links** grid on the homepage, add it manually to the `.links-grid` in `index.html` (lines 151–171):
```html
<p class="large"><a href="AFFILIATE_URL" target="_blank" rel="noopener">Store Name</a></p>
```

---

## Pages Still To Build — Priority Order

| Page | What it needs |
|---|---|
| `/nz-links` | Full searchable list of NZ stores, grouped by category |
| `/us-links` | Full searchable list of US stores, grouped by category |
| `/how-it-works` | 3-step visual: Browse → Click → Charity gets donation |
| `/about` | Mission statement, founding story, team |
| `/google-extension` | Extension screenshot, feature list, Chrome Web Store install button |
| `/progress` | Running total of sales/donations raised, charity breakdown |
| `/donate` | Direct donation options (PayPal, bank transfer, etc.) |
| `/contact` | Contact form or mailto link |
| `/newsletter` | Email signup form (Mailchimp or similar embed) |
| `/terms-of-service` | Standard affiliate/e-commerce ToS |
| `/privacy-policy` | GDPR/NZ Privacy Act compliant policy |

---

## Homepage Sections Still To Add

The following sections are commonly expected on a site like this but not yet on `index.html`:

- **How It Works strip** — 3 icon+text steps between the Impact and Popular Links sections
- **Inline newsletter signup** — email input form (currently just a link to `/newsletter`)
- **FAQ accordion** — "Is it free?", "Which charities?", "How are commissions calculated?"
- **Partner/store logo strip** — logos of featured shops to build trust
- **Social proof / impact counter** — animated counter of total raised (currently static `$0.00 / 0 sales`)

---

## Key External Accounts & Services

| Service | Purpose |
|---|---|
| Google Analytics | `G-SSL2FPERCE` — tracks all page visits |
| Google Tag Manager | `GTM-MD7NVG2H` — tag management |
| Commission Factory | Affiliate network — verification tag in `<head>` |
| Roeye / roeye.co.nz | NZ affiliate tracking network (`pid=5350`) |
| Amazon Associates | `amzn.to` links |
| Sovrn Commerce | Some links via `sovrn.co` |
| NordVPN Affiliates | `go.nordvpn.net / go.nordpass.io` |
| Fiverr Affiliates | `go.fiverr.com` (`bta=1040663`) |
| CDN (durable.co) | All images hosted here — do not change image URLs |

---

## Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `≤ 1024px` | Desktop nav hides, hamburger shows, logo shrinks |
| `≤ 640px` | Link columns stack, charity items stack, buttons stack full-width |

---

## Deployment

The site is hosted on Durable (`linktocharity.durablesites.com`). Files are maintained locally in this folder and synced/uploaded to Durable. There is no build step — edit files directly and re-upload.
