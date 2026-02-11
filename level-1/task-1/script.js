// Smooth Scroll Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change Navbar background on scroll
window.onscroll = function() {
    let nav = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        nav.style.background = "#050505";
        nav.style.padding = "10px 8%";
    } else {
        nav.style.background = "rgba(10, 10, 12, 0.8)";
        nav.style.padding = "20px 8%";
    }
};