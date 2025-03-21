document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculate');
    const petTypeSelect = document.getElementById('pet-type');
    const petAgeInput = document.getElementById('pet-age');
    const humanAgeSpan = document.getElementById('human-age');

    calculateButton.addEventListener('click', calculateHumanAge);
    petAgeInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calculateHumanAge();
        }
    });

    function calculateHumanAge() {
        const petType = petTypeSelect.value;
        const age = parseFloat(petAgeInput.value);

        if (isNaN(age) || age < 0) {
            alert('Please enter a valid age');
            return;
        }

        let humanAge = 0;

        switch (petType) {
            case 'dog-small':
                humanAge = 16 * Math.log(age) + 31; // Logarithmic formula
                break;
            case 'dog-medium':
                humanAge = (age <= 2) ? 15 + 10 * (age - 1) : 25 + 5 * (age - 2);
                break;
            case 'dog-large':
                humanAge = (age <= 2) ? 15 + 12 * (age - 1) : 27 + 7 * (age - 2);
                break;
            case 'cat':
                humanAge = (age <= 2) ? 15 + 9 * (age - 1) : 24 + 4 * (age - 2);
                break;
            case 'rabbit':
                humanAge = (age <= 1) ? 20 : 20 + 8 + 4 * (age - 2);
                break;
            case 'hamster':
                humanAge = (age <= 0.5) ? 20 : 20 + 2 * (age - 0.5) * 12;
                break;
            case 'guinea-pig':
                humanAge = (age <= 1) ? 20 : 20 + 10 * (age - 1);
                break;
            case 'bird':
                humanAge = (age <= 1) ? 10 : 10 + 4 * (age - 1);
                break;
            case 'reptile':
                humanAge = (age <= 1) ? 5 : 5 + 2 * (age - 1);
                break;
        }

        humanAge = Math.round(humanAge);
        humanAgeSpan.textContent = humanAge + ' years';
    }
}); 