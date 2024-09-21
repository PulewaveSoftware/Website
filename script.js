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

// Show/Hide Version Details
function showVersionDetails(version) {
    const versionDetails = {
        'v1.0': "EasiScript v1.0 includes basic commands and structures for simple programming tasks.",
        'v1.1': "EasiScript v1.1 expands on the initial release with additional commands and features."
    };

    const detailsDiv = document.getElementById('version-details');
    detailsDiv.innerHTML = `<p>${versionDetails[version] || "Details not available."}</p>`;
    detailsDiv.classList.remove('hidden');
}

// Toggle Versions Display
function showVersions() {
    const versionsDiv = document.getElementById('versions');
    versionsDiv.classList.toggle('hidden');
}