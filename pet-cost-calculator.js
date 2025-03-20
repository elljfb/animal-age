document.getElementById('calculate-cost').addEventListener('click', function () {
    const species = document.getElementById('species').value;
    const breedSize = document.getElementById('breed-size').value;
    const lifestyle = document.getElementById('lifestyle').value;
    const grooming = document.getElementById('grooming').checked;
    const insurance = document.getElementById('insurance').checked;
    const training = document.getElementById('training').checked;
  
    // Base costs by species
    let baseCost = 0;
    if (species === "dog") {
      baseCost = (breedSize === "small") ? 1200 : (breedSize === "medium") ? 1500 : 2000;
    } else if (species === "cat") {
      baseCost = 1000;
    } else if (species === "rabbit") {
      baseCost = 500;
    } else if (species === "hamster") {
      baseCost = 300;
    } else if (species === "guinea-pig") {
      baseCost = 400;
    }
  
    // Adjust for lifestyle
    if (lifestyle === "outdoor") {
      baseCost *= 1.2; // Outdoor pets may have higher costs
    } else if (lifestyle === "mixed") {
      baseCost *= 1.1;
    }
  
    // Add additional services
    if (grooming) baseCost += 300;
    if (insurance) baseCost += 500;
    if (training) baseCost += 200;
  
    // Display the result
    document.getElementById('annual-cost').textContent = Math.round(baseCost);
  
    // Display cost breakdown
    const breakdown = `
      <p>Base Cost: $${Math.round(baseCost - (grooming ? 300 : 0) - (insurance ? 500 : 0) - (training ? 200 : 0))}</p>
      ${grooming ? "<p>Grooming: $300</p>" : ""}
      ${insurance ? "<p>Pet Insurance: $500</p>" : ""}
      ${training ? "<p>Training: $200</p>" : ""}
    `;
    document.getElementById('cost-breakdown').innerHTML = breakdown;
  });