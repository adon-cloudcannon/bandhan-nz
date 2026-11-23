# bandhan

The website for [Bandhan](https://bandhan.co.nz) — handmade macrame and chunky knit pieces made in Aotearoa New Zealand.

Built on the CloudCannon [Astro Component Starter](https://github.com/CloudCannon/astro-component-starter); the starter's own documentation follows below.

## Where things live

| What                                                   | Where                                                    |
| ------------------------------------------------------ | -------------------------------------------------------- |
| Page content (home, shop, gallery, our story, contact) | `src/content/pages/*.md`                                 |
| **The product catalogue**                              | `src/data/products.json`                                 |
| Header, footer and SEO settings                        | `src/data/*.json`                                        |
| Product photos                                         | `src/assets/images/bandhan/products/`                    |
| Logo mark (light and dark)                             | `src/assets/images/bandhan/`                             |
| Brand colours                                          | `src/styles/variables/_colors.css`, `src/styles/themes/` |
| Comfortaa font registration                            | `site-fonts.mjs`                                         |
| House styles on top of the starter                     | `src/styles/_bandhan.css`                                |

Two page sections were built for this site and follow the starter's three-file pattern, so they are editable in CloudCannon like everything else:

- `src/components/page-sections/commerce/product-grid/` — product cards with prices and a one-click email enquiry link
- `src/components/page-sections/media/gallery-mosaic/` — photo mosaic with two-column feature tiles
- `src/components/page-sections/media/product-carousel/` — big photo view with a thumbnail strip

All three read from the same catalogue (below), so no page ever restates a product.

## The product catalogue

Every product lives exactly once, in `src/data/products.json`. Page sections choose which products to show rather than restating them, so a price, a photo or a line of alt text is only ever edited in one place.

Each product holds a **list** of photos:

```json
"images": [
  { "source": "/src/assets/images/bandhan/products/blanket-taupe-folded.jpg", "alt": "…" },
  { "source": "/src/assets/images/bandhan/products/blanket-grey-on-bed.jpg", "alt": "…" }
]
```

The first photo is what the product card shows, and where a product has several the card gets a small photo strip — arrows, dots, and swipe on touch. All of the photos also feed the gallery, which is how one blanket in six colourways fills a gallery without six separate products.

The strip is a CSS scroll-snap track, so swiping and keyboard scrolling work with no JavaScript; the arrows ship hidden and are only revealed once the script wires them up. Turn the strip off for a section with `showPhotoGallery: false` and cards show the first photo only.

Every section that shows products — `product-grid`, `gallery-mosaic` and `product-carousel` — selects from the catalogue the same four ways, in this order of precedence:

| Setting                     | Shows                                                                      |
| --------------------------- | -------------------------------------------------------------------------- |
| `products` (array)          | One-off products written inline. Escape hatch; overrides everything below. |
| `productIds` (array of ids) | Exactly those products, in the order listed.                               |
| `collectionId`              | Every product whose `collection` matches, in catalogue order.              |
| `featuredOnly`              | Every product with `featured: true`.                                       |

(For the photo sections, `products` and `productIds` behave the same way; `images` is the inline escape hatch on `gallery-mosaic`.)

Then:

- **`limit`** caps how many products or tiles are shown.
- **`randomize`** (product grid) makes it a rotating selection — the home page's favourites are `featuredOnly` + `limit: 3` + `randomize`. Rotation renders the whole pool and marks all but the chosen few `hidden`, so a visitor without JavaScript still sees a valid selection and there is no layout shift.
- **`perProduct`** (photo sections) caps photos per product. Photos are dealt out one product at a time, so a product with six photos does not clump — the extras land after every other product has had a turn.
- **`featureEvery`** (mosaic) gives every nth tile the big two-by-two span; `5` puts a large tile first, sixth, eleventh.

Array order in `products.json` is display order — drag to reorder in CloudCannon. A product with an empty `images` list renders a "photo coming soon" placeholder instead of an empty frame.

Adding or renaming a collection means updating `_select_data.productCollections` in `cloudcannon.config.yml` so it appears in the editor's dropdown (and `_select_data.productIds` if you want the new product pickable by id).

## Seasonal theme

The site is currently wearing its **christmas** colours: mulled red and deep pine, antique gold for the metallic touches, and candy-cane stripes as band edges. The year-round rose brand is untouched underneath.

Heroes open each page in red, calls to action close it in pine, and the alternating bands between them run parchment and peppermint.

### Turning christmas off

Comment out the three festive imports at the bottom of `src/styles/_theme.css`:

```css
/* @import url("themes/festive/_palette.css"); */
/* @import url("themes/festive/_light.css"); */
/* @import url("themes/festive/_dark.css"); */
```

That is the whole colour revert. `themes/_light.css` and `themes/_dark.css` still hold the original rose values and were never edited.

Then put the logo back to the rose mark in `src/data/mainNav.json` and `src/data/footer.json`:

```json
"logoSource": "/src/assets/images/bandhan/bandhan-mark.png"
```

`logoAlternateSource` (the cream outline mark) is unchanged and works in either season.

### Dark mode

Dark mode is currently **off**: `"themeToggle": false` in `src/data/mainNav.json`. That one flag removes both the toggle button and the script that sets the theme, so the page stays on the light theme `BaseLayout` declares. Set it back to `true` to bring dark mode back; `themes/_dark.css` and `themes/festive/_dark.css` are both still in place and working.

### How it works

The festive files only redefine CSS custom properties, so no component or page knows the season exists:

| File                          | What it sets                                     |
| ----------------------------- | ------------------------------------------------ |
| `themes/festive/_palette.css` | Raw ramps: wine, forest, gold, parchment, bark   |
| `themes/festive/_light.css`   | Light theme tokens, plus the deep band treatment |
| `themes/festive/_dark.css`    | Dark theme tokens                                |

Two details worth knowing if you write another season:

- **Deep bands.** The accent bands and the footer are deep red and pine with parchment type on them, done by redefining the tokens on the band element itself so everything inside follows. Those rules also re-declare `color`, because `color` inherits as an already-resolved value and text that merely inherits from `body` would otherwise stay dark. They also override `--color-bg-surface` and `--color-bg-muted` with translucent washes, since button hovers read those and a solid light hover on a dark band leaves pale text on pale mint.
- **Overlay tokens.** Anything sitting on a photograph (product badges, the photo-strip arrows and dots, the gallery caption scrim) reads from `--color-badge-*`, `--color-control-*`, `--color-on-scrim` and `--color-scrim-rgb` rather than raw palette values, so a season swap reaches them too.
- **Stripes only on band edges.** `--peppermint-stripe` is a `repeating-linear-gradient` applied to `::before` and `::after` on the deep bands, and to the divider rule. The header and footer deliberately have none: a stripe there would butt against the neighbouring band's stripe, and because each element phases its own diagonal from its own box, the two rows meet at a visible jog rather than running through.

The journal (`/blog/`) is wired up but empty, and is not linked from the navigation. Add an `.mdx` file to `src/content/blog/` to start it.

---

# Astro Component Starter

A starter template with 40+ Astro components, each built for visual editing in [CloudCannon](https://cloudcannon.com/). You clone it, you own it. Every component is your source code to modify, extend, or delete.

All the source code and content is yours, it lives in your repository and you decide when (or if) to pull in future improvements from the core repo.

The design is intentionally unbranded so it can morph into any brand you want. Update CSS variables and the entire site shifts to match your colors, fonts, and identity. Components are built on web fundamentals: vanilla CSS, semantic HTML, and a sprinkling of vanilla JS only when something can't be done with CSS alone. Performance and accessibility are baked in from the start.

## Quick Start

```bash
npx create-astro-component-starter my-site-name
cd my-site-name
npm run dev
```

Your site is now running at `http://localhost:4321`.

This command scaffolds the latest starter into a local project folder, sets the starter repo as `upstream`, and installs dependencies automatically.

**Make your first change:** Open `src/content/pages/index.md`, change the hero heading, and watch it update in your browser.

## What You'll See

- **Your site** at [localhost:4321](http://localhost:4321), a fully working demo with pages, blog, and navigation
- **Component docs** at [localhost:4321/component-docs/](http://localhost:4321/component-docs/), documentation, examples, and a visual builder for every component

## The Three-File Pattern

Every component in this starter ships with three files. This is what makes the system work: developers build components, editors visually manage content.

```
src/components/.../button/
├── Button.astro                          # The component
├── button.cloudcannon.inputs.yml         # What editors see and can change
└── button.cloudcannon.structure-value.yml # Defaults and picker metadata
```

## Key Directories

```
src/
├── components/          # All 40+ components (yours to edit)
│   ├── building-blocks/ # Core UI: buttons, headings, forms, layout wrappers
│   ├── page-sections/   # Full-width sections: heroes, features, CTAs
│   └── navigation/      # Header, footer, mobile nav
├── content/             # Your pages and blog posts (Markdown/MDX)
├── styles/              # Design tokens, themes, base styles
│   ├── variables/       # Colors, fonts, spacing, widths
│   └── themes/          # Light and dark theme definitions
└── component-docs/   # Built-in docs (can be excluded from production builds)
```

## Dev and Build Commands

| Command                      | Description                                       |
| ---------------------------- | ------------------------------------------------- |
| `npm run dev`                | Start the development server                      |
| `npm run build`              | Build for production (component docs excluded)    |
| `npm run build:with-library` | Build for production with component docs included |

## Prerequisites

- Node.js >= 24.0.0

## Updating Dependencies

When adding, removing, or updating packages (on macOS especially), use:

```bash
npm run deps:sync
```

This regenerates `package-lock.json` with resolutions for all target platforms (Linux, Windows, macOS) so CI doesn't break. Plain `npm install` on macOS silently strips Linux-only peer dependencies out of the lockfile, which causes `npm ci` to fail on GitHub Actions.

You can verify the lockfile is CI-ready at any time with:

```bash
npm run deps:check
```

## Learn More

Head to the [component docs](http://localhost:4321/component-docs/) in your dev server for a guided tour, examples for every component, and a visual component builder.

## License

MIT
