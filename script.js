let currentSlide = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".project-card").length;
const cardWidth = 290; // including gap

document.getElementById("next").onclick = () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        slides.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
    }
};

document.getElementById("prev").onclick = () => {
    if (currentSlide > 0) {
        currentSlide--;
        slides.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
    }
};
