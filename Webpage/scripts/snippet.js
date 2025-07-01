// Function to handle scrolling behavior
window.addEventListener('scroll', function() {
    const sideMenu = document.querySelector('.side-menu');
    const scrollY = window.scrollY;
    
    if (scrollY <= 200) {
        // Hidden at the top (0-200px) - completely off-screen
        sideMenu.classList.add('hidden');
        sideMenu.classList.remove('collapsed');
        sideMenu.classList.remove('visible');
    } else if (scrollY > 200 && scrollY <= 600) {
        // Fully visible between 200-600px - folds out
        sideMenu.classList.add('visible');
        sideMenu.classList.remove('hidden');
        sideMenu.classList.remove('collapsed');
    } else {
        // Folded in (showing only icons) after 600px
        sideMenu.classList.add('visible');
        sideMenu.classList.remove('hidden');
        sideMenu.classList.add('collapsed');
    }
});