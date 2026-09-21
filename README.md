# Handoff: Vora International website

## Overview

A five-page marketing website for **Vora International Limited**, a Nairobi company that supplies, installs and maintains water, sanitation and hygiene products for institutions across Kenya, together with its community arm, **Vora Foundation**.

The site covers: a home page setting out the offer and process, a product catalogue with a working order builder, a Foundation page including donation content, an about page with mission, proof points and team, and a contact page with an enquiry form. Search and AI-assistant discoverability is already scaffolded (structured data, `robots.txt`, `sitemap.xml`, `llms.txt`).

## About the design files

The files in this bundle are **design references created in HTML**. They are prototypes showing intended look and behaviour, not production code to lift directly. Several of them depend on a small in-house runtime (`support.js`, `image-slot.js`) that will not exist in your codebase.

The task is to **recreate these designs in the target codebase's existing environment** — React, Next.js, Vue, Astro or whatever the project already uses — following its established patterns, component library and routing. If no environment exists yet, pick the framework that best suits a content-led marketing site with one interactive feature (the order builder); Next.js or Astro both suit it well, and static output is sufficient.

Two pages carry real logic that must be reimplemented rather than transcribed: the **product order builder** (Products) and the **enquiry form** (Contact). Everything else is presentational.

## Fidelity

**High fidelity.** Colours, typography, spacing, radii and shadows are final and are listed under Design tokens below. Recreate the UI to match, using the codebase's existing primitives where they exist. Copy is final and should not be rewritten — it has been through several rounds of review with the client.

## Brand

- **Logo mark**: a rounded, upright triangle outline pointing right. Supplied as `assets/logo-mark.svg` (green `#22B573`) and `assets/logo-mark-white.svg`. It is a stroked path, not a filled shape; do not fill it.
- **Logotype**: the word `vora international` set in **lowercase**, Outfit 600, letter-spacing `0.15em`. On Foundation pages the descriptor changes to `vora foundation` and the mark turns orange `#FF7A1A`. The lockup is mark + logotype in a flex row, `gap: 11px`, vertically centred.
- **Never** set the wordmark in capitals, and never substitute a filled triangle or a water droplet.
- **Taglines**: company — "Clean water. Safe sanitation. Everyday hygiene." Foundation — "Learning today for healthier communities tomorrow."
- **Do not use the abbreviation "WASH" in any user-facing copy.** Spell out water, sanitation and hygiene. This is an explicit client instruction.

## Screens / views

### 1. Home (`index.html` / `Home.dc.html`)

**Purpose**: explain the offer, establish credibility, drive to assessment booking or catalogue.

**Sections in order**

1. **Hero** — full-bleed photograph, `min-height: min(96vh, 900px)`, background `#0D1411`. Image `object-fit: cover`, absolutely positioned, with a gradient scrim over it: `linear-gradient(180deg, rgba(13,20,17,0.46) 0%, rgba(13,20,17,0.06) 32%, rgba(13,20,17,0.58) 72%, rgba(13,20,17,0.88) 100%)`. Content is bottom-aligned inside `max-width: 1240px`, padding `clamp(150px, 24vh, 260px) clamp(20px, 4vw, 48px) clamp(56px, 8vh, 92px)`. H1 `clamp(40px, 6.6vw, 96px)`, weight 800, `line-height: 0.97`, `letter-spacing: -0.042em`, white, `max-width: 16ch`. One supporting line at `clamp(17px, 1.5vw, 21px)`, `#D7E1DC`, `max-width: 42ch`. Two pill buttons.
2. **Three pillars** — Water / Sanitation / Hygiene cards, each with an icon, title and description. Grid `repeat(auto-fit, minmax(280px, 1fr))`, `gap: 24px`.
3. **Process** — five staggered step cards. Small outlined pill label above a centred headline, then a hand-drawn arrow SVG, the card row, and a second mirrored arrow below. Each card: background `#F7F8F8`, border `1px solid #EDF1EF`, radius 26px, padding `clamp(24px, 2.6vw, 32px)`, step number in `#9AA5A1` 15px, title `clamp(22px, 2.3vw, 29px)` weight 700, description pinned to the bottom with `margin-top: auto`. Alternate cards carry `margin-top: clamp(0px, 2.4vw, 34px)` for the stagger.
4. **Sectors** — a row of labelled tiles: schools, health facilities, churches, offices, hotels, food businesses.
5. **Foundation teaser** — two-column, photograph one side, heading + copy + orange link the other.
6. **Closing call to action** — heading "Every institution deserves water it can trust.", supporting line, two buttons.
7. **Footer** — see Footer below.

### 2. Products (`products.html` / `Products.dc.html`)

**Purpose**: browse the catalogue and assemble an order.

- **Hero** — shorter, `min-height: min(82vh, 720px)`, same construction as Home.
- **Category filter** — four pills: All, Water, Sanitation, Hygiene. Selected pill is `#1F2933` background with white text; unselected is white with `#1F2933` text and a `1px solid #DDE4E1` border.
- **Catalogue grid** — `repeat(auto-fill, minmax(258px, 1fr))`, `gap: 24px`. Twelve products, four per category. Each card: white, border `1px solid #EBEFED`, radius 26px; a 186px image area with the product photo `object-fit: contain` on white, separated by a `1px solid #F2F5F4` rule; then name (19px/700), description (15px, `#5B6670`), a minimum-order line, and the order control.
- **Order control** — initially a single full-width "Add to order" button in `#0E6B42`. Once added, it is replaced by a minus button, a quantity readout and a plus button (each 44 × 44px, `1px solid #DDE4E1`, radius 10px).
- **Order bar** — fixed to the bottom of the viewport once anything is in the order. Background `#1F2933`, showing the item count and three actions: Clear, Email order, Send on WhatsApp.

**Order rules (must be reimplemented)**

- Minimum **5 units** per product line; the plus and minus buttons step by 5.
- Pressing minus at 5 removes the line entirely and shows a toast: *"Five units is our minimum per item, so this line has been removed from your order."* The toast is fixed, centred near the top, `#1F2933`, and auto-dismisses after 3.2 seconds.
- Email and WhatsApp actions both build the same message body:
  ```
  Hello Vora, I would like to order or be supplied with:

  - <product name>: <qty> <unit>
  ...

  Institution:
  Delivery location:
  Preferred delivery date:
  ```
  Units differ per product — cartons, bottles, tanks or units. Email goes to `hello@vorainternational.com` with subject "Supply request"; WhatsApp uses `https://wa.me/<number>?text=<encoded body>`.

### 3. Foundation (`foundation.html` / `Foundation.dc.html`)

**Purpose**: explain the education programmes and invite support.

- **Hero** — full height, dark, same construction as Home. Headline "Clean habits, carried home by a generation."
- **Positioning block** — heading plus a paragraph on why facilities need teaching alongside them.
- **Four stat cards** — warm palette, alternating `#FFF1E6` and `#FFFDF4`, in a 2 × 2 grid at medium widths.
- **Programmes** — three photograph cards: hygiene in daily practice, safe water and sanitation, menstrual health and dignity. Below them, three text-only items: school clubs, teacher training, community sessions.
- **Company and Foundation** — a deep green `#123024` section with three tiles explaining the division of labour, closing on a note that a share of revenue funds the Foundation, with the percentage to be confirmed by the board.
- **Support** (anchor `#support`) — four ways to give, four contribution tiers, and a payment panel. **All three payment methods are marked "To be configured"** and must be wired to a real provider before launch.

### 4. About (`about.html` / `About.dc.html`)

- **Hero** — shorter, dark, headline "A health company that happens to supply water."
- **Mission and vision** — two columns, each with a line-drawn SVG icon, heading and paragraph.
- **Why Vora** — on `#F4F7F6`. Left: a large stacked heading "Why / Vora" and a note that every claim is documented. Right: an intro line and three proof cards reading 100%, 95% and 2+, each with a large ghost numeral behind the figure and a verification line beneath.
- **Team** — two directors in `4 / 5` portraits and three advisers in square portraits. Selecting a person expands their biography inline and toggles the cue text between "Read bio" and "Close". Names are placeholders reading "Name to confirm" and must be replaced.

### 5. Contact (`contact.html` / `Contact.dc.html`)

- Two columns on `#F6F2EC`, collapsing to one below roughly 700px. Grid is `repeat(auto-fit, minmax(min(100%, 340px), 1fr))`.
- **Left**: headline, supporting line, a white card holding the handwashing icon and the tagline, and three contact details (email, office, hours).
- **Right**: a white form card, radius 26px. Fields: Name, Institution, Phone, Email, and a "How can we help?" textarea; the first four sit in a `repeat(auto-fit, minmax(min(100%, 200px), 1fr))` grid. Below them, eight checkbox chips: Water supply, Sanitation, Hygiene supplies, Assessment, Installation, Maintenance, Branded products, Foundation programme. Then a submit button, a WhatsApp link, and a privacy note.
- **The form is not wired up.** Implement submission against whatever the project uses — an API route, a form service, or email.

### Header (all pages)

A floating capsule, absolutely positioned over the hero, `z-index: 30`. Inner pill: `rgba(255,255,255,0.9)` with `backdrop-filter: saturate(180%) blur(14px)`, `1px solid rgba(31,41,51,0.07)`, `box-shadow: 0 6px 22px rgba(31,41,51,0.06)`, `border-radius: 999px`.

Contents: the lockup on the left, four links centred (About, Products, Foundation), and a green Contact button on the right. Below **900px** the links and button are replaced by a 44px round menu button that opens a full-screen white overlay with large links and the Contact button pinned to the bottom.

**The breakpoint is pure CSS**, via attribute selectors — do not reimplement it with JavaScript width state:

```css
[data-w="d"] { display: none; }
[data-w="m"] { display: flex; }
@media (min-width: 900px) {
  [data-w="d"] { display: flex; }
  [data-w="m"] { display: none; }
}
```

On dark heroes the lockup is white with `text-shadow: 0 1px 14px rgba(13,20,17,0.55)`.

### Footer (all pages)

1. A giant `vora` watermark in `#F1F4F3`, `clamp(120px, 26vw, 360px)`, weight 800, cropped by an overflow-hidden band.
2. Four link columns — Company, Foundation, Resources, Get in touch — plus a Follow us column with four round 40px social buttons in `#1F2933`.
3. A bottom rule carrying the copyright line and three legal links (Terms of service, Privacy policy, Safeguarding statement). **The legal pages do not exist yet** and the links currently point at `#contact`.

## Interactions and behaviour

| Behaviour | Detail |
|---|---|
| Mobile menu | Opens full-screen; every link closes it on click. |
| Product filter | Sets a category and shows or hides cards; no animation. |
| Order builder | Minimum 5, steps of 5, toast on removal, message built on demand. |
| Team bios | One open at a time; clicking the open person closes them. |
| Card hover | `transform: translateY(-2px)` with `box-shadow` lift, `150ms ease-out`. |
| Buttons | Solid green darkens `#0E6B42` → `#0A5533`; outlined buttons darken their border to `#1F2933`. |
| Reduced motion | `@media (prefers-reduced-motion: reduce) { animation: none !important; transition: none !important; }` |

Everything is fluid. There are no fixed pixel widths on containers; sizes use `clamp()` and grids use `repeat(auto-fit, minmax(...))` so layouts reflow from about 360px upward, including foldables.

## State management

Small and local; no global store is needed.

- `menuOpen: boolean` — mobile navigation.
- `cat: 'All' | 'Water' | 'Sanitation' | 'Hygiene'` — Products filter.
- `qty: Record<productId, number>` — Products order builder.
- `warning: string` — Products toast text, cleared on a timer.
- `open: string` — About, id of the expanded team member.

Nothing fetches data. The only outbound actions are `mailto:` and `wa.me` links.

## Design tokens

**Colour**

| Token | Hex | Use |
|---|---|---|
| Green primary | `#22B573` | Logo mark, accents, icons |
| Green deep | `#0E6B42` | Buttons, links, headings on light |
| Green darkest | `#0A5533` | Button hover |
| Green forest | `#123024` | Foundation dark section |
| Ink | `#1F2933` | Body text, dark surfaces |
| Slate | `#5B6670` | Secondary text |
| Slate light | `#9AA5A1` | Tertiary text, step numbers |
| Border | `#EBEFED` / `#EDF1EF` / `#E5EAE8` | Card and rule borders |
| Surface | `#F4F7F6` / `#F7F8F8` / `#F1F4F3` | Section and card grounds |
| Hero base | `#0D1411` | Behind hero photographs |
| Orange | `#FF7A1A` | Foundation accent |
| Orange deep | `#B34E00` | Foundation buttons and links (AA on white) |
| Cream | `#FFF1E6` / `#FFFDF4` / `#FFF9F4` | Foundation card grounds |
| Contact ground | `#F6F2EC` | Contact page background |

Green text on white must be `#0E6B42` or darker; `#22B573` is a graphic colour only and fails AA as text.

**Type** — Outfit throughout, weights 400/500/600/700/800, loaded from Google Fonts.

| Role | Size | Weight |
|---|---|---|
| Hero H1 | `clamp(40px, 6.6vw, 96px)` | 800, `-0.042em`, `line-height: 0.97` |
| Section H2 | `clamp(28px, 3.4vw, 46px)` | 800, `-0.025em`, `line-height: 1.1` |
| Card title | 19–29px | 700 |
| Body | 16–17px | 400, `line-height: 1.6` |
| Small / caption | 14–15px | 400–600 |
| Logotype | 17px | 600, `letter-spacing: 0.15em`, lowercase |

**Spacing** — section padding `clamp(66px, 9vw, 126px)` vertical, `clamp(20px, 4vw, 48px)` horizontal. Content max-width `1240px`. Grid gaps 20–24px; large section gaps `clamp(34px, 5vw, 52px)`.

**Radius** — cards `26px`; image frames and inner panels `14px`; buttons, pills and chips `999px`; form fields `10px`.

**Shadow** — one card shadow used throughout:
`box-shadow: 0 2px 4px rgba(18,48,36,0.05), 0 26px 50px -22px rgba(18,48,36,0.28);`

## Assets

In `assets/`:

- `logo-mark.svg`, `logo-mark-white.svg`, `favicon.svg` — the brand mark.
- `og-image.png` — 1200 × 630 social preview.
- `icon-water.png`, `icon-sanitation.png`, `icon-hygiene.png`, `icon-check.png`, `icon-check-line.png`, `icon-install.png`, `icon-resupply.png`, `icon-scattered.png`, `icon-scattered-line.png`, `icon-broken.png`, `icon-noeducation.png` — category and service icons. These are **black PNGs recoloured in CSS** with a `filter:` chain; replacing them with SVG in your implementation would be an improvement.
- `icon-handwash-solid.png` — the illustration on the Contact page.
- `p-w1…p-w4`, `p-s1…p-s4`, `p-h1…p-h4` — the twelve product photographs.
- `avatar-a.png`, `avatar-b.png` — **placeholder** team portraits, to be replaced.

**Photography**: hero and Foundation programme images are currently hot-linked from Unsplash. Replace them with the client's own field photographs before launch. Note the client's consent rule: written consent for every photograph of a child, and no faces in menstrual health contexts.

## SEO and AI discoverability

Already in place and worth carrying over:

- Per-page `<title>`, description, keywords, canonical, robots directives, geo tags, Open Graph and Twitter Card metadata.
- JSON-LD in an `@graph`: `Organization` with a service catalogue, `WebSite`, `Service`, a four-question `FAQPage` on the home page, `NGO` for the Foundation, `CollectionPage` + `ItemList` for products, `AboutPage` and `ContactPage`.
- `robots.txt` explicitly allowing twenty crawlers including GPTBot, ClaudeBot, PerplexityBot, Google-Extended and Applebot-Extended.
- `sitemap.xml` and `llms.txt`.

All canonical URLs assume the site is served from `https://vorainternational.com`.

## Outstanding before launch

1. Real photographs in place of the Unsplash hero and programme images.
2. Real team names and portraits on About.
3. Real phone number, WhatsApp number and social URLs — currently `+254 700 000 000` and `254700000000`.
4. Contact form submission wired to a backend or form service.
5. Payment provider connected on the Foundation support panel.
6. Terms, Privacy and Safeguarding pages written and linked.
7. Confirm the revenue share percentage that funds the Foundation, or keep the current wording.

## Files

| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About, including team |
| `products.html` | Products and order builder |
| `foundation.html` | Foundation and support |
| `contact.html` | Contact |
| `robots.txt`, `sitemap.xml`, `llms.txt` | Discoverability |
| `assets/` | Icons, product photography, logo, social image |

The `.dc.html` files are the authoring originals and carry the same markup; the `.html` files are the better reference. Both depend on `support.js` and `image-slot.js`, which are part of the design tool and **should not be carried into your implementation**.
