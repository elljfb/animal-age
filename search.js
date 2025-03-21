// List of all animal pages
const animalPages = [
    'aardvark.html', 'african-bullfrog.html', 'african-bush-elephant.html', 'african-civet.html',
    'african-clawed-frog.html', 'african-forest-elephant.html', 'african-golden-cat.html',
    'african-palm-civet.html', 'african-penguin.html', 'african-savanna-elephant.html',
    'african-wild-dog.html', 'agama-lizard.html', 'agouti.html', 'albatross.html',
    'alligator.html', 'alligator-gar.html', 'alligator-snapping-turtle.html', 'alpaca.html',
    'amazon-river-dolphin.html', 'american-alligator.html', 'american-bullfrog.html',
    'american-cockroach.html', 'american-coot.html', 'american-crow.html', 'american-eel.html',
    'american-foxhound.html', 'american-pit-bull-terrier.html', 'american-robin.html',
    'american-shorthair.html', 'american-staffordshire-terrier.html', 'american-toad.html',
    'american-wirehair.html', 'anatolian-shepherd-dog.html', 'angelfish.html', 'ant.html',
    'anteater.html', 'antelope.html', 'appenzeller-dog.html', 'arapaima.html', 'arctic-fox.html',
    'arctic-hare.html', 'arctic-wolf.html', 'armadillo.html', 'asian-elephant.html',
    'asian-giant-hornet.html', 'asian-palm-civet.html', 'asiatic-black-bear.html',
    'australian-cattle-dog.html', 'australian-kelpie-dog.html', 'australian-mist.html',
    'australian-shepherd.html', 'australian-terrier.html', 'avocet.html', 'axolotl.html',
    'aye-aye.html', 'baboon.html', 'bactrian-camel.html', 'badger.html', 'balinese.html',
    'bandicoot.html', 'barn-owl.html', 'barnacle.html', 'barracuda.html', 'basenji-dog.html',
    'basking-shark.html', 'basset-hound.html', 'bat.html', 'beagle.html', 'bear.html',
    'bearded-collie.html', 'bearded-dragon.html', 'beaver.html', 'bedlington-terrier.html',
    'bee.html', 'beetle.html', 'beluga-sturgeon.html', 'bengal-tiger.html', 'bernese-mountain-dog.html',
    'bichon-frise.html', 'binturong.html', 'bird.html', 'birds-of-paradise.html', 'birman.html',
    'bison.html', 'black-bear.html', 'black-rhinoceros.html', 'black-widow-spider.html',
    'bloodhound.html', 'blue-jay.html', 'blue-lacy-dog.html', 'blue-whale.html', 'bluetick-coonhound.html',
    'bobcat.html', 'boggle.html', 'booby.html', 'border-collie.html', 'border-terrier.html',
    'borzoi.html', 'boston-terrier.html', 'bottlenose-dolphin.html', 'box-jellyfish.html',
    'boxer-dog.html', 'boykin-spaniel.html', 'brazilian-terrier.html', 'brown-bear.html',
    'budgerigar.html', 'buffalo.html', 'bull-shark.html', 'bull-terrier.html', 'bulldog.html',
    'bullfrog.html', 'bumblebee.html', 'burmese.html', 'burrowing-frog.html', 'butterfly.html',
    'butterfly-fish.html', 'caiman.html', 'caiman-lizard.html', 'cairn-terrier.html',
    'camel.html', 'camel-spider.html', 'canaan-dog.html', 'capybara.html', 'caracal.html',
    'carolina-dog.html', 'carp.html', 'cassowary.html', 'cat.html', 'caterpillar.html',
    'catfish.html', 'cavalier-king-charles-spaniel.html', 'centipede.html', 'cesky-fousek.html',
    'cesky-terrier.html', 'chameleon.html', 'chamois.html', 'cheetah.html', 'chesapeake-bay-retriever.html',
    'chicken.html', 'chihuahua.html', 'chimpanzee.html', 'chinchilla.html', 'chinese-crested-dog.html',
    'chinese-paddlefish.html', 'chinese-shar-pei.html', 'chinook.html', 'chipmunk.html',
    'chow-chow.html', 'cichlid.html', 'clouded-leopard.html', 'clownfish.html', 'clumber-spaniel.html',
    'coati.html', 'cockroach.html', 'collie.html', 'coral.html', 'corgi.html', 'cormorant.html',
    'cougar.html', 'cow.html', 'coyote.html', 'crab.html', 'crane.html', 'cricket.html',
    'crocodile.html', 'crocodile-monitor.html', 'cross-river-gorilla.html', 'curly-coated-retriever.html',
    'cuscus.html', 'cuttlefish.html', 'dachshund.html', 'dalmatian.html', 'deer.html',
    'desert-locust.html', 'deutsche-bracke.html', 'dhole.html', 'dingo.html', 'discus.html',
    'doberman-pinscher.html', 'dodo.html', 'dog.html', 'dolphin.html', 'donkey.html',
    'dormouse.html', 'dragonfly.html', 'drever.html', 'duck.html', 'dugong.html',
    'dunker.html', 'dusky-dolphin.html', 'dwarf-crocodile.html', 'eagle.html', 'earwig.html',
    'eastern-bluebird.html', 'eastern-gorilla.html', 'eastern-lowland-gorilla.html', 'echidna.html',
    'edible-frog.html', 'egyptian-mau.html', 'electric-eel.html', 'elephant.html',
    'elephant-seal.html', 'elephant-shrew.html', 'emperor-penguin.html', 'emperor-tamarin.html',
    'emu.html', 'english-cocker-spaniel.html', 'english-cream-golden-retriever.html',
    'english-setter.html', 'english-springer-spaniel.html', 'english-toy-spaniel.html',
    'entlebucher-mountain-dog.html', 'epagneul-pont-audemer.html', 'eskimo-dog.html',
    'eskipoo.html', 'estrela-mountain-dog.html', 'falcon.html', 'ferret.html', 'field-spaniel.html',
    'fin-whale.html', 'finnish-lapphund.html', 'finnish-spitz.html', 'fire-bellied-toad.html',
    'fire-fly.html', 'fish.html', 'flamingo.html', 'flat-coated-retriever.html', 'flounder.html',
    'fly.html', 'flying-fish.html', 'flying-lemur.html', 'flying-snake.html', 'fossa.html',
    'fox.html', 'fox-terrier.html', 'french-bulldog.html', 'frigatebird.html', 'frilled-lizard.html',
    'frilled-necked-lizard.html', 'frog.html', 'fur-seal.html', 'galapagos-penguin.html',
    'galapagos-tortoise.html', 'gar.html', 'garden-eel.html', 'gazelle.html', 'gecko.html',
    'gentoo-penguin.html', 'geoffroys-tamarin.html', 'gerbil.html', 'german-pinscher.html',
    'german-shepherd.html', 'german-shepherd-guide.html', 'german-shorthaired-pointer.html',
    'german-spitz.html', 'gharial.html', 'giant-african-land-snail.html', 'giant-clam.html',
    'giant-panda-bear.html', 'giant-schnauzer.html', 'gibbon.html', 'gila-monster.html',
    'giraffe.html', 'glass-lizard.html', 'glow-worm.html', 'goat.html', 'goblin-shark.html',
    'golden-dox.html', 'golden-lion-tamarin.html', 'golden-masked-owl.html', 'golden-oriole.html',
    'golden-retriever.html', 'golden-retriever-guide.html', 'goose.html', 'gopher.html',
    'gorilla.html', 'grasshopper.html', 'great-dane.html', 'great-dane-guide.html',
    'great-white-shark.html', 'greater-swiss-mountain-dog.html', 'green-anaconda.html',
    'green-bee-eater.html', 'green-frog.html', 'grey-mouse-lemur.html', 'grey-reef-shark.html',
    'grey-seal.html', 'greyhound.html', 'grizzly-bear.html', 'grouse.html', 'guinea-fowl.html',
    'guinea-pig.html', 'guppy.html', 'hagfish.html', 'hammerhead-shark.html', 'hamster.html',
    'harbor-seal.html', 'harp-seal.html', 'harrier.html', 'havanese.html', 'hedgehog.html',
    'heron.html', 'herring.html', 'highland-cattle.html', 'himalayan.html', 'hippopotamus.html',
    'honey-badger.html', 'honey-bee.html', 'hoopoe.html', 'horned-frog.html', 'horned-lizard.html',
    'horned-viper.html', 'horse.html', 'horsefly.html', 'horseshoe-crab.html', 'howler-monkey.html',
    'human.html', 'humboldt-penguin.html', 'hummingbird.html', 'humpback-whale.html',
    'huntsman-spider.html', 'husky.html', 'husky-guide.html', 'hyena.html', 'ibis.html',
    'ibizan-hound.html', 'iguana.html', 'immortal-jellyfish.html', 'impala.html', 'indian-elephant.html',
    'indian-palm-squirrel.html', 'indian-rhinoceros.html', 'indian-star-tortoise.html',
    'indochinese-tiger.html', 'indri.html', 'insects.html', 'irish-setter.html', 'irish-terrier.html',
    'irish-wolfhound.html', 'italian-greyhound.html', 'ivory-billed-woodpecker.html', 'jacana.html',
    'jackal.html', 'jackdaw.html', 'jaguar.html', 'japanese-chin.html', 'japanese-macaque.html',
    'japanese-spitz.html', 'japanese-terrier.html', 'javan-rhinoceros.html', 'javanese.html',
    'jellyfish.html', 'jerboa.html', 'kakapo.html', 'kangaroo.html', 'keel-billed-toucan.html',
    'keeshond.html', 'kerry-blue-terrier.html', 'killer-whale.html', 'king-cobra.html',
    'king-crab.html', 'king-penguin.html', 'kingfisher.html', 'kinkajou.html', 'kiwi.html',
    'koala.html', 'komodo-dragon.html', 'kookaburra.html', 'koolie.html', 'krill.html',
    'kudu.html', 'labmaraner.html', 'labradane.html', 'labradoodle.html', 'labrador-retriever.html',
    'labrador-retriever-guide.html', 'ladybug.html', 'lamprey.html', 'leafcutter-ant.html',
    'leech.html', 'lemming.html', 'lemur.html', 'leopard.html', 'leopard-cat.html',
    'leopard-seal.html', 'leopard-tortoise.html', 'liger.html', 'lion.html', 'lionfish.html',
    'little-penguin.html', 'lizard.html', 'llama.html', 'lobster.html', 'locust.html',
    'long-eared-owl.html', 'long-horned-beetle.html', 'longnose-gar.html', 'lynx.html',
    'macaroni-penguin.html', 'macaw.html', 'magellanic-penguin.html', 'magpie.html',
    'maine-coon.html', 'malayan-civet.html', 'malayan-tiger.html', 'maltese.html',
    'manatee.html', 'mandrill.html', 'manta-ray.html', 'marine-iguana.html', 'marine-toad.html',
    'markhor.html', 'marsh-frog.html', 'masked-angelfish.html', 'mastiff.html', 'mayfly.html',
    'meerkat.html', 'megalodon.html', 'milkfish.html', 'millipede.html', 'mini-labradoodle.html',
    'miniature-pinscher.html', 'mole.html', 'molly.html', 'monarch-butterfly.html', 'mongoose.html',
    'mongrel.html', 'monitor-lizard.html', 'monkey.html', 'monkfish.html', 'monte-iberia-eleuth.html',
    'moorhen.html', 'moose.html', 'moray-eel.html', 'moth.html', 'mountain-gorilla.html',
    'mountain-lion.html', 'mouse.html', 'muskox.html', 'muskrat.html', 'narwhal.html',
    'neanderthal.html', 'neapolitan-mastiff.html', 'newfoundland.html', 'newt.html',
    'nightingale.html', 'nile-crocodile.html', 'noisy-friarbird.html', 'norfolk-terrier.html',
    'northern-inuit-dog.html', 'norwegian-buhund.html', 'norwegian-elkhound.html',
    'norwegian-forest.html', 'norwegian-lundehund.html', 'norwich-terrier.html', 'numbat.html',
    'nurse-shark.html', 'ocelot.html', 'octopus.html', 'okapi.html', 'old-english-sheepdog.html',
    'olm.html', 'opossum.html', 'orang-utan.html', 'ostrich.html', 'otter.html',
    'owl.html', 'ox.html', 'oyster.html', 'paddlefish.html', 'pangolin.html',
    'panther.html', 'parrot.html', 'parrotfish.html', 'partridge.html', 'peacock.html',
    'pekingese.html', 'pelican.html', 'penguin.html', 'persian.html', 'petit-basset-griffon-vendeen.html',
    'pheasant.html', 'pied-tamarin.html', 'pig.html', 'pigeon.html', 'pika.html',
    'pike-fish.html', 'pink-fairy-armadillo.html', 'piranha.html', 'pitador.html',
    'pitsky.html', 'platypus.html', 'pointer.html', 'polar-bear.html', 'polecat.html',
    'pomapoo.html', 'pomchi.html', 'pomeagle.html', 'pomeranian.html', 'pomsky.html',
    'pond-skater.html', 'poodle.html', 'poochon.html', 'poodle-guide.html', 'pool-frog.html',
    'porcupine.html', 'possum.html', 'prairie-dog.html', 'prairie-rattlesnake.html',
    'praying-mantis.html', 'proboscis-monkey.html', 'pufferfish.html', 'puffin.html',
    'pug.html', 'pugapoo.html', 'puggle.html', 'pugshire.html', 'puma.html',
    'puss-moth.html', 'pygmy-hippopotamus.html', 'pygmy-marmoset.html', 'pyredoodle.html',
    'quail.html', 'quetzal.html', 'quokka.html', 'quoll.html', 'rabbit.html',
    'raccoon.html', 'raccoon-dog.html', 'radiated-tortoise.html', 'ragamuffin.html',
    'ragdoll.html', 'rat.html', 'rat-terrier.html', 'rattlesnake.html', 'red-deer.html',
    'red-fox.html', 'red-handed-tamarin.html', 'red-knee-tarantula.html', 'red-panda.html',
    'red-wolf.html', 'redbone-coonhound.html', 'reindeer.html', 'rhinoceros.html',
    'river-dolphin.html', 'river-otter.html', 'robin.html', 'rock-hyrax.html',
    'rockfish.html', 'rockhopper-penguin.html', 'rodents.html', 'rooster.html',
    'rottweiler.html', 'royal-penguin.html', 'russian-blue.html', 'saarloos-wolfdog.html',
    'saber-toothed-tiger.html', 'sable.html', 'saiga.html', 'saint-bernard.html',
    'salamander.html', 'salmon.html', 'samoyed.html', 'sand-lizard.html', 'saola.html',
    'sardines.html', 'sawfish.html', 'scorpion.html', 'scorpion-fish.html', 'sea-anemone.html',
    'sea-dragon.html', 'sea-lion.html', 'sea-slug.html', 'sea-snake.html', 'sea-turtle.html',
    'sea-urchin.html', 'seahorse.html', 'seal.html', 'serval.html', 'shark.html',
    'sheep.html', 'sheepadoodle.html', 'shiba-inu.html', 'shihtzu.html', 'shrimp.html',
    'siamese.html', 'siberian-husky.html', 'siberian-tiger.html', 'silver-dollar.html',
    'skunk.html', 'sloth.html', 'slow-worm.html', 'slug.html', 'snail.html',
    'snake.html', 'snapping-turtle.html', 'snowshoe.html', 'snowy-owl.html', 'somali.html',
    'south-china-tiger.html', 'spadefoot-toad.html', 'spanador.html', 'spanish-goat.html',
    'spanish-mastiff.html', 'sparrow.html', 'spectacled-bear.html', 'sperm-whale.html',
    'spider-monkey.html', 'spiny-dogfish.html', 'sponge.html', 'spoonbill.html',
    'spotted-gar.html', 'squirrel.html', 'squirrel-monkey.html', 'sri-lankan-elephant.html',
    'staffordshire-bull-terrier.html', 'stag-beetle.html', 'starfish.html', 'stingray.html',
    'stoat.html', 'striped-hyena.html', 'striped-rakali.html', 'superworm.html',
    'swan.html', 'tang-fish.html', 'tapir.html', 'tarpon.html', 'tasmanian-devil.html',
    'tasmanian-tiger.html', 'tayra.html', 'teacup-chihuahua.html', 'teacup-maltipoo.html',
    'teacup-pomeranian.html', 'teacup-poodle.html', 'teacup-yorkie.html', 'tenrec.html',
    'termite.html', 'terrier.html', 'tetra.html', 'thrush.html', 'tibetan-mastiff.html',
    'tiffany.html', 'tiger.html', 'tiger-shark.html', 'tortoise.html', 'toucan.html',
    'tree-frog.html', 'tree-kangaroo.html', 'tropicbird.html', 'trout.html', 'tuatara.html',
    'turkey.html', 'turkish-angora.html', 'uakari.html', 'uguisu.html', 'umbrellabird.html',
    'uromastyx.html', 'urutu-snake.html', 'vampire-bat.html', 'vampire-squid.html',
    'vaquita.html', 'vulture.html', 'wallaby.html', 'walrus.html', 'wandering-albatross.html',
    'wapiti.html', 'warbler.html', 'water-buffalo.html', 'water-dragon.html', 'water-vole.html',
    'weasel.html', 'welsh-corgi.html', 'welsh-springer-spaniel.html', 'west-highland-terrier.html',
    'western-gorilla.html', 'western-lowland-gorilla.html', 'whale-shark.html', 'whippet.html',
    'white-ferret.html', 'white-rhinoceros.html', 'white-tiger.html', 'wild-boar.html',
    'wildebeest.html', 'wire-fox-terrier.html', 'wolf.html', 'wolf-spider.html',
    'wolffish.html', 'wolverine.html', 'wombat.html', 'woodlouse.html', 'woodpecker.html',
    'woolly-mammoth.html', 'woolly-monkey.html', 'wrasse.html', 'x-ray-tetra.html',
    'xerus.html', 'yak.html', 'yellow-bellied-sea-snake.html', 'yorkie-bichon.html',
    'yorkie-poo.html', 'yorkshire-terrier.html', 'zebra.html', 'zebra-shark.html',
    'zebu.html', 'zonkey.html', 'zorse.html', 'zuchon.html'
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