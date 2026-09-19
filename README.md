# Santa Rosa Art Trail

A blogsite documenting at least 10 artworks/artforms encountered in one walkthrough — presented as an interactive route you click into, rather than a scrolling list.

**Live idea:** the homepage is an abstract winding path down the page. Each artwork is a numbered stop along it, in the order the group actually encountered them. Clicking a stop takes you into a full write-up with photos, description, personal analysis, and sources.

## How it's built

Plain HTML/CSS/JS — no build step, no framework, no `npm install`. Everyone can open `index.html` directly in a browser and see the whole site. This was chosen on purpose so the team can collaborate without git conflicts: **all content lives in one file, [`js/data.js`](js/data.js)**, and nobody needs to touch the layout code to add an artwork.

```
santa-rosa-art-trail/
├── index.html          <- homepage (the map)
├── artwork.html         <- detail page template (shared by every artwork)
├── css/style.css        <- all styling — don't need to touch this
├── js/
│   ├── data.js           <- YOUR ARTWORK ENTRIES GO HERE
│   ├── route.js          <- homepage route logic (auto-lays out stops)
│   └── detail.js         <- detail page logic
└── assets/artworks/
    └── <your-artwork-id>/   <- your own photos go here
```

## Running it locally

Just open `index.html` in a browser (double-click it, or right-click → Open With). No server needed.

## How to add an artwork

See [`CONTRIBUTING.md`](CONTRIBUTING.md) — it's the only file you need to read.

## Roles

- **Compiler / maintainer:** reviews and merges everyone's pull requests, keeps `main` deployable, handles the design system.
- **Contributors (5):** 2 artworks each, following `CONTRIBUTING.md`.

## Deployment

Once merged to `main`, this is deployed via **GitHub Pages** (Settings → Pages → deploy from `main` branch, root folder). No further setup needed since there's no build step.
