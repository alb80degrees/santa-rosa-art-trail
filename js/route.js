const wrap = document.querySelector(".route-wrap");
const svg = document.getElementById("routeSvg");
const nodesLayer = document.getElementById("routeNodes");

const titleCard = document.querySelector(".home-header");

// Creates a watcher that checks if artworks are on screen
const nodeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("out-of-view");
    } else {
      entry.target.classList.add("out-of-view");
    }
  });
}, {
  // -60px means they start blurring just before they hit the absolute edge of the screen
  rootMargin: "-60px 0px -60px 0px", 
  threshold: 0.1 
});

document.body.style.overflowX = "hidden";
document.getElementById("artwork-count").textContent = ARTWORKS.length;

const SPACING = window.innerWidth < 720 ? 180 : 220;
// Change the mobile padding (the first number) to 480
const TOP_PAD = window.innerWidth < 720 ? 400 : 220;
const BOTTOM_PAD = 260;
const AMPLITUDE = window.innerWidth < 720 ? 18 : 30; 

function computePoints() {
  const count = ARTWORKS.length;
  const height = TOP_PAD + (count - 1) * SPACING + BOTTOM_PAD;

  const points = ARTWORKS.map((_, i) => {
    const y = TOP_PAD + i * SPACING;
    const side = i % 2 === 0 ? 1 : -1; 
    const organicVariation = 0.6 + (Math.abs(Math.sin(i * 1.3)) * 0.4); 
    const x = 50 + (AMPLITUDE * side * organicVariation);
    return { x, y };
  });

  return { points, height };
}

function buildPathD(points, widthPx) {
  if (points.length < 2) return "";
  const toPx = (p) => ({ x: (p.x / 100) * widthPx, y: p.y });
  let d = "";
  const p0 = toPx(points[0]);
  d += `M ${p0.x} ${p0.y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const a = toPx(points[i]);
    const b = toPx(points[i + 1]);
    const midY = (a.y + b.y) / 2;
    d += ` C ${a.x} ${midY}, ${b.x} ${midY}, ${b.x} ${b.y}`;
  }
  return d;
}

function render() {
  const { points, height } = computePoints();
  const widthPx = wrap.clientWidth;

  wrap.style.height = `${height}px`;
  svg.setAttribute("viewBox", `0 0 ${widthPx} ${height}`);
  svg.setAttribute("width", widthPx);
  svg.setAttribute("height", height);

  const d = buildPathD(points, widthPx);
  svg.innerHTML = `
    <path class="route-path" d="${d}" fill="none" stroke="rgba(0, 0, 0, 0.12)" stroke-width="2" stroke-dasharray="2 14" stroke-linecap="round" />
  `;
  nodesLayer.innerHTML = "";
  
  // Clear the watcher before redrawing
  nodeObserver.disconnect();

  ARTWORKS.forEach((art, i) => {
    const p = points[i];
    const thumb = art.photos && art.photos[0] ? art.photos[0] : "";

    const node = document.createElement("div");
    node.className = "route-node";
    node.style.left = `${p.x}%`;
    node.style.top = `${p.y}px`;
    node.setAttribute("role", "button");
    node.setAttribute("tabindex", "0");
    node.setAttribute("aria-label", `Stop ${i + 1}: ${art.title}`);

    node.innerHTML = `
      <div class="route-node__ring"></div>
      <div class="route-node__thumb" style="background-image:url('${thumb}')"></div>
      <div class="route-node__badge">${i + 1}</div>
      <div class="route-node__label">${art.title}</div>
    `;

    node.addEventListener("click", () => goToArtwork(art.id));
    node.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        goToArtwork(art.id);
      }
    });

    nodesLayer.appendChild(node);
    
    nodeObserver.observe(node); 
  });
}

function goToArtwork(id) {
  const url = `artwork.html?id=${encodeURIComponent(id)}`;
  const veil = document.getElementById("veil");
  veil.classList.add("active");
  setTimeout(() => (window.location.href = url), 280);
}

// Watch the scroll position and apply the blur/fade class
window.addEventListener("scroll", () => {
  if (!titleCard) return; // Failsafe if the class name is wrong
  
  // 50px is the trigger point. Adjust this to make it fade earlier or later.
  if (window.scrollY > 50) {
    titleCard.classList.add("hidden-on-scroll");
  } else {
    titleCard.classList.remove("hidden-on-scroll");
  }
});

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
  
  // Grab the counter element (add this near where you defined titleCard)
const homeCounter = document.querySelector(".home-counter");

// Add this variable outside the listener to keep track of the timer
let scrollTimeout;

window.addEventListener("scroll", () => {
  // 1. Instantly hide elements when moving past 50px
  if (window.scrollY > 50) {
    if (titleCard) titleCard.classList.add("hidden-on-scroll");
    if (homeCounter) homeCounter.classList.add("hidden-on-scroll");
  } else {
    // Bring both back immediately if they scroll all the way to the top
    if (titleCard) titleCard.classList.remove("hidden-on-scroll");
    if (homeCounter) homeCounter.classList.remove("hidden-on-scroll");
  }

  // 2. Clear the timer while the user is actively scrolling
  clearTimeout(scrollTimeout);

  // 3. Start a new timer. If 250ms pass with no scrolling, bring the counter back
  scrollTimeout = setTimeout(() => {
    if (window.scrollY > 50 && homeCounter) {
      homeCounter.classList.remove("hidden-on-scroll");
    }
  }, 250); 
});

render();
window.addEventListener("resize", render);