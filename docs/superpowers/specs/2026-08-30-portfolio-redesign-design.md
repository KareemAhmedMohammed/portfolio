# Portfolio Redesign — Design System Spec

**Date:** 2026-08-30
**Repo:** `kareem-dev.vercel.app` (`/Users/kareem_1203/Developer/Portfolio`)
**Reference:** `zainabkabira.com`

---

## 1. Goal

Replace the current design system (white ground, Helvetica, `#ff4f00` accent, flat
fade-in sections) with a faithful adaptation of the reference site's design system:
identical type stack, identical palette, identical motion vocabulary, identical
routing model. All content is Kareem's; all decorative assets are authored fresh.

## 2. Asset policy

The reference site's decorative files (`sun.svg`, `cloud.svg`, `plane.svg`,
`moon.svg`, `hero-sky-day.webp`, `imgNoiseTexture.png`, sky/willow tiles) are the
reference author's artwork and are **not** copied or re-hosted.

Every one of them is reproduced from primitives. Measured values to match:

| Element | Reproduction |
|---|---|
| Sky | `radial-gradient(900px 1200px at 70% 20%, #71B7F4 0%, #5788B3 100%)` — CSS, matched exactly |
| Vinyl disk | `conic-gradient(from 180deg, #121212 0%, #121212 8.76%, #272727 10%, ...)` — CSS, matched exactly |
| Sand band | `linear-gradient(#FFF9F1 0%, #E7D6BD 100%)` |
| Sun | Authored SVG: circle + diagonal stripe pattern fill |
| Clouds | Authored SVG: overlapping rounded blobs |
| Moon | Authored SVG: disc + soft inner shading |
| Plane | Authored SVG: small triangle sprite |
| Grain | `feTurbulence` SVG filter, ~3% opacity, not a raster tile |
| Wave band | Single authored SVG path |

Fonts are Google Fonts (freely licensable) and are used identically. Motion
technique is not a protected asset and is reproduced directly.

## 3. Typography

| Role | Latin | Arabic | Spec |
|---|---|---|---|
| Display | `DM Serif Display` | `Aref Ruqaa` | 400 weight, `clamp(64px, 11vw, 136px)`, +2.7px tracking |
| Body / UI | `Space Grotesk` | `IBM Plex Sans Arabic` | 300/400/500/700, 17px/1.6 body |
| Eyebrow / meta | `JetBrains Mono` | `IBM Plex Sans Arabic` | 13–14px, **+1.4px tracking, uppercase** |

**Scale:** hero `clamp(64px, 11vw, 136px)` · h2 `clamp(36px, 5vw, 68px)` ·
h3 `24px` · body `17px/1.6` · meta `13px`.

### 3.1 Arabic constraints (hard rules)

These are constraints, not preferences. Arabic is joined script.

1. **Per-character span splitting is forbidden under `[dir="rtl"]`.** The hero
   display reveal splits Latin text into one `<span>` per glyph. Doing this to
   Arabic creates isolated text runs, destroys contextual shaping, and renders
   every letter in isolated form — the word becomes unreadable. Under RTL the
   display reveal switches to a **clip-path/mask wipe over the intact text node**.
2. **The scroll-driven word swap animates at word level under RTL**, never per glyph.
3. **The mono eyebrow pattern does not translate.** Arabic has no case, and
   letter-tracking breaks joining. Under RTL the eyebrow drops `text-transform`
   and `letter-spacing` and uses weight contrast (500) instead.
4. **The rotated vertical rail** flips to the right edge with reversed rotation.
5. Grid flow, nav pill, and drawer slide direction all mirror.

## 4. Color

```css
--ground-1:  #FFF9F1;  /* warm paper — primary ground */
--ground-2:  #F0EBE0;  /* clay */
--ink:       #060606;
--display:   #FFF9E9;  /* hero type over sky */
--sky-from:  #71B7F4;
--sky-to:    #5788B3;
--sand-to:   #E7D6BD;
--willow:    /* sage tint, testimonials section */
```

Ground shifts per section on scroll progress. Night mode swaps sky gradient for a
star tile (authored) and sun for moon.

## 5. Architecture — routing

**Confirmed by measurement, not assumption:** the reference site is a *single
document with a pushState router*, not a multi-page app.

Evidence: at `/about`, `performance.timeOrigin` is unchanged from the initial
load, `getEntriesByType('navigation')` holds exactly one entry, and `#about-view`
is present in the same DOM.

**Therefore:**

- One `index.html`. Views are DOM subtrees, swapped by a client-side router.
- Clean URLs via `history.pushState`: `/`, `/work`, `/about`, `/playground`.
- The route-curtain is a **view transition**, not a document navigation.
- `popstate` handled; deep links served by a rewrite to `index.html`
  (`vercel.json`).
- **Consequence for i18n:** language state survives navigation in memory. No
  `localStorage` rehydration, no pre-paint `dir` flash to guard against. The
  existing `main.js` i18n object and `data-i18n` keys are retained as-is.

## 6. Motion inventory

Hand-rolled vanilla — `sticky` + `IntersectionObserver` + one `rAF` loop. No GSAP,
no Lenis. (Reference implements all of this in a single ~55KB `site.js`.)

1. Page loader → route-curtain wipe
2. Pinned hero; sky gradient behind; sun + clouds parallax
3. Per-character display masking against the wave (LTR only — see §3.1)
4. Scroll-driven word swap
5. Day/night toggle — sun ↔ moon, sky ↔ stars
6. Floating nav pill morph: avatar chip → burger → wave-clip
7. Plane flying a ~4770px SVG motion path down the work view, drawing a dashed trail
8. Asymmetric rounded card grid, staggered entry
9. Slide-in contact drawer + scrim
10. Vertical rotated mono rail

`prefers-reduced-motion` disables 2, 3, 5(animation only), 7, 8; freezes 4 on its
first word; keeps 1, 6, 9 as instant state changes.

## 7. Views & content

| View | Content |
|---|---|
| Home | Hero (display type, Bilingual Console, rail, availability pill), story, featured work, client strip, credentials strip, testimonials, contact |
| Work | OmdaFit featured slab + full project grid (§7.2) |
| About | Bio, Nova role, services (§7.3), process (§7.4) |
| Playground | Limit, Misk, Rayhaan Obsidian |

### 7.2 Project inventory — carried over in full

**Every project from the current site is retained. Nothing is dropped.** Copy and
`data-i18n` keys transfer unchanged; only presentation changes.

| # | Project | Key prefix |
|---|---|---|
| 01 | **OmdaFit** — featured slab | `omdafit.*` |
| 02 | AI services — Anthropic-backed check-in summaries, Egyptian meal generation | `coachflow.card_1_*` |
| 03 | Provisioning bridge — OmdaFit approval → CoachFlow account creation | `coachflow.card_2_*` |
| 04 | English and Arabic UX — RTL-aware dashboard and mobile | `coachflow.card_3_*` |
| 05 | Native client app — Expo, secure tokens, workout player | `coachflow.card_4_*` |
| 06 | **CoachFlow** — coaching SaaS, Next.js + NestJS + Prisma + Expo | `morebuilds.card_1_*` |
| 07 | **5D Fitness** — Paymob checkout, QR check-in, staff dashboard | `morebuilds.card_2_*` |
| 08 | **ClinicBase** — offline-first Electron + SQLite, EN/AR | `morebuilds.card_3_*` |
| 09 | **Limit** — macOS menu-bar usage monitor + Android companion | `morebuilds.card_4_*` |
| 10 | **Misk** — on-device worship companion | `morebuilds.card_5_*` |
| 11 | **Rayhaan Obsidian** — 300-frame scroll-controlled sequence | `morebuilds.card_6_*` |

**Recommended regrouping (does not remove content):** items 02–05 are capabilities
*of* CoachFlow rather than standalone projects. In the multi-view layout there is
room to nest them as detail under CoachFlow (06), which strengthens CoachFlow into
a proper case study and leaves seven distinct projects in the grid. All copy is
preserved either way. **Default if unconfirmed: keep all eleven as flat cards**,
matching the current site exactly.

**Project photography is removed entirely (revised 2026-08-30).** The available
shots did not hold up: `applied-ai-portfolio-concept.png` is a dense full-CV
infographic, unreadable at card size, and a grid mixing one screenshot with nine
bare text blocks read as unfinished.

Every project now carries an **authored cover** instead: a ground colour, the name
in `DM Serif Display`, a mono kind-label, and a pattern that encodes what kind of
build it is. The pattern is information, not decoration:

| Pattern | Meaning | Used by |
|---|---|---|
| `grid` | structured platform | CoachFlow |
| `stripe` | web / marketing (echoes the sun) | OmdaFit |
| `dots` | token field, AI service | AI services |
| `bridge` | two systems, one span | Provisioning bridge |
| `mirror` | the RTL flip axis | English and Arabic UX |
| `phone` | device proportion | Native client app |
| `qr` | scannable blocks | 5D Fitness |
| `window` | desktop chrome | ClinicBase |
| `bar` | menu-bar strip | Limit |
| `arch` | repeating arches | Misk |
| `frames` | film strip, 300 frames | Rayhaan Obsidian |

The cover carries the project name visually; the `<h3>` stays in the DOM but is
visually hidden, so the name is not printed twice while remaining available to
screen readers and search.

Only two photographs remain, both strong: `kareem-profile.png` (nav avatar) and
`kareem-front.jpg` (About portrait).

### 7.3 Services — carried over in full

All six retained as an accordion, keys `services.card_1_*` … `services.card_6_*`:
AI proposal and follow-up agents · Custom SaaS dashboards · API and automation glue ·
Web and mobile product builds · Arabic client experience · Verification-first delivery.

### 7.4 Process — carried over in full

All four steps retained, keys `process.step_1_*` … `process.step_4_*`:
Inspect · Design · Build · Verify.

Contact section and footer retained (`contact.*`, `footer.*`), including email,
WhatsApp, and LinkedIn links.

All existing `data-i18n` keys are preserved. The loader is retained and restyled.
The AR toggle is **relocated**, not removed: the `[data-lang-toggle]` nav button is
replaced by the Bilingual Console's `ع` dial (§7.0), bound to the same handler.

### 7.0 Hero object — the Bilingual Console

Replaces the reference site's vinyl/cassette audio player. Occupies the same
position, silhouette, and material language (cream plastic slab, soft shadow, two
grooved disks flanking a centre screen) so the hero composition is unchanged.

**Form**
- Left disk: `EN` dial. Right disk: `ع` dial. Both reuse the measured
  `conic-gradient(from 180deg, #121212 0%, #121212 8.76%, #272727 10%, ...)`
  disk treatment from §2, so they match the reference visual language exactly.
- Centre: a small inset screen, `JetBrains Mono` 12–13px.

**Behaviour**
- Idle: the screen loops a live agent trace — a prompt types in, tool calls
  resolve sequentially (`meal_plan.generate`, `checkin.summarize`, `db.write`),
  a result returns. Content mirrors the real CoachFlow service layer rather
  than inventing capabilities.
- Turning the `ع` dial flips the **entire site** to Arabic: display face swaps to
  `Aref Ruqaa`, `dir` becomes `rtl`, the vertical rail moves to the right edge,
  and the trace re-renders in Arabic.

**Architectural consequence:** the console *is* the language toggle. The
`[data-lang-toggle]` nav button is removed; the dial binds to the same handler and
the existing `data-i18n` dictionary in `main.js` is reused unchanged. This makes
the site's most expensive-looking element one of the cheapest to build.

**Rationale:** demonstrates applied AI, bilingual/RTL capability, and frontend
craft simultaneously, as a single interactive object, rather than describing any of
them in copy. It also promotes the genuine differentiator (Arabic) from a corner
button to the most tactile interaction on the page.

**Reduced motion:** screen renders one completed trace statically; dials remain
functional but do not spin.

### 7.1 Story / experience

The reference site's `story` view is a single large centred statement in body type
(`"Six years across architecture and product design…"`) that names employers and
venues inline, then resolves into a personal line set in display serif.

Kareem's equivalent carries the **Nova Solutions Co** role as the professional
anchor, positioned before the work grid so the credential lands before the projects
do. Structure:

- Statement line, body type, names Nova Solutions Co inline
- Resolves into a display-serif personal line (the "I believe…" beat)
- New `data-i18n` keys required: `story.statement`, `story.closing`,
  `experience.nova_role`, `experience.nova_period`

**Role framing (confirmed):** title is **Applied AI Engineer**, spanning frontend
and design. Started **17 June 2026**, currently there — rendered as
`Nova Solutions Co · 2026—present`.

**Experience framing (confirmed):** **two years** building applied AI and product
systems. This is Kareem's total professional experience and is the figure the
story section opens with, mirroring the reference site's construction:

> "Two years across applied AI and product engineering — building systems that
> run in production, in English and Arabic."

**These are two separate facts and the markup keeps them separate.** The two-year
figure describes the body of work (CoachFlow, 5D Fitness, ClinicBase, OmdaFit,
Limit, Misk, Rayhaan Obsidian). The Nova Solutions Co dates describe the current
role and render independently as `2026—present`. The copy must never construct a
sentence implying two years *at Nova*, since the role began in June 2026 — e.g.
"Two years at Nova Solutions Co" is forbidden; "Two years building applied AI
systems. Currently Applied AI Engineer at Nova Solutions Co" is correct.

`data-i18n` keys: `story.experience_years`, `experience.nova_role`,
`experience.nova_period`.

## 8. Social proof

### 8.1 Strips — two, not one

The reference site merges everything into one "Work featured on" strip. Kareem's
splits into two honestly-labelled strips, because the relationships differ in kind:

**Clients** — real commercial relationships:
- MP Mostafa Badran
- Golden Gym M4

**Affiliations & platform** — separately labelled, never presented as clients:
- Google — **Google Developer Group / certification** (confirmed). Rendered under
  a `Community & credentials` label, never in the client strip. The logo appears;
  the label states the actual relationship.
- Build stack: Next.js, NestJS, Prisma, Expo, Anthropic, PostgreSQL, Vercel

### 8.2 Testimonials — drafted, then approved

Quotes attributed to real named people are **not** published without those people
approving them. Fabricated endorsements are out of scope regardless of how the
section looks empty in the meantime.

Process:
1. Drafts below are written for Kareem to send to each client.
2. Client approves or edits their line.
3. Only approved quotes render. The section is behind a flag and stays hidden
   until at least one is approved.

Each entry carries `data-approved="true|false"`; the render skips `false`.

**Draft — MP Mostafa Badran** (pending approval)
> "Kareem took a rough idea and returned a working product. What stood out was
> that he tested it in the real environment before calling it done — nothing came
> back broken."

**Draft — Golden Gym M4** (pending approval)
> "Membership, payments, and check-in all run through one system now. Our staff
> learned it in a day, and it works in Arabic, which mattered more than we
> expected."

Both drafts reference work Kareem actually did (delivery verification; the 5D
Fitness / gym membership platform with Paymob checkout, QR check-in, and staff
dashboard). Names, roles, and companies must be confirmed with each person before
publication.

### 8.3 Remaining content inputs

Slots ship with marked placeholders; none of these block implementation:

1. **Client logo files** — MP Mostafa Badran, Golden Gym M4.
2. **Approved testimonial text** — per §8.2, plus each person's exact name spelling
   and role/title as they want it shown.
3. **Google credential specifics** — which GDG chapter or which certification, so
   the label is exact rather than generic.

## 9. Out of scope

- Rewriting project copy (content stays, only presentation changes)
- Any build step — the project remains vanilla HTML/CSS/JS
- Third-party animation libraries
