// Loading Screen Functionality
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading');
    const content = document.getElementById('content');
    loadingScreen.style.display = 'none';
    content.classList.remove('hidden');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});