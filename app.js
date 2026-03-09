document.addEventListener("DOMContentLoaded", () => {
    // Reveal animations on scroll
    const fadeElements = document.querySelectorAll(".fade-up");

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Solo animar una vez
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Añadir clase scrolled a la navbar para difuminado extra al bajar
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(9, 9, 11, 0.8)";
            navbar.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
        } else {
            navbar.style.background = "transparent";
            navbar.style.boxShadow = "none";
        }
    });
});
