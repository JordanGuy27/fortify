const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".sidebar");
const background = document.querySelector(".backgroundActive");

$(document).ready(function () {
  $('a').smoothScroll({
    speed: 1300,
    offset: -20,
  });
}); 

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("active");
  background.style.display = background.style.display === 'block' ? '' : 'block';
});
nav.addEventListener('click', function () {
  nav.classList.toggle("active");
  hamburger.classList.toggle("is-active");
  background.style.display = background.style.display === "block" ? "" : "block";
});

var shiftWindow = function () { scrollBy(0, -100) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);