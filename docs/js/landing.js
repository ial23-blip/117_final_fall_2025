// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all project cards
document.querySelectorAll('[data-aos]').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(30px)';
  element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(element);
});

// Counter animation for stats
const animateCounters = () => {
  const counters = document.querySelectorAll('.stat-number');
  const speed = 200;

  counters.forEach(counter => {
    const animate = () => {
      const value = counter.textContent.replace('+', '');
      const target = +value;
      const data = +counter.getAttribute('data-count') || 0;
      const increment = target / speed;

      if (data < target) {
        counter.setAttribute('data-count', Math.ceil(data + increment));
        counter.textContent = Math.ceil(data + increment) + (counter.textContent.includes('+') ? '+' : '');
        setTimeout(animate, 1);
      } else {
        counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
      }
    };
    animate();
  });
};

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
  statsObserver.observe(statsSection);
}

// Add parallax effect to floating cards
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const cards = document.querySelectorAll('.floating-card');
  
  cards.forEach((card, index) => {
    const speed = 0.5 + (index * 0.1);
    card.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Log page load performance
window.addEventListener('load', () => {
  if ('performance' in window) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`Page load time: ${pageLoadTime}ms`);
  }
});
