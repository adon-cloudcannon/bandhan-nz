---
title: Product Grid
description: 'Grid of products with photo, price and a one-click email enquiry link — for shops that take orders by conversation rather than checkout.'
overview: 'Use Product Grid for a catalogue that ends in a message rather than a cart. Products live once in `src/data/products.json`; a section chooses which of them to show — a whole collection, the featured ones, or a hand-picked list of ids — so a price only ever needs changing in one place. Each card pairs a square photo with a name, price, one line of description and an optional corner badge, and the enquiry link opens the visitor''s mail app pre-addressed with the product name in the subject. A product with no photo yet renders a "photo coming soon" placeholder rather than an empty frame. Set `limit` with `randomize` on to show a rotating handful — the whole pool ships in the HTML with all but the chosen few marked `hidden`, and a small inline script reshuffles on each load, so visitors without JavaScript still see a valid selection. The inline `products` array remains as an escape hatch for one-offs that do not belong in the catalogue.'
examples: []
---
