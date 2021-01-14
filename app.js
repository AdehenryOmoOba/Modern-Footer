const bg = document.querySelector(".header");
const hamburger = document.querySelector(".toggle");
const menu = document.querySelectorAll(".item");

window.addEventListener("scroll", () => {
  bg.style.backgroundSize = 160 - +window.pageYOffset / 12 + "%";
  //   bg.style.opacity = 1 - +window.pageYOffset / 700 + "";
});

hamburger.addEventListener("click", () => {
  menu.forEach((item) => {
    item.classList.toggle("active");
  });
});
