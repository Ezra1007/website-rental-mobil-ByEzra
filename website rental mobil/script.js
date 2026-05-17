// ── Sticky Navbar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Hamburger Menu (Mobile)
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const iconOpen   = document.getElementById('icon-open');
const iconClose  = document.getElementById('icon-close');

menuToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('mobile-menu-open');
  if (isOpen) {
    closeMobileMenu();
  } else {
    mobileMenu.classList.remove('mobile-menu-closed');
    mobileMenu.classList.add('mobile-menu-open');
    iconOpen.classList.add('hidden');
    iconClose.classList.remove('hidden');
  }
});

function closeMobileMenu() {
  mobileMenu.classList.remove('mobile-menu-open');
  mobileMenu.classList.add('mobile-menu-closed');
  iconOpen.classList.remove('hidden');
  iconClose.classList.add('hidden');
}

// ── Filter Mobil
const filterBtns = document.querySelectorAll('.filter-btn');
const carCards   = document.querySelectorAll('.car-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    carCards.forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.type !== filter);
    });
  });
});

// ── FAQ Toggle
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  document.querySelectorAll('.faq-question').forEach(q => {
    q.classList.remove('open');
    q.nextElementSibling.classList.remove('open');
  });
  if (!isOpen) {
    btn.classList.add('open');
    answer.classList.add('open');
  }
}

// ── Form Submit Kontak
function submitForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = 'Terkirim! ✓';
  btn.style.background = '#16a34a';
  setTimeout(() => {
    btn.textContent = 'Kirim Pesan';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}

// ── Form Submit Booking
function submitBooking(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = 'Booking Dikonfirmasi! ✓';
  btn.style.background = '#16a34a';
  setTimeout(() => {
    btn.textContent = 'Konfirmasi Booking';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}

// ── Scroll Reveal Animation
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));
