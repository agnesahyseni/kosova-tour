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

