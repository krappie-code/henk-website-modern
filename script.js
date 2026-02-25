// Modern Personal Website - Enhanced User Experience
// Author: Henk van Jaarsveld
// Year: 2026

(function() {
    'use strict';

    // DOM Elements
    const header = document.querySelector('.header');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', init);

    function init() {
        setupSmoothScrolling();
        setupMobileNavigation();
        setupScrollEffects();
        setupActiveNavigation();
        setupAccessibility();
    }

    // Smooth scrolling for anchor links
    function setupSmoothScrolling() {
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        const headerHeight = header.offsetHeight;
                        const targetPosition = targetElement.offsetTop - headerHeight - 20;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });

                        // Close mobile menu if open
                        if (navMenu.classList.contains('nav-menu-open')) {
                            toggleMobileNav();
                        }
                    }
                }
            });
        });
    }

    // Mobile navigation functionality
    function setupMobileNavigation() {
        if (!navToggle || !navMenu) return;

        navToggle.addEventListener('click', toggleMobileNav);

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!header.contains(e.target) && navMenu.classList.contains('nav-menu-open')) {
                toggleMobileNav();
            }
        });

        // Close mobile menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('nav-menu-open')) {
                toggleMobileNav();
            }
        });
    }

    function toggleMobileNav() {
        const isOpen = navMenu.classList.contains('nav-menu-open');
        
        navMenu.classList.toggle('nav-menu-open');
        navToggle.setAttribute('aria-expanded', !isOpen);
        
        // Animate hamburger lines
        const lines = navToggle.querySelectorAll('.nav-toggle-line');
        if (!isOpen) {
            lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
        }
    }

    // Header scroll effects
    function setupScrollEffects() {
        let lastScrollTop = 0;
        let isScrolled = false;

        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add/remove scrolled class for styling
            if (scrollTop > 50 && !isScrolled) {
                header.classList.add('header-scrolled');
                isScrolled = true;
            } else if (scrollTop <= 50 && isScrolled) {
                header.classList.remove('header-scrolled');
                isScrolled = false;
            }

            lastScrollTop = scrollTop;
        }

        // Throttle scroll events for performance
        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(function() {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // Active navigation highlighting
    function setupActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        
        function updateActiveNav() {
            const scrollPosition = window.scrollY + header.offsetHeight + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                const correspondingNavLink = document.querySelector(`a[href="#${sectionId}"]`);
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    // Remove active class from all nav links
                    navLinks.forEach(link => link.classList.remove('nav-link-active'));
                    
                    // Add active class to current section's nav link
                    if (correspondingNavLink) {
                        correspondingNavLink.classList.add('nav-link-active');
                    }
                }
            });
        }

        // Throttle scroll events
        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(function() {
                    updateActiveNav();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // Accessibility enhancements
    function setupAccessibility() {
        // Skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: #000;
            color: #fff;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1000;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', function() {
            this.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', function() {
            this.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);

        // Add main id to main element
        const main = document.querySelector('main');
        if (main && !main.id) {
            main.id = 'main';
        }

        // Enhanced keyboard navigation
        document.addEventListener('keydown', function(e) {
            // Focus management for mobile nav
            if (e.key === 'Tab' && navMenu.classList.contains('nav-menu-open')) {
                const focusableElements = navMenu.querySelectorAll('a[href]');
                const firstFocusable = focusableElements[0];
                const lastFocusable = focusableElements[focusableElements.length - 1];
                
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        e.preventDefault();
                        lastFocusable.focus();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        e.preventDefault();
                        firstFocusable.focus();
                    }
                }
            }
        });
    }

    // Performance: Intersection Observer for animations
    function setupIntersectionObserver() {
        if ('IntersectionObserver' in window) {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Observe sections for animation
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                section.classList.add('animate-on-scroll');
                observer.observe(section);
            });
        }
    }

    // Initialize intersection observer after DOM load
    setTimeout(setupIntersectionObserver, 100);

    // Error handling
    window.addEventListener('error', function(e) {
        console.warn('Website error:', e.message);
    });

    // Service Worker registration (for future PWA features)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            // Service worker registration would go here if needed
        });
    }

})();