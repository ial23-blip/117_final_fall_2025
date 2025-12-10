// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const isOpen = navMenu.classList.contains('active');
    mobileMenuToggle.querySelector('span').textContent = isOpen ? '✕' : '☰';
  });

  // Close menu when clicking a link
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      mobileMenuToggle.querySelector('span').textContent = '☰';
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
      navMenu.classList.remove('active');
      mobileMenuToggle.querySelector('span').textContent = '☰';
    }
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = target.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  } else {
    navbar.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

// Form submission with Zapier webhook
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitButton = this.querySelector('.btn-submit');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Collect form data
    const formData = {
      name: this.querySelector('#name').value,
      email: this.querySelector('#email').value,
      company: this.querySelector('#company').value,
      message: this.querySelector('#message').value,
      budget: this.querySelector('#budget').value,
      timestamp: new Date().toISOString()
    };
    
    // Replace with your actual Zapier webhook URL
    const zapierWebhookURL = 'https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID/';
    
    try {
      const response = await fetch(zapierWebhookURL, {
        method: 'POST',
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        // Success message
        submitButton.textContent = '✓ Message Sent!';
        submitButton.style.backgroundColor = '#10b981';
        
        // Reset form
        this.reset();
        
        // Show success alert
        alert('Thank you for reaching out! I\'ll respond within 24 hours.');
        
        // Reset button after 3 seconds
        setTimeout(() => {
          submitButton.textContent = originalText;
          submitButton.style.backgroundColor = '';
          submitButton.disabled = false;
        }, 3000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Error message
      submitButton.textContent = 'Error - Try Again';
      submitButton.style.backgroundColor = '#ef4444';
      
      alert('Sorry, there was an error submitting the form. Please try emailing directly at contact@aiproductengineer.com');
      
      setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.style.backgroundColor = '';
        submitButton.disabled = false;
      }, 3000);
    }
  });
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
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

// Observe sections
document.querySelectorAll('.service-card, .case-study-card, .testimonial').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  fadeInObserver.observe(el);
});

// Counter animation for metrics
const animateCounters = () => {
  const metrics = document.querySelectorAll('.metric-value');
  
  metrics.forEach(metric => {
    const text = metric.textContent;
    const hasPercent = text.includes('%');
    const hasDollar = text.includes('$');
    const hasK = text.includes('K');
    const hasPlus = text.includes('+');
    
    let target = parseInt(text.replace(/[^0-9]/g, ''));
    let current = 0;
    const increment = target / 50;
    
    const updateCounter = () => {
      if (current < target) {
        current += increment;
        let displayValue = Math.ceil(current);
        
        if (hasDollar && hasK) {
          metric.textContent = `$${displayValue}K`;
        } else if (hasDollar) {
          metric.textContent = `$${displayValue}`;
        } else if (hasPercent) {
          metric.textContent = `${displayValue}%`;
        } else if (hasPlus) {
          metric.textContent = `${displayValue}+`;
        } else {
          metric.textContent = displayValue;
        }
        
        requestAnimationFrame(updateCounter);
      } else {
        metric.textContent = text;
      }
    };
    
    updateCounter();
  });
};

// Trigger counter animation when metrics are visible
const metricsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      metricsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const metricsSection = document.querySelector('.case-study-metrics');
if (metricsSection) {
  metricsObserver.observe(metricsSection);
}

// Email validation with better UX
const emailInput = document.getElementById('email');
if (emailInput) {
  emailInput.addEventListener('blur', function() {
    const email = this.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email && !emailRegex.test(email)) {
      this.style.borderColor = '#ef4444';
      if (!this.nextElementSibling || !this.nextElementSibling.classList.contains('error-message')) {
        const errorMsg = document.createElement('span');
        errorMsg.className = 'error-message';
        errorMsg.style.color = '#ef4444';
        errorMsg.style.fontSize = '0.875rem';
        errorMsg.textContent = 'Please enter a valid email address';
        this.parentNode.appendChild(errorMsg);
      }
    } else {
      this.style.borderColor = '';
      const errorMsg = this.nextElementSibling;
      if (errorMsg && errorMsg.classList.contains('error-message')) {
        errorMsg.remove();
      }
    }
  });
}

// Track page engagement (optional analytics)
let engagementTime = 0;
let isActive = true;

setInterval(() => {
  if (isActive) {
    engagementTime++;
    
    // Log milestone engagements
    if (engagementTime === 30) {
      console.log('User engaged for 30 seconds');
    } else if (engagementTime === 60) {
      console.log('User engaged for 1 minute');
    } else if (engagementTime === 300) {
      console.log('User engaged for 5 minutes');
    }
  }
}, 1000);

// Track if user is active
document.addEventListener('visibilitychange', () => {
  isActive = !document.hidden;
});

// Performance logging
window.addEventListener('load', () => {
  if ('performance' in window) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`Portfolio page load time: ${pageLoadTime}ms`);
    
    // Log Core Web Vitals
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      
      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    }
  }
});
