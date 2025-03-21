document.addEventListener('DOMContentLoaded', function() {
    // Create and insert the hamburger menu button
    const nav = document.querySelector('nav');
    const navList = nav.querySelector('ul');
    
    // Create hamburger button
    const hamburger = document.createElement('div');
    hamburger.className = 'nav-toggle';
    hamburger.innerHTML = '☰';
    nav.insertBefore(hamburger, navList);
    
    // Toggle menu on click
    hamburger.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && navList.classList.contains('active')) {
            navList.classList.remove('active');
        }
    });
    
    // Close menu when clicking a link
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
        });
    });
}); 