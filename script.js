/* ================================
   RETFORD REPORT - JAVASCRIPT
   Easy to customize functionality
   ================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ================================
    // MOBILE MENU TOGGLE
    // ================================
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Animate hamburger icon
            this.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !mainNav.contains(e.target)) {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
        
        // Close menu when window is resized to desktop size
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
    
    
    // ================================
    // SHARE BUTTONS FUNCTIONALITY
    // ================================
    const shareButtons = document.querySelectorAll('.share-btn');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            const url = window.location.href;
            const title = document.title;
            
            let shareUrl = '';
            
            switch(platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
                    break;
                case 'email':
                    shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent('Check out this article: ' + url)}`;
                    break;
            }
            
            if (shareUrl) {
                if (platform === 'email') {
                    window.location.href = shareUrl;
                } else {
                    window.open(shareUrl, '_blank', 'width=600,height=400');
                }
            }
        });
    });
    
    
    // ================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    
    // ================================
    // LAZY LOADING IMAGES
    // ================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });
        
        // Observe all images with data-src attribute
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    
    // ================================
    // READING PROGRESS BAR (for article pages)
    // ================================
    const articleContent = document.querySelector('.article-content');
    
    if (articleContent) {
        // Create progress bar
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
            width: 0%;
            z-index: 1000;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
        
        // Update progress on scroll
        window.addEventListener('scroll', function() {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / documentHeight) * 100;
            
            progressBar.style.width = progress + '%';
        });
    }
    
    
    // ================================
    // PRINT ARTICLE FUNCTION
    // ================================
    function createPrintButton() {
        const articleHeader = document.querySelector('.article-header');
        if (articleHeader) {
            const printBtn = document.createElement('button');
            printBtn.className = 'print-btn';
            printBtn.textContent = '🖨 Print Article';
            printBtn.style.cssText = `
                padding: 8px 16px;
                background-color: var(--background-light);
                border: 1px solid var(--border-color);
                border-radius: 5px;
                cursor: pointer;
                font-family: 'Helvetica Neue', Arial, sans-serif;
                font-size: 0.85rem;
                margin-top: 10px;
            `;
            
            printBtn.addEventListener('click', function() {
                window.print();
            });
            
            articleHeader.appendChild(printBtn);
        }
    }
    
    createPrintButton();
    
    
    // ================================
    // STICKY SIDEBAR (on scroll)
    // ================================
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebar && window.innerWidth > 968) {
        const sidebarTop = sidebar.offsetTop;
        const mainContent = document.querySelector('.main-content');
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > sidebarTop - 100) {
                const maxScroll = mainContent.offsetHeight - sidebar.offsetHeight;
                const currentScroll = window.scrollY - sidebarTop + 100;
                
                if (currentScroll < maxScroll) {
                    sidebar.style.position = 'sticky';
                    sidebar.style.top = '100px';
                }
            } else {
                sidebar.style.position = 'static';
            }
        });
    }
    
    
    // ================================
    // SEARCH FUNCTIONALITY (placeholder)
    // Customize this when you add a search feature
    // ================================
    function initializeSearch() {
        // Add a search box to the header if needed
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.addEventListener('input', function(e) {
                const searchTerm = e.target.value.toLowerCase();
                // Implement your search logic here
                console.log('Searching for:', searchTerm);
            });
        }
    }
    
    initializeSearch();
    
    
    // ================================
    // LOCAL STORAGE FOR USER PREFERENCES
    // Save font size preference, dark mode, etc.
    // ================================
    function initializeUserPreferences() {
        // Check if user has saved preferences
        const savedFontSize = localStorage.getItem('fontSize');
        if (savedFontSize) {
            document.body.style.fontSize = savedFontSize;
        }
        
        // Example: Add font size controls
        // You can add buttons to increase/decrease font size
    }
    
    // Note: localStorage usage is commented out as per guidelines
    // Uncomment if using in your own environment
    // initializeUserPreferences();
    
    
    // ================================
    // NEWSLETTER SIGNUP (placeholder)
    // ================================
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Add your newsletter signup logic here
            // For now, just show a confirmation
            alert('Thank you for subscribing! Email: ' + email);
            this.reset();
        });
    }
    
    
    // ================================
    // BACK TO TOP BUTTON
    // ================================
    function createBackToTopButton() {
        const backToTop = document.createElement('button');
        backToTop.className = 'back-to-top';
        backToTop.innerHTML = '↑';
        backToTop.setAttribute('aria-label', 'Back to top');
        backToTop.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1.5rem;
            display: none;
            z-index: 1000;
            transition: all 0.3s ease;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        `;
        
        document.body.appendChild(backToTop);
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        });
        
        // Scroll to top when clicked
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Hover effect
        backToTop.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'var(--accent-color)';
            this.style.transform = 'scale(1.1)';
        });
        
        backToTop.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'var(--primary-color)';
            this.style.transform = 'scale(1)';
        });
    }
    
    createBackToTopButton();
    
    
    // ================================
    // ANALYTICS TRACKING (placeholder)
    // ================================
    function trackPageView() {
        // Add your analytics code here (Google Analytics, etc.)
        console.log('Page view tracked:', window.location.pathname);
    }
    
    trackPageView();
    
    
    // ================================
    // IMAGE MODAL/LIGHTBOX (for article images)
    // ================================
    const articleImages = document.querySelectorAll('.article-content img, .article-image img');
    
    articleImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            // Create modal
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0,0,0,0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                cursor: pointer;
            `;
            
            const modalImg = document.createElement('img');
            modalImg.src = this.src;
            modalImg.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
            `;
            
            modal.appendChild(modalImg);
            document.body.appendChild(modal);
            
            // Close modal on click
            modal.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
            
            // Close modal on escape key
            document.addEventListener('keydown', function escapeKey(e) {
                if (e.key === 'Escape' && document.body.contains(modal)) {
                    document.body.removeChild(modal);
                    document.removeEventListener('keydown', escapeKey);
                }
            });
        });
    });
    
    
    // ================================
    // CONSOLE MESSAGE
    // ================================
    console.log('%cRetford Report', 'font-size: 24px; color: #2c5530; font-weight: bold;');
    console.log('%cYour Local Voice', 'font-size: 14px; color: #666; font-style: italic;');
    console.log('Website loaded successfully!');
    
});


// ================================
// UTILITY FUNCTIONS
// ================================

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
}

// Truncate text to specified length
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}