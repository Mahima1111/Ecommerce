let isExpanded = false;

function toggleHeroText() {
  const shortText = "Get up to 70% off on top brands. Fashion that defines you.";
  const fullText = "Get up to 70% off on top brands. Fashion that defines you. Shop across categories like clothing, footwear, accessories, and more. New arrivals updated daily!";

  const desc = document.getElementById('hero-desc');
  const btn = document.getElementById('learnMoreBtn');

  if (isExpanded) {
    desc.textContent = shortText;
    btn.textContent = "Learn more";
  } else {
    desc.textContent = fullText;
    btn.textContent = "Show less";
  }

  isExpanded = !isExpanded;
}
function goToMyntra() {
  window.location.href = "https://www.myntra.com";
}

const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    navLinks.classList.remove('active');
  });
});

const slider = document.getElementById('albumSlider');
const leftBtn = document.querySelector('.slide-btn.left');
const rightBtn = document.querySelector('.slide-btn.right');

if (slider && leftBtn && rightBtn) {
  const scrollStep = document.querySelector('.album-card').offsetWidth + 20;

  leftBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -scrollStep * 3, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    slider.scrollBy({ left: scrollStep * 3, behavior: 'smooth' });
  });
}
