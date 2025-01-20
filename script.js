// Enable AOS (Animate On Scroll) animations
AOS.init({
    duration: 1200, // Animation duration
    easing: 'ease-in-out', // Animation easing
    once: true, // Only animate once
});

// Scroll to section smoothly when clicking navbar links
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust scroll position to prevent navbar overlap
            behavior: 'smooth'
        });
    });
});

// Navbar toggle animation (add an effect when toggling the menu on mobile)
const navbarToggler = document.querySelector('.navbar-toggler');
navbarToggler.addEventListener('click', function() {
    navbarToggler.classList.toggle('toggled');
});

// Smooth scroll to the top button (optional feature)
const scrollTopBtn = document.createElement('button');
scrollTopBtn.classList.add('scroll-top-btn');
scrollTopBtn.innerHTML = '&#8679;';
scrollTopBtn.style.position = 'fixed';
scrollTopBtn.style.bottom = '20px';
scrollTopBtn.style.right = '20px';
scrollTopBtn.style.backgroundColor = '#ff7f50';
scrollTopBtn.style.color = '#fff';
scrollTopBtn.style.border = 'none';
scrollTopBtn.style.borderRadius = '50%';
scrollTopBtn.style.padding = '10px 15px';
scrollTopBtn.style.fontSize = '20px';
scrollTopBtn.style.cursor = 'pointer';
scrollTopBtn.style.display = 'none';

document.body.appendChild(scrollTopBtn);

// Show scroll-to-top button when the user scrolls down
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Smooth scroll back to the top when the user clicks the button
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form validation (basic example)
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Check if the form inputs are empty
    const name = document.querySelector('input[type="text"]');
    const email = document.querySelector('input[type="email"]');
    const message = document.querySelector('textarea');

    if (name.value === '' || email.value === '' || message.value === '') {
        alert('Please fill in all fields.');
    } else {
        alert('Message sent successfully!');
        form.reset(); // Clear the form
    }
});
document.querySelectorAll('.tabs_tab__MqM7o').forEach(tab => {
    tab.addEventListener('click', (e) => {
        // Remove active state from all tabs and hide all panels
        document.querySelectorAll('.tabs_tab__MqM7o').forEach(t => t.setAttribute('aria-selected', 'false'));
        document.querySelectorAll('.tabs_tabPanel__8cvkH').forEach(panel => panel.setAttribute('hidden', ''));
        
        // Set the clicked tab to active
        e.target.setAttribute('aria-selected', 'true');
        
        // Show the corresponding panel
        const panelId = e.target.getAttribute('aria-controls');
        document.getElementById(panelId).removeAttribute('hidden');
    });
});
