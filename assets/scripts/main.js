const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".sidebar");
const background = document.querySelector('.backgroundActive');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("active");
    background.style.display = background.style.display === 'block' ? '' : 'block';
});
