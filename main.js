var hamburger = document.getElementById('hamburger');
var mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
    mobileMenu.classList.toggle('active');
}