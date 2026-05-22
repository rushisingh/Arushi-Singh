/* ══════════════════════════════════════
   ARUSHI SINGH PORTFOLIO — script.js
   ══════════════════════════════════════ */

// ─── Section Routing ───────────────────
function showSection(id) {
  // Hide all
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Show target
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update nav link active state
  updateActiveNav(id);
}

function updateActiveNav(activeId) {
  document.querySelectorAll('.nav-links a, .footer-nav a').forEach(a => {
    a.style.color = '';
  });
}

// ─── Mobile Menu ───────────────────────
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// ─── Navbar Scroll Effect ──────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 4px 40px rgba(0,0,0,0.4)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// ─── Contact Form ──────────────────────
function handleSubmit(e) {
  e.preventDefault();
  const note = document.getElementById('formNote');
  note.textContent = 'Message sent! I'll get back to you soon.';
  e.target.reset();
  setTimeout(() => { note.textContent = ''; }, 5000);
}

// ─── Intersection Observer for Animations ─
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe animated elements
function initAnimations() {
  const animatables = document.querySelectorAll(
    '.timeline-item, .edu-card, .paper-item, .blog-card, .skill-tags span'
  );
  animatables.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`;
    observer.observe(el);
  });
}

// ─── Init ──────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Show home by default
  showSection('home');
  initAnimations();

  // Re-init animations when section changes
  document.querySelectorAll('.nav-links a, .footer-nav a').forEach(link => {
    link.addEventListener('click', () => {
      setTimeout(initAnimations, 100);
    });
  });
});
