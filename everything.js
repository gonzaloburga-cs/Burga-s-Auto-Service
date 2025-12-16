// Language toggle functionality
let currentLang = 'en';
const toggle = document.getElementById('langToggle');

toggle.addEventListener('click', function() {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    this.classList.toggle('active');
    updateLanguage();
});

function updateLanguage() {
    // Update all elements with data-en and data-es attributes
    document.querySelectorAll('[data-en]').forEach(element => {
        const text = element.getAttribute(`data-${currentLang}`);
        if (text) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        }
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form handler
document.getElementById('estimateForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const message = currentLang === 'en' 
        ? 'Thank you for your request. We\'ll contact you shortly with your estimate.'
        : 'Gracias por su solicitud. Nos pondremos en contacto con usted pronto con su cotización.';
    alert(message);
    this.reset();
});
