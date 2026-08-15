# DESIGN.md — Modern Ancient Psychiatry

> Hard gate for all UI work in this repo (`ui-design-system` v3, Rule 0). Read this before touching a component. Copy in `src/content/*.ts` is preserved verbatim and is never rewritten — only re-typeset.

---

## 1. Direction

**Evening Program.**

A printed program for a small hall: matte black stock, gold used as *light* rather than decoration, hairline rules doing every bit of structural work, photography set as plates with wall labels.

### Intent — the mental model

This is a solo virtual psychiatric practice. The reader arriving at it is frequently dysregulated and ashamed of needing help. The first five seconds must deliver three things, in this order:

1. **Nothing is going to jump at me.** No motion on scroll, no saturated fields competing for attention, no card grid demanding comparison shopping.
2. **Someone prepared for me.** The precision of a program — hanging numerals, ruled rows, a wall label under every photograph — reads as *care taken in advance*, which is the exact thing the practice sells.
3. **I can go at my own pace.** Index grammar over funnel grammar. Facts are available, ranked, and skippable. Nothing is a step in a flow.

Every decision below is answerable to those three lines. If a change makes the page more persuasive but less quiet, the change loses.

---

## 2. Reference lock

Sourced via Refero MCP. Locked before any token was written. Do not re-derive; do not average.

### Primary — 601 Inc. (`rokumaruichi.tokyo`, `8c5f5afd-6c5e-4c77-a656-7278a11232e0`)

The foundation for mood, density, and the role of gold.

**Preserve:**
- Matte near-black canvas with large expanses of negative space; the darkness is the room, not a "dark mode."
- A **single** muted gold as the sole chromatic accent in the entire UI layer.
- Gold reserved for display type, interactive elements, and 1px borders — never as a decorative wash.
- Contained, framed imagery treated as curated stills, rather than overwhelming full-bleed everywhere.
- Gold hairline appearing under links on hover.
- Navigation minimal and tucked to the corners; interactive elements sparse, text-based, refined.

**Reject:**
- Its 230–280px display numerals. Monumental numerals are a gallery flex; here they would read as a countdown timer at exactly the wrong moment. Our monument tops out at `6rem` and appears once per page.
- Its `#4f4d3c` concrete surface. A second muddy field breaks the "one hue" rule and dirties the stock.
- Its tilted, nested film-frame panels. Rotation is theatrical; this room is still.

### Secondary A — Aspelin Reitan (`c193a670`)

**Borrow only three things:**
1. The ~100px+ section gap as the "open" rhythm value — the breathing room that tells the reader they may stop.
2. **Ghost outlined buttons over solid fills.** Nothing on this site is a solid button except inside the single gold field, where the roles invert.
3. **The transparent input with a single chromatic bottom border.** No boxes around form fields.

**Reject:** its 8px radius (we are 0 or pill, nothing between) and its brown umber canvas (a second earth field would compete with the photography).

### Secondary B — V–A–C (`ffef8672-f789-4329-8895-47e50f517d31`) + 19–86 (`7a8c99db-5ce7-4fa4-b491-8f1fcac18991`)

The catalog/index grammar. This is the structural spine of Services, Fees, Policies, and FAQ.

**Borrow only:**
- **1px rules as the only structural device.** V–A–C: "razor-thin rules… no rounded corners, no shadows." 19–86 Table Row: `padding-top 5px / padding-bottom 8px / border-bottom 1px solid`. Our rows are the same object at a calmer scale.
- **Tabular alignment.** Fees, durations, and years align on a column. `font-variant-numeric: tabular-nums` is mandatory on every numeral in a row.
- **Hanging numerals** in the left margin of index rows.
- **Flat imagery with no rounding and no shadow**, sitting directly on the canvas rather than inside a card.
- **Small marginal labels** (V–A–C's rotated side labels, 19–86's table header cells) — the ancestor of our wall label.
- **V–A–C Line Input** verbatim in structure: transparent background, 1px bottom border, `padding-left: 2px`, no radius. This is the contact form.
- **V–A–C's 150px section gap** as corroboration for our `open` value.

**Reject:** their white canvas entirely, and 19–86's 490px display monogram. Both references are light-theme systems; we take their *grammar* and set it on black. We also reject V–A–C's "no letter-spacing anywhere" rule — our `--t-label` depends on `0.14em` tracking (which we take from Julia Krantz's category label instead).

### Tertiary — Julia Krantz (`dfa3ad81-0d1e-447f-b171-2b871cbb27ab`)

The only reference that is already dark. Confirms the whole approach is coherent on black.

**Borrow only:**
- **Ghost Line at 12% opacity** as the structural seam value on a dark canvas. Krantz uses `rgba(248,248,248,0.12)`; our cream hairline is `rgb(var(--c-cream) / 0.12)`. This is why our rules read as *seams* rather than as *lines drawn on top*.
- **Contact-sheet plate pairs** — the paired-image rhythm for the About page.
- **The category label**: 10px, weight 300, `letter-spacing: 0.14em`, uppercase, in the muted tone. This is the direct source of `--t-label`.
- **Hover states that change opacity or image brightness only** — never a background fill appearing under the cursor.
- Its motion philosophy verbatim: *"No entry animations, no scroll-triggered effects. Only hover feedback, nothing decorative."*

**Reject:** its pure `#000000` void (we use `#0B0B0F`, which has a faint warmth that keeps photography from looking cut out), its 44px near-invisible weight-300 letterforms over photography (type never sits on a busy photograph here), and its edge-to-edge tile mosaic (a mosaic is a portfolio brag; this practice has one practitioner).

### Media strategy

Photography is Brittany's own and is the second-best asset in the repo after her voice. It is never decoration and never a backdrop for type.

- **Plate** — contained, sharp-cornered, with a wall label. Carries specificity.
- **Chapter break** — full-bleed, no type whatsoever. Carries rest.

No third role. No stock, no generated imagery, no placeholder media. If an asset does not exist, the section ships without it rather than with a "coming soon" box.

### Searches that returned nothing usable

Two of the five locked searches failed to produce a usable reference, and the failures are themselves a finding:

- `refero_search_screens` (web) — *"FAQ accordion on a light card floated over a photograph"* returned GlossGenius, ManyChat, Care.com, Netflix Tudum, DoorDash, Lovable, Seed, WhatsApp. Every result is a rounded-card SaaS landing page — precisely the pattern the current build already has and that this redesign exists to remove. **Nothing taken.** The searched-for pattern is itself the defect: a light card floated over a photograph is the single loudest element on the current home page.
- `refero_search_screens` (web) — *"contact form with underline inputs and no boxes"* returned Craftwork, Teal, Clearful, IKEA checkout, Urban Outfitters, adidas, Elektron, B150, Acuity, Calendly. All boxed-field forms; none actually used underline inputs. **Nothing taken.**

The FAQ and the contact form are therefore built from the **V–A–C Line Input** and the **19–86 Table Row** instead — both first-party, both already load-bearing elsewhere in this system. This is stronger than what the screen searches would have given: the FAQ becomes an *index* rather than a *widget*, which is the entire direction.

### Token commitments

| Commitment | Value |
|---|---|
| Canvas | `#0B0B0F` — one canvas, no alternating bands |
| Chromatic accents | Exactly one hue (gold), at two densities |
| Structural device | 1px rules only. No cards, no fills, no shadows |
| Radius | `0` or `9999px`. Nothing between |
| Shadow | None. The token does not exist |
| Container widths | Four. Not five |
| Motion budget | One orchestrated entrance + one signature scroll moment, site-wide |
| Alignment | Flush-left gutters |

---

## 2b. The direction bake-off — what was actually judged

Three directions were built as working mocks at `/mocks/{a,b,c}` and rendered at 1440 before this document was finalized (`ui-design-system` Rule 2 — never ship generation 1). All three stayed inside the inherited black + gold + Cormorant identity; they differed in typography, atmosphere, and layout logic. Judged in the prescribed order: **typography and atmosphere first, then color, then layout.**

| | Direction | Result |
|---|---|---|
| **A** | **Evening Program** | **Selected.** |
| B | Nightwater — full-viewport photographic chapters, type floating in the image | Rejected |
| C | Sutra — near-imageless, the whole page set as verse | Rejected, with one element promoted |

**Why A won.**

1. *Typography.* A was the only direction that established a real hierarchy: the monument at full display scale, flush-left, against a `--t-label` at `0.75rem`. B's hero type came in small and tentative to stay legible over photography; C's display line was elegant but its supporting text collapsed to near-illegible marginal glosses.
2. *Atmosphere.* A is the only one that delivers the second promise — *someone prepared for me*. Ruled rows, hanging numerals, and a wall label under a plate read as care taken in advance. B delivers calm but not preparedness. C delivers reverence that tips into austerity, which reads as forbidding to a reader who is already frightened.
3. *It holds facts.* The decisive test. A's services index carries four fees and four durations on a tabular column without a single box. B's prices float in a dark field with no structure to rank them. A card grid asks a dysregulated reader to comparison-shop; a ruled index asks nothing.
4. *It degrades.* A's split composition has an obvious mobile form (plate above, ink panel below). B's full-bleed panels and C's wide margins are both fragile at 375.

**Promoted from C:** the Metta treatment — the mantra set as four authored verse lines, indented without quote marks, with the final clause *rubricated in gold*. That is a real manuscript convention rather than an invented flourish, and it is stronger than treating the mantra as a pull quote. It becomes the About page's signature moment (§9).

**Promoted from B:** *radial* scrims rather than rectangular ones for the one place type sits near photography (page heroes) — the type gets a near-solid field with no visible edge, which is what lets the page titles clear contrast without a visible box.

**Rejected from both:** B's practice of setting body copy directly over busy photography, and C's near-total abandonment of the practitioner's own photographs.

---

## 3. Why this is not AI slop

Dark canvas + serif display + earth-toned accent is a known generated-design tell — the "calm editorial serif" and "dark mode by default" convergence that `avoid-ai-design` exists to catch. It is not a tell here, for one reason:

**The palette and the typefaces are inherited brand constraints, not generated ones.** Black and gold, Cormorant Garamond and Source Sans 3, the gold-and-white meditating-figure logo, and the nature photography are all already live on Brittany's Wix site and predate this repo entirely. They are the practice's existing identity as encountered by every patient who has already found her.

`avoid-ai-design`'s own guardrail is that **an existing brand guideline outranks the model's taste.** Choosing a different palette here would not be de-slopping; it would be discarding a real client's real identity in favor of the model's preference, which is a worse failure than the one being avoided.

**This justification covers the palette and the typefaces ONLY.** It is not a general amnesty. It licenses nothing on the Banned list (§13), and it specifically does not license: centered layouts, card grids, shadows, radius, decorative blur, gradient text, scroll-triggered fades, or any other convergent pattern. Those had no inherited claim and are banned outright. The inherited identity was the *starting constraint*; everything downstream of it — rhythm, measures, index grammar, the two-gold split, the motion budget — was designed against references, not recalled from the center of the web.

---

## 4. Palette

### The two-gold resolution: one hue, two densities

The single hardest problem in the inherited identity is that gold was doing two incompatible jobs — hairline ink and full-field wash — at one lightness. Split by role, not by hue:

- **`--gold` `#C9A84C` — INK AND LINE ONLY.** Rules, folio numerals, focus ring, verse type, link hairlines, wall labels, ghost-button borders. Measures **8.6:1** on `--deep` (AAA for body text). *Note: 9.2:1 is the figure against pure `#000000`; against our actual `#0B0B0F` canvas it is 8.6:1. Both clear every threshold; the accurate number is recorded here.*
- **`--gold-deep` `#A8873A` — FIELD ONLY.** The one full-bleed saturated block per page, and nothing else. It is **darker** than the ink gold — a program cover is printed on stock, not drawn with a highlighter. Ink on this field is `--deep` at **5.8:1**.

**Never** set `--gold` type on a `--gold-deep` field (1.5:1). Inside the gold field the roles invert: the canvas is gold, the ink is `--deep`, and the button becomes a solid `--deep` fill with `--gold-deep` text. That inversion is the *only* solid button on the site.

### Deleted outright

`#E8C840` (highlighter yellow — the loudest thing on the current build, and the thing a dysregulated reader flinches from) · `#6B4C9A` (orphan purple) · `#7A8B6F` (sage, used exactly once) · `#F5F0E8` (`warm` — declared and never used) · `#FFFFFF` (pure white never appears; `--cream` is the light tone).

`--surface` `#1A1A1E` survives with **exactly one job**: the emergency-disclaimer strip, which must read as a different piece of stock from the program. It is not a section band and never alternates with `--deep`.

`--alert` `#C4674F` is added for **form errors only**. It appears nowhere else.

> **Alert-token correction.** The direction specified `#B4553F`. Measured against `--deep` that is **4.03:1**, which fails the 4.5:1 minimum for the `--t-fine` (13px) error text it exists to set. The token ships as `#C4674F` — the same terracotta, lightened until it clears at **5.1:1**. Hue and role are unchanged; only the luminance moved, and only far enough to be legible.

### Storage format — non-negotiable

Colors are stored as **space-separated channel triplets**, never hex. This codebase uses roughly 60 alpha modifiers (`bg-gold/10`, `text-cream/85`, `border-cream/12`). A hex value in these vars silently flattens **every one of them** to full opacity — the page does not error, it just goes loud. Tailwind v3's `<alpha-value>` placeholder only composes against a triplet.

**`src/app/globals.css` — single source of truth:**

```css
@layer base {
  :root {
    /* Canvas */
    --c-deep:      11 11 15;    /* #0B0B0F  page canvas, the only background */
    --c-surface:   26 26 30;    /* #1A1A1E  emergency strip ONLY */

    /* Ink */
    --c-cream:    242 237 228;  /* #F2EDE4  primary text        16.8:1 on deep */
    --c-muted:    168 159 143;  /* #A89F8F  secondary, labels    7.5:1 on deep */

    /* Chroma — one hue, two densities */
    --c-gold:     201 168 76;   /* #C9A84C  INK AND LINE ONLY    8.6:1 on deep */
    --c-gold-deep:168 135 58;   /* #A8873A  FIELD ONLY   deep on it = 5.8:1   */

    /* State */
    --c-alert:    196 103 79;   /* #C4674F  form errors ONLY     5.1:1 on deep */
  }
}
```

**`tailwind.config.ts` — bridge shape:**

```ts
colors: {
  deep:       "rgb(var(--c-deep) / <alpha-value>)",
  surface:    "rgb(var(--c-surface) / <alpha-value>)",
  cream:      "rgb(var(--c-cream) / <alpha-value>)",
  muted:      "rgb(var(--c-muted) / <alpha-value>)",
  gold:       "rgb(var(--c-gold) / <alpha-value>)",
  "gold-deep":"rgb(var(--c-gold-deep) / <alpha-value>)",
  alert:      "rgb(var(--c-alert) / <alpha-value>)",
},
```

Delete `warm` and `sage` from the config in the same edit. Tailwind's own `gray-*` / `zinc-*` / `slate-*` scales are banned (§13) — every neutral comes from `--cream` and `--muted` at alpha.

### Standard alphas

Memorize these four; do not invent new ones.

| Use | Value |
|---|---|
| Structural hairline (rules, seams, plate borders) | `rgb(var(--c-cream) / 0.12)` — Krantz Ghost Line |
| Emphatic hairline (index rows, section rules) | `rgb(var(--c-gold) / 0.28)` |
| Secondary body text | `rgb(var(--c-cream) / 0.85)` |
| Ghost-button hover fill | `rgb(var(--c-gold) / 0.10)` |

---

## 5. Type

**Display / voice:** Cormorant Garamond (`var(--font-cormorant)`).
**Body / apparatus:** Source Sans 3 (`var(--font-source-sans)`).

Both inherited. Display-to-body size jump at the top of the scale is ≥4× — well past the 2× minimum.

### The serif does more than headings

This is the single biggest typographic change from the current build. Cormorant carries:

- **navigation**
- **the philosophy lines**
- **pull quotes and the Metta mantra**
- **service names**
- **FAQ questions**

Source Sans carries body prose, labels, fees, durations, form fields, and legal text. The rule of thumb: **Cormorant speaks in Brittany's voice; Source Sans is the program's apparatus.** Her lowercase fragments ("not just symptom relief", "care is collaborative") are voice — they set in Cormorant, lowercase preserved exactly as written.

### Scale

```css
--t-monument: clamp(2.75rem, 7vw, 6rem);      /* Cormorant. ONE per page. lh 1.02, ls -0.02em */
--t-display:  clamp(2rem, 4.5vw, 3.25rem);    /* Cormorant. section heads. lh 1.1,  ls -0.01em */
--t-verse:    clamp(1.5rem, 2.6vw, 2.125rem); /* Cormorant italic. quotes, mantra. lh 1.45     */
--t-title:    1.375rem;                       /* Cormorant. service names, FAQ Qs. lh 1.3      */
--t-prose:    1.0625rem;                      /* Source Sans. body.                lh 1.7      */
--t-label:    0.75rem;                        /* Source Sans. ls 0.14em, uppercase, tabular    */
--t-fine:     0.8125rem;                      /* Source Sans. legal, errors, notes. lh 1.6     */
```

`--t-monument` appears **once per page**, at the top, and nowhere else. A second monument on a page is a bug.

### Label rule — wall labels, not eyebrows

**A label never announces the section that follows it.** No "OUR SERVICES" above the services. No "GET IN TOUCH" above the form. An eyebrow that restates the heading is filler; on this site it also reads as a sales page, which breaks the mental model.

**Labels carry only facts** — a numeral, a duration, a fee, a place, a year, a count.

| Banned | Correct |
|---|---|
| `OUR SERVICES` | `SEVEN SERVICES` |
| `FREQUENTLY ASKED` | `01 — 07` |
| `ABOUT BRITTANY` | `PMHNP-BC · ARIZONA` |
| `GET IN TOUCH` | `VIRTUAL IN ARIZONA` |
| `MEDICATION MANAGEMENT` (as an eyebrow) | `30 MINUTES · $150.00` |

Labels are `--t-label`, `--muted` by default, `--gold` when the fact is the row's index numeral.

### Numerals

`font-variant-numeric: tabular-nums` on every fee, duration, year, phone number, and index numeral. Fees and durations align on a column across every row in an index. This is the 19–86 borrow and it is what makes the fee schedule read as *prepared* rather than *listed*.

---

## 6. Measures and alignment

**Four container widths. Not five.**

```css
--measure-prose:   34rem;  /* ~66ch. body prose, FAQ answers, form column   */
--measure-display: 46rem;  /* monument, display heads, verse                */
--measure-index:   68rem;  /* index tables, plate pairs, footer             */
/* full-bleed: photography and the gold field only — no container at all    */
```

Adding a fifth width is a banned pattern (§13).

**Flush-left gutters.** Content aligns to the left gutter and ragged-rights into the measure. Page gutters: `1.5rem` mobile / `3rem` tablet / `4.5rem` desktop.

**`mx-auto` is permitted only on `--measure-index` containers** — the index needs to sit centered in the viewport because its columns are symmetrical. It is **never** applied to a rule, a divider, or a heading. A centered hairline under a centered heading is the single clearest "generated landing page" tell in the current build, and it is gone.

`text-center` is banned on any `h1`, `h2`, or `h3` (§13).

---

## 7. Rhythm

One `.section-padding` on everything is abolished. Vertical space is a signal about content weight, and using one value for all of it is what makes the current build feel like a scroll rather than a program.

```css
--rhythm-hairline: 2.5rem;   /* items that belong to what precedes them  */
--rhythm-close:    4.5rem;   /* related, but its own beat                */
--rhythm-default:  7rem;     /* a new section                            */
--rhythm-open:     11rem;    /* permission to stop reading               */
--rhythm-chapter:  0;        /* chapter-break photo: seam, no gap        */
```

Base unit `0.5rem` (8px); the steps are 5 / 9 / 14 / 22 units.

### How the values are applied — top padding only

**A section declares its top rhythm and nothing else.** No `py-*`, no `pb-*`. The gap at a boundary is the *lower* section's `pt`, so it is exactly one token.

This is not a style preference; it is what makes the scale real. When every section carried its own top *and* bottom padding, adjacent paddings added and no reader ever saw a token: the measured boundaries were 152, 184, 248, 288, 352 — five accidental sums, none of them a value in the table above, one of them larger than `open`. A five-value scale that never renders any of its five values is not a scale.

Two exceptions, both because a fill or a rule seals the box:

- **Filled bands** (the emergency strip, the gold field) take `mt-*` for the gap and keep `py-*` for their internal air. Padding on a filled element is inside the fill, so it cannot also be the gap.
- **The footer** is sealed by its `border-t`, so it takes `mt-*` for the gap and keeps its own `py-*` below the rule.

Everything else — including `PageHero`'s title block — ends with no bottom padding at all.

**Verify it numerically, not by eye.** Walk `main > *` plus the footer, and for each boundary compute `max(marginBottom, marginTop) + (prev sealed ? 0 : prev.paddingBottom) + (next sealed ? 0 : next.paddingTop)`. Every result must equal one of the five tokens. The site currently scores 44/44 across four routes at 1440 and 375.

### Rhythm rules (enforced in design review)

1. **No page uses `default` more than twice before using one `hairline` and one `open`.** Three `default` gaps in a row is a metronome, and a metronome is the thing that makes a page feel like it is moving at you.
2. **Two adjacent sections may not share both rhythm and background.** If the rhythm repeats, something else must change — a rule, a plate, a measure.
3. **The mechanical `bg-deep` / `bg-surface` alternation is abolished.** `--deep` is the only section background. Separation comes from rhythm and hairlines, not from banding. The gold field (once per page) and the emergency strip are the only exceptions, and both are content, not decoration.
4. `--rhythm-open` appears **at least once per page** — usually immediately before the booking CTA. It is the "you may stop here" gap, and it is the layout's version of *no pressure to be anything other than exactly who you are*.

---

## 8. Radius, shadow, blur

- **Radius is `0` or `9999px`. Nothing between.** No `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl` — all banned (§13).
- **Shadows are banned.** No `shadow-*`, no `drop-shadow`, no elevation token. Depth comes from contrast against the canvas and from 1px seams. This is the V–A–C / 19–86 / Krantz rule, unanimous across all three.
- **`backdrop-blur` is permitted in exactly one place:** the fixed header, once it is over scrolling photography. Nowhere else. Decorative `blur-2xl` / `blur-3xl` blobs are banned.

### Circles are reserved and meaningful

`rounded-full` appears in exactly four places site-wide. Each has a job:

1. **The hero seam circle** — a 1px gold hairline ring, transparent fill, straddling the seam between the ink field and the plate. **`lg` and up only.** Below `lg` the composition stacks, so the seam becomes a full-width horizontal rule with flush-left type directly under it, and the ring's arc cut straight through the wall label *and* through "Virtual · Arizona residents only" at both 375 and 768. There the hairline is the seam and the ring is decoration, which circles here are not allowed to be.
2. **The mantra circle** (About) — the Metta mantra set in `--t-verse` Cormorant italic inside a 1px gold ring on `--deep`.
3. **The video play control** — 1px gold ring, transparent fill, gold triangle.
4. **The single About portrait** of Brittany.

**Portraits anywhere else are square plates.** A circular crop is a "meet the team" convention; used more than once it turns a practitioner into a card.

---

## 9. Imagery

### Plate

Contained, sharp-cornered, sitting directly on the canvas.

- `border-radius: 0`. No shadow. Optional 1px `rgb(var(--c-cream) / 0.12)` border when the photograph's edge is light enough to bleed into the canvas.
- **Ratios: `4/5`, `3/2`, or `1/1`.** No other ratio. Pick per plate; keep a pair consistent.
- **Every plate carries a wall label** directly beneath it, flush-left, `--t-label`, `--muted`. The label gives a **fact**: subject, place, year. Not a caption, not a mood word.
  - Correct: `SONORAN DESERT · ARIZONA · 2024`
  - Wrong: `Finding stillness in nature`
- Hover, where a plate is a link: `filter: brightness(0.88)`, `--motion-standard`, `ease-out`. No lift, no scale, no border color change.

### Chapter break

- Full-bleed, **`62vh` desktop / `52vh` mobile**.
- **No type on it whatsoever.** No heading, no caption, no wall label, no overlay gradient, no scrim.
- A 1px `rgb(var(--c-cream) / 0.12)` hairline above and below is the seam. `--rhythm-chapter` (`0`) on both sides — the photograph *is* the gap.
- One per page maximum.

### The absolute rule

**Type never sits on a busy photograph.** The current build breaks this on every page hero and it is the reason the headings read as unconfident. If a photograph and a headline must share a screen, they share it side by side or stacked with a seam — never layered. The hero title sits in the `--deep` field *below* the photograph, flush-left, with the seam circle bridging them.

### No placeholder media

`VIDEO.url` is currently `null` with a `"Video coming soon"` placeholder. Placeholder media is banned (§13). Until a real URL exists, the video section renders as a **plate of `placeholderImage` with a wall label and the circular play control**, and no "coming soon" copy — or it does not render at all. A section that admits it is unfinished undoes "someone prepared for me."

---

## 10. Components

### Header

Fixed. Height `4.5rem`. Transparent over the hero photograph.

After `64px` of scroll it gains `background: rgb(var(--c-deep) / 0.72)`, `backdrop-filter: blur(12px)`, and a 1px bottom hairline at `rgb(var(--c-gold) / 0.22)`. This is the site's one permitted `backdrop-blur` and its one signature scroll moment (§11).

**The unscrolled state carries a scrim.** Transparent-over-photograph is the intent, but at `lg` the nav sits over the home page's plate, and cream on sunlit petals is nowhere near the 4.5:1 floor §15 sets as a *minimum* — and a minimum outranks an aesthetic clause. So the bar itself is transparent and a `deep/90 → transparent` gradient confined to the header's own height sits behind it, fading out as the solid field fades in. It draws no edge, and it is the same device §2b promoted for type near photography. Only one of the two is ever doing the work.

**The mobile panel needs a close control.** The `<dialog>` is full-bleed and opaque, so it covers the header and the hamburger that opened it — and with a transparent `::backdrop` behind a full-bleed panel there is no backdrop left to tap. Without an explicit control the only exits are Escape and committing to a nav link, which on a phone is a trap. The close button sits where the hamburger was.

### Mobile booking bar

Phones only. Ghost outlined link on `--deep`, 1px `--gold/0.20` hairline above, no `backdrop-blur` (§8 permits one and the header has it).

**It must never be on screen at the same time as the gold field.** It watches `#booking-cta` and stands down whenever any part of the field is visible, so the same sentence is never offered twice at once. Scroll depth alone is not a sufficient trigger: on every page the depth that reads as "deep enough to offer" is the depth the field itself occupies. It fades; it never pops.

Nav links: Cormorant, `--t-prose`, `rgb(var(--c-cream) / 0.85)`. Hover and current page: a 1px gold hairline underneath, `transform: scaleX(0 → 1)` from the left, `--motion-micro`, `ease-out` (the 601 Inc. borrow). No color change, no background, no pill.

### Buttons

**Ghost outlined, always** (Aspelin borrow):

```
border: 1px solid rgb(var(--c-gold));  background: transparent;
color: rgb(var(--c-gold));  border-radius: 0;
padding: 0.875rem 2rem;  font: --t-label;
hover: background rgb(var(--c-gold) / 0.10), --motion-micro, ease-out
```

**One exception:** inside the gold field, roles invert — solid `--deep` fill, `--gold-deep` text, no border. That is the only solid button on the site.

`hover:border-*` as an element's *only* hover state is banned (§13) — a border color change alone is too quiet to register as feedback.

### Index row — the workhorse

Services, fee schedule, policies, and FAQ are all the same object. Built from 19–86's Table Row and V–A–C's minimal card.

```
grid: [numeral 3rem] [name 1fr] [fact auto]
border-bottom: 1px solid rgb(var(--c-gold) / 0.28)
padding: 1.25rem 0 1.5rem
```

- **Hanging numeral**, left margin, `--t-label`, `--gold`, tabular: `01`, `02`, `03`.
- **Name** in Cormorant `--t-title`, `--cream`.
- **Fact** right-aligned, tabular, `--t-fine`, `--muted`: `$250.00 · 90 MINUTES`.
- **Description** in `--t-prose`, `rgb(var(--c-cream) / 0.85)`, constrained to `--measure-prose`, sitting under the name in the name column.
- Rows share one continuous rule set. No gaps between rows, no borders on the sides, no card.

**`md:grid-cols-2` bordered card grids are banned** (§13). The current services page ships exactly that — two-column bordered boxes — and it turns seven modes of care into a pricing comparison. An index ranks; a grid asks you to choose. Only one of those is trauma-informed.

### FAQ

An index, not a widget. **Not a light card floated over a photograph** — that pattern is deleted.

- Rows exactly as above. Hanging numeral `01`–`07` in gold.
- **Question** in Cormorant `--t-title`, `--cream`. The full question is always visible.
- **Answer** in `--t-prose` at `--measure-prose`.
- **Indicator:** two 1px gold rules forming a `+`; the vertical rule `transform: rotate(90deg) → scaleY(0)` on open. `--motion-standard`, `ease-out`. No chevron glyph, no icon font.
- Panel expands via `grid-template-rows: 0fr → 1fr`, `--motion-standard`, `ease-out` (documented deviation, §11).
- Real `<button aria-expanded>` per row; full row is the hit target.

### Contact form

V–A–C Line Input, verbatim in structure.

```
background: transparent;  border: none;
border-bottom: 1px solid rgb(var(--c-cream) / 0.25);
border-radius: 0;  padding: 0.75rem 0 0.75rem 2px;
color: rgb(var(--c-cream));  font: --t-prose;
focus: border-bottom-color rgb(var(--c-gold));  /* the single chromatic bottom border */
```

- **A real `<label>` above every field**, `--t-label`, `--muted`, `for`/`id` bound. **Placeholder-as-label is banned** (§13) — the current build uses it on all five fields, which means the question disappears the moment the reader starts answering. For someone anxious enough to reload the page, that is the worst possible failure.
- Placeholders, where used at all, carry an *example*, never the field name.
- **Errors:** `--alert`, `--t-fine`, below the field; the field's bottom border also becomes `--alert`. `aria-describedby` bound, `aria-invalid` set. Never color-only.
- Submit is a ghost outlined button. Submitting state: a spinner on the one permitted `linear` easing (§11).
- Fields stack in one column at `--measure-prose`. No two-up grid.

### Emergency strip

The only `--surface` element. Full-bleed, `--t-fine`, `rgb(var(--c-cream) / 0.85)`, `--rhythm-hairline` padding, 1px `rgb(var(--c-cream) / 0.12)` hairline above and below. Never gold, never `--alert` — this is a standing fact, not an error, and coloring it red would make a crisis line look like a warning about the website.

### Gold field

**Once per page, maximum.** Full-bleed `--gold-deep`. Ink is `--deep` throughout. Carries the booking CTA. Always preceded by `--rhythm-open`.

### Footer

`--measure-index`, flush-left columns, `--deep` canvas (never gold — the current build's gold footer plus gold CTA is two fields on one page). 1px `rgb(var(--c-cream) / 0.12)` rule above. Logo, tagline in Cormorant `--t-prose`, nav and contact columns in `--t-fine`, legal line in `--t-fine` `--muted`.

---

## 11. Motion

Tokens imported from `~/.claude/skills/ui-design-system/MOTION.md`. Declare in `globals.css`:

```css
--motion-micro:    140ms;  /* hovers, toggles, small state changes */
--motion-standard: 200ms;  /* accordion, disclosure                */
--motion-modal:    260ms;  /* mobile nav sheet                     */
--motion-page:     300ms;  /* hard cap, except the one entrance    */
--ease-out:   cubic-bezier(0, 0, 0.2, 1);
--ease-inout: cubic-bezier(0.4, 0, 0.2, 1);
```

Easing per MOTION.md: entering/exiting → `ease-out`; moving on screen → `ease-in-out`; never `ease-in`, never bare `ease`, never `transition: all`. Animate `transform` and `opacity` only.

### The budget — one entrance, one scroll moment, site-wide

**1. The orchestrated entrance (home hero only).** Three staggered steps, `≤500ms` total: monument → subtitle → seam circle. `opacity 0 → 1` and `translateY(12px) → 0`. Runs once, on the home page, above the fold. No other page has an entrance.

**2. The signature scroll moment.** The fixed header crossing the hero seam — background fades to `rgb(var(--c-deep) / 0.72)`, `backdrop-blur(12px)` engages, and the bottom hairline fades in. `--motion-standard`, `ease-out`. This is the whole site's scroll choreography.

Everything else is hover feedback (Krantz's philosophy, adopted verbatim). Nothing else animates, ever.

### Deliberate deviations — documented per MOTION.md

1. **`animate-ken-burns` is deleted.** A 25s infinite alternate scale on the hero photograph violates MOTION.md rule 8 (constant ambient motion is theater for a rare action) and, more importantly, violates the direction's first promise: *nothing is going to jump at me*. A slowly breathing background is exactly what a dysregulated reader's peripheral vision keeps catching. Remove the keyframes and the animation entry from `tailwind.config.ts`.
2. **`<FadeIn>` is deleted, not fixed.** MOTION.md rule 5: below-the-fold content renders visible. Scroll-triggered `opacity-0` means content is *invisible until scrolled to*, which breaks reading on slow connections, breaks with JS disabled, and punishes exactly the reader who is scrolling slowly. Delete `src/components/ui/FadeIn.tsx` and its call sites rather than adding a reduced-motion guard to it. Keep the `fade-in` keyframe only if the hero entrance uses it.
3. **One `linear` exception:** the contact form's submitting spinner. Constant rotation is the one place `linear` is correct (MOTION.md easing flowchart).
4. **Accordion panel uses `grid-template-rows: 0fr → 1fr`,** which is not a `transform`/`opacity` property. Accepted knowingly: it is the only technique that animates to intrinsic content height without a measured pixel value, and the alternatives (fixed heights, JS measurement) are worse. Scoped to the FAQ panel only.

### Global blocks — both required in `globals.css`

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

:focus-visible {
  outline: 1px solid rgb(var(--c-gold));
  outline-offset: 2px;
}
```

The focus ring is `--gold` at 1px with 2px offset — the same hairline vocabulary as every rule on the site, so keyboard focus looks designed rather than bolted on. Never remove the outline without replacing it.

Hover-only effects gate behind `@media (hover: hover)`.

---

## 12. Copy

**Copy is preserved verbatim and never rewritten, only re-typeset.**

Brittany's voice is the best asset in the repo — the lowercase fragments, the Metta mantra, "no pressure to be anything other than exactly who you are." It is specific, unguarded, and completely unlike marketing copy, which is precisely why it works on a reader who is braced for marketing copy.

- All copy lives in `src/content/*.ts`. Components never hardcode strings (`react/jsx-no-literals` warns).
- Do not sentence-case her lowercase fragments. Do not add terminal punctuation she omitted. Do not "fix" the em-dash in `spectrum of your experience—`.
- Do not add copy. No invented eyebrows, no CTA microcopy, no "trusted by," no reassurance the practitioner did not write.
- The only new strings this redesign may introduce are **wall labels and index numerals**, which are facts (subject, place, year, duration, fee, count), not prose.

---

## 13. Banned list

### Standard — copied verbatim from `ui-design-system` SKILL.md

- **Fonts:** Inter, Roboto, Arial, Open Sans, Lato, Poppins, Space Grotesk, system-ui-only.
- **Patterns:** gradient hero text / `bg-clip-text`, emoji-as-icons, 3-identical-card feature grids, centered-everything layouts, purple/indigo/teal SaaS palette, decorative `blur-2xl`/`blur-3xl` blobs, Tailwind default color utilities, marquee logo strips.
- **Copy:** "seamless", "supercharge", "elevate", vague benefit-speak. Specific numbers and named facts instead.

### Project-specific additions

- `#E8C840` · `#6B4C9A` · `#7A8B6F` · `#F5F0E8` · `#FFFFFF`
- Tailwind `gray-*` (and `zinc-*` / `slate-*` / `neutral-*`)
- `text-center` on any `h1`, `h2`, or `h3`
- `mx-auto` on a divider or a rule
- `rounded-sm` / `rounded-md` / `rounded-lg` / `rounded-xl` / `rounded-2xl`
- Any `shadow-*`
- `md:grid-cols-2` bordered card grids
- `hover:border-*` as an element's only hover state
- A shared `.section-padding` on every section
- `animate-ken-burns`
- Scroll-triggered `opacity-0`
- Arrow glyphs (`→`, `↗`) in copy
- More than four container widths
- Placeholder media ("coming soon")
- Alternating `bg-deep` / `bg-surface` bands
- Placeholder-as-label form fields

---

## 14. Decision ledger

A major choice with no source does not ship as a design decision.

| Decision | Source | Source rule/role | Why |
|---|---|---|---|
| `#0B0B0F` single canvas, no bands | 601 Inc. | "deep matte-black background with large expanses of negative space" | The room the program is read in. Banding is what makes the current build feel like a scroll; one canvas makes it feel like stock. |
| One hue as sole chromatic accent | 601 Inc. | "a single muted gold as the only chromatic accent" | Gold is inherited; the reference proves one hue can carry a whole system without a second accent. |
| Gold split into ink (`#C9A84C`) and field (`#A8873A`) | 601 Inc. | gold "reserved for display type, interactive, 1px borders" | The reference never uses its gold as a field. Splitting by density keeps the inherited hue while removing the highlighter wash. |
| Field gold is *darker* than ink gold | Direction | program cover is stock, not highlighter | `#E8C840` at full bleed was the loudest element on the page — the exact opposite of "nothing will jump at me." |
| `--alert` lightened to `#C4674F` | `ui-design-system` | "Color contrast: 4.5:1 ratio minimum" | Specified `#B4553F` measures 4.03:1 on `--deep`, failing AA for the 13px error text it sets. Same hue, minimum luminance change to clear at 5.1:1. |
| Channel triplets, not hex | Tailwind v3 `<alpha-value>` | `rgb(var(--c-x) / <alpha-value>)` | ~60 alpha modifiers in this codebase silently flatten to full opacity against a hex var. Silent failure, loud page. |
| Cream/gold hairlines at 12% / 28% | Julia Krantz | Ghost Line `rgba(248,248,248,0.12)` | The only dark reference in the set; proves the seam value that reads as *structure* rather than *drawn line* on black. |
| 1px rules as the only structural device | V–A–C + 19–86 | "razor-thin black rules"; Table Row `border-bottom: 1px solid` | Unanimous across both index references. Rules structure without enclosing, which is what lets an index rank instead of compare. |
| Radius `0` everywhere except reserved circles | V–A–C · Krantz · 19–86 | V–A–C: "strict 0px border-radius"; Krantz: "0px is non-negotiable" | Unanimous across three references. Reserving `9999px` for four meaningful uses keeps circles as signals. |
| Shadows banned outright | V–A–C · Krantz | V–A–C: "never apply box-shadows"; Krantz: "zero shadow tokens" | Unanimous. Depth from contrast and seams. |
| Index rows replace card grids | 19–86 | Table Row: `pt 5px / pb 8px / border-bottom 1px` | A grid asks the reader to compare and choose; an index lets them read and stop. Only one of those is trauma-informed. |
| Tabular numerals on all facts | 19–86 | "tight tabular alignment… document-like rhythm" | Aligned fees read as *prepared in advance*, which is the practice's actual promise. |
| Hanging numerals in the left margin | 19–86 + Krantz | Krantz tile: sequential `01`, `02` above the code | Gives the reader position without a progress bar. |
| Wall label = fact, never mood | V–A–C + Krantz | Krantz Category Label: 10px / 300 / `0.14em` / uppercase | A label that restates the heading is filler; a label that gives a place and a year is provenance. |
| `--t-label` `0.14em` uppercase | Julia Krantz | Category Label letter-spacing `0.14em` | Direct lift. Rejects V–A–C's "no letter-spacing" rule in this one place. |
| Ghost outlined buttons, no solid fills | Aspelin Reitan | ghost outlined over solid | A solid button is an instruction. A ghost button is an offer. |
| Transparent input, single bottom border | V–A–C Line Input + Aspelin | "transparent background, 1px underline, `padding-left: 2px`, no radius" | Both references independently. Boxes around fields make a contact form look like an intake form. |
| `open` rhythm at `11rem` | Aspelin (~100px) + V–A–C (150px) | V–A–C `sectionGap: 150px` | Both references corroborate a >100px "open" gap. `11rem` (176px) sits in that band. |
| Five rhythm values, not one `.section-padding` | Deliberate deviation from `ui-design-system` | Skill says "pick one section-padding value and stick to it" | Knowingly overridden. One value on every section is what produces the metronome the direction exists to break. Consistency is preserved by the *rules* in §7, not by a single number. |
| Photography as plate + chapter break only | 601 Inc. + V–A–C | 601: "contained rectangles… curated stills"; V–A–C: "contained, unedited photographs, no rounding or shadow" | Both references contain their imagery. Full-bleed everywhere is what forces type onto photographs. |
| No type on photographs, ever | 601 Inc. | photography "contained… full-color against the dark environment" | The reference never sets display type over a busy image. Layered type is why the current heroes read as unconfident. |
| One orchestrated entrance + one scroll moment | MOTION.md + Julia Krantz | MOTION.md rule 5; Krantz: "no entry animations, no scroll-triggered effects" | The dark reference in the set has essentially no motion. Motion is the first thing a dysregulated reader notices. |
| `<FadeIn>` deleted rather than fixed | MOTION.md | rule 5: below-the-fold content renders visible | Content invisible until scrolled to punishes the slow reader — the exact reader this site is for. |
| `animate-ken-burns` deleted | MOTION.md | rule 8: frequent/ambient = subtle; no decorative motion | A 25s breathing background is permanent peripheral movement. |
| Focus ring = 1px gold at 2px offset | `ui-design-system` | "all interactive elements keyboard-accessible" | Same hairline vocabulary as every rule on the site, so focus looks designed rather than bolted on. |
| Copy preserved verbatim | Project CLAUDE.md | copy "is preserved verbatim — it is the practitioner's own voice" | Her unguarded, specific voice is the best asset in the repo and the hardest thing to regenerate. |

---

## 15. Accessibility and verification

**Minimums (from `ui-design-system`):** 4.5:1 contrast, keyboard access on every interactive element, labels bound to inputs, alt text on every image.

**Measured pairs on `--deep` `#0B0B0F`:**

| Pair | Ratio | Verdict |
|---|---|---|
| `--cream` on `--deep` | 16.8:1 | AAA |
| `--gold` on `--deep` | 8.6:1 | AAA |
| `--muted` on `--deep` | 7.5:1 | AAA |
| `--alert` on `--deep` | 5.1:1 | AA |
| `--deep` on `--gold-deep` (field) | 5.8:1 | AA |
| `--gold` on `--gold-deep` | **1.5:1** | **BANNED PAIRING** |

Additional requirements:

- Alt text is a **description**, matching the wall-label discipline — never "image" or the filename.
- Every accordion row is a real `<button aria-expanded>`; every form error is bound via `aria-describedby` and `aria-invalid`, never signalled by color alone.
- Hit targets `≥44px`, with **one exemption: links inline inside a sentence.** WCAG 2.5.8 carves these out by name ("the target is in a sentence or its size is otherwise constrained by the line-height of non-target text"), and forcing them costs more than it buys — padding on the 911 link pushed the following comma off the numeral, and a min-height stretched that one line's leading. Every *standalone* control — nav, buttons, footer links, phone and email rows, the accordion rows, the mobile trigger — is ≥44px with no exceptions.
- The header's `backdrop-blur` must not drop text contrast below 4.5:1 — the `0.72` alpha on `--deep` is what guarantees it; do not lower it.
- GA4 `G-LCRF7SMS2P` on all deployed pages (MGG standard).

**Verification loop after any UI change** — never declare UI done unseen:

1. Open the page (`preview_start`).
2. Screenshot at **1440 / 768 / 375** (`resize_window`). Note: the Browser pane fires no resize events — load each viewport fresh.
3. Compare against this file: direction held? banned patterns absent? hierarchy reads?
4. Iterate 2–3 rounds, then run the `design-review` agent for substantial diffs.

### Measure is a character count, not a pixel width

`--measure-prose` is 34rem because that is ~66 characters **at `--t-prose`**. The same box at `--t-fine` is 87 characters, and at `--measure-index` it is 174. So the measure alone does not protect a line — the size has to match the box.

The rule: **any text a reader has to read in sequence sets at `--t-prose` inside `--measure-prose`.** `--t-fine` is for genuine footnotes — a line or two — and nothing longer. Whole sections had been set the other way round: the emergency strip, and eleven blocks of fee, cancellation and Good Faith Estimate terms on /services, were the smallest type on the site at the longest lines on the site.

---

## 16. What the post-deploy review changed

The `design-review` gate ran against the deployed build on 2026-08-15. Contrast, CLS, overflow, motion budget and the AI-slop catalogue all came back clean and are unchanged. Everything below was found and fixed in that pass; each is written into the section it belongs to above.

| Finding | Resolution |
|---|---|
| Mobile menu had no close control — the panel covered its own hamburger and left no backdrop to tap | Close button in the panel (§10) |
| The signature scroll moment (§11.2) was never implemented; the header was a constant tinted bar | Implemented, with a scrim on the unscrolled state for §15 contrast (§10) |
| `PageHero` layered the `h1` on a photograph on /about, /services and /contact — §9's absolute rule | Rebuilt: plate, hairline seam, title in the ink field below |
| Nav hover and current page were colour changes, not the `scaleX` gold hairline | Hairline, per §10 |
| The header CTA was a hand-rolled second button that filled solid gold on hover | Uses the shared ghost `Button` |
| The FAQ light card over a photograph — §10 says the pattern is deleted — survived, and forced grey folios | Dark ruled index, gold folios; the `light` accordion variant is gone with it |
| /contact's emergency strip ran 174 characters a line and left 911/988 unlinked | Uses the shared `EmergencyBanner` |
| Seven container widths in use against §6's four | Back to four (§6) |
| `.section-padding` still declared and still used by `PageHero` | Deleted |
| Philosophy sat at a third left edge, ran 16ch at 768, and shared rhythm and canvas with the section below it (§7 rule 2) | Stacked at `--measure-display`, rhythm dropped to `close` |
| The hero seam circle crossed two labels below `lg` | `lg` and up only (§8) |
| The sticky mobile bar duplicated the gold field's CTA on screen | Observes the field and stands down (§10) |
| Two footer hairlines were `deep/30` on the deep canvas — invisible | `cream/12` |
| The About chapter break became two 187px slivers at 375 | Stacks below `md` |
| Hit targets from 20px to 40px, including the hamburger and the 911/988 links | All ≥44px (§15) |
| Non-delivery unmounted the form and discarded what the reader had typed | Form stays mounted below the notice |
| `FadeIn.tsx` survived as a dead file §11 said to delete | Deleted |
| `rounded-sm` on the skip link and in `Button`'s base | Removed |

### Second pass

A second `design-review` ran against the fixed build and found what the first pass had listed but not acted on.

| Finding | Resolution |
|---|---|
| **Section paddings compounded, so no boundary rendered a rhythm token.** 11 of 18 gaps measured 152/184/248/288/352 — including a 288px void mid-scroll on the home page, larger than `open` | Top-padding-only model (§7). 44/44 boundaries now land on a token |
| The logo had no `sizes` and shipped a 640px file for a 92px mark — 7× oversampled on every page | `sizes` declared; 29KB → 5KB at 1440, 48KB → 17KB at 375 |
| The About chapter plates still said `50vw` after being changed to stack full-width below `md`, so both rendered *undersized* at 375 | `(max-width: 767px) 100vw, 50vw`, plus `quality={60}` on the two heaviest, wordless images |
| `IntroCard`'s `sizes` used `(max-width: 768px)` where Tailwind's `md` is `min-width: 768px` — the query and the layout disagreed at exactly 768 | `767` |
| Forcing 44px onto the inline 911/988 links broke the sentence ("call 911 , go to") | Reverted; WCAG 2.5.8's inline exemption recorded in §15 |

**Two review findings were wrong and are recorded so they are not "fixed" later:** the honeypot *is* hidden from assistive tech (`aria-hidden` sits on its wrapper, which hides descendants), and the form's status blocks *do* carry `role="status" aria-live="polite"` — they had been probed on the idle form, before either exists.

### Five-second test

The final gate. Look at any page for five seconds and answer:

1. Did anything move or jump? → must be **no**.
2. Does it look prepared in advance? → must be **yes**.
3. Is there an obvious place to stop reading? → must be **yes**.

If any answer is wrong, the page fails regardless of how well it scores on everything above.
