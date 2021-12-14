var hamburger = document.getElementById('hamburger');
var desktopMenu = document.getElementById('desktop-menu');
var mobileMenu = document.getElementById('mobile-menu');

document.getElementById('hamburger').addEventListener("click", toggleMenu);


function toggleMenu() {
    if (mobileMenu.style.display == 'block') {
        mobileMenu.style.display = 'none';
    }
    else {
        mobileMenu.style.display = 'block';
    }
}

function windowChange() {
    if(window.matchMedia("(min-width: 768px)").matches) {
        mobileMenu.style.display = 'none';
    }
}

windowChange();