const burgerMenu = document.getElementById('burger-menu'); // Le bouton burger
const burgerNav = document.getElementById('burger-nav');   // Le menu qui sera affiché/masqué

burgerMenu.addEventListener('click', () => {
    burgerNav.classList.toggle('active');
    burgerMenu.classList.toggle('open');
});