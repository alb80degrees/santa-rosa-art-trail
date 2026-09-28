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
 *   photoAlt    - OPTIONAL array, same length/order as photos. A short
 *                 (under ~125 char) description of what's actually in each
 *                 photo, for screen reader users and anyone whose image
 *                 didn't load. If you skip this field entirely, the site
 *                 falls back to "<title>, <type> by <artist> — photo N of
 *                 total", which is fine but generic. Worth adding real ones
 *                 when you have time — you've usually already written the
 *                 visual details in `description`, so it's mostly copy work.
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
    description: "This oil painting is huge, measuring about 48 by 36 inches. The main focus is a young boy wearing a traditional salakot (hat) and a yellow shirt with blue shorts. He is standing in the water holding a paddle in his right hand, and his left hand is reached out with the palm open, like he is protecting the giant sea turtle next to him or telling someone to stop. In the background, there is a stone church and a group of people walking through the water carrying lanterns. The sky has a bright sunset on the left horizon with yellow and orange colors, but the rest of the sky is dark blue, like night is falling.",
    analysis: "Mendoza uses a lot of contrast in this piece. The bright, warm colors of the sunset on the left make the boy stand out, while the rest of the painting uses cooler, darker blues for the night sky and water. The boy and the turtle are big in the foreground, which balances out the smaller figures in the background. The lighting is dramatic,the sunset lights up the boy's face and shirt, while the background is shadowy. The composition leads your eye from the boy to the church in the back.",
    interpretation: "I think this painting is about protecting nature and tradition. The boy is protecting the turtle, which represents nature, while the people in the back are doing a religious procession. It connects the idea of faith and community with taking care of the environment. The boy looks serious, like he has a big responsibility to protect both the turtle and their heritage.",
    judgement: "I think this artwork is really effective. The colors are vibrant, especially the sunset. The way the boy is posed with his hand out makes it feel like an active scene, not just a portrait. It successfully mixes the local culture (the church, the hat) with an environmental message. It's definitely a standout piece in the gallery.",
    sources: [
      "Life 'n Arts Gallery, Santa Rosa, Laguna"
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
    description: "This piece is a wood inlay artwork that measures 14 by 35 by 2 inches. It shows a wide view of a city skyline, which looks like Paris. You can clearly see the Eiffel Tower right in the middle and a windmill on the right side, which is probably the Moulin Rouge. There are lots of blocky houses clustered on both sides. The whole thing is built out of different pieces of natural wood fitted together. At the very bottom, there are small square blocks of different wood colors lined up, maybe showing the different types of wood the artist used.",
    analysis: "Instead of using paint, the artist uses the natural textures and different shades of wood to build the scene. The main board has a really strong wood grain that acts like the sky or the background. By placing light wood pieces next to dark ones, the artist makes the buildings stand out. The shapes are very geometric and blocky, which gives it a cool, stylized look. The way the wood grain flows in the background adds a lot of texture without making it look messy.",
    interpretation: "The artwork recreates a famous city using a very natural and earthy medium. I think it creates a nice contrast because Paris is known for its big stone buildings, but here it is made entirely out of wood. It feels very warm and rustic. It shows how you can take a busy, modern city and represent it using simple, organic materials.",
    judgement: "This piece is super impressive because of the careful craftsmanship. You can tell it took a lot of patience to cut and fit all those little wooden houses together. The clever use of the wood grain makes it visually striking, and the rich textures make it a very unique way to see the city. It is definitely one of the most unique pieces in the gallery.",
    sources: [
      "Life 'n Arts Gallery, Santa Rosa, Laguna"
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
    description: "This oil painting is 24 by 24 inches and shows a young Filipino guerrilla soldier sitting outside. He has a rural backdrop with a nipa hut and a sign that says 'ARMY NAVY'. The soldier is smiling and holding a rifle in one hand and a steaming metal mug in the other. He has an ammunition bandolier across his chest. Next to him on the ground, there is an open can of SPAM, a military helmet, a small campfire with a boiling pot, and a plate with toast, sliced luncheon meat, and fried eggs.",
    analysis: "Mendoza uses a lot of warm, earthy colors like ochre, khaki brown, and muted greens, which really stand out against the crisp blue sky. The soldier is in the center and sits in a triangle shape, which makes the composition feel very stable. The rifle on the left adds a vertical line to balance it out. He uses shading to make the soldier look 3D, and the proportions are a bit cartoon-like, which gives the character a lot of personality. The fine details on the campfire, the food, and the military gear draw your eye to the bottom half of the canvas.",
    interpretation: "This painting shows a quiet, peaceful moment during World War II, specifically in 1944 when the Philippines was being liberated. Even though it's wartime, the soldier is smiling and eating. I think it's interesting how the artist included American rations like SPAM and army gear next to the native rural surroundings. It reflects how Western products were introduced to Filipino daily life during the war, but it also shows the resilient and optimistic spirit of the Filipino fighters despite the conflict.",
    judgement: "I really like this artwork because it blends a serious historical narrative with a very approachable, almost storybook illustration style. It doesn't just show the scary parts of war; it shows the human side. The balance of lighthearted charm, nostalgic details (like the SPAM), and the tight composition makes it a really effective and culturally meaningful piece of local history.",
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
    description: "Measuring 36 by 24 inches, this oil painting shows a smiling young Filipino girl dressed in traditional clothes. She wears a white ruffled blouse and a bright red and yellow skirt, with red ribbons in her hair. She is acting as a vendor, holding a wooden sign that says 'Carabao's Milk P2'. On the table next to her, there is a basket of glass milk bottles sitting on a pink cloth, along with a large metal milk churn. The background is a rural sunset landscape with the silhouette of a town and palm trees far away.",
    analysis: "The composition is vertical, and the standing girl is the main focus in the foreground. The color scheme is really nice because it contrasts the warm, golden-orange sunset in the sky with the cool, purple silhouettes of the town in the background. Her bright red and yellow clothes also pop out against the scenery. The artist uses soft shading to give form to her face and puffed sleeves. The golden light from the sky highlights the textures of the glass bottles, the fabric folds, and the rustic wooden sign she is holding.",
    interpretation: "This artwork is all about celebrating rural Philippine livelihood, youth enterprise, and traditional farming culture. By showing a young girl with an earnest smile proudly selling carabao's milk for just two pesos, the painting gives us a nostalgic look into past provincial business life. It highlights values like hard work, living a simple life, and how the community supports each other through local livelihoods.",
    judgement: "With its warm, story-like charm and rich cultural details, the painting does a great job of capturing an endearing portrait of Filipino folk heritage. The artist did a great job balancing the warm atmospheric light with the detailed storytelling. It’s a very visually pleasing piece that makes you feel relaxed and nostalgic.",
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
    description: "This 48 by 36-inch oil painting is very surreal. It shows a boy drawn in grayscale (black and white) with a bright red nose, sitting on a stool and sipping from a cup. He is sitting in water that is filled with half-eaten food and random trash. He is wearing a modern-cut Barong Tagalog and a smiling burger hat. Floating around him are weird, whimsical objects like a Rubik's cube, a winged clock, and toys. In the background, two giant hands are gesturing and pointing toward him.",
    analysis: "The painting is very surreal and uses a central framing to make a point about political influence. The artist set the scene in dirty water to symbolize the constant flooding problem in the Philippines. The grayscale boy represents the voters, who look a bit impressionable and stuck. The floating items, the silly burger hat, and the giant pointing hands symbolize the external pressures, distractions, and populist spectacles that try to sway public opinion. The bright red nose adds a theatrical, clown-like element, showing how political campaigns often rely on superficial charm and performance to get attention.",
    interpretation: "I think this piece is about how hard it is to make good decisions when you are under a lot of pressure. The floodwaters represent the recurring national hardships we face. By putting the central figure in the water with all these guiding hands and nostalgic symbols, the artwork shows how voters are often pushed to choose leaders based on family loyalty, traditions, or political dynasties, rather than thinking for themselves. It's a critique of how we are influenced by our families and entrenched political powers.",
    judgement: "This artwork is a bit creepy but it definitely makes you think. It successfully mixes surrealism with sharp political commentary on big issues like flooding and political dynasties. The lighting is clear, the composition is balanced, and the weird details (like the burger hat) make it a very compelling and thought-provoking piece about the complex realities of how we choose our leaders.",
    sources: [
      "Life 'n Arts Gallery, Santa Rosa, Laguna"
    ],
    photos: [
      "assets/artworks/thechoosing/the-choosing-1.jpg",
      "assets/artworks/thechoosing/the-choosing-2.JPG",
      "assets/artworks/thechoosing/the-choosing-3.JPG",
      "assets/artworks/thechoosing/the-choosing-4.JPG"
    ],
    contributor: "Revo Ivan E. Trinidad"
  },
  {
    id: "paris-champs-elysees",
    title: "Paris (Champs-Elysees)",
    artist: "Eugie Varona Dela Cruz",
    type: "Photographic Intarsia (Wood Inlay)",
    locationName: "Life 'n Arts Gallery",
    year: "2025",
    description: "This is another photographic intarsia (wood inlay) piece by Eugie Varona Dela Cruz, measuring 25.75 by 13.5 inches. Just like the other Paris piece, it intricately showcases iconic Parisian landmarks, specifically focusing on the Eiffel Tower and the Arc de Triomphe. The entire image is crafted from varying pieces of wood, using their natural grains and tones to create the picture without any paint.",
    analysis: "Dela Cruz uses a wide variety of wood grains, tones, and textures to build a geometric representation of the city. What's cool is how he uses the natural wood patterns, like the circular tree rings in the background, to create a sense of movement and depth. He uses distinct shades of timber to separate the buildings, making the Arc de Triomphe and the intricate metal structure of the Eiffel Tower stand out clearly from the sky and the ground.",
    interpretation: "This piece bridges traditional woodworking craftsmanship with a modern artistic vision. By rendering a classic European urban landscape entirely through woodworking techniques, the artist highlights the connection between structural engineering and the organic beauty of nature. It shows that you don't always need paint or digital tools to create a highly detailed, modern-looking image; natural materials can do the job beautifully.",
    judgement: "The artwork is amazing because of the intricate woodworking precision combined with a striking visual composition. The clean lines, the clever use of the natural grain patterns, and the super detailed inlay work make it a remarkable piece. It’s a great tribute to famous architectural design and a true display of the artist's patience and skill.",
    sources: [
      "Life 'n Arts Gallery, Santa Rosa, Laguna"
    ],
    photos: [
      "assets/artworks/parischampselysees/paris-champs1.JPG",
      "assets/artworks/parischampselysees/paris-champs2.JPG",
      "assets/artworks/parischampselysees/paris-champs3.JPG",
      "assets/artworks/parischampselysees/paris-champs4.JPG"
    ],
    contributor: "Revo Ivan E. Trinidad"
  }, 
  {
    id: "tumbapreso",
    title: "Tumbapreso",
    artist: "Otep Bañez",
    type: "Mixed Media",
    locationName: "Life 'n Arts Gallery",
    year: "Unknown",
    description: "Measuring 11 by 24 by 10.5 inches, this mixed-media diorama sculpture depicts a lively scene of Filipino children playing the traditional street game tumbang preso. Housed in a clear protective display case on a dark wooden base, the composition features six sculpted young boys dressed in casual shorts and colorful shirts. On the left side, four boys prepare and watch with eager postures; in the center, a boy balances dynamically on one leg after having hurled his slipper; on the right, the designated 'it' (taya) lunges forward with an outstretched arm to tag him, while another boy crouches near the fallen can and scattered slippers.",
    analysis: "Bañez creates a strong sense of freeze-frame kinetic energy through dynamic postures, diagonal lines, and asymmetric grouping. The figures are placed along a horizontal stage, guiding the viewer's eye from the anticipation on the left to the climactic confrontation in the center and right. Contrast is achieved through the varied painted hues of the boys' shirts (blue, orange, red, and yellow) against their warm, earthy skin tones and the muted base. The realistic anatomical tension in the limbs—from bent knees to outstretched arms—lends authenticity and balance to the suspended action.",
    interpretation: "The artwork celebrates Filipino childhood camaraderie, communal street games (Laro ng Lahi), and uninhibited outdoor recreation. By capturing a split-second turning point in tumbang preso, the piece evokes deep nostalgia for a pre-digital era where neighborhood streets served as playgrounds. It speaks to cultural identity, spontaneous teamwork, and the joy of shared cultural traditions passed down across generations.",
    judgement: "This sculpture is exceptionally well-crafted, succeeding through expressive character modeling and convincing physical gestures. The artist captures the chaotic yet coordinated spirit of the game with great warmth and narrative clarity, making it an engaging and culturally resonant highlight of the gallery.",
    sources: [
      "Life 'n Arts Gallery, Santa Rosa, Laguna"
    ],
    photos: [
  "assets/artworks/tumbapreso/1.jpg",
  "assets/artworks/tumbapreso/2.jpg",
  "assets/artworks/tumbapreso/3.jpg",
  "assets/artworks/tumbapreso/4.jpg",
  "assets/artworks/tumbapreso/5.jpg",
    ],
    contributor: "Earl Laurence J. Lucero"
  },
  {
    id: "tinutolaing",
    title: "Tinutó (Laing)",
    artist: "Buhay Mendoza",
    type: "Oil on canvas",
    locationName: "Life 'n Arts Gallery",
    year: "2024",
    description: "Measuring 24 by 18 inches, this vertical oil on canvas painting portrays a young Filipino girl standing in an open field against rolling green hills and a lavender-tinted sky. She wears a traditional light-colored baro't saya blouse, a yellow patterned skirt, and pink water lily blossoms pinned in her dark hair. Cupped gently in both hands is a fresh green banana leaf holding tinutó (laing), while a small, bright yellow-and-brown sparrow with open wings perches close beside her neck and shoulder. The piece is signed and dated 'Buhay '24' near the bottom right.",
    analysis: "Mendoza utilizes a harmonious, warm-to-cool palette dominated by golden ochres, vibrant leafy greens, and soft violet-blue skies. The composition centers on the girl's stylized, expressive facial features, with soft lighting illuminating her rounded cheeks and shoulders. Strong contrast is created between the saturated, rich green folds of the banana leaf and the dark, textured laing resting within it. Curved lines in the girl's arms, the outstretched wings of the sparrow, and the contour of the hills in the background create a calm, flowing visual rhythm.",
    interpretation: "The painting conveys themes of rural abundance, cultural sustenance, and harmony between humankind and nature. Tinutó (taro leaves cooked in coconut milk) symbolizes regional culinary heritage and simple local nourishment. Accompanied by the sparrow and natural floral adornments, the gentle expression of the girl reflects pure innocence, hospitality, and an intimate connection to the land and provincial life.",
    judgement: "Mendoza delivers a charming, illustrative portrait that combines folk sentimentality with precise figurative skill. The juxtaposition of fine culinary and floral details with whimsical character proportions gives the work warmth and appeal, effectively communicating an enduring pride in Filipino agrarian tradition.",
    sources: [
      "Life 'n Arts Gallery, Santa Rosa, Laguna"
    ],
    photos: [
  "assets/artworks/tinutolaing/1.jpg",
  "assets/artworks/tinutolaing/2.jpg",
  "assets/artworks/tinutolaing/3.jpg",
  "assets/artworks/tinutolaing/4.jpg",
    ],
    contributor: "Earl Laurence J. Lucero"
  }
];