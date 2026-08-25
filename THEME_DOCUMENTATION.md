# IBF Website — Complete Content & Component Documentation

> **Source**: https://ibf.com.sa/en
> **Tech Stack**: Next.js (React), Tailwind CSS, Cloudflare CDN
> **Languages**: English (`/en`), Arabic (`/ar`)
> **Last Reviewed**: 2026-08-04

---

## 1. Global Components (Present on Every Page)

### 1.1 Header / Navigation Bar
- **Type**: Sticky header with backdrop blur
- **Logo**: IBF logo image (`/images/ibf-logo.png`, 190×106px)
- **Brand Name** (sr-only): "International Business Front" / "Your Business Front in Saudi Arabia"

**Primary Navigation Links** (7 items):

| # | Label | URL |
|---|-------|-----|
| 1 | Home | `/en` |
| 2 | Catalogue | `/en/catalogue` |
| 3 | Search | `/en/search` |
| 4 | Industries | `/en/industries` |
| 5 | Request Quote | `/en/request-a-quote` |
| 6 | About | `/en/about` |
| 7 | Contact | `/en/contact` |

**Header Actions**:
- **Language Switcher**: "AR" button → links to `/ar` (Arabic version)
- **Contact CTA**: "Contact IBF" → `mailto:ms@ibf.com.sa`
- **Mobile Menu**: Hamburger toggle button (visible on `< lg` breakpoints)

---

### 1.2 Footer
**3-Column Layout**:

**Column 1 — Brand**:
- IBF logo (white background wrapper)
- Tagline: "Trading • Technology • Market Entry • Compliance. A Saudi commercial and technology partner for procurement, digital implementation, business setup coordination, and compliance-focused projects."

**Column 2 — Navigation** (repeats header links):
- Home, Catalogue, Search, Industries, Request Quote, About, Contact

**Column 3 — Solutions** (5 items):

| # | Label | URL |
|---|-------|-----|
| 1 | Trading & Procurement | `/en/solutions/trading-procurement` |
| 2 | AI, IoT & Digital Solutions | `/en/solutions/ai-iot-digital-solutions` |
| 3 | Saudi Market Entry | `/en/solutions/saudi-market-entry` |
| 4 | ISO & Compliance | `/en/solutions/iso-compliance` |
| 5 | Technology Services | `/en/solutions/technology-services` |

**Footer Bottom Bar**:
- `© 2026 International Business Front. All rights reserved.`
- `CR 7023268134 · VAT 310921625400003`

---

## 2. Homepage (`/en`)

### 2.1 SEO Metadata
| Field | Value |
|-------|-------|
| Title | International Business Front \| Your Business Front in Saudi Arabia |
| Description | International Business Front is a Jeddah-based Saudi commercial and technology partner for trading, procurement, AI and IoT, market entry, compliance, and corporate technology services. |
| OG Image | `https://ibf.com.sa/images/ibf-hero.png` (1600×900) |
| Robots | index, follow, max-image-preview:large |
| Canonical | `https://ibf.com.sa/en` |

### 2.2 Hero Section
- **Background**: Full-width hero image (`ibf-hero.png`) with dark gradient overlay
- **Animated Elements**: `motion-lines` CSS animation, `reveal-up` scroll animations
- **Subtitle** (gold): "Industrial Electrical Supply · Batteries · Rectifiers · Saudi Delivery"
- **Heading (H1)**: "Industrial product sourcing and quotation support for Saudi procurement."
- **Description**: "International Business Front helps customers discover electrical, rectifier, battery, UPS and automation products, share quote requirements, coordinate documentation, and move procurement forward with a Saudi-based commercial partner."
- **CTA Buttons**:
  1. **"Browse Catalogue →"** (green, solid) → `/en/catalogue`
  2. **"🔍 Search Models"** (outline, white border) → `/en/search`

### 2.3 "How IBF Helps" Section
- **Label** (green): "How IBF Helps"
- **Heading (H2)**: "A practical front for product discovery, quotation support and delivery coordination."
- **Description**: "Customers can browse product information, shortlist products, share technical documents, and contact IBF for quotation and delivery support."

**3 Feature Cards** (grid, white cards with shadow):

| Card | Icon | Title | Description |
|------|------|-------|-------------|
| 1 | Database | **Product discovery** | Browse product records with model numbers, part numbers, specifications, documents, applications, origin, warranty and lead-time guidance. |
| 2 | Clipboard-Check | **Structured Quote Requests** | Share product details, quantities, drawings or BOQ files through a direct quote request to IBF. |
| 3 | Shield-Check | **Commercial follow-up** | IBF reviews requirements, documentation needs, delivery location and supplier availability before preparing the next commercial step. |

### 2.4 "Featured Products" Section
- **Label** (green): "Featured Products"
- **Heading (H2)**: "Product pages built for serious technical enquiries."
- **Description**: "Catalogue pages help customers identify models, review key specifications and request quotations with the right technical context."

... (full documentation included in this file)

---

## 10. Design System & Visual Components

### 10.1 Color Palette
- Tokens: `ink`, `pearl`, `green`, `gold`, `steel`, `mist`, `navy`

### 10.2 Typography
- **Font**: System UI + `Inter` / `Plus Jakarta Sans` / `Cairo` for Arabic

### 10.3 Reusable UI Patterns
- `interactive-card`, `shadow-soft`, `reveal-up`, `motion-lines`, `hero-drift`, `cta-sheen`

---

## 12. Company Information Summary
- **Name**: International Business Front
- **Phone**: +966 55 757 1816
- **Email**: ms@ibf.com.sa
- **CR**: 7023268134
- **VAT**: 310921625400003
- **Website**: https://ibf.com.sa

---

# Next steps
- Update `src/components/Header.jsx`, `src/components/Footer.jsx`, and `src/styles.css` to fully match the documentation.
- Migrate page content from the doc into `src/pages/*` as needed.
- Run `npm run dev` and iterate on styling.

(Full original HTML and style reference saved in this file for quick copy/paste.)
