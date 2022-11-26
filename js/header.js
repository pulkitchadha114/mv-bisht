// responsive
const hamburger = document.querySelector(" .hamburger");
const navMenu = document.querySelector(" .navigation");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
// responsive end
// Header Sticky Start
window.addEventListener("scroll", function () {
  let head = document.querySelector(".dog");
  head.classList.toggle("fixeds", window.scrollY > 500);
});
// Header Sticky End
