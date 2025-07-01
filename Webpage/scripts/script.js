// Function to load an external HTML file into a specified element
function loadComponent(filePath, elementId) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            // After loading the header, initialize the scroll functionality
            if (elementId === 'header') {
                initHeaderScroll();
            }
        })
        .catch(error => console.error(error));
}

// Function to handle header transparency based on scroll position
function initHeaderScroll() {
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.learn-hero') || document.querySelector('.hero') || document.querySelector('.hero2');
    
    // If there's no hero section on this page, always show the default background
    if (!heroSection) {
        header.classList.add('default-bg');
        return;
    }
    
    // Initial check when page loads
    checkHeaderPosition();
    
    // Check on scroll
    window.addEventListener('scroll', checkHeaderPosition);
    
    function checkHeaderPosition() {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        const headerHeight = header.offsetHeight;
        
        // If header is within hero section (completely or partially)
        if (headerHeight < heroBottom) {
            header.classList.remove('default-bg');
            header.classList.add('transparent-bg');
        } else {
            header.classList.remove('transparent-bg');
            header.classList.add('default-bg');
        }
    }
}

// Load the header and footer components
document.addEventListener("DOMContentLoaded", () => {
    loadComponent('../Komponenter/footer.html', 'footer');
    loadComponent('../Komponenter/header.html', 'header');
    loadComponent('../Komponenter/risk_map.html', 'risk_map');
    loadComponent('../Komponenter/snippet.html', 'snippet');
});