//default download
const defaultList = [
	{
		jpg: 'img/defaultpic1.jpg',
		text:
			"Explanation: When leaving lunar orbit in February 1971, the crew of Apollo 14 watched this Earthrise from their command module Kittyhawk. With Earth's sunlit crescent just peeking over the lunar horizon, the cratered terrain in the foreground is along the lunar farside. Of course, while orbiting the Moon, the crew could watch Earth rise and set, but the Earth hung stationary in the sky over Fra Mauro Base, their landing site on the lunar surface. Rock samples brought back by the Apollo 14 mission included a 20 pound rock nicknamed Big Bertha, later determined to contain a likely fragment of a meteorite from planet Earth.",
		id: 1,
	},
	{
		jpg: 'img/defualtpic2.jpg',
		text:
			"Explanation: Like a ship plowing through cosmic seas, runaway star Zeta Ophiuchi produces the arcing interstellar bow wave or bow shock seen in this stunning infrared portrait. In the false-color view, bluish Zeta Oph, a star about 20 times more massive than the Sun, lies near the center of the frame, moving toward the left at 24 kilometers per second. Its strong stellar wind precedes it, compressing and heating the dusty interstellar material and shaping the curved shock front. What set this star in motion? Zeta Oph was likely once a member of a binary star system, its companion star was more massive and hence shorter lived. When the companion exploded as a supernova catastrophically losing mass, Zeta Oph was flung out of the system. About 460 light-years away, Zeta Oph is 65,000 times more luminous than the Sun and would be one of the brighter stars in the sky if it weren't surrounded by obscuring dust. The image spans about 1.5 degrees or 12 light-years at the estimated distance of Zeta Ophiuchi. Last week, NASA placed the Spitzer Space Telescope in safe mode, ending its 16 successful years of studying our universe.",
		id: 2,
	},
	{
		jpg: 'img/defualtpic3.jpg',
		text:
			"Explanation: Seeing mountain peaks glow red from inside the Grand Canyon was one of the most incredible sunset experiences of this amateur photographer's life. They appeared even more incredible later, when digitally combined with an exposure of the night sky -- taken by the same camera and from the same location -- an hour later. The two images were taken last August from the 220 Mile Canyon campsite on the Colorado River, Arizona, USA. The peaks glow red because they were lit by an unusually red sunset. Later, high above, the band of the Milky Way Galaxy angled dramatically down, filled with stars, nebula, and dark clouds of dust. To the Milky Way's left is the planet Saturn, while to the right is the brighter Jupiter. Although Jupiter and Saturn are now hard to see, Venus will be visible and quite bright to the west in clear skies, just after sunset, for the next two months.",
		id: 3,
	},
	{
		jpg: 'img/defualtpic4.jpg',
		text:
			'Explanation: Do we all see the same Moon? Yes, but we all see it differently. One difference is the apparent location of the Moon against background stars -- an effect known as parallax. We humans use the parallax between our eyes to judge depth. To see lunar parallax, though, we need eyes placed at a much greater separations -- hundreds to thousands of kilometers apart. Another difference is that observers around the Earth all see a slightly different face of our spherical Moon -- an effect known as libration. The featured image is a composite of many views across the Earth, as submitted to APOD, of the total lunar eclipse of 2019 January 21. These images are projected against the same background stars to illustrate both effects. The accurate superposition of these images was made possible by a serendipitous meteorite impact on the Moon during the lunar eclipse, labeled here L1-21J -- guaranteeing that these submitted images were all taken within a split second. With the simultaneous observations made by independent amateur astronomers across the globe, a group of astronomers were able to use their citizen-science images to narrow down the location, orbit, and energy of this rare event.',
		id: 4,
	},
	{
		jpg: 'img/defualtpic5.jpg',
		text:
			"Explanation: The Moon's south pole is near the top of this detailed telescopic view. Looking across the rugged southern lunar highlands it was captured from southern California, planet Earth. At the Moon's third quarter phase the lunar terminator, the sunset shadow line, is approaching from the left. The scene's foreshortened perspective heightens the impression of a dense field of craters and makes the craters themselves appear more oval shaped close to the lunar limb. Below and left of center is sharp-walled crater Tycho, 85 kilometers in diameter. Young Tycho's central peak is still in sunlight, but casts a long shadow across the crater floor. The large prominent crater to the south (above) Tycho is Clavius. Nearly 231 kilometers in diameter its walls and floor are pocked with smaller, more recent, overlaying impact craters. Mountains visible along the lunar limb at the top can rise about 6 kilometers or so above the surrounding terrain.",
		id: 5,
	},
	{
		jpg: 'img/defualtpic6.jpg',
		text:
			"Explanation: Big, beautiful spiral galaxy NGC 7331 is often touted as an analog to our own Milky Way. About 50 million light-years distant in the northern constellation Pegasus, NGC 7331 was recognized early on as a spiral nebula and is actually one of the brighter galaxies not included in Charles Messier's famous 18th century catalog. Since the galaxy's disk is inclined to our line-of-sight, long telescopic exposures often result in an image that evokes a strong sense of depth. This Hubble Space Telescope close-up spans some 40,000 light-years. The galaxy's magnificent spiral arms feature dark obscuring dust lanes, bright bluish clusters of massive young stars, and the telltale reddish glow of active star forming regions. The bright yellowish central regions harbor populations of older, cooler stars. Like the Milky Way, a supermassive black hole lies at the core of spiral galaxy NGC 7331.",
		id: 6,
	},
	{
		jpg: 'img/defualtpic7.jpg',
		text:
			"Explanation: Interstellar clouds of hydrogen gas and dust abound in this gorgeous skyscape. The 3 degree wide field of view stretches through the faint but fanciful constellation Monoceros, the Unicorn. A star forming region cataloged as NGC 2264 is centered, a complex jumble of cosmic gas, dust and stars about 2,700 light-years distant. It mixes reddish emission nebulae excited by energetic light from newborn stars with dark dust clouds. Where the otherwise obscuring dust clouds lie close to hot, young stars they also reflect starlight, forming blue reflection nebulae. A few light-years across, a simple sculpted shape known as the Cone Nebula is near center. Outlined by the red glow of hydrogen gas, the cone points toward the left and bright, blue-white S Monocerotis. Itself a multiple system of massive, hot stars S Mon is adjacent to bluish reflection nebulae and the convoluted Fox Fur nebula. Expansive dark markings on the sky are silhouetted by a larger region of fainter emission with yellowish open star cluster Trumpler 5 near the top of the frame. The curious compact cometary shape right of center is known as Hubble's Variable Nebula.",
		id: 7,
	},
	{
		jpg: 'img/defualtpic8.jpg',
		text:
			'Explanation: What would it be like to fly free in space? At about 100 meters from the cargo bay of the space shuttle Challenger, Bruce McCandless II was living the dream -- floating farther out than anyone had ever been before. Guided by a Manned Maneuvering Unit (MMU), astronaut McCandless, pictured, was floating free in space. McCandless and fellow NASA astronaut Robert Stewart were the first to experience such an "untethered space walk" during Space Shuttle mission 41-B in 1984. The MMU worked by shooting jets of nitrogen and was used to help deploy and retrieve satellites. With a mass over 140 kilograms, an MMU is heavy on Earth, but, like everything, is weightless when drifting in orbit. The MMU was later replaced with the SAFER backpack propulsion unit.',
		id: 8,
	},
];

const url =
	'https://api.nasa.gov/planetary/apod?api_key=jaj7wocDqqP4j2GOMSWI1ZS8RGDACrlM2bqJ6xC9&count=8';

const apiList = [];
const cardPlayDeck = {};
let cardCheck = [];
let clickCount = 0;
const trivia = document.querySelector('#modal');
const triviaImg = document.querySelector('.triviaImg');
const triviaText = document.querySelector('.triviaText');
const fronts = document.querySelectorAll('.front');
const cardsInPlay = document.querySelectorAll('.card');
const backs = document.querySelectorAll('.back');
const gameBoard = document.querySelector('.gameBoard');
const triviaButton = document.querySelector('.triviaButton');

trivia.addEventListener('click', hideTrivia);


// api pull and default feed on failure

console.log(trivia)
function apiPull() {
	fetch(url)
		.then((response) => response.json())
		.then((response) => {
			for (i = 0; i < Object.keys(response).length; i++) {
				const tempObj = {
					jpg: response[i].url,
					text: `${response[i].explanation} copyright: ${response[i].copyright}`,
					id: i,
				};

				apiList.push(tempObj);
			}

			createDeck(apiList);
		})
		.catch((error) => {
			createDeck(defaultList);
			alert(`Nasa APOD API has an error. Local APOD info cards will be used.`);
			console.log(error);
		});
}
apiPull();

//doubling up cards
function createDeck(array) {
	k = 0;
	l = 0;
	while (k < Object.keys(array).length) {
		cardPlayDeck[l] = array[k];
		l++;
		if (l % 2 === 0) {
			k++;
		}
	}
	randomArray(cardPlayDeck);
}

//Random shuffle
function randomArray(array) {
	for (i = 0; i < Object.keys(array).length - 1; i++) {
		const j = Math.floor(Math.random() * i);
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	createBoard();
}
//setting of defaults
function createBoard() {
	for (i = 0; i < Object.keys(cardPlayDeck).length; i++) {
		cardsInPlay[i].setAttribute('data-id', cardPlayDeck[i].id);
		backs[i].addEventListener('click', flipCard);
		fronts[i].addEventListener('click', checkForMatch);
		backs[i].setAttribute('data-lock', 0);
		fronts[i].setAttribute('src', cardPlayDeck[i].jpg);
		trivia.setAttribute('data-show', 0);
	}
}

//flipping card over with limiters
function flipCard() {
	console.log(this)
	clickCount++;
	if (this.dataset.lock === '0' && cardCheck.length < 2) {
		let id = this.getAttribute('id');
		document.querySelector(`.front.${id}`).classList.remove('remove');
		this.classList.add('remove');
		cardId = this.parentNode.getAttribute('data-id');
		cardCheck.push(cardId);
	} else {
		checkForMatch();
	}
}

//hide trivia function
function hideTrivia() {
	if (trivia.dataset.show === '1') {
		trivia.classList.add('remove');
		trivia.setAttribute('data-show', '0');
	}
}

//checking for match, locking, resetting flips
function checkForMatch() {
	console.log(this)
	if (cardCheck[0] === cardCheck[1]) {
		match();
	} else {
		noMatch();
	}
	cardCheck = [];
	clickCount = 0;
}
function match() {
	for (i = 0; i < Object.keys(cardsInPlay).length; i++) {
		if (cardsInPlay[i].dataset.id === cardCheck[0]) {
			backs[i].setAttribute('data-lock', 1);
			triviaText.innerText = cardPlayDeck[i].text;
			triviaImg.setAttribute('src', cardPlayDeck[i].jpg);
			
		}
	}
	trivia.setAttribute('data-show', 1);
	trivia.classList.remove('remove');
}
function noMatch() {
	for (i = 0; i < Object.keys(cardsInPlay).length; i++) {
		if (backs[i].dataset.lock === '0') {
			backs[i].classList.remove('remove');
			fronts[i].classList.add('remove');
		}
	}
}

function reset() {
	backs.forEach(function (x) {
		x.setAttribute('data-lock', 0);
		x.classList.remove('remove');
	});
	fronts.forEach(function (x) {
		x.classList.add('remove');
	});
	apiPull();
}

document.querySelector('.reset').addEventListener('click', reset);
