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

  root.innerHTML = `
    <div class="gallery-col">
      <div class="gallery">
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
          <button class="gallery__arrow gallery__arrow--prev glass" id="prevBtn" aria-label="Previous photo">&larr;</button>
          <button class="gallery__arrow gallery__arrow--next glass" id="nextBtn" aria-label="Next photo">&rarr;</button>
          <div class="gallery__controls glass">
            ${photos
              .map(
                (_, i) =>
                  `<button class="gallery__dot ${i === 0 ? "active" : ""}" data-index="${i}" aria-label="Go to photo ${i + 1}"></button>`
              )
              .join("")}
          </div>`
            : ""
        }
      </div>
    </div>

    <div class="content-col">
      <a class="back-link" href="index.html">&larr; Back to the map</a>

      <p class="detail-type">${art.type}</p>
      <h1 class="detail-title">${art.title}</h1>

      <div class="meta-row">
        <span class="meta-chip glass"><strong>Artist:</strong> ${art.artist}</span>
        <span class="meta-chip glass"><strong>Location:</strong> ${art.locationName}</span>
        <span class="meta-chip glass"><strong>Year:</strong> ${art.year}</span>
      </div>

      <section class="detail-section">
        <h2>About this piece</h2>
        <p>${art.description}</p>
      </section>

      <section class="detail-section">
        <h2>Our take</h2>
        <p>${art.analysis}</p>
      </section>

      <section class="detail-section">
        <h2>Sources</h2>
        <ul class="sources-list">
          ${art.sources.map((s) => `<li>${s}</li>`).join("")}
        </ul>
      </section>

      <p class="contributor-tag">Documented by ${art.contributor}</p>
    </div>
  `;

  // Gallery interactivity
  if (photos.length > 1) {
    let index = 0;
    const track = document.getElementById("track");
    const dots = [...document.querySelectorAll(".gallery__dot")];

    function render() {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle("active", i === index));
    }

    document.getElementById("prevBtn").addEventListener("click", () => {
      index = (index - 1 + photos.length) % photos.length;
      render();
    });
    document.getElementById("nextBtn").addEventListener("click", () => {
      index = (index + 1) % photos.length;
      render();
    });
    dots.forEach((dot) =>
      dot.addEventListener("click", () => {
        index = Number(dot.dataset.index);
        render();
      })
    );
  }
}
