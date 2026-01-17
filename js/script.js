document.addEventListener('DOMContentLoaded', () => {

    // 1. BUTONI EXPLORE (SMOOTH SCROLL)
    // Ky kod bën që kur klikon butonin, faqja të rrëshqasë lëshueshëm poshtë
    const exploreBtn = document.getElementById('ahExploreBtn');
    
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            const nextSection = document.querySelector('.ah-why-section');
            if (nextSection) {
                window.scrollTo({
                    top: nextSection.offsetTop - 80, // -80px që mos të mbulohet titulli nga navbari
                    behavior: 'smooth'
                });
            }
        });
    }

    // 2. NAVBAR SCROLL EFFECT
    // Ky kod shton një sfond më të errët navbar-it kur fillon me bo scroll
    const navbar = document.querySelector('.ah-navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)'; // Bëhet më e errët
            navbar.style.padding = '10px 0'; // Ngushtohet pak
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.35)'; // Kthehet siç ishte
            navbar.style.padding = '15px 0';
        }
    });

});
// =========================================================
// VARIABLES
// =========================================================
const sendBtn = document.getElementById('send-btn');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const tourType = document.getElementById('tour-type');
const message = document.getElementById('message');
const formStatus = document.getElementById('form-status');

// =========================================================
// HELPER FUNCTION: VALIDATE EMAIL
// =========================================================
function isValidEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  return re.test(String(email).toLowerCase());
}

// =========================================================
// SEND BUTTON CLICK EVENT
// =========================================================
sendBtn.addEventListener('click', function(e) {
  e.preventDefault(); // prevent form default submit

  // =========================================================
  // BASIC VALIDATION
  // =========================================================
  if(fullName.value.trim() === '') {
    formStatus.style.color = 'red';
    formStatus.textContent = 'Please enter your full name.';
    fullName.focus();
    return;
  }

  if(email.value.trim() === '' || !isValidEmail(email.value.trim())) {
    formStatus.style.color = 'red';
    formStatus.textContent = 'Please enter a valid email address.';
    email.focus();
    return;
  }

  if(message.value.trim() === '') {
    formStatus.style.color = 'red';
    formStatus.textContent = 'Please enter your message.';
    message.focus();
    return;
  }

  // =========================================================
  // CREATE FORM DATA OBJECT
  // =========================================================
  const formData = {
    name: fullName.value.trim(),
    email: email.value.trim(),
    tour: tourType.value,
    message: message.value.trim()
  };

  // =========================================================
  // SIMULATED SUBMISSION (replace with real API if needed)
  // =========================================================
  console.log('Form Data Submitted:', formData);

  // =========================================================
  // SHOW SUCCESS MESSAGE
  // =========================================================
  formStatus.style.color = 'green';
  formStatus.textContent = 'Thank you! Your inquiry has been sent.';

  // CLEAR FORM
  fullName.value = '';
  email.value = '';
  message.value = '';
  tourType.selectedIndex = 0;
});
