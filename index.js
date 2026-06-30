// Initialise Lucide icons
lucide.createIcons();

function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = 'Request sent ✓';
  btn.style.background = '#16A34A';
  btn.disabled = true;
  const phone = '233537041221';
  const msg = encodeURIComponent("Hi! I just filled out the EduTrack demo request form on your website. I'd love to see a demo.");
  setTimeout(() => { window.open(`https://wa.me/${phone}?text=${msg}`, '_blank'); }, 800);
}

// ---- Mobile navigation ----
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navBackdrop = document.querySelector('.nav-backdrop');

function openMenu() {
  navLinks.classList.add('active');
  menuToggle.classList.add('is-active');
  navBackdrop.classList.add('active');
  document.body.classList.add('menu-open');
  menuToggle.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  navLinks.classList.remove('active');
  menuToggle.classList.remove('is-active');
  navBackdrop.classList.remove('active');
  document.body.classList.remove('menu-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.contains('active');
  isOpen ? closeMenu() : openMenu();
});

navBackdrop.addEventListener('click', closeMenu);

// Close the mobile menu whenever a nav link is tapped
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Close on resize back to desktop width
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMenu();
});

// ---- Scroll-triggered pop-in animations ----
const revealEls = document.querySelectorAll('.reveal, .reveal-pop');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));
} else {
  // Fallback: just show everything if IntersectionObserver isn't supported
  revealEls.forEach(el => el.classList.add('is-visible'));
}
