// CSS-only hamburger menu - close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const menuToggle = document.getElementById('menu-toggle-client');
    if (menuToggle) {
      menuToggle.checked = false;
    }
  });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navHeight = document.querySelector('.navbar-client').offsetHeight;
      const targetPosition = target.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Navbar scroll effect
let lastScrollPosition = 0;
const navbar = document.querySelector('.navbar-client');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  }
  
  lastScrollPosition = currentScroll;
});

// Quote form submission with Zapier webhook
const quoteForm = document.getElementById('quoteForm');

if (quoteForm) {
  quoteForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitButton = this.querySelector('.btn-submit-client');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = 'Sending Your Quote Request...';
    submitButton.disabled = true;
    submitButton.style.opacity = '0.7';
    
    // Collect form data
    const formData = {
      fullName: this.querySelector('#fullName').value,
      phone: this.querySelector('#phone').value,
      email: this.querySelector('#emailAddress').value,
      address: this.querySelector('#address').value,
      serviceType: this.querySelector('#serviceType').value,
      projectDetails: this.querySelector('#projectDetails').value,
      timeline: this.querySelector('#timeline').value,
      budget: this.querySelector('#budget').value,
      timestamp: new Date().toISOString(),
      source: 'GreenLeaf Website'
    };
    
    // Replace with your actual Zapier webhook URL
    // To get webhook: Go to Zapier > Create Zap > Webhooks by Zapier > Catch Hook
    const zapierWebhookURL = 'https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID/';
    
    try {
      // Simulate API call (replace with actual webhook)
      const response = await fetch(zapierWebhookURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      // Success - show confirmation
      submitButton.textContent = '✓ Quote Request Sent!';
      submitButton.style.backgroundColor = '#28a745';
      submitButton.style.opacity = '1';
      
      // Reset form
      this.reset();
      
      // Show success message
      alert('Thank you for your quote request! We\'ll contact you within 24 hours to discuss your project. Check your email for confirmation.');
      
      // Track conversion (optional - Google Analytics)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
          'event_category': 'Lead',
          'event_label': 'Quote Request',
          'value': 1
        });
      }
      
      // Reset button after 5 seconds
      setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.style.backgroundColor = '';
        submitButton.style.opacity = '';
        submitButton.disabled = false;
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Error state
      submitButton.textContent = 'Error - Please Try Again';
      submitButton.style.backgroundColor = '#dc3545';
      submitButton.style.opacity = '1';
      
      alert('Sorry, there was an error submitting your request. Please call us directly at (908) 555-LEAF or email info@greenleafnj.com');
      
      setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.style.backgroundColor = '';
        submitButton.style.opacity = '';
        submitButton.disabled = false;
      }, 3000);
    }
  });
}

// Phone number formatting
const phoneInput = document.getElementById('phone');
if (phoneInput) {
  phoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 10) {
      value = value.substring(0, 10);
    }
    
    if (value.length >= 6) {
      e.target.value = `(${value.substring(0, 3)}) ${value.substring(3, 6)}-${value.substring(6)}`;
    } else if (value.length >= 3) {
      e.target.value = `(${value.substring(0, 3)}) ${value.substring(3)}`;
    } else if (value.length > 0) {
      e.target.value = `(${value}`;
    }
  });
}

// Email validation
const emailInput = document.getElementById('emailAddress');
if (emailInput) {
  emailInput.addEventListener('blur', function() {
    const email = this.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email && !emailRegex.test(email)) {
      this.style.borderColor = '#dc3545';
      
      if (!this.nextElementSibling || !this.nextElementSibling.classList.contains('error-message')) {
        const errorMsg = document.createElement('span');
        errorMsg.className = 'error-message';
        errorMsg.style.color = '#dc3545';
        errorMsg.style.fontSize = '0.875rem';
        errorMsg.style.marginTop = '0.25rem';
        errorMsg.textContent = '⚠ Please enter a valid email address';
        this.parentNode.appendChild(errorMsg);
      }
    } else {
      this.style.borderColor = '';
      const errorMsg = this.parentNode.querySelector('.error-message');
      if (errorMsg) {
        errorMsg.remove();
      }
    }
  });
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeInObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll('.service-card-client, .portfolio-item, .testimonial-client').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  fadeInObserver.observe(el);
});

// Counter animation for trust indicators
const animateCounters = () => {
  const indicators = document.querySelectorAll('.indicator-text strong');
  
  indicators.forEach(indicator => {
    const text = indicator.textContent;
    
    // Skip non-numeric indicators
    if (!text.match(/\d/)) return;
    
    const hasPlus = text.includes('+');
    let target = parseInt(text.replace(/\D/g, ''));
    
    if (isNaN(target)) return;
    
    let current = 0;
    const increment = target / 30;
    
    const updateCounter = () => {
      if (current < target) {
        current += increment;
        const displayValue = Math.ceil(current);
        indicator.textContent = displayValue + (hasPlus ? '+' : '');
        requestAnimationFrame(updateCounter);
      } else {
        indicator.textContent = text;
      }
    };
    
    updateCounter();
  });
};

// Trigger counter animation when visible
const trustSection = document.querySelector('.trust-indicators');
if (trustSection) {
  const trustObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        trustObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  trustObserver.observe(trustSection);
}

// Track clicks on CTA buttons (for analytics)
document.querySelectorAll('.btn-primary-client, .btn-cta-large, .btn-final-primary').forEach(button => {
  button.addEventListener('click', function() {
    const buttonText = this.textContent.trim();
    console.log('CTA clicked:', buttonText);
    
    // Track with Google Analytics (if available)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        'event_category': 'CTA',
        'event_label': buttonText
      });
    }
  });
});

// Track service card interactions
document.querySelectorAll('.service-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const serviceTitle = this.closest('.service-card-client').querySelector('h3').textContent;
    console.log('Service interested:', serviceTitle);
    
    // Track with Google Analytics (if available)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'service_interest', {
        'event_category': 'Services',
        'event_label': serviceTitle
      });
    }
  });
});

// Page visibility tracking
let pageVisibleTime = 0;
let isPageVisible = true;

setInterval(() => {
  if (isPageVisible) {
    pageVisibleTime++;
    
    // Log engagement milestones
    if (pageVisibleTime === 30) {
      console.log('User engaged for 30 seconds');
    } else if (pageVisibleTime === 60) {
      console.log('User engaged for 1 minute');
      // Track with analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'engagement', {
          'event_category': 'Time',
          'event_label': '1 minute',
          'value': 60
        });
      }
    }
  }
}, 1000);

document.addEventListener('visibilitychange', () => {
  isPageVisible = !document.hidden;
});

// Performance logging
window.addEventListener('load', () => {
  if ('performance' in window) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`Client site page load time: ${pageLoadTime}ms`);
  }
});

// Form field validation hints
const requiredFields = document.querySelectorAll('[required]');
requiredFields.forEach(field => {
  field.addEventListener('invalid', function(e) {
    e.preventDefault();
    this.style.borderColor = '#dc3545';
    
    // Add shake animation
    this.style.animation = 'shake 0.5s';
    setTimeout(() => {
      this.style.animation = '';
    }, 500);
  });
  
  field.addEventListener('input', function() {
    if (this.validity.valid) {
      this.style.borderColor = '';
    }
  });
});

// Add shake animation to styles
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
  }
`;
document.head.appendChild(style);
