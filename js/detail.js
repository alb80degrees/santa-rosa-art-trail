const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const art = ARTWORKS.find((a) => a.id === id);

const root = document.getElementById("detail-root");

if (!art) {
  root.innerHTML = `
    <div class="content-col" style="grid-column: 1 / -1; padding-top:64px;">
      <a class="back-link" href="index.html">&larr; Back to the map</a>
      <p>We couldn't find that artwork. It may have been renamed or removed from data.js.</p>
    </div>
  `;
} else {
  const photos = art.photos && art.photos.length ? art.photos : [];

  // Added the 'fade-in-on-load' class to both columns for a smooth entrance
  root.innerHTML = `
    <div class="gallery-col fade-in-on-load">
      <div class="gallery">
        <div class="gallery__viewport">
          
          <!-- NEW: The Enlarge Button -->
          <button class="gallery__enlarge glass" id="enlargeBtn" aria-label="View full screen">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
          </button>

          <div class="gallery__track" id="track">
            ${photos
              .map((src, i) => {
                const alt =
                  art.photoAlt && art.photoAlt[i]
                    ? art.photoAlt[i]
                    : `${art.title}, ${art.type} by${art.artist} — photo ${i + 1} of${photos.length}`;
                return `<img class="gallery__slide" src="${src}" alt="${alt.replace(/"/g, "&quot;")}" loading="${i === 0 ? "eager" : "lazy"}">`;
              })
              .join("")}
          </div>
          ${
            photos.length > 1
              ? `
          <button class="gallery__zone gallery__zone--prev" id="zonePrev" aria-label="Previous photo"></button>
          <button class="gallery__zone gallery__zone--next" id="zoneNext" aria-label="Next photo"></button>`
              : ""
          }
        </div>
        
        ${
          photos.length > 1
            ? `
        <div class="gallery__nav-bar">
          <button class="gallery__arrow gallery__arrow--prev glass" id="prevBtn" aria-label="Previous photo">&larr;</button>
          <div class="gallery__controls">
            ${photos
              .map(
                (_, i) =>
                  `<button class="gallery__dot ${i === 0 ? "active" : ""}" data-index="${i}" aria-label="Go to photo ${i + 1}"></button>`
              )
              .join("")}
          </div>
          <button class="gallery__arrow gallery__arrow--next glass" id="nextBtn" aria-label="Next photo">&rarr;</button>
        </div>`
            : ""
        }
      </div>
    </div>
    <div class="content-col fade-in-on-load" style="animation-delay: 0.1s;">
      <a class="back-link" href="index.html">&larr; Back to the map</a>

      <p class="detail-type">${art.type}</p>
      <h1 class="detail-title">${art.title}</h1>

      <div class="meta-row">
        <span class="meta-chip glass"><strong>Artist:</strong> ${art.artist}</span>
        <span class="meta-chip glass"><strong>Location:</strong> ${art.locationName}</span>
        <span class="meta-chip glass"><strong>Year:</strong> ${art.year}</span>
      </div>

      <section class="detail-section text-blurred">
        <h2>Description</h2>
        <p>${art.description}</p>
      </section>

      <section class="detail-section text-blurred">
        <h2>Analysis</h2>
        <p>${art.analysis}</p>
      </section>
      
      <section class="detail-section text-blurred">
        <h2>Interpretation</h2>
        <p>${art.interpretation}</p>
      </section>
      
      <section class="detail-section text-blurred">
        <h2>Judgement</h2>
        <p>${art.judgement}</p>
      </section>

      <section class="detail-section text-blurred">
        <h2>Sources</h2>
        <ul class="sources-list">
          ${art.sources.map((s) => `<li>${s}</li>`).join("")}
        </ul>
      </section>

      <p class="contributor-tag">Documented by ${art.contributor}</p>
    </div>
    
    <div class="scroll-hint" id="scrollHint">Scroll for more &darr;</div>
  `; 

  // --- NEW: Inject the Lightbox Modal ---
  if (!document.getElementById("lightboxModal")) {
    const lightboxHTML = `
      <div class="lightbox-modal" id="lightboxModal">
        <button class="lightbox-modal__close" id="lightboxClose" aria-label="Close fullscreen">&times;</button>
        <img class="lightbox-modal__img" id="lightboxImg" src="" alt="Enlarged artwork">
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
  }

  // --- Hide the scroll hint when the user starts scrolling ---
  const scrollHint = document.getElementById("scrollHint");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      scrollHint.classList.add("hidden");
    } else {
      scrollHint.classList.remove("hidden");
    }
  });

  // --- Smooth Scroll Observer for Text Sections ---
  const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("text-blurred");
      }
    });
  }, {
    rootMargin: "0px 0px -10% 0px", 
    threshold: 0.1
  });

  document.querySelectorAll(".detail-section").forEach(section => {
    textObserver.observe(section);
  });

  // --- Shared Index Variable (Used by both Gallery and Lightbox) ---
  let index = 0; 
  
  // --- Gallery interactivity ---
  if (photos.length > 1) {
    const track = document.getElementById("track");
    const dots = [...document.querySelectorAll(".gallery__dot")];

    function renderGallery() {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle("active", i === index));
    }

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        index = (index - 1 + photos.length) % photos.length;
        renderGallery();
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        index = (index + 1) % photos.length;
        renderGallery();
      });
    }
    
    dots.forEach((dot) =>
      dot.addEventListener("click", () => {
        index = Number(dot.dataset.index);
        renderGallery();
      })
    );

    // --- Click zones on the photo itself (left half = prev, right half = next) ---
    const zonePrev = document.getElementById("zonePrev");
    const zoneNext = document.getElementById("zoneNext");

    if (zonePrev) {
      zonePrev.addEventListener("click", () => {
        index = (index - 1 + photos.length) % photos.length;
        renderGallery();
      });
    }
    if (zoneNext) {
      zoneNext.addEventListener("click", () => {
        index = (index + 1) % photos.length;
        renderGallery();
      });
    }

    // --- Keyboard Navigation for Gallery ---
    document.addEventListener("keydown", (e) => {
      // Don't slide the gallery if the lightbox is currently open
      if (document.getElementById("lightboxModal").classList.contains("active")) return;
      
      if (e.key === "ArrowLeft") {
        index = (index - 1 + photos.length) % photos.length;
        renderGallery();
      } else if (e.key === "ArrowRight") {
        index = (index + 1) % photos.length;
        renderGallery();
      }
    });
  }

  // --- NEW: Lightbox Modal Logic ---
  const enlargeBtn = document.getElementById("enlargeBtn");
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");

  if (enlargeBtn && lightboxModal && lightboxImg) {
    enlargeBtn.addEventListener("click", (e) => {
      e.stopPropagation(); 
      // Grab the source of the currently active photo based on the index
      lightboxImg.src = photos[index]; 
      lightboxModal.classList.add("active");
    });
  }

  if (lightboxModal && lightboxClose) {
    // Close on X click
    lightboxClose.addEventListener("click", () => lightboxModal.classList.remove("active"));
    
    // Close when clicking the blurred background
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) lightboxModal.classList.remove("active");
    });
    
    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") lightboxModal.classList.remove("active");
    });
  }

  // --- Smooth Page Transition for Back Link ---
  const backLink = document.querySelector(".back-link");
  if (backLink) {
    backLink.addEventListener("click", (e) => {
      e.preventDefault();
      
      let veil = document.getElementById("veil");
      if (!veil) {
        veil = document.createElement("div");
        veil.id = "veil";
        veil.className = "veil";
        document.body.appendChild(veil);
      }
      
      requestAnimationFrame(() => {
        veil.classList.add("active");
      });
      
      setTimeout(() => (window.location.href = backLink.href), 280); 
    });
  }

  // --- Fix blank screen on browser back/swipe gesture ---
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      const veil = document.getElementById("veil");
      if (veil) {
        veil.classList.remove("active");
      }
    }
  });
}