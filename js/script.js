// ==================== NAVBAR DROPDOWN ====================
const dropdown = document.querySelector('.ah-dropdown');
if (dropdown) {
  const toggleBtn = dropdown.querySelector('.ah-dropdown-toggle'); // butoni që hap dropdown
  const dropdownMenu = dropdown.querySelector('.ah-dropdown-menu');

  if (toggleBtn && dropdownMenu) {
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault(); // vetëm për butonin
      dropdownMenu.classList.toggle('ah-show');
    });

    // Klik jashtë dropdown për ta mbyllur
    window.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdownMenu.classList.remove('ah-show');
      }
    });
  }
}

// ==================== EXPLORE MORE BUTTON ====================
const exploreBtn = document.getElementById('ahExploreBtn');
if (exploreBtn) {
  exploreBtn.addEventListener('click', () => {
    window.location.href = 'places.html'; // vendos faqen që dëshiron
  });
}

// ==================== FORM SUBMISSION (CONTACT.HTML) ====================
const form = document.getElementById('ah-contact-form');
const successAlert = document.getElementById('ah-success-alert');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    if (name && email && message) {
      successAlert.classList.remove('d-none');

      setTimeout(() => {
        successAlert.classList.add('d-none');
        form.reset();
      }, 3000);
    } else {
      alert('Please fill in all fields.');
    }
  });
}

