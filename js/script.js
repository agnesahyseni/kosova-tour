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
const form = document.getElementById("ah-contact-form");
const statusMsg = document.getElementById("form-status");

if (form) {  // <-- Kjo e bën safe
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    statusMsg.style.color = "#004b8d";
    statusMsg.textContent = "Sending message...";

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mvzzzvgz", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        statusMsg.style.color = "green";
        statusMsg.textContent = "Message sent successfully ✅";
        form.reset();
      } else {
        statusMsg.style.color = "red";
        statusMsg.textContent = "Something went wrong ❌";
      }
    } catch (error) {
      statusMsg.style.color = "red";
      statusMsg.textContent = "Network error ❌";
    }
  });
}

