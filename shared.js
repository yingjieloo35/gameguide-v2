// ── Scroll Reveal ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(el => observer.observe(el));

// Stagger grid children
document.querySelectorAll('.hero-grid, .boss-grid, .guide-grid, .quick-grid, .resonance-grid, .heroes-grid, .map-grid').forEach(grid => {
  [...grid.children].forEach((child, i) => {
    child.style.transitionDelay = (i * 0.06) + 's';
  });
});

// ── Mobile Hamburger ──
const hamburger = document.getElementById('hamburger');
const navDrawer = document.getElementById('navDrawer');
if (hamburger && navDrawer) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navDrawer.classList.toggle('open');
  });
  navDrawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navDrawer.classList.remove('open');
    });
  });
}

// ── Filter buttons ──
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const group = btn.closest('.filter-bar');
    group.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    const target = btn.closest('section') || document;
    target.querySelectorAll('[data-category]').forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ── Scroll to anchor from URL hash ──
window.addEventListener('load', () => {
  if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
  }
});
