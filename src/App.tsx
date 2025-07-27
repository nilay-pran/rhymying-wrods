import React, { useState, useEffect } from 'react';
import { Search, BookOpen, Trophy, Volume2, X, MessageCircle, Mic } from 'lucide-react';

interface WordData {
  meaning: string;
  pronunciation: string;
  sentences: string[];
}

interface WordDatabase {
  [key: string]: WordData;
}

const wordDatabase: WordDatabase = {
  // -at words
  cat: {
    meaning: "A pet animal that says 'meow'",
    pronunciation: "/kæt/ (sounds like 'k-at')",
    sentences: [
      "The fluffy cat sleeps on my bed every night.",
      "My cat loves to play with a ball of yarn.",
      "The orange cat climbed up the tall tree."
    ]
  },
  bat: {
    meaning: "A flying animal or a stick used in games",
    pronunciation: "/bæt/ (sounds like 'b-at')",
    sentences: [
      "The baseball player swung the bat really hard.",
      "A bat flew out of the dark cave at night.",
      "She hit a home run with her favorite bat."
    ]
  },
  hat: {
    meaning: "Something you wear on your head",
    pronunciation: "/hæt/ (sounds like 'h-at')",
    sentences: [
      "I wear a warm hat when it's cold outside.",
      "The magician pulled a rabbit out of his hat.",
      "Her red hat matches her beautiful dress."
    ]
  },
  mat: {
    meaning: "A small rug on the floor",
    pronunciation: "/mæt/ (sounds like 'm-at')",
    sentences: [
      "Please wipe your feet on the door mat.",
      "The yoga mat is soft and comfortable.",
      "We sit on a picnic mat in the park."
    ]
  },
  rat: {
    meaning: "A small animal like a mouse",
    pronunciation: "/ræt/ (sounds like 'r-at')",
    sentences: [
      "The little rat ran quickly across the floor.",
      "A white rat lives in the science lab.",
      "The rat found some cheese in the kitchen."
    ]
  },
  sat: {
    meaning: "Past of 'sit', like sitting down",
    pronunciation: "/sæt/ (sounds like 's-at')",
    sentences: [
      "Yesterday, I sat on the park bench for an hour.",
      "She sat quietly and read her favorite book.",
      "The dog sat patiently waiting for his treat."
    ]
  },
  pat: {
    meaning: "A soft tap with the hand",
    pronunciation: "/pæt/ (sounds like 'p-at')",
    sentences: [
      "Mom gave me a gentle pat on the head.",
      "The teacher gave him a pat on the back.",
      "I like to pat my dog when he's being good."
    ]
  },
  fat: {
    meaning: "Not thin, having extra weight",
    pronunciation: "/fæt/ (sounds like 'f-at')",
    sentences: [
      "The fat cat loves to eat fish every day.",
      "We saw a fat elephant at the zoo.",
      "The fat book has many interesting stories."
    ]
  },
  flat: {
    meaning: "Smooth and level, not bumpy",
    pronunciation: "/flæt/ (sounds like 'fl-at')",
    sentences: [
      "The table has a flat surface for writing.",
      "We live in a small flat near the school.",
      "The tire went flat and we had to fix it."
    ]
  },
  chat: {
    meaning: "To talk in a friendly way",
    pronunciation: "/tʃæt/ (sounds like 'ch-at')",
    sentences: [
      "I love to chat with my friends after school.",
      "Grandma and I chat on the phone every week.",
      "The neighbors chat over the fence every morning."
    ]
  },
  that: {
    meaning: "Used to point to something specific",
    pronunciation: "/ðæt/ (sounds like 'th-at')",
    sentences: [
      "That red car belongs to my uncle.",
      "I want that toy for my birthday.",
      "That was the best movie I've ever seen."
    ]
  },
  
  // -ap words
  cap: {
    meaning: "A soft hat with a visor",
    pronunciation: "/kæp/ (sounds like 'k-ap')",
    sentences: [
      "He wears a baseball cap to keep the sun away.",
      "The bottle cap fell under the table.",
      "My favorite cap is blue with a star on it."
    ]
  },
  lap: {
    meaning: "The top of your legs when sitting",
    pronunciation: "/læp/ (sounds like 'l-ap')",
    sentences: [
      "The cat curled up in my lap while I read.",
      "She finished one lap around the track.",
      "The baby fell asleep in grandpa's lap."
    ]
  },
  map: {
    meaning: "A picture that shows places",
    pronunciation: "/mæp/ (sounds like 'm-ap')",
    sentences: [
      "We used a map to find our way to the beach.",
      "The treasure map shows where gold is hidden.",
      "Can you find our city on this world map?"
    ]
  },
  nap: {
    meaning: "A short sleep",
    pronunciation: "/næp/ (sounds like 'n-ap')",
    sentences: [
      "After lunch, I like to take a short nap.",
      "The baby takes a nap every afternoon.",
      "Dad fell asleep during his Sunday nap."
    ]
  },
  tap: {
    meaning: "A faucet or a light touch",
    pronunciation: "/tæp/ (sounds like 't-ap')",
    sentences: [
      "Turn on the tap to get some water.",
      "I heard a gentle tap on the window.",
      "She learned to tap dance at school."
    ]
  },
  gap: {
    meaning: "A space or hole between things",
    pronunciation: "/gæp/ (sounds like 'g-ap')",
    sentences: [
      "There's a small gap between my front teeth.",
      "The ball rolled through the gap in the fence.",
      "Mind the gap when stepping off the train."
    ]
  },
  zap: {
    meaning: "A quick electric sound or hit",
    pronunciation: "/zæp/ (sounds like 'z-ap')",
    sentences: [
      "Lightning can zap trees during storms.",
      "The superhero can zap bad guys with his powers.",
      "I heard a zap when I touched the doorknob."
    ]
  },
  clap: {
    meaning: "To hit your hands together to make noise",
    pronunciation: "/klæp/ (sounds like 'cl-ap')",
    sentences: [
      "Everyone clap your hands to the music!",
      "We clap when the show is really good.",
      "The thunder made a loud clap sound."
    ]
  },
  snap: {
    meaning: "To break quickly or make a clicking sound",
    pronunciation: "/snæp/ (sounds like 'sn-ap')",
    sentences: [
      "The twig will snap if you bend it too much.",
      "I can snap my fingers to make music.",
      "Mom took a snap of us at the park."
    ]
  },
  trap: {
    meaning: "Something that catches animals or people",
    pronunciation: "/træp/ (sounds like 'tr-ap')",
    sentences: [
      "The mouse got caught in the trap.",
      "Don't fall into that muddy trap!",
      "The spider's web is a trap for flies."
    ]
  },
  wrap: {
    meaning: "To cover something with paper or cloth",
    pronunciation: "/ræp/ (sounds like 'r-ap')",
    sentences: [
      "Let's wrap the birthday present in colorful paper.",
      "Mom will wrap me in a warm blanket.",
      "I need to wrap this sandwich for lunch."
    ]
  },
  
  // -am words
  jam: {
    meaning: "A sweet fruit spread for bread",
    pronunciation: "/dʒæm/ (sounds like 'j-am')",
    sentences: [
      "I love strawberry jam on my toast.",
      "Grandma makes the best homemade jam.",
      "The traffic jam made us late for school."
    ]
  },
  dam: {
    meaning: "A wall that holds back water",
    pronunciation: "/dæm/ (sounds like 'd-am')",
    sentences: [
      "The big dam creates a beautiful lake.",
      "Beavers build a dam with sticks and mud.",
      "Water flows over the dam in a waterfall."
    ]
  },
  ham: {
    meaning: "A type of meat from a pig",
    pronunciation: "/hæm/ (sounds like 'h-am')",
    sentences: [
      "We had ham and cheese sandwiches for lunch.",
      "The ham smells delicious in the oven.",
      "I like ham with pineapple on my pizza."
    ]
  },
  ram: {
    meaning: "A male sheep",
    pronunciation: "/ræm/ (sounds like 'r-am')",
    sentences: [
      "The ram has big curved horns on his head.",
      "A strong ram protects the flock of sheep.",
      "The ram ran across the green field."
    ]
  },
  yam: {
    meaning: "A sweet, potato-like vegetable",
    pronunciation: "/jæm/ (sounds like 'y-am')",
    sentences: [
      "Baked yam tastes sweet and delicious.",
      "We grow yams in our garden every year.",
      "The orange yam is full of vitamins."
    ]
  },
  slam: {
    meaning: "To shut something very hard and loud",
    pronunciation: "/slæm/ (sounds like 'sl-am')",
    sentences: [
      "Don't slam the door when you leave!",
      "The wind made the gate slam shut.",
      "He can slam dunk the basketball."
    ]
  },
  gram: {
    meaning: "A small unit for measuring weight",
    pronunciation: "/græm/ (sounds like 'gr-am')",
    sentences: [
      "This apple weighs about 200 grams.",
      "A gram is much smaller than a pound.",
      "The recipe needs 50 grams of sugar."
    ]
  },
  
  // -an words
  man: {
    meaning: "A grown-up boy",
    pronunciation: "/mæn/ (sounds like 'm-an')",
    sentences: [
      "The kind man helped us cross the street.",
      "My dad is a strong and caring man.",
      "The delivery man brought our package."
    ]
  },
  pan: {
    meaning: "A round dish for cooking",
    pronunciation: "/pæn/ (sounds like 'p-an')",
    sentences: [
      "Mom cooks eggs in a frying pan.",
      "The cake pan is round and shiny.",
      "Heat the pan before adding the oil."
    ]
  },
  fan: {
    meaning: "It blows air to cool you",
    pronunciation: "/fæn/ (sounds like 'f-an')",
    sentences: [
      "The ceiling fan keeps our room cool.",
      "I'm a big fan of chocolate ice cream.",
      "She waves a paper fan to cool herself."
    ]
  },
  ran: {
    meaning: "Past of 'run'",
    pronunciation: "/ræn/ (sounds like 'r-an')",
    sentences: [
      "Yesterday I ran all the way to school.",
      "The dog ran after the flying frisbee.",
      "She ran faster than anyone in the race."
    ]
  },
  tan: {
    meaning: "Light brown skin color from sun",
    pronunciation: "/tæn/ (sounds like 't-an')",
    sentences: [
      "I got a tan from playing at the beach.",
      "His tan shoes match his brown belt.",
      "The leather has a beautiful tan color."
    ]
  },
  van: {
    meaning: "A big car or small truck",
    pronunciation: "/væn/ (sounds like 'v-an')",
    sentences: [
      "Our family van can fit eight people.",
      "The ice cream van plays music as it drives.",
      "We loaded our camping gear in the van."
    ]
  },
  ban: {
    meaning: "To not allow something",
    pronunciation: "/bæn/ (sounds like 'b-an')",
    sentences: [
      "The school will ban phones in class.",
      "There's a ban on swimming during storms.",
      "Mom put a ban on cookies before dinner."
    ]
  },
  can: {
    meaning: "A metal container or being able to do something",
    pronunciation: "/kæn/ (sounds like 'k-an')",
    sentences: [
      "I can ride my bike without training wheels.",
      "Open the can of soup for lunch.",
      "Can you help me with my homework?"
    ]
  },
  plan: {
    meaning: "An idea about what to do",
    pronunciation: "/plæn/ (sounds like 'pl-an')",
    sentences: [
      "Our plan is to go to the park after school.",
      "I need to plan my birthday party.",
      "The teacher has a plan for our field trip."
    ]
  },
  span: {
    meaning: "The distance from one end to another",
    pronunciation: "/spæn/ (sounds like 'sp-an')",
    sentences: [
      "The bridge spans across the wide river.",
      "My hand span can reach all the piano keys.",
      "The bird's wing span is very impressive."
    ]
  },
  
  // -ad words
  bad: {
    meaning: "Not good",
    pronunciation: "/bæd/ (sounds like 'b-ad')",
    sentences: [
      "Eating too much candy is bad for your teeth.",
      "I felt bad when I broke my friend's toy.",
      "The weather was bad, so we stayed inside."
    ]
  },
  dad: {
    meaning: "Father",
    pronunciation: "/dæd/ (sounds like 'd-ad')",
    sentences: [
      "My dad teaches me how to ride a bike.",
      "Dad makes the best pancakes on Sunday.",
      "I love playing catch with my dad."
    ]
  },
  had: {
    meaning: "Past of 'have'",
    pronunciation: "/hæd/ (sounds like 'h-ad')",
    sentences: [
      "Yesterday I had pizza for dinner.",
      "She had a great time at the party.",
      "We had to wait for the bus this morning."
    ]
  },
  mad: {
    meaning: "Angry",
    pronunciation: "/mæd/ (sounds like 'm-ad')",
    sentences: [
      "I got mad when someone took my toy.",
      "Mom was mad because I didn't clean my room.",
      "Don't be mad, it was just an accident."
    ]
  },
  sad: {
    meaning: "Unhappy",
    pronunciation: "/sæd/ (sounds like 's-ad')",
    sentences: [
      "I felt sad when my pet fish died.",
      "The sad movie made everyone cry.",
      "She was sad to say goodbye to her friends."
    ]
  },
  pad: {
    meaning: "A soft thing, like a notebook or cushion",
    pronunciation: "/pæd/ (sounds like 'p-ad')",
    sentences: [
      "I write my stories in this writing pad.",
      "The knee pad protects me when I skate.",
      "Frogs sit on lily pads in the pond."
    ]
  },
  lad: {
    meaning: "A young boy",
    pronunciation: "/læd/ (sounds like 'l-ad')",
    sentences: [
      "The young lad helped his grandmother.",
      "What a brave lad you are!",
      "The lad ran quickly to catch the ball."
    ]
  },
  glad: {
    meaning: "Happy and pleased",
    pronunciation: "/glæd/ (sounds like 'gl-ad')",
    sentences: [
      "I'm so glad you came to my party!",
      "She was glad to see her old friend.",
      "We're glad the rain stopped so we can play."
    ]
  },
  
  // -ab words
  cab: {
    meaning: "A car you pay to ride in (like a taxi)",
    pronunciation: "/kæb/ (sounds like 'k-ab')",
    sentences: [
      "We took a yellow cab to the airport.",
      "The cab driver knows all the city streets.",
      "Call a cab when you need a ride home."
    ]
  },
  lab: {
    meaning: "A place to do science",
    pronunciation: "/læb/ (sounds like 'l-ab')",
    sentences: [
      "We do experiments in the science lab.",
      "The lab has microscopes and test tubes.",
      "My sister works in a computer lab."
    ]
  },
  tab: {
    meaning: "A small part that sticks out",
    pronunciation: "/tæb/ (sounds like 't-ab')",
    sentences: [
      "Pull the tab to open the can.",
      "The file has a tab with my name on it.",
      "Click on the tab to open a new page."
    ]
  },
  grab: {
    meaning: "To take hold of something quickly",
    pronunciation: "/græb/ (sounds like 'gr-ab')",
    sentences: [
      "Grab your coat before we leave!",
      "I had to grab the ball before it fell.",
      "Let's grab some snacks for the movie."
    ]
  },
  crab: {
    meaning: "A sea animal with claws and a hard shell",
    pronunciation: "/kræb/ (sounds like 'cr-ab')",
    sentences: [
      "The red crab walked sideways on the beach.",
      "We saw a hermit crab in the tide pool.",
      "The crab uses its claws to catch food."
    ]
  },
  
  // -ag words
  bag: {
    meaning: "A container to carry things",
    pronunciation: "/bæg/ (sounds like 'b-ag')",
    sentences: [
      "I carry my books in a school bag.",
      "Mom's shopping bag is full of groceries.",
      "Pack your clothes in this travel bag."
    ]
  },
  tag: {
    meaning: "A label or a chasing game",
    pronunciation: "/tæg/ (sounds like 't-ag')",
    sentences: [
      "The price tag shows how much it costs.",
      "Let's play tag in the playground!",
      "Write your name on the gift tag."
    ]
  },
  wag: {
    meaning: "To move side to side (like a dog's tail)",
    pronunciation: "/wæg/ (sounds like 'w-ag')",
    sentences: [
      "My dog's tail wags when he's happy.",
      "The puppy wags his whole body with joy.",
      "Watch how the dog's tail wags back and forth."
    ]
  },
  flag: {
    meaning: "A piece of cloth with colors and patterns",
    pronunciation: "/flæg/ (sounds like 'fl-ag')",
    sentences: [
      "The American flag has stars and stripes.",
      "We raise the flag every morning at school.",
      "Each country has its own special flag."
    ]
  },
  drag: {
    meaning: "To pull something along the ground",
    pronunciation: "/dræg/ (sounds like 'dr-ag')",
    sentences: [
      "Don't drag your backpack on the floor.",
      "The horse can drag the heavy cart.",
      "I had to drag the big box to my room."
    ]
  },
  
  // -ar words
  bar: {
    meaning: "A stick or a place that serves food",
    pronunciation: "/bɑr/ (sounds like 'b-ar')",
    sentences: [
      "The monkey swings from bar to bar.",
      "There's a snack bar at the swimming pool.",
      "Hold onto the metal bar for safety."
    ]
  },
  car: {
    meaning: "A vehicle for driving",
    pronunciation: "/kɑr/ (sounds like 'k-ar')",
    sentences: [
      "Our family car is red and shiny.",
      "Dad drives the car to work every day.",
      "The toy car rolls down the ramp."
    ]
  },
  far: {
    meaning: "A long distance away",
    pronunciation: "/fɑr/ (sounds like 'f-ar')",
    sentences: [
      "The store is too far to walk to.",
      "How far is it to your house?",
      "The mountains look far away from here."
    ]
  },
  jar: {
    meaning: "A container made of glass",
    pronunciation: "/dʒɑr/ (sounds like 'j-ar')",
    sentences: [
      "The cookie jar is empty again!",
      "Grandma keeps jam in a glass jar.",
      "I caught fireflies in a big jar."
    ]
  },
  star: {
    meaning: "A bright light in the night sky",
    pronunciation: "/stɑr/ (sounds like 'st-ar')",
    sentences: [
      "I can see a bright star in the sky.",
      "The movie star signed my autograph book.",
      "Draw a five-pointed star on your paper."
    ]
  },
  scar: {
    meaning: "A mark left after a cut heals",
    pronunciation: "/skɑr/ (sounds like 'sk-ar')",
    sentences: [
      "I have a small scar on my knee.",
      "The scar shows where I fell off my bike.",
      "His scar has an interesting story behind it."
    ]
  },
  
  // -ax words
  tax: {
    meaning: "Money paid to the government",
    pronunciation: "/tæks/ (sounds like 't-ax')",
    sentences: [
      "Adults pay tax on things they buy.",
      "The tax helps build schools and roads.",
      "There's no tax on children's books."
    ]
  },
  wax: {
    meaning: "A smooth, shiny substance",
    pronunciation: "/wæks/ (sounds like 'w-ax')",
    sentences: [
      "Candles are made of wax that melts.",
      "Dad puts wax on the car to make it shine.",
      "Bees make wax to build their honeycomb."
    ]
  },
  max: {
    meaning: "The most or biggest amount",
    pronunciation: "/mæks/ (sounds like 'm-ax')",
    sentences: [
      "The max speed limit on this road is 25.",
      "I can carry a max of three books.",
      "Turn the volume to max so we can hear."
    ]
  },
  
  // -as words
  gas: {
    meaning: "What we put in cars or use for cooking",
    pronunciation: "/gæs/ (sounds like 'g-as')",
    sentences: [
      "We need to put gas in the car.",
      "The stove uses gas to make fire for cooking.",
      "Balloons are filled with a special gas."
    ]
  },
  has: {
    meaning: "Owns something",
    pronunciation: "/hæz/ (sounds like 'h-az')",
    sentences: [
      "She has a beautiful new bicycle.",
      "My brother has three pet hamsters.",
      "The library has thousands of books."
    ]
  },
  was: {
    meaning: "Past of 'is'",
    pronunciation: "/wʌz/ (sounds like 'w-uz')",
    sentences: [
      "Yesterday was a sunny day.",
      "I was happy to see my friend.",
      "The movie was really exciting!"
    ]
  },
  
  // -ack words
  back: {
    meaning: "The rear part of something",
    pronunciation: "/bæk/ (sounds like 'b-ack')",
    sentences: [
      "I carry my backpack on my back.",
      "Please come back home before dark.",
      "The cat arched its back when scared."
    ]
  },
  pack: {
    meaning: "To put things in a container",
    pronunciation: "/pæk/ (sounds like 'p-ack')",
    sentences: [
      "Let's pack our lunch for the picnic.",
      "The wolf pack hunts together.",
      "I need to pack my clothes for the trip."
    ]
  },
  sack: {
    meaning: "A large bag made of rough material",
    pronunciation: "/sæk/ (sounds like 's-ack')",
    sentences: [
      "Santa carries toys in a big sack.",
      "The farmer filled the sack with potatoes.",
      "We use a sack to collect leaves in fall."
    ]
  },
  track: {
    meaning: "A path or to follow something",
    pronunciation: "/træk/ (sounds like 'tr-ack')",
    sentences: [
      "The train runs on a railroad track.",
      "We can track the package online.",
      "I run around the track at school."
    ]
  },
  crack: {
    meaning: "A thin line where something is broken",
    pronunciation: "/kræk/ (sounds like 'cr-ack')",
    sentences: [
      "There's a crack in the sidewalk.",
      "I heard the ice crack on the pond.",
      "Don't step on the crack in the pavement!"
    ]
  },
  stack: {
    meaning: "A pile of things on top of each other",
    pronunciation: "/stæk/ (sounds like 'st-ack')",
    sentences: [
      "I made a stack of pancakes for breakfast.",
      "The books are in a neat stack on the desk.",
      "Let's stack these blocks to build a tower."
    ]
  },
  
  // -ail words
  mail: {
    meaning: "Letters and packages delivered to your home",
    pronunciation: "/meɪl/ (sounds like 'm-ail')",
    sentences: [
      "The mail carrier brings letters every day.",
      "I got a birthday card in the mail.",
      "We mail postcards when we travel."
    ]
  },
  tail: {
    meaning: "The long part at the back of an animal",
    pronunciation: "/teɪl/ (sounds like 't-ail')",
    sentences: [
      "The dog's tail wags when he's happy.",
      "A monkey uses its tail to swing from trees.",
      "The cat's tail is long and fluffy."
    ]
  },
  nail: {
    meaning: "A thin metal pin or the hard part on fingers",
    pronunciation: "/neɪl/ (sounds like 'n-ail')",
    sentences: [
      "Dad uses a hammer to hit the nail.",
      "I painted my nails bright pink.",
      "The nail holds the picture on the wall."
    ]
  },
  sail: {
    meaning: "A large cloth that catches wind on a boat",
    pronunciation: "/seɪl/ (sounds like 's-ail')",
    sentences: [
      "The white sail catches the wind.",
      "We sail across the lake in summer.",
      "The boat's sail is torn and needs fixing."
    ]
  },
  trail: {
    meaning: "A path through the woods or mountains",
    pronunciation: "/treɪl/ (sounds like 'tr-ail')",
    sentences: [
      "We hiked on the mountain trail.",
      "The trail leads to a beautiful waterfall.",
      "Follow the trail markers to stay safe."
    ]
  },
  
  // -ain words
  rain: {
    meaning: "Water that falls from clouds",
    pronunciation: "/reɪn/ (sounds like 'r-ain')",
    sentences: [
      "The rain makes the flowers grow.",
      "I love the sound of rain on the roof.",
      "We stayed inside because of the heavy rain."
    ]
  },
  pain: {
    meaning: "When something hurts",
    pronunciation: "/peɪn/ (sounds like 'p-ain')",
    sentences: [
      "I have a pain in my stomach.",
      "The medicine will help with the pain.",
      "Ice can reduce pain from a bump."
    ]
  },
  main: {
    meaning: "The most important one",
    pronunciation: "/meɪn/ (sounds like 'm-ain')",
    sentences: [
      "The main character in the story is brave.",
      "Our main meal is dinner.",
      "The main road goes through town."
    ]
  },
  train: {
    meaning: "A long vehicle that runs on tracks",
    pronunciation: "/treɪn/ (sounds like 'tr-ain')",
    sentences: [
      "The train carries people to different cities.",
      "I love to watch the train go by.",
      "We took a train to visit grandma."
    ]
  },
  brain: {
    meaning: "The organ inside your head that thinks",
    pronunciation: "/breɪn/ (sounds like 'br-ain')",
    sentences: [
      "Your brain helps you think and remember.",
      "Reading books is good exercise for your brain.",
      "The brain controls everything your body does."
    ]
  },
  chain: {
    meaning: "Metal rings connected together",
    pronunciation: "/tʃeɪn/ (sounds like 'ch-ain')",
    sentences: [
      "The dog is on a chain in the yard.",
      "My necklace has a gold chain.",
      "The bike chain helps the wheels turn."
    ]
  },
  
  // -ake words
  cake: {
    meaning: "A sweet dessert made with flour and sugar",
    pronunciation: "/keɪk/ (sounds like 'k-ake')",
    sentences: [
      "We had chocolate cake for my birthday.",
      "Mom bakes the best cake in the world.",
      "The wedding cake has three layers."
    ]
  },
  lake: {
    meaning: "A large body of water surrounded by land",
    pronunciation: "/leɪk/ (sounds like 'l-ake')",
    sentences: [
      "We go swimming in the lake every summer.",
      "The lake is calm and peaceful.",
      "Ducks swim on the lake near our house."
    ]
  },
  make: {
    meaning: "To create or build something",
    pronunciation: "/meɪk/ (sounds like 'm-ake')",
    sentences: [
      "Let's make a sandcastle at the beach.",
      "I can make my bed all by myself.",
      "We make cookies together on weekends."
    ]
  },
  take: {
    meaning: "To pick up and carry something",
    pronunciation: "/teɪk/ (sounds like 't-ake')",
    sentences: [
      "Please take your shoes off inside.",
      "I take the bus to school every day.",
      "Take an umbrella in case it rains."
    ]
  },
  wake: {
    meaning: "To stop sleeping",
    pronunciation: "/weɪk/ (sounds like 'w-ake')",
    sentences: [
      "I wake up early every morning.",
      "The loud noise will wake the baby.",
      "What time do you wake up for school?"
    ]
  },
  snake: {
    meaning: "A long, thin animal with no legs",
    pronunciation: "/sneɪk/ (sounds like 'sn-ake')",
    sentences: [
      "The green snake slithers through the grass.",
      "Some snakes are dangerous, but many are not.",
      "The snake sheds its skin as it grows."
    ]
  },
  shake: {
    meaning: "To move back and forth quickly",
    pronunciation: "/ʃeɪk/ (sounds like 'sh-ake')",
    sentences: [
      "Shake the bottle before you drink it.",
      "The earthquake made the house shake.",
      "I like to shake hands when I meet someone."
    ]
  },
  
  // -ale words
  tale: {
    meaning: "A story, especially one that's made up",
    pronunciation: "/teɪl/ (sounds like 't-ale')",
    sentences: [
      "Grandpa tells the best fairy tales.",
      "The tale of the three little pigs is famous.",
      "I love to read tales about brave knights."
    ]
  },
  sale: {
    meaning: "When things cost less money than usual",
    pronunciation: "/seɪl/ (sounds like 's-ale')",
    sentences: [
      "The toy store is having a big sale.",
      "Mom bought shoes on sale for half price.",
      "The garage sale has lots of old books."
    ]
  },
  pale: {
    meaning: "Light in color, not dark",
    pronunciation: "/peɪl/ (sounds like 'p-ale')",
    sentences: [
      "She looks pale because she's been sick.",
      "The pale blue sky is beautiful today.",
      "I prefer pale colors for my bedroom walls."
    ]
  },
  scale: {
    meaning: "A tool for weighing things or fish skin",
    pronunciation: "/skeɪl/ (sounds like 'sc-ale')",
    sentences: [
      "Step on the scale to see how much you weigh.",
      "The fish has shiny scales all over its body.",
      "Practice your piano scales every day."
    ]
  },
  whale: {
    meaning: "A very large sea animal",
    pronunciation: "/weɪl/ (sounds like 'wh-ale')",
    sentences: [
      "The blue whale is the biggest animal on Earth.",
      "We saw a whale jump out of the ocean.",
      "Whales are mammals, not fish."
    ]
  }
};

function App() {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [learnedWords, setLearnedWords] = useState<Set<string>>(new Set());
  const [animatingWord, setAnimatingWord] = useState<string | null>(null);

  const words = Object.keys(wordDatabase);
  const filteredWords = words.filter(word => 
    word.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleWordClick = (word: string) => {
    setAnimatingWord(word);
    setTimeout(() => {
      setSelectedWord(word);
      setLearnedWords(prev => new Set([...prev, word]));
      setAnimatingWord(null);
    }, 200);
  };

  const closeModal = () => {
    setSelectedWord(null);
  };

  const getWordCardColor = (word: string) => {
    const colors = [
      'from-pink-400 to-purple-500',
      'from-blue-400 to-indigo-500',
      'from-green-400 to-teal-500',
      'from-yellow-400 to-orange-500',
      'from-purple-400 to-pink-500',
      'from-indigo-400 to-blue-500',
      'from-red-400 to-pink-500',
      'from-teal-400 to-green-500',
      'from-orange-400 to-red-500',
      'from-cyan-400 to-blue-500'
    ];
    return colors[word.length % colors.length];
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-12 h-12 mr-4 animate-bounce" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Rhyming Words Adventure
              </h1>
            </div>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Discover amazing words that rhyme! Learn meanings, pronunciation, and see examples! 🌟
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for a word..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border-0 shadow-lg text-gray-700 text-lg focus:ring-4 focus:ring-purple-300 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-600">
                <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                <span className="font-semibold">{learnedWords.size}</span>
                <span className="ml-1">words learned</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Volume2 className="w-5 h-5 mr-2 text-green-500" />
                <span className="font-semibold">{filteredWords.length}</span>
                <span className="ml-1">words available</span>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Click any word to learn its meaning, pronunciation, and see examples!
            </div>
          </div>
        </div>
      </div>

      {/* Word Cards Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {filteredWords.map((word, index) => (
            <div
              key={word}
              className={`
                relative group cursor-pointer transform transition-all duration-300 hover:scale-105
                ${animatingWord === word ? 'scale-110 rotate-3' : ''}
                ${learnedWords.has(word) ? 'ring-2 ring-green-400' : ''}
              `}
              onClick={() => handleWordClick(word)}
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              <div className={`
                bg-gradient-to-br ${getWordCardColor(word)} 
                rounded-2xl p-4 shadow-lg hover:shadow-xl 
                transform transition-all duration-300 hover:-translate-y-1
                relative overflow-hidden
              `}>
                {learnedWords.has(word) && (
                  <div className="absolute top-1 right-1">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                )}
                
                <div className="text-center">
                  <span className="text-white font-bold text-lg md:text-xl block mb-1">
                    {word}
                  </span>
                  <div className="w-8 h-0.5 bg-white/30 mx-auto"></div>
                </div>
                
                {/* Hover Effect Overlay */}
              </div>
            </div>
          ))}
        </div>

        {filteredWords.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">No words found</h3>
            <p className="text-gray-500">Try searching for a different word!</p>
          </div>
        )}
      </div>

      {/* Enhanced Modal */}
      {selectedWord && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${getWordCardColor(selectedWord)} rounded-t-3xl p-6 text-white relative overflow-hidden`}>
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 animate-pulse">
                  {selectedWord}
                </div>
                <div className="flex items-center justify-center space-x-2 text-lg opacity-90">
                  <Mic className="w-5 h-5" />
                  <span>{wordDatabase[selectedWord].pronunciation}</span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              {/* Meaning Section */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-6 h-6 text-purple-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">What does it mean?</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed bg-purple-50 p-4 rounded-xl">
                  {wordDatabase[selectedWord].meaning}
                </p>
              </div>

              {/* Example Sentences Section */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">Example Sentences</h3>
                </div>
                <div className="space-y-3">
                  {wordDatabase[selectedWord].sentences.map((sentence, index) => (
                    <div key={index} className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-400">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {sentence.split(selectedWord).map((part, i, arr) => (
                          <span key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <span className="font-bold text-blue-600 bg-blue-200 px-1 rounded">
                                {selectedWord}
                              </span>
                            )}
                          </span>
                        ))}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 bg-green-50 rounded-full px-4 py-3">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span>Word learned! Great job! 🎉</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;