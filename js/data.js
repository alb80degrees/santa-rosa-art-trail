/**
 * ARTWORK DATA
 * ------------
 * Every pin on the map and every detail page is generated from this one file.
 * To add your artworks: copy one object below, fill it in, add it to the
 * ARTWORKS array. Do not touch any other file.
 *
 * Field guide:
 *   id          - unique, lowercase, no spaces. e.g. "balite-tree-mural"
 *   title       - name of the artwork/artform
 *   artist      - creator's name, or "Unknown" / "Community-made"
 *   type        - e.g. "Mural", "Sculpture", "Relief", "Installation"
 *   locationName- where it sits within the venue, e.g. "Left wall, near the entrance"
 *   year        - year made, or "Unknown"
 *   description - factual: what it looks like, materials, size, history (2-4 sentences)
 *   analysis    - YOUR personal take: meaning, artistic features, cultural
 *                 significance, relevance to the community (this must be your
 *                 own hand-typed interpretation, not copied from anywhere)
 *   sources     - array of strings: websites, books, interviews used
 *   photos      - array of 3-5 image paths. Put your images in
 *                 assets/artworks/<id>/ and list them here in the order
 *                 you want them to appear.
 *   contributor - your name, so we know who to credit / ask questions to
 *
 * IMPORTANT: the homepage route is generated automatically from the ORDER
 * of this array — no coordinates needed. Whatever order you place your
 * entries in is the order stops appear on the walkthrough, so add your
 * artworks in the position they were actually encountered during the visit.
 */

const ARTWORKS = [
  {
    id: "sample-church-facade",
    title: "Sample Entry — Sta. Rosa de Lima Parish Facade Relief",
    artist: "Unknown",
    type: "Architectural relief / Religious art",
    locationName: "Near the entrance, right-hand wall",
    year: "19th century (restored)",
    description:
      "This is a placeholder entry showing the expected format. Replace the text in every field, add 3-5 of your own photographs to assets/artworks/sample-church-facade/, and rename the folder and id to match your artwork.",
    analysis:
      "Write your own interpretation here: what does the piece communicate, what artistic techniques or materials stand out, and why does it matter to the people of Santa Rosa? This section should read as your voice, not a textbook summary.",
    sources: [
      "Example: Municipality of Santa Rosa Tourism Office, official brochure",
      "Example: Interview with parish caretaker, August 2026",
    ],
    photos: [
      "assets/artworks/sample-church-facade/1.jpg",
      "assets/artworks/sample-church-facade/2.jpg",
      "assets/artworks/sample-church-facade/3.jpg",
    ],
    contributor: "Template (delete this entry once real entries are in)",
  },
    {
    id: "sample-church-facade",
    title: "Sample Entry — Sta. Rosa de Lima Parish Facade Relief",
    artist: "Unknown",
    type: "Architectural relief / Religious art",
    locationName: "Near the entrance, right-hand wall",
    year: "19th century (restored)",
    description:
      "This is a placeholder entry showing the expected format. Replace the text in every field, add 3-5 of your own photographs to assets/artworks/sample-church-facade/, and rename the folder and id to match your artwork.",
    analysis:
      "Write your own interpretation here: what does the piece communicate, what artistic techniques or materials stand out, and why does it matter to the people of Santa Rosa? This section should read as your voice, not a textbook summary.",
    sources: [
      "Example: Municipality of Santa Rosa Tourism Office, official brochure",
      "Example: Interview with parish caretaker, August 2026",
    ],
    photos: [
      "assets/artworks/sample-church-facade/1.jpg",
      "assets/artworks/sample-church-facade/2.jpg",
      "assets/artworks/sample-church-facade/3.jpg",
    ],
    contributor: "Template (delete this entry once real entries are in)",
  },
];
