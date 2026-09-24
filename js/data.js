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
 * ARTWORK DATA
 * ------------
 * Field guide:
 *   description    - factual: what it looks like, materials, size, history
 *   analysis       - how the elements of art and principles of design are used
 *   interpretation - the meaning, theme, or mood the artist is communicating
 *   judgement      - your evaluation of the artwork's success or impact
 *
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
    id: "the-foundation",
    title: "The Foundation",
    artist: "Buhay Mendoza", 
    type: "Oil on canvas", 
    locationName: "Life 'n Arts Gallery", 
    year: "2026", 
    description: "This 48 by 36 inch painting features a boy wearing a salakot standing in shallow waters next to a large sea turtle. Behind him, a group of people carry glowing lanterns through the water toward a stone church, set against a split sky transitioning from a bright sunset to night.", 
    analysis: "Mendoza effectively uses a split composition to contrast day and night. The visual weight is anchored by the figures in the foreground, while the vibrant gradient of the sunset creates a strong atmospheric backdrop.", 
    interpretation: "Blending local environmental themes with cultural heritage, the boy's protective gesture over the turtle, combined with the solemn, lantern-lit procession to the church, creates a rich narrative about stewardship, faith, and rural life.", 
    judgement: "The piece successfully evokes a sense of local pride and environmental responsibility. Its vibrant colors and clear narrative make it a compelling cultural artwork.",
    sources: [
      "Life 'n Arts Gallery, Santa Rosa, Laguna",
    ],
    photos: [
      "assets/artworks/thefoundation/IMG_2694.JPG",
      "assets/artworks/thefoundation/IMG_2695.JPG", 
      "assets/artworks/thefoundation/IMG_2699.JPG", 
      "assets/artworks/thefoundation/IMG_2700.JPG"
    ],
    contributor: "Alvin Jan L. Calambro"
  },
  {
    id: "paris-moulin-rouge-intarsia",
    title: "Paris (Moulin Rouge)",
    artist: "Eugie Varona Dela Cruz",
    type: "Photographic Intarsia (Wood Inlay)",
    locationName: "Life 'n Arts Gallery",
    year: "2025",
    description: "This wood inlay artwork depicts a panoramic view of Paris, featuring prominent landmarks such as the Eiffel Tower and a windmill representing the Moulin Rouge. The piece measures 14 x 35 x 2 inches and is composed of various distinct pieces of wood.",
    analysis: "The artist uses the natural tones and grains of the wood to form buildings, a bridge, and architectural details. By meticulously arranging light and dark wood fragments, the composition creates depth and casts natural 'shadows' across the Parisian structures.",
    interpretation: "The photographic intarsia technique translates a bustling, iconic city skyline into an earthy, warm, and highly textural medium, grounding a famous global landmark in organic materials.",
    judgement: "The meticulous craftsmanship and innovative use of natural wood grain make this a masterful and visually captivating display of intarsia.",
    sources: [
      "Life 'n Arts Gallery, Santa Rosa, Laguna",
    ],
    photos: [
      "assets/artworks/parismoulin/IMG_2691.JPG",
      "assets/artworks/parismoulin/IMG_2690.JPG",
      "assets/artworks/parismoulin/IMG_2689.JPG",
      "assets/artworks/parismoulin/IMG_2688.JPG"
    ],
    contributor: "Alvin Jan L. Calambro"
  }
];
