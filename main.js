// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Element stays revealed after scrolling past
        }
    });
};

const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.borderBottom = '1px solid rgba(0,0,0,0.08)';
        navbar.style.padding = '1rem 0';
    } else {
        navbar.style.borderBottom = '1px solid transparent';
        navbar.style.padding = '1.5rem 0';
    }
});

// Adjust form iframe height dynamically based on content (Optional, but helps with UX)
// For cross-origin iframe (Google Forms), we can't fully auto-resize, but we give it a good default height in CSS/HTML.

// Main Tabs Logic
const mainTabBtns = document.querySelectorAll('.main-tab-btn');
const mainTabContents = document.querySelectorAll('.main-tab-content');

mainTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        
        // Remove active class from all main buttons
        mainTabBtns.forEach(b => b.classList.remove('active'));
        
        // Hide all main content sections
        mainTabContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Show target content section
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});

// Sync Navbar links with Main Tabs
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href').substring(1); // e.g., 'gescons'
        
        // Find if there is a main tab button for this section
        const matchingTabBtn = document.querySelector(`.main-tab-btn[data-target="${targetId}"]`);
        if (matchingTabBtn) {
            e.preventDefault();
            
            // Programmatically click/activate the tab
            matchingTabBtn.click();
            
            // Scroll to the main tabs container
            const tabsContainer = document.querySelector('.main-tabs-container');
            if (tabsContainer) {
                tabsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// Tabs Logic
const tabBtns = document.querySelectorAll('.tab-btn');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabsContainer = btn.closest('.section-content');
        const containerBtns = tabsContainer.querySelectorAll('.tab-btn');
        const containerContents = tabsContainer.querySelectorAll('.tab-content');
        
        // Remove active class from all buttons and contents in container
        containerBtns.forEach(b => b.classList.remove('active'));
        containerContents.forEach(c => c.style.display = 'none');
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Show corresponding content
        const targetId = btn.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.style.display = 'block';
        }
    });
});
