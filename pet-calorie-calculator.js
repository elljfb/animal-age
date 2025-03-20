document.getElementById('calculate-calories').addEventListener('click', function () {
    const species = document.getElementById('species').value;
    let weight = parseFloat(document.getElementById('weight').value);
    const weightUnit = document.getElementById('weight-unit').value;
    const age = document.getElementById('age').value;
    const activity = document.getElementById('activity').value;
  
    // Convert weight to kg if it's in lbs
    if (weightUnit === "lbs") {
      weight = weight * 0.453592; // 1 lb = 0.453592 kg
    }
  
    let baseCalories = 0;
  
    // Base calorie calculation based on species and weight
    if (species === "dog") {
      baseCalories = 70 * Math.pow(weight, 0.75);
    } else if (species === "cat") {
      baseCalories = 60 * Math.pow(weight, 0.75);
    } else if (species === "rabbit") {
      baseCalories = 50 * Math.pow(weight, 0.75);
    } else if (species === "hamster") {
      baseCalories = 30 * Math.pow(weight, 0.75);
    } else if (species === "guinea-pig") {
      baseCalories = 40 * Math.pow(weight, 0.75);
    }
  
    // Adjust for age
    if (age === "young") {
      baseCalories *= 1.5; // Puppies/kittens need more calories
    } else if (age === "senior") {
      baseCalories *= 0.8; // Seniors need fewer calories
    }
  
    // Adjust for activity level
    if (activity === "low") {
      baseCalories *= 0.9;
    } else if (activity === "high") {
      baseCalories *= 1.2;
    }
  
    // Display the result
    document.getElementById('daily-calories').textContent = Math.round(baseCalories);
  });