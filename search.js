// List of all animal pages
const animalPages = [
    'aardvark.html', 'aardwolf.html', 'african-elephant.html', 'african-lion.html',
    'african-wild-dog.html', 'alpine-ibex.html', 'amazon-rainforest-frog.html',
    'american-bison.html', 'anteater.html', 'arabian-horse.html', 'arabian-oryx.html',
    'arctic-fox.html', 'arowana.html', 'asian-elephant.html', 'atlantic-puffin.html',
    'atlantic-spotted-dolphin.html', 'australian-fur-seal.html', 'axolotl.html',
    'aye-aye.html', 'bairds-tapir.html', 'bald-eagle.html', 'banded-palm-civet.html',
    'barbary-macaque.html', 'basking-shark.html', 'bearded-dragon.html', 'bengal-fox.html',
    'bengal-tiger.html', 'black-rhinoceros.html', 'blobfish.html', 'blue-footed-booby.html',
    'blue-jay.html', 'blue-morpho-butterfly.html', 'blue-ringed-octopus.html', 'blue-whale.html',
    'bonobo.html', 'bornean-orangutan.html', 'bottlenose-dolphin.html', 'boxer-dog.html',
    'brazilian-wandering-spider.html', 'brown-bear.html', 'burmese-python.html', 'capybara.html',
    'cat.html', 'cheetah.html', 'chimpanzee.html', 'chinese-giant-salamander.html',
    'clownfish.html', 'coelacanth.html', 'common-dolphin.html', 'common-snapping-turtle.html',
    'coquerels-sifaka.html', 'dalmatian-dog.html', 'dhole.html', 'dingo.html', 'dugong.html',
    'eastern-gorilla.html', 'echidna.html', 'electric-eel.html', 'emperor-penguin.html',
    'emperor-tamarin.html', 'european-hedgehog.html', 'fennec-fox.html', 'fire-salamander.html',
    'flying-fox.html', 'fossa.html', 'frilled-lizard.html', 'galliformes.html',
    'galapagos-penguin.html', 'galapagos-tortoise.html', 'gaur.html', 'gerenuk.html',
    'gharial.html', 'giant-pacific-octopus.html', 'giant-panda.html', 'gila-monster.html',
    'glass-frog.html', 'goblin-shark.html', 'golden-lion-tamarin.html',
    'golden-poison-dart-frog.html', 'great-white-shark.html', 'green-anaconda.html',
    'green-sea-turtle.html', 'grevys-zebra.html', 'hagfish.html', 'harp-seal.html',
    'harpy-eagle.html', 'hippopotamus.html', 'horseshoe-crab.html', 'hummingbird.html',
    'humpback-whale.html', 'iberian-lynx.html', 'indri.html', 'japanese-giant-hornet.html',
    'japanese-macaque.html', 'kakapo.html', 'kangaroo-rat.html', 'king-cobra.html',
    'kiwi.html', 'komodo-dragon.html', 'leaf-tailed-gecko.html', 'leafy-sea-dragon.html',
    'lemur.html', 'lion-tailed-macaque.html', 'lyrebird.html', 'malayan-krait.html',
    'manatee.html', 'mandrill.html', 'maned-wolf.html', 'mantis-shrimp.html', 'markhor.html',
    'meerkat.html', 'monitor-lizard.html', 'mountain-gorilla.html', 'naked-mole-rat.html',
    'narwhal.html', 'nudibranch.html', 'numbat.html', 'okapi.html', 'orangutan.html',
    'pangolin.html', 'patagonian-mara.html', 'peacock-mantis-shrimp.html',
    'pink-fairy-armadillo.html', 'platypus.html', 'polar-bear.html', 'potoo.html',
    'praying-mantis.html', 'proboscis-monkey.html', 'pronghorn.html', 'pufferfish.html',
    'quokka.html', 'red-eyed-tree-frog.html', 'red-fox.html', 'red-kangaroo.html',
    'red-panda.html', 'rottweiler.html', 'saola.html', 'secretary-bird.html', 'serval.html',
    'shoebill.html', 'shortfin-mako-shark.html', 'siberian-husky.html', 'sloth.html',
    'slow-loris.html', 'snow-leopard.html', 'snowy-owl.html', 'spectacled-bear.html',
    'sperm-whale.html', 'spider-monkey.html', 'spotted-hyena.html', 'squirrel-monkey.html',
    'star-nosed-mole.html', 'sumatran-orangutan.html', 'sumatran-rhino.html',
    'sumatran-rhinoceros.html', 'sumatran-tiger.html', 'sun-bear.html', 'tapir.html',
    'tarsier.html', 'tasmanian-devil.html', 'tasmanian-tiger.html', 'termite.html',
    'thorny-devil.html', 'three-toed-sloth.html', 'tibetan-mastiff.html', 'tiger.html',
    'titanoboa.html', 'toco-toucan.html', 'tree-kangaroo.html', 'tsetse-fly.html',
    'tuatara.html', 'tufted-puffin.html', 'uakari.html', 'vampire-bat.html', 'vaquita.html',
    'vulture.html', 'walrus.html', 'warthog.html', 'water-buffalo.html', 'western-gorilla.html',
    'western-lowland-gorilla.html', 'whale-shark.html', 'white-rhinoceros.html',
    'white-tiger.html', 'wild-boar.html', 'wildebeest.html', 'wolf.html', 'wolverine.html',
    'wombat.html', 'woodpecker.html', 'woolly-mammoth.html', 'yak.html',
    'yellow-eyed-penguin.html', 'yeti-crab.html', 'zebra.html', 'zebra-shark.html'
];

// Function to get animal name from filename
function getAnimalName(filename) {
    return filename
        .replace('.html', '')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Function to search for animals
function searchAnimals(query) {
    query = query.toLowerCase();
    return animalPages
        .filter(page => {
            const animalName = getAnimalName(page).toLowerCase();
            return animalName.includes(query);
        })
        .map(page => ({
            name: getAnimalName(page),
            url: page
        }));
}

// Function to display search results
function displayResults(results) {
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '';

    if (results.length === 0) {
        resultsDiv.innerHTML = '<p>No animals found matching your search.</p>';
        return;
    }

    const ul = document.createElement('ul');
    results.forEach(result => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = result.url;
        a.textContent = result.name;
        li.appendChild(a);
        ul.appendChild(li);
    });
    resultsDiv.appendChild(ul);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    // Search on button click
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            const results = searchAnimals(query);
            displayResults(results);
        }
    });

    // Search on Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                const results = searchAnimals(query);
                displayResults(results);
            }
        }
    });

    // Clear results when input is cleared
    searchInput.addEventListener('input', () => {
        if (!searchInput.value.trim()) {
            document.getElementById('searchResults').innerHTML = '';
        }
    });
}); 