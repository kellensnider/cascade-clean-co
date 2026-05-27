# Cascade Clean Co. — CLAUDE.md

**Tier:** 1 — Landing Page
**Status:** Demo / Mockup (fictional business)
**Purpose:** Sower Creative Tech prospect demo — shows prospects what a Tier 1 Landing Page looks like

---

## Important: This Is a Demo

Cascade Clean Co. is a **fictional business**. All phone numbers, email addresses,
testimonials, and credentials are fabricated for demonstration purposes.

- The Web3Forms `access_key` is `DEMO_ONLY_NOT_ACTIVE` — the form will not submit
- Social media links point to generic platform homepages (not a real business)
- No favicon or OG image files exist — both are marked with TODO comments

**When converting this demo into a live client build:**
1. Replace the business name, phone, email, and all copy with real client content
2. Replace the CSS wordmark logo with the client's actual logo image
3. Replace the CSS gradient hero with a real hero photo
4. Replace the Web3Forms key with the client's real key (from project-brief.md)
5. Replace social links with actual profile URLs
6. Add favicon.ico to images/
7. Create og-image.jpg (1200×630px) and update the og:image meta tag
8. Remove the demo-banner HTML block entirely

---

## Brand

See `brand-identity.md` for full color and typography spec.

**Key rules:**
- Heading font: Playfair Display — supports 400, 500, 600, 700 (all normal weights, no restriction)
- Body / UI font: DM Sans — 400, 500, 600
- Primary color: `#2A7A5E` (Forest Teal)
- Footer is dark (`#1A2E26`) — CSS variables are scoped in `.lp-footer {}` block
- Hero uses CSS gradient (no photo) — see `.hero-bg` in styles.css

---

## Tier 1 Scope Boundaries (Reminder)

This build intentionally does NOT include:
- Navigation menu (Tier 2+)
- JSON-LD structured data (Tier 2+)
- sitemap.xml (Tier 2+)
- robots.txt (Tier 2+)
- Individual service pages (Tier 2+)
- Gallery (Tier 2+)

Any request to add these features is an upgrade to Tier 2 ($2,800 upgrade credit applied).

---

## Deployment

For the demo: deploy to `https://kellensnider.github.io/cascade-clean-co/` (or similar).
GitHub Pages from `main` branch, root `/`.

After deployment, update:
- `og:url` meta tag
- `og:image` meta tag (to absolute URL with deployed domain)

---

## Open Assumptions

- Business hours: not specified — no hours shown on this single-page build
- Address: not needed — Tier 1 does not include JSON-LD with address
- Service area: Bend, Redmond, Sisters, Sunriver (assumed from brief)
