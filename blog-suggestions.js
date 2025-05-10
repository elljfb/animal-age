// Function to get all blog posts
async function getAllBlogPosts() {
    try {
        const response = await fetch('/blog/index.html');
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Get all blog post links and their descriptions from the index page
        const blogLinks = Array.from(doc.querySelectorAll('article.blog-preview'))
            .map(article => {
                const title = article.querySelector('h2');
                const link = article.querySelector('a.read-more');
                const description = article.querySelector('.blog-preview-content p');
                const image = article.querySelector('.blog-preview-image img');
                return {
                    title: title ? title.textContent.trim() : '',
                    url: link ? link.href : '',
                    description: description ? description.textContent.trim() : '',
                    image: image ? image.src : ''
                };
            })
            .filter(post => post.url.includes('.html')); // Only include HTML files
            
        return blogLinks;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }
}

// Function to get random suggestions
function getRandomSuggestions(allPosts, currentPost, count = 2) {
    // Filter out the current post
    const otherPosts = allPosts.filter(post => !post.url.includes(currentPost));
    
    // Shuffle array and get first 'count' items
    const shuffled = otherPosts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Function to create and insert the suggestions section
async function insertBlogSuggestions() {
    const currentPost = window.location.pathname.split('/').pop();
    const allPosts = await getAllBlogPosts();
    const suggestions = getRandomSuggestions(allPosts, currentPost);
    
    // Create suggestions section
    const suggestionsSection = document.createElement('section');
    suggestionsSection.className = 'blog-suggestions';
    suggestionsSection.innerHTML = `
        <h2>You might also like:</h2>
        <div class="suggestions-grid">
            ${suggestions.map(post => `
                <article class="suggestion-card">
                    ${post.image ? `<div class="suggestion-image">
                        <img src="${post.image}" alt="${post.title}">
                    </div>` : ''}
                    <div class="suggestion-content">
                        <h3><a href="${post.url}">${post.title}</a></h3>
                        <p>${post.description}</p>
                        <a href="${post.url}" class="read-more">Read More</a>
                    </div>
                </article>
            `).join('')}
        </div>
    `;
    
    // Insert before the footer
    const footer = document.querySelector('footer');
    if (footer) {
        footer.parentNode.insertBefore(suggestionsSection, footer);
    }
}

// Run when the page loads
document.addEventListener('DOMContentLoaded', insertBlogSuggestions); 