/**
 * AnimalAge.info - Pet Age Calculator
 * Accurate age conversion with life stage identification
 */

// ================================
// CALCULATOR LOGIC
// ================================

/**
 * Convert pet age to human equivalent age
 * @param {number} petAge - Age in pet years
 * @param {string} species - Pet species (cat, dog, rabbit)
 * @param {string} size - Dog size category (small, medium, large)
 * @returns {number} Human equivalent age
 */
function calculateHumanAge(petAge, species, size = null) {
    let humanAge = 0;

    if (species === 'cat') {
        humanAge = calculateCatAge(petAge);
    } else if (species === 'dog') {
        humanAge = calculateDogAge(petAge, size);
    } else if (species === 'rabbit') {
        humanAge = calculateRabbitAge(petAge);
    }

    return Math.round(humanAge);
}

/**
 * Cat Age Calculation - 15/9/4 Rule
 * First year = 15 human years
 * Second year = 9 human years
 * Each additional year = 4 human years
 */
function calculateCatAge(catAge) {
    if (catAge <= 0) return 0;
    if (catAge === 1) return 15;
    if (catAge === 2) return 15 + 9;
    return 15 + 9 + (catAge - 2) * 4;
}

/**
 * Dog Age Calculation - Logarithmic Formula
 * Age_human = 16 * ln(Age_dog) + 31
 * Accounts for variation by dog size
 */
function calculateDogAge(dogAge, size = 'medium') {
    if (dogAge <= 0) return 0;

    // Base logarithmic formula
    let humanAge = 16 * Math.log(dogAge) + 31;

    // Adjust for dog size
    if (size === 'small') {
        humanAge *= 1.05; // Small dogs age slightly slower
    } else if (size === 'large') {
        humanAge *= 0.95; // Large dogs age slightly faster
    }

    return humanAge;
}

/**
 * Rabbit Age Calculation - 12/8/4 Rule
 * First year = 12 human years
 * Second year = 8 human years
 * Each additional year = 4 human years
 */
function calculateRabbitAge(rabbitAge) {
    if (rabbitAge <= 0) return 0;
    if (rabbitAge === 1) return 12;
    if (rabbitAge === 2) return 12 + 8;
    return 12 + 8 + (rabbitAge - 2) * 4;
}

// ================================
// LIFE STAGE IDENTIFICATION
// ================================

/**
 * Determine life stage based on human equivalent age
 * @param {number} humanAge - Human equivalent age
 * @param {string} species - Pet species
 * @returns {object} Life stage information
 */
function getLifeStage(humanAge, species) {
    let stage = {
        name: '',
        description: '',
        care: ''
    };

    // Generalized life stages
    if (humanAge < 18) {
        stage.name = 'Young/Adolescent';
        stage.description = 'Your pet is in their youth with high energy and learning potential.';
        stage.care = 'Focus on proper nutrition, training, and socialization.';
    } else if (humanAge < 55) {
        stage.name = 'Adult';
        stage.description = 'Your pet is in their prime adult years.';
        stage.care = 'Maintain regular exercise, balanced diet, and preventive healthcare.';
    } else if (humanAge < 75) {
        stage.name = 'Senior';
        stage.description = 'Your pet is entering their senior years.';
        stage.care = 'Monitor health closely, adjust diet for senior needs, ensure comfort.';
    } else {
        stage.name = 'Geriatric';
        stage.description = 'Your pet is a senior companion requiring specialized care.';
        stage.care = 'Focus on quality of life, pain management, and frequent vet checkups.';
    }

    return stage;
}

// ================================
// DOM INTERACTION & FORM HANDLING
// ================================

/**
 * Initialize calculator on page load
 */
document.addEventListener('DOMContentLoaded', function() {
    const calculatorForm = document.getElementById('ageCalculatorForm');
    
    if (calculatorForm) {
        calculatorForm.addEventListener('submit', handleCalculatorSubmit);
        
        // Update form fields based on species selection
        const speciesSelect = document.getElementById('species');
        const sizeGroup = document.getElementById('sizeGroup');
        
        if (speciesSelect) {
            speciesSelect.addEventListener('change', function() {
                if (this.value === 'dog' && sizeGroup) {
                    sizeGroup.style.display = 'block';
                } else if (sizeGroup) {
                    sizeGroup.style.display = 'none';
                }
            });
        }
    }
    
    // Set up mobile menu toggle
    setupMobileMenu();
});

/**
 * Handle calculator form submission
 */
function handleCalculatorSubmit(event) {
    event.preventDefault();

    const species = document.getElementById('species').value;
    const petAge = parseFloat(document.getElementById('petAge').value);
    const size = document.getElementById('size')?.value || 'medium';

    // Validation
    if (!species || isNaN(petAge) || petAge < 0) {
        alert('Please enter valid information');
        return;
    }

    // Calculate human age
    const humanAge = calculateHumanAge(petAge, species, size);

    // Get life stage
    const lifeStage = getLifeStage(humanAge, species);

    // Display results
    displayResults(humanAge, lifeStage);
}

/**
 * Display calculator results
 */
function displayResults(humanAge, lifeStage) {
    const resultBox = document.getElementById('calculatorResult');
    
    if (resultBox) {
        resultBox.innerHTML = `
            <div class="result-value">${humanAge} Human Years</div>
            <div class="result-stage">
                <strong>Life Stage:</strong> ${lifeStage.name}
            </div>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid var(--border-color);">
                <p style="margin: 10px 0;">${lifeStage.description}</p>
                <p style="margin: 10px 0;"><strong>Care Tips:</strong> ${lifeStage.care}</p>
            </div>
        `;
        
        resultBox.classList.add('show');
        
        // Scroll to results
        resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// ================================
// MOBILE MENU
// ================================

/**
 * Set up mobile menu toggle functionality
 */
function setupMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('active');
            });
        });
    }
}

// ================================
// UTILITY FUNCTIONS
// ================================

/**
 * Format age with appropriate unit
 */
function formatAge(age, unit = 'years') {
    return `${age} ${unit}`;
}

/**
 * Get color code based on life stage
 */
function getStageColor(stageName) {
    const colors = {
        'Young/Adolescent': '#52b788',
        'Adult': '#2d5a3d',
        'Senior': '#d4a574',
        'Geriatric': '#c44536'
    };
    return colors[stageName] || '#4a7c8c';
}
