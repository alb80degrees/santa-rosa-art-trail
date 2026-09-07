# How to add your artworks

You don't need to write any layout code. You're doing two things: dropping in photos, and filling in one object in `js/data.js`. Follow this in order.

## 1. Get the project

If you already cloned it once, skip to step 2.

```bash
git clone https://github.com/<org-or-username>/santa-rosa-art-trail.git
cd santa-rosa-art-trail
```

## 2. Make your branch

One branch per person (not per artwork) is fine since you're only editing one file plus your own photo folders.

```bash
git checkout main
git pull
git checkout -b add/<yourname>-artworks
```

Example: `git checkout -b add/franz-artworks`

## 3. Add your photos

For each artwork, make a folder under `assets/artworks/` named after your artwork's `id` (lowercase, hyphens, no spaces):

```
assets/artworks/balite-tree-mural/1.jpg
assets/artworks/balite-tree-mural/2.jpg
assets/artworks/balite-tree-mural/3.jpg
```

Use 3–5 photos. **They must be your own photographs** — that's a requirement of the assignment, not just this template. Keep file sizes reasonable (a phone photo resized to ~1600px wide is plenty; you don't need to compress manually, but avoid multi-MB raw camera files).

## 4. Add your entry to `js/data.js`

Open `js/data.js`. Copy this block, paste it inside the `ARTWORKS = [ ... ]` array (add a comma after the previous entry), and fill it in:

```js
{
  id: "balite-tree-mural",
  title: "Balite Tree Mural",
  artist: "Unknown local artist",
  type: "Mural",
  locationName: "Left wall, second bay of the hall",
  year: "2019",
  description: "Factual: what it looks like, size, materials, how long it's been there.",
  analysis: "Your own interpretation: what it means, artistic features, cultural significance, relevance to the community. This has to be in your own words.",
  sources: [
    "Interview with the curator/caretaker, September 2026",
    "https://example.com/source-used",
  ],
  photos: [
    "assets/artworks/balite-tree-mural/1.jpg",
    "assets/artworks/balite-tree-mural/2.jpg",
    "assets/artworks/balite-tree-mural/3.jpg",
  ],
  contributor: "Your Name",
},
```

**No coordinates needed.** The homepage route is generated automatically from the *order* of entries in the array — whichever artwork object comes first becomes stop 1, and so on. So place your two entries where they actually fall in the walkthrough sequence, not just at the bottom of the file. If you're not sure of the exact order yet, check with the compiler before you push.

Do this twice (once per artwork you're assigned).

## 5. Preview it

Open `index.html` in your browser. Your stop should appear on the route with the right number badge. Click it and check that your photos, text, and sources all show up correctly on the detail page.

## 6. Commit and push

```bash
git add .
git commit -m "Add [artwork name 1] and [artwork name 2]"
git push -u origin add/<yourname>-artworks
```

## 7. Open a pull request

On GitHub, open a PR from your branch into `main`. Tag the compiler for review. Once approved and merged, your artworks are live.

## Rules of thumb

- Don't edit `css/style.css`, `js/main.js`, `js/detail.js`, or the `.html` files — that's the compiler's job, and editing them is the most likely way to cause a merge conflict.
- Don't rename or delete other people's folders/entries.
- If two people accidentally use the same `id`, whoever merges second will get a conflict — just rename yours to be more specific (e.g. add the barangay name).
