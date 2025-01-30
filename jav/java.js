let mouseX = 0,
  mouseY = 0;
let cursorX = 0,
  cursorY = 0;
const speed = 0.2;
let isClicking = false;

const cursor = document.querySelector(".cursor");
const cursorInner = document.querySelector(".cursor-inner");

const animateCursor = () => {
  const dx = mouseX - cursorX;
  const dy = mouseY - cursorY;

  cursorX += dx * speed;
  cursorY += dy * speed;

  let transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
  let innerTransform = `translate(${cursorX - 4}px, ${cursorY - 4}px)`;

  if (isClicking) {
    transform += " scale(0.8)";
    innerTransform += " scale(0.8)";
  }

  cursor.style.transform = transform;
  cursorInner.style.transform = innerTransform;

  requestAnimationFrame(animateCursor);
};

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Hover Effects
const interactiveElements = document.querySelectorAll(
  "a, button, .btn, input, textarea, .service-card, .nav-links a"
);

interactiveElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-hover");
    cursorInner.style.width = "16px";
    cursorInner.style.height = "16px";
  });

  element.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-hover");
    cursorInner.style.width = "8px";
    cursorInner.style.height = "8px";
  });
});

// Click Effect
document.addEventListener("mousedown", () => {
  isClicking = true;
});

document.addEventListener("mouseup", () => {
  isClicking = false;
});

// Start animation
animateCursor();

// Mobile Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  const isActive = navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
  navLinks.setAttribute("aria-hidden", !isActive);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const headerOffset = 100;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

// Close Mobile Menu
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});
