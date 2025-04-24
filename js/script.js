// Burger menu
const burgerMenu = document.getElementById('burger-menu');
const burgerNav = document.getElementById('burger-nav');
burgerMenu.addEventListener('click', () => {
    burgerNav.classList.toggle('active');
    burgerMenu.classList.toggle('open');
});

// CV - Compétences
document.addEventListener('DOMContentLoaded', function() {
    const skillCircles = document.querySelectorAll('.skill-circle');

    skillCircles.forEach(circle => {
        const percent = parseInt(circle.dataset.percent);
        const maskAngle = percent * 3.6; // Multiplier par 3.6 pour obtenir l'angle en degrés (100% = 360deg)
        circle.style.setProperty('--mask-angle', `${maskAngle}deg`);
    });
});