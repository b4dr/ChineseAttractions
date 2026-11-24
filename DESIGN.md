# Design System — Chinese Attractions

Direction: **"Rice Paper" editorial** — a travel magazine, not a casino. Warm paper ground,
ink typography, jade as the single action color, gold sparingly for accents (ratings, seals).

## Tokens

| Token | Usage |
|---|---|
| `paper-50..900` | Page ground (`#faf6ee`), warm cream surfaces |
| `ink-50..950` | Text — near-black warm ink (`#1c1917`) |
| `jade-50..900` | Actions, links, icons (`chinese`/`primary` scales are aliased to jade) |
| `gold-*` | Ratings, stat numbers, small accents only — never backgrounds |

## Typography

- **Playfair Display** — all headings (`--font-playfair`), tight `letter-spacing: -0.015em`
- **Lora** — body copy (`--font-body`), editorial serif
- `heading-xl` / `heading-lg` component classes in globals.css

## Rules

- **Real photos only** — every hero and every card uses `IMAGES[key]` / `pageImg(slug)` from
  `lib/images.ts` (Wikimedia Commons 1600–1920px + a few verified Unsplash). Never invent
  image URLs; verify visually before adding new keys.
- Photo heroes: `linear-gradient(to top, rgba(12,10,9,0.78), rgba(12,10,9,0.38), rgba(12,10,9,0.30)), url(...)`
  with white/jade-300 text. Light text only on darkened photo or ink surfaces.
- `.photo-card` — `cover` + `center 60%` position (biases crops toward subjects, not sky)
  + bottom ink gradient via `::after`. Content anchored at bottom.
- Buttons: jade fill primary, ink/outline secondary, white-on-photo tertiary.
- Cards: white or paper, `border border-paper-200`, no rainbow gradients, no side-tab
  `border-l-4` accents (use `border-l-2` max on callouts).
- Honest copy: no invented stats (no "1M+ travelers"), no fake view counts, no emoji
  placeholders (📷) — use a real photo or nothing.

## Anti-patterns (from audit)

- Pastel rainbow card families (each card a different pastel gradient) — banned
- Emoji as icons or heading decorations — banned
- Three competing brand colors on one page — one action color: jade
