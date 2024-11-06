let menuBurger = document.querySelector('.menu-burger');
let headerBurger = document.querySelector('.header-burger');

menuBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('menu-open');
});

let navLinks = document.querySelectorAll('.nav-item-burger a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        headerBurger.classList.remove('menu-open');
    });
});