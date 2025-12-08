const mobileNav = document.querySelector(".mobile-nav");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active-nav");
});
