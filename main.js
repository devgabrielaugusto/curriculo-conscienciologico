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

// Retractable Sections Logic
const toggleSections = document.querySelectorAll('.toggle-section');

toggleSections.forEach(sectionTitle => {
    sectionTitle.addEventListener('click', () => {
        const icon = sectionTitle.querySelector('.toggle-icon');
        let wrapper = sectionTitle.nextElementSibling;
        
        if (wrapper && wrapper.classList.contains('section-content-wrapper')) {
            wrapper.classList.toggle('collapsed');
            if (icon) {
                icon.classList.toggle('collapsed');
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
