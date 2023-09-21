const date = document.querySelector("#date");
const menuIcon = document.querySelector(".navbar-menu-icon");
const links = document.querySelectorAll(".navbar-links a");
const navLinks = document.querySelector(".navbar-links");

// toggler
links.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("fa-x");
  });
});
menuIcon.addEventListener("click", function () {
  navLinks.classList.toggle("active");
  menuIcon.classList.toggle("fa-x");
});

function handleResize() {
  if (window.innerWidth > 768) navLinks.classList.remove("active");
}
window.addEventListener("resize", handleResize);
handleResize();
// set year
date.innerHTML = new Date().getFullYear();
