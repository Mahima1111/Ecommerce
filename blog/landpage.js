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

