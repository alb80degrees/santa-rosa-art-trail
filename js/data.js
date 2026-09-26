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
    description: "Measuring 48 by 36 inches, this oil painting shows a boy wearing a salakot standing in shallow water next to a sea turtle. Behind them, people carry lanterns through the water toward a stone church. The sky is split between a bright sunset on the left and a dark night on the right.",
    analysis: "Mendoza uses a split composition to contrast the warm sunset with the cool night. The boy and turtle anchor the foreground, balancing the lantern procession in the background. Soft shading gives the figures depth, while the sky's colors and the water's reflection create a strong backdrop.",
    interpretation: "The piece connects environmental care with cultural heritage. By placing the boy protecting the turtle next to a religious procession, the artwork highlights the link between faith, rural community life, and nature.",
    judgement: "The artwork successfully merges environmental themes with a cultural story. Its clear lighting, sharp details, and balanced layout make it a strong tribute to local heritage.",
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
    description: "Measuring 14 by 35 by 2 inches, this wood inlay artwork shows a wide view of the Paris skyline. The piece features landmarks like the Eiffel Tower and the Moulin Rouge windmill, built from many pieces of natural cut wood.",
    analysis: "Dela Cruz uses the natural textures, grains, and tones of wood to build the cityscape. By placing light and dark wood pieces next to each other, the artist creates depth and natural-looking shadows without using any paint.",
    interpretation: "The artwork recreates a famous city skyline using a warm, earthy medium. By building Paris out of wood, the piece creates an interesting contrast between man-made buildings and natural materials.",
    judgement: "With its careful craftsmanship and clever use of wood grain, the piece is a visually striking display of wood inlay. Its clear details and rich textures make it a unique rendering of the city.",
    sources: [
      "Life 'n Arts Gallery, Santa Rosa, Laguna",
    ],
    photos: [
      "assets/artworks/parismoulin/IMG_2690.JPG",
      "assets/artworks/parismoulin/IMG_2691.JPG",
      "assets/artworks/parismoulin/IMG_2693.JPG",
      "assets/artworks/parismoulin/IMG_2694.JPG"
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
    interpretation: "It captures a moment of wartime respite and cultural adaptation during World War II, specifically referencing the liberation era of 1944. By combining the soldier's cheerful demeanor with American rations like SPAM and Army-issue gear alongside native rural surroundings, the artwork reflects on the historical introduction of Western commodities into Filipino daily life and the resilient, optimistic spirit of Filipino fighters amidst conflict.",
    judgement: "The artwork successfully blends historical narrative with an engaging, approachable illustrative style. Its balance of lighthearted charm, nostalgic detailing, and tight compositional harmony makes it an effective and culturally evocative portrayal of local wartime history.",
    sources: [
      "Life 'n Arts Gallery, Santa Rosa, Laguna"
    ],
    photos: [
      "assets/artworks/1944/IMG_2718.JPG",
      "assets/artworks/1944/IMG_2717.JPG",
      "assets/artworks/1944/IMG_2719.JPG",
      "assets/artworks/1944/IMG_2721.JPG",
      "assets/artworks/1944/IMG_2722.JPG"
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
      "assets/artworks/angnegosyante/IMG_2711.JPG",
      "assets/artworks/angnegosyante/IMG_2710.JPG",
      "assets/artworks/angnegosyante/IMG_2712.JPG",
      "assets/artworks/angnegosyante/IMG_2714.JPG",
      "assets/artworks/angnegosyante/IMG_2716.JPG"
    ],
    contributor: "Darrel Jed R. Ramos"
  },
  {
    id: "the-choosing",
    title: "The Choosing",
    artist: "Buhay Mendoza",
    type: "Oil on canvas",
    locationName: "Life 'n Arts Gallery",
    year: "Unknown",
    description: "Measuring 48 by 36 inches, this oil painting by Buhay Mendoza shows a monochrome boy with a bright red nose sitting on a stool and sipping from a cup, set amidst surrounding water filled with half-eaten food and other items. He wears a modern-cut Barong Tagalog and a smiling burger hat, while floating whimsical objects like a Rubik's cube, a winged clock, and toys surround him as two hands gesture toward the scene.",
    analysis: "Mendoza uses surrealist imagery and a central framing to critique political influence, setting the scene in the water to symbolize the constant flooding in the country. The grayscale boy anchors the foreground, representing an impressionable electorate, while the various floating items, a smiling burger hat, and directing hands symbolize the external pressures and populist spectacles that sway public opinion. The stark red nose adds a theatrical element, emphasizing how political campaigns often rely on performance and superficial charm to capture attention.",
    interpretation: "The piece connects the vulnerability of decision making with the pervasive pressure of political dynasties and family expectations, all framed against the backdrop of recurring national hardships represented by the surrounding floodwaters. By placing the central figure amidst guiding hands and nostalgic symbols, the artwork highlights how voters are often steered toward choices dictated by familial loyalty, traditional allegiances, and entrenched political power rather than independent thought.",
    judgement: "The artwork successfully merges surrealism with sharp political commentary on systemic issues like flooding and dynastic politics. Its clear lighting, detailed composition, and balanced layout make it a compelling and thought-provoking tribute to the complex realities of political choice and the grip of political dynasties.",
    sources: [
      "Life 'n Arts Gallery, Santa Rosa, Laguna"
    ],
    photos: [
      "assets/artworks/thechoosing/the-choosing-1.jpg",
      "assets/artworks/thechoosing/the-choosing-2.jpg",
      "assets/artworks/thechoosing/the-choosing-3.jpg",
      "assets/artworks/thechoosing/the-choosing-4.jpg"
    ],
    contributor: "Revo Ivan E. Trinidad",
  },
  {
    id: "paris-champs-elysees",
    title: "Paris (Champs-Elysees)",
    artist: "Eugie Varona Dela Cruz",
    type: "Photographic Intarsia (Wood Inlay)",
    locationName: "Life 'n Arts Gallery",
    year: "2025",
    description: "Measuring 25.75 by 13.5 inches, this photographic intarsia (wood inlay) artwork by Eugie Varona Dela Cruz intricately showcases iconic Parisian landmarks like the Eiffel Tower and the Arc de Triomphe crafted from varying wood grains and tones.",
    analysis: "Eugie Varona Dela Cruz utilizes diverse wood grains, tones, and textures to construct a geometric representation of Paris. The natural wood patterns, featuring circular rings in the background, create a sense of movement and depth, while distinct shades of timber define the buildings, the Arc de Triomphe, and the intricate structure of the Eiffel Tower.",
    interpretation: "The piece bridges traditional craftsmanship with modern artistic vision by rendering a classic European urban landscape entirely through woodworking techniques. By substituting paint with natural materials, the artwork highlights the connection between structural engineering, architectural landmarks, and the organic beauty of the medium.",
    judgement: "The artwork successfully combines intricate woodworking precision with striking visual composition. Its clean lines, clever use of natural grain patterns, and detailed inlay work make it a remarkable and enduring tribute to famous architectural design.",
    sources: [
      "Life 'n Arts Gallery, Santa Rosa, Laguna"
    ],
    photos: [
      "assets/artworks/parischampselysees/paris-champs1.JPG",
      "assets/artworks/parischampselysees/paris-champs2.JPG",
      "assets/artworks/parischampselysees/paris-champs3.JPG",
      "assets/artworks/parischampselysees/paris-champs4.JPG"
    ],
    contributor: "Revo Ivan E. Trinidad",
  },
];
