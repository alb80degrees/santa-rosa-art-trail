/**
 * Builds an abstract winding path down the page, one stop per artwork, in the
 * order they appear in ARTWORKS. Nobody has to supply coordinates — the
 * position in the array IS the stop order (stop 1 = first encountered on the
 * walkthrough, and so on). Re-ordering the array re-orders the route.
 */

const wrap = document.querySelector(".route-wrap");
const svg = document.getElementById("routeSvg");
const nodesLayer = document.getElementById("routeNodes");

document.getElementById("artwork-count").textContent = ARTWORKS.length;

// Decrease these numbers to bring the stops closer together. 
// For example, changing 260/320 to 180/220:
const SPACING = window.innerWidth < 720 ? 180 : 220;
const TOP_PAD = 220;
const BOTTOM_PAD = 260;
const AMPLITUDE = window.innerWidth < 720 ? 18 : 30; // how far stops swing left/right, in %

function computePoints() {
  const count = ARTWORKS.length;
  const height = TOP_PAD + (count - 1) * SPACING + BOTTOM_PAD;

  const points = ARTWORKS.map((_, i) => {
    const y = TOP_PAD + i * SPACING;
    // Increase 1.05 to a number like 2.4 so the wave hits its peaks faster
    const x = 50 + AMPLITUDE * Math.sin(i * 1.8);
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
    <path d="${d}" fill="none" stroke="rgba(247,243,234,0.16)" stroke-width="2" stroke-dasharray="2 14" stroke-linecap="round" />
  `;

  nodesLayer.innerHTML = "";
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
  });
}

function goToArtwork(id) {
  const url = `artwork.html?id=${encodeURIComponent(id)}`;
  const veil = document.getElementById("veil");
  veil.classList.add("active");
  setTimeout(() => (window.location.href = url), 280);
}

render();
window.addEventListener("resize", render);
