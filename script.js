// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section id from the href
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Smooth scroll to the target
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Account for fixed header
                behavior: 'smooth'
            });
        });
    });
    
    // Add animation on scroll for elements
    const animateOnScroll = () => {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (sectionPosition < screenPosition) {
                section.classList.add('active');
            }
        });
    };
    
    // Initial check on page load
    animateOnScroll();
    
    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
    
    // Update copyright year
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        const year = new Date().getFullYear();
        footerYear.innerHTML = footerYear.innerHTML.replace('2023', year);
    }

    const fadeEls = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    fadeEls.forEach(el => observer.observe(el));
}); 