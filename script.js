let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Show/hide navbar based on scroll direction
    if (currentScroll > lastScrollTop) {
        // Scroll Down
        navbar.style.top = "-120px";  // Hide navbar when scrolling down
    } else {
        // Scroll Up
        navbar.style.top = "0";  // Show navbar when scrolling up
    }

    // Add/remove transparent background based on scroll position
    if (currentScroll > 0) {
        navbar.classList.add('scrolled'); // Change to white when scrolling
    } else {
        navbar.classList.remove('scrolled'); // Keep transparent when at the top
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});


