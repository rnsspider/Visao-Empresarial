document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel img");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const text = document.getElementById("carousel-text");
    const menuToggle = document.querySelector('.menu-toggle'); // Correção do seletor
    const navLinks = document.querySelector('nav'); // Correção do seletor

    // Verifica se os elementos do menu existem antes de adicionar eventos
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Fechar o menu ao clicar em um link
        const links = document.querySelectorAll('nav a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    const captions = [
        "Transforme vidas com sua doação",
        "Juntos podemos criar um futuro melhor",
        "Cada ação conta para a inclusão social"
    ];

    let currentSlide = 0;
    const intervalTime = 5000;
    let slideInterval;

    function updateSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
        text.textContent = captions[index];
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide(currentSlide);
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener("click", () => {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        });

        nextButton.addEventListener("click", () => {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });
    }

    updateSlide(currentSlide);
    startAutoSlide();

    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'flex';
            navLinks.classList.remove('active');
        } else {
            menuToggle.style.display = 'none';
            navLinks.classList.add('active');
        }
    }

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
});
