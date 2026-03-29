// ============================
//  HôpitalPro — main.js
// ============================

// Navbar toggle (mobile)
const navToggle = document.getElementById('navToggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Fermer le menu si on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Formulaire rendez-vous
const rdvForm = document.getElementById('rdvForm');
const formSuccess = document.getElementById('formSuccess');

if (rdvForm) {
  rdvForm.addEventListener('submit', (e) => {
    e.preventDefault();
    rdvForm.style.display = 'none';
    formSuccess.style.display = 'block';
  });
}

// Animation des chiffres (stats)
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const step = Math.ceil(target / (duration / 16));
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target + (el.dataset.suffix || '');
      clearInterval(timer);
    } else {
      el.textContent = start + (el.dataset.suffix || '');
    }
  }, 16);
}

// Observer pour déclencher l'animation quand la section est visible
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.big-number').forEach(el => {
          const rawText = el.textContent;
          const num = parseInt(rawText.replace(/\D/g, ''));
          const suffix = rawText.replace(/[0-9]/g, '');
          el.dataset.suffix = suffix;
          animateCounter(el, num);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsSection);
}

// Recherche dans les tableaux (patients / médecins)
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll('.data-table tbody tr').forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(query) ? '' : 'none';
    });
  });
}
