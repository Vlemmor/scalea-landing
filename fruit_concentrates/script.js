const flavorData = {
    chicha: {
        title: "Chicha Morada <br> Tradición Pura.",
        desc: "Concentrados de fruta 100% natural. El sabor de casa en formato familiar de 1 Litro.",
        color: "#802bb1",
        benefit: "Antioxidante natural del maíz morado.",
        icon: "✨"
    },
    maracuya: {
        title: "Maracuyá <br> Explosión Tropical.",
        desc: "El toque cítrico y refrescante perfecto. Siente la pasión de la selva en un vaso lleno de vitalidad y frescura.",
        color: "#f9d423",
        benefit: "Rico en Vitamina C y relajante natural.",
        icon: "🍋"
    },
    camu_camu: {
        title: "Camu Camu <br> Superfruta Amazónica.",
        desc: "Un boost de energía inigualable. El poder antioxidante del Amazonas diseñado para revitalizar tus días.",
        color: "#ff4e50",
        benefit: "La mayor fuente natural de Vitamina C en el mundo.",
        icon: "🍒"
    }
};

let currentActiveFlavor = 'chicha';

function switchFlavor(flavor) {
    if (currentActiveFlavor === flavor) return;
    
    const body = document.body;
    const heroTitle = document.getElementById('hero-title');
    const benefitText = document.getElementById('benefit-text');
    const benefitIcon = document.querySelector('.benefit-icon');
    
    // Start transition effect if needed
    currentActiveFlavor = flavor;
    
    // Smooth transition logic
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image-container');
    
    heroContent.style.opacity = '0';
    heroImage.style.opacity = '0';
    
    setTimeout(() => {
        // Update Data
        body.setAttribute('data-flavor', flavor);
        heroTitle.innerHTML = flavorData[flavor].title;
        document.getElementById('hero-desc').innerText = flavorData[flavor].desc;
        benefitText.innerText = flavorData[flavor].benefit;
        benefitIcon.innerText = flavorData[flavor].icon;
        
        // Fade back in
        heroContent.style.opacity = '1';
        heroImage.style.opacity = '1';
    }, 300);

    // Note: Video remains the same (hero_video.mp4) as requested for now
}

// Initial state and Scroll Tracking
document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll triggers
    const triggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const flavor = entry.target.getAttribute('data-flavor');
                if (flavor) {
                    switchFlavor(flavor);
                }
            }
        });
    }, { threshold: 0.6 });

    document.querySelectorAll('.section-trigger').forEach(el => {
        triggerObserver.observe(el);
    });

    // Animation observer
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.benefit-item, .contact-card').forEach(el => {
        animationObserver.observe(el);
    });
});
