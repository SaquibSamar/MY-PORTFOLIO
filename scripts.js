// scripts.js — animations, particles, swiper, tilt, interactivity

// set year
document.getElementById('year').textContent = new Date().getFullYear();

// NAV toggle (mobile)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle?.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Particles.js config
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 60, "density": { "enable": true, "value_area": 1200 } },
    "color": { "value": ["#6b46ff", "#0ea5e9", "#8b5cf6"] },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.16 },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": true, "distance": 160, "color": "#6b46ff", "opacity": 0.05, "width": 1 },
    "move": { "enable": true, "speed": 0.9, "random": false, "straight": false }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } },
    "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.08 } } }
  },
  "retina_detect": true
});

// Initialize Vanilla Tilt on elements with class tilt
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 10,
  speed: 400,
  glare: true,
  "max-glare": 0.18,
  scale: 1.02
});

// Swiper slider setup
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1.15,
  spaceBetween: 22,
  centeredSlides: true,
  loop: true,
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  breakpoints: {
    700: { slidesPerView: 2.1 },
    1100: { slidesPerView: 2.4 }
  }
});

// Neon streak effect on slide change (GSAP)
swiper.on('slideChangeTransitionStart', () => {
  const active = document.querySelectorAll('.swiper-slide-active .project-card, .swiper-slide-prev .project-card, .swiper-slide-next .project-card');
  active.forEach(el => {
    gsap.fromTo(el, { boxShadow: "0 0 0 rgba(0,0,0,0)" }, { boxShadow: "0 18px 80px rgba(99,102,241,0.14)", duration: 0.6, ease: "power2.out" });
  });
});

// GSAP entry animations
gsap.registerPlugin(ScrollTrigger);
gsap.from('.brand', { y: -8, opacity: 0, duration: 0.8, ease: 'power3.out' });
gsap.from('.title', { y: 18, opacity: 0, duration: 0.9, delay: 0.2, ease: 'power3.out' });
gsap.from('.subtitle', { y: 12, opacity: 0, duration: 0.9, delay: 0.3, ease: 'power3.out' });
gsap.from('.photo-card', { scale: 0.96, opacity: 0, duration: 0.9, delay: 0.35, ease: 'elastic.out(1,0.6)' });

// Scroll animations for sections
gsap.utils.toArray('.section, .glass, .project-card').forEach(el => {
  gsap.from(el, {
    y: 22, opacity: 0, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: "top 80%" }
  });
});

// Neon pulse on hover for neon buttons
document.querySelectorAll('.neon').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    gsap.to(btn, { boxShadow: "0 12px 60px rgba(99,102,241,0.18)", duration: 0.35 });
  });
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { boxShadow: "0 8px 30px rgba(99,102,241,0.06)", duration: 0.35 });
  });
});

// Resume download click (analytics placeholder)
document.getElementById('download-resume')?.addEventListener('click', () => {
  // Optional: track clicks using simple event or analytics
  console.log('Resume download clicked');
});
