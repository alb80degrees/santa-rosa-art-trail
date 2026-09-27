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
          <div class="gallery__track" id="track">
            ${photos
              .map(
                (src) =>
                  `<div class="gallery__slide" style="background-image:url('${src}')"></div>`
              )
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
    <!-- ADD THIS RIGHT BEFORE THE BACKTICK CLOSING root.innerHTML -->
    <div class="scroll-hint" id="scrollHint">Scroll for more &darr;</div>
  `; // <-- Your existing backtick is here

  // --- NEW: Hide the scroll hint when the user starts scrolling ---
  const scrollHint = document.getElementById("scrollHint");
  
  // Changed to listen to the whole browser window instead of just the column
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      scrollHint.classList.add("hidden");
    } else {
      scrollHint.classList.remove("hidden");
    }
  });

  // --- NEW: Smooth Scroll Observer for Text Sections ---
  const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("text-blurred");
      }
    });
  }, {
    // Triggers slightly before the text hits the absolute bottom of the screen
    rootMargin: "0px 0px -10% 0px", 
    threshold: 0.1
  });

  // Watch every detail section we just injected
  document.querySelectorAll(".detail-section").forEach(section => {
    textObserver.observe(section);
  });

  // --- ORIGINAL: Gallery interactivity ---
  if (photos.length > 1) {
    let index = 0;
    const track = document.getElementById("track");
    const dots = [...document.querySelectorAll(".gallery__dot")];

    function renderGallery() {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle("active", i === index));
    }

    document.getElementById("prevBtn").addEventListener("click", () => {
      index = (index - 1 + photos.length) % photos.length;
      renderGallery();
    });
    
    document.getElementById("nextBtn").addEventListener("click", () => {
      index = (index + 1) % photos.length;
      renderGallery();
    });
    
    dots.forEach((dot) =>
      dot.addEventListener("click", () => {
        index = Number(dot.dataset.index);
        renderGallery();
      })
    );

    // --- NEW: Click zones on the photo itself (left half = prev, right half = next) ---
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

    // --- NEW: Keyboard Navigation for Gallery ---
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        index = (index - 1 + photos.length) % photos.length;
        renderGallery();
      } else if (e.key === "ArrowRight") {
        index = (index + 1) % photos.length;
        renderGallery();
      }
    });
  }

  // --- NEW: Smooth Page Transition for Back Link ---
  const backLink = document.querySelector(".back-link");
  if (backLink) {
    backLink.addEventListener("click", (e) => {
      e.preventDefault(); // Stop the instant jump
      
      // Look for the veil, or create it if it doesn't exist on this page
      let veil = document.getElementById("veil");
      if (!veil) {
        veil = document.createElement("div");
        veil.id = "veil";
        veil.className = "veil";
        document.body.appendChild(veil);
      }
      
      // Small delay to ensure the browser registers the new element before animating
      requestAnimationFrame(() => {
        veil.classList.add("active");
      });
      
      // Wait for the fade animation to finish before changing pages
      setTimeout(() => (window.location.href = backLink.href), 280); 
    });
  }

  // --- NEW: Fix blank screen on browser back/swipe gesture ---
window.addEventListener("pageshow", (event) => {
  // event.persisted is true if the page was loaded from the browser cache
  if (event.persisted) {
    const veil = document.getElementById("veil");
    if (veil) {
      veil.classList.remove("active");
    }
  }
});
}