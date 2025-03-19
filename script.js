document.getElementById('calculate').addEventListener('click', function () {
    const petType = document.getElementById('pet-type').value;
    const petAge = parseInt(document.getElementById('pet-age').value);
    let humanAge = 0;
  
    switch (petType) {
      case 'dog-small':
        humanAge = 16 * Math.log(petAge) + 31; // Logarithmic formula
        break;
      case 'dog-medium':
        humanAge = (petAge <= 2) ? 15 + 10 * (petAge - 1) : 25 + 5 * (petAge - 2);
        break;
      case 'dog-large':
        humanAge = (petAge <= 2) ? 15 + 12 * (petAge - 1) : 27 + 7 * (petAge - 2);
        break;
      case 'cat':
        humanAge = (petAge <= 2) ? 15 + 9 * (petAge - 1) : 24 + 4 * (petAge - 2);
        break;
      case 'rabbit':
        humanAge = (petAge <= 1) ? 20 : 20 + 8 + 4 * (petAge - 2);
        break;
      case 'hamster':
        humanAge = (petAge <= 0.5) ? 20 : 20 + 2 * (petAge - 0.5) * 12;
        break;
      case 'guinea-pig':
        humanAge = (petAge <= 1) ? 20 : 20 + 10 * (petAge - 1);
        break;
      case 'bird':
        humanAge = (petAge <= 1) ? 10 : 10 + 4 * (petAge - 1);
        break;
      case 'reptile':
        humanAge = (petAge <= 1) ? 5 : 5 + 2 * (petAge - 1);
        break;
    }
  
    document.getElementById('human-age').textContent = Math.round(humanAge);
  });