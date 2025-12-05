// Hero animation
gsap.from(".hero-text", {
    opacity: 0,
    y: 30,
    duration: 1,
});

gsap.from(".hero-img", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    delay: 0.3
});

// Section animations
gsap.utils.toArray(".section-title").forEach((title) => {
    gsap.from(title, {
        scrollTrigger: title,
        opacity: 0,
        y: 25,
        duration: 0.8
    });
});
