let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  // Utiliser 'style.display' pour modifier la propriété 'display'
    }

    slides[currentSlide].style.display = 'block';  // Utiliser 'style.display' pour modifier la propriété 'display'
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Afficher la première image au chargement de la page
showSlide(currentSlide);