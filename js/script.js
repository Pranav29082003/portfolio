/**
 * ==========================================================================
 * Main Application Script (script.js)
 * Acts as the core orchestrator for site-wide UI interactions.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize global UI features
    initNavbarScroll();
    initActiveNavLinkSpy();
});

/**
 * 1. Navbar Scroll Effect
 * Adds a shadow and background opacity change to the header when scrolling down.
 */
function initNavbarScroll() {
    const header = document.querySelector('header');
    
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('nav-scrolled');
            // Pro-tip style addition via JS if you don't add it to style.css manually
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(5px)';
        } else {
            header.classList.remove('nav-scrolled');
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            header.style.background = '#ffffff';
            header.style.backdropFilter = 'none';
        }
    });
}

/**
 * 2. Navigation Scroll Spy
 * Automatically highlights the correct navigation link based on which section 
 * the hiring manager is currently viewing on the screen.
 */
function initActiveNavLinkSpy() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (!sections.length || !navLinks.length) return;

    window.addEventListener('scroll', () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Checks if the user's viewport is mostly within the current section boundary
            if (window.scrollY >= (sectionTop - 150)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            // Apply a simple active color override via JS style injection
            link.style.color = 'var(--text-main)'; 
            
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
                link.style.color = 'var(--accent-color)';
            }
        });
    });
}

/**
 * 3. Utility Global Error Logger
 * Useful helper function for your other module scripts (projects.js, contact.js)
 * to standardize safe runtime error tracking.
 */
window.logPortfolioError = function(moduleName, error) {
    console.error(`[Data Portfolio Exception] Error in module: "${moduleName}" ->`, error);
};