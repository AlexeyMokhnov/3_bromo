window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header__nav"),
    menuItem = document.querySelectorAll(".header__menu-item"),
    hamburger = document.querySelector(".hamburger"),
    bodyVar = document.querySelector("body");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    bodyVar.classList.toggle("active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      menu.classList.toggle("active");
    });
  });
});


// carusel

$(document).ready(function () {
  $('.carousel').carousel();
  indicators: true
});
