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
  },
  {
    id: "1944",
  title: "1944",
  artist: "Buhay Mendoza",
  type: "Oil on canvas",
  locationName: "Life 'n Arts Gallery",
  year: "2026",
  description: "Measuring 24 by 24 inches, this oil painting depicts a young Filipino guerrilla soldier sitting outdoors in front of a rural backdrop featuring a nipa hut and an 'ARMY NAVY' sign. The smiling soldier holds a rifle in one hand and a steaming metal mug in the other, wearing an ammunition bandolier across his chest. Beside him sit an open can of SPAM, a military helmet, a small campfire boiling a pot, and a plate served with toast, sliced luncheon meat, and fried eggs.",
  analysis: "Mendoza utilizes a warm, earthy color palette dominated by ochres, khaki browns, and muted greens, contrasted against a crisp blue sky. The central figure anchors the composition in a triangular posture, balanced by the vertical line of the upright rifle on the left. Soft volumetric shading and illustrative, caricature-like proportions lend depth and character to the subject, while fine detail work on the campfire, food, and military gear creates focal interest throughout the lower half of the canvas.",
  interpretation: "The piece captures a moment of wartime respite and cultural adaptation during World War II, specifically referencing the liberation era of 1944. By combining the soldier's cheerful demeanor with American rations like SPAM and Army-issue gear alongside native rural surroundings, the artwork reflects on the historical introduction of Western commodities into Filipino daily life and the resilient, optimistic spirit of Filipino fighters amidst conflict.",
  judgement: "The artwork successfully blends historical narrative with an engaging, approachable illustrative style. Its balance of lighthearted charm, nostalgic detailing, and tight compositional harmony makes it an effective and culturally evocative portrayal of local wartime history.",
  sources: [
    "Life 'n Arts Gallery, Santa Rosa, Laguna"
  ],
  photos: [
    "assets/artworks/1944/IMG_2717.jpg",
    "assets/artworks/1944/IMG_2718.jpg",
    "assets/artworks/1944/IMG_2719.jpg",
    "assets/artworks/1944/IMG_2721.jpg",
    "assets/artworks/1944/IMG_2722.jpg"
  ],
  contributor: "Darrel Jed R. Ramos"
  },
  {
    id: "ang-negosyante",
  title: "Ang Negosyante",
  artist: "Buhay Mendoza",
  type: "Oil on canvas",
  locationName: "Life 'n Arts Gallery",
  year: "2026",
  description: "Measuring 36 by 24 inches, this oil painting portrays a smiling young Filipino girl dressed in traditional attire consisting of a white ruffled blouse and a vibrant red and yellow skirt with red hair ribbons. She is depicted as a vendor holding a wooden sign marked 'Carabao's Milk P2'. Beside her on a table sits a basket of glass milk bottles resting on a pink cloth, accompanied by a large metal milk churn, all set against a rural sunset landscape with a silhouette of a town and palm trees in the distance.",
  analysis: "Mendoza utilizes a vertical composition where the standing central figure dominates the foreground. The color scheme contrasts warm golden-orange sunset tones in the sky with cool purple atmospheric silhouettes in the background, complemented by bright primaries in the clothing and fabric. Soft volumetric rendering gives form to the subject's face and puffed sleeves, while clear directional lighting from the golden sky highlights the textures of the glass bottles, fabric folds, and rustic wooden sign.",
  interpretation: "The artwork celebrates rural Philippine livelihood, youth enterprise, and traditional agrarian culture. By portraying a young girl with an earnest smile proudly selling carabao's milk for two pesos, the painting evokes a nostalgic and romanticized glimpse into past provincial commerce, underscoring values of industriousness, simplicity, and community livelihood.",
  judgement: "With its warm narrative charm, approachable figurative style, and rich cultural resonance, the painting succeeds in capturing an endearing portrait of Filipino folk heritage. The skillful balance between warm atmospheric light and detailed storytelling makes it a compelling and visually pleasing cultural piece.",
  sources: [
    "Life 'n Arts Gallery, Santa Rosa, Laguna"
  ],
  photos: [
    "assets/artworks/angnegosyante/IMG_2710.jpg",
    "assets/artworks/angnegosyante/IMG_2711.jpg",
    "assets/artworks/angnegosyante/IMG_2712.jpg",
    "assets/artworks/angnegosyante/IMG_2714.jpg",
    "assets/artworks/angnegosyante/IMG_2716.jpg"
  ],
  contributor: "Darrel Jed R. Ramos"
  },
];
