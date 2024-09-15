// Hide the preloader and show the main content once the page has loaded
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');
    preloader.style.display = 'none';
    mainContent.style.display = 'block';
});

// Toggle the visibility of the navigation menu
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'flex';
    }
}
