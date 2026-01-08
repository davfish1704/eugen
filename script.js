// ===================================
// Mobile Navigation Toggle
// ===================================
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  // Toggle mobile menu
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Close menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });
}

// ===================================
// Smooth Scroll for Navigation Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');

    // Skip if href is just "#"
    if (targetId === '#' || targetId === '#impressum' || targetId === '#datenschutz' || targetId === '#agb') {
      return;
    }

    const target = document.querySelector(targetId);
    if (target) {
      const headerOffset = 70; // Height of fixed nav
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===================================
// Fixed Navigation on Scroll
// ===================================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

// ===================================
// Form Validation
// ===================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  const submitButton = contactForm.querySelector('button[type="submit"]');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Clear previous errors and success messages
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    document.querySelectorAll('.success-message').forEach(el => el.remove());

    // Get form fields
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');

    let isValid = true;

    // Reset border colors
    [name, email, phone, message].forEach(field => {
      if (field) field.style.borderColor = '#e0e0e0';
    });

    // Validate name
    if (name.value.trim() === '') {
      showError(name, 'Bitte geben Sie Ihren Namen ein');
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      showError(email, 'Bitte geben Sie eine gültige E-Mail-Adresse ein');
      isValid = false;
    }

    // Validate phone
    if (phone.value.trim() === '') {
      showError(phone, 'Bitte geben Sie Ihre Telefonnummer ein');
      isValid = false;
    }

    // Validate message
    if (message.value.trim() === '') {
      showError(message, 'Bitte geben Sie eine Nachricht ein');
      isValid = false;
    }

    // If valid, simulate submission
    if (isValid) {
      const originalButtonText = submitButton.textContent;
      submitButton.textContent = 'Wird gesendet...';
      submitButton.disabled = true;

      // Simulate API call (replace with actual submission in production)
      setTimeout(() => {
        showSuccess(submitButton);
        contactForm.reset();
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
      }, 1500);
    }
  });
}

// Helper function to show error message
function showError(input, message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  errorDiv.style.color = '#d32f2f';
  errorDiv.style.fontSize = '14px';
  errorDiv.style.marginTop = '5px';

  input.parentElement.appendChild(errorDiv);
  input.style.borderColor = '#d32f2f';
}

// Helper function to show success message
function showSuccess(submitButton) {
  const successDiv = document.createElement('div');
  successDiv.className = 'success-message';
  successDiv.textContent = 'Vielen Dank! Wir melden uns zeitnah bei Ihnen.';
  successDiv.style.color = '#1a4d2e';
  successDiv.style.fontSize = '16px';
  successDiv.style.marginTop = '20px';
  successDiv.style.padding = '15px';
  successDiv.style.background = '#e8f5e9';
  successDiv.style.border = '1px solid #1a4d2e';

  submitButton.parentElement.appendChild(successDiv);

  // Remove success message after 5 seconds
  setTimeout(() => successDiv.remove(), 5000);
}
