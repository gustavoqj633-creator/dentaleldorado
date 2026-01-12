const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

function toggleMenu() {
  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", String(!expanded));
  mobileMenu.style.display = expanded ? "none" : "block";
}

if (hamburger) hamburger.addEventListener("click", toggleMenu);
