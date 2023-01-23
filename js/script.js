// Toogle class active

const navbarNav = document.querySelector('.navbar-nav');

// Ketika klik Menu hamburger
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

// klik diluar sidebar = sidebar hilang

const hamburger = document.querySelector('#menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})