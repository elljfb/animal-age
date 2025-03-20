// Predefined lists of names
const petNames = {
    dog: {
      male: ["Max", "Buddy", "Charlie", "Rocky", "Cooper", "Jack", "Bear", "Duke", "Toby", "Zeus"],
      female: ["Bella", "Lucy", "Daisy", "Luna", "Sadie", "Molly", "Lola", "Sophie", "Chloe", "Zoe"]
    },
    cat: {
      male: ["Oliver", "Leo", "Milo", "Simba", "Jack", "Loki", "Oscar", "Max", "Charlie", "Tiger"],
      female: ["Lily", "Chloe", "Sophie", "Mia", "Nala", "Luna", "Bella", "Lucy", "Daisy", "Zoe"]
    },
    rabbit: {
      male: ["Thumper", "Oreo", "Bunny", "Coco", "Snowball", "Peanut", "Max", "Charlie", "Simba", "Oliver"],
      female: ["Daisy", "Lola", "Bella", "Molly", "Honey", "Lily", "Chloe", "Sophie", "Mia", "Nala"]
    },
    bird: {
      male: ["Blue", "Sunny", "Rio", "Sky", "Charlie", "Max", "Buddy", "Rocky", "Tweety", "Kiwi"],
      female: ["Sunny", "Sky", "Luna", "Bella", "Daisy", "Molly", "Lola", "Sophie", "Chloe", "Zoe"]
    },
    hamster: {
      male: ["Peanut", "Nibbles", "Max", "Buddy", "Charlie", "Rocky", "Simba", "Oliver", "Toby", "Zeus"],
      female: ["Luna", "Bella", "Daisy", "Molly", "Lola", "Sophie", "Chloe", "Zoe", "Nala", "Mia"]
    },
    "guinea-pig": {
      male: ["Peanut", "Nibbles", "Max", "Buddy", "Charlie", "Rocky", "Simba", "Oliver", "Toby", "Zeus"],
      female: ["Luna", "Bella", "Daisy", "Molly", "Lola", "Sophie", "Chloe", "Zoe", "Nala", "Mia"]
    }
  };
  
  // Generate a random name
  document.getElementById('generate-name').addEventListener('click', function () {
    const species = document.getElementById('species').value;
    const gender = document.getElementById('gender').value;
    const nameList = petNames[species][gender];
    const randomName = nameList[Math.floor(Math.random() * nameList.length)];
  
    // Display the generated name
    document.getElementById('generated-name').textContent = randomName;
  });