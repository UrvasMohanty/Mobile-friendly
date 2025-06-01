// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.onclick = () => {
  navLinks.classList.toggle("show");
};

// Scroll animation
const animatedItems = document.querySelectorAll(".animate");

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  animatedItems.forEach(item => {
    const boxTop = item.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
