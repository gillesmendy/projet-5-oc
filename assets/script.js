const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.getElementById("previous");
const arrowRight = document.getElementById("next");

let i = 0;

const bannerImage = document.getElementById('bannerImage');
const tagline = document.getElementById('tagline');
const dotContainer = document.querySelector('.dots');

function createDot() {
	slides.forEach((slide, index) => {
		let dot = document.createElement("div");
		dot.classList.add("dot");
		if (index === 0) dot.classList.add("dot_selected");

		dot.addEventListener("click", function() {
			changeSlideTo(index);
		});

		dotContainer.appendChild(dot)
	});
};

// Mise à jour des dots
function updateDots() {
	let dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
		dot.classList.toggle("dot_selected", index === i)
    });
};

// Mise a jour images caroussel
function changeSlide(direction) {
	i = i + direction;

	if (i > slides.length - 1) {
		i = 0; 
	}

	if (i < 0) {
		i = slides.length - 1;
	}

    bannerImage.src = `./assets/images/slideshow/${slides[i].image}`;
    tagline.innerHTML = slides[i].tagLine;
	updateDots();
}

function changeSlideTo(index) {
	i = index;

	bannerImage.src = `./assets/images/slideshow/${slides[i].image}`;
    tagline.innerHTML = slides[i].tagLine;
	updateDots();
}

arrowLeft.addEventListener("click", function() {
	changeSlide(-1)
});

arrowRight.addEventListener("click", function() {
	changeSlide(1)
});

// Initialisation du carrousel
createDot();









/*
let currentIndex = 0;
const bannerImage = document.getElementById('bannerImage');
const tagline = document.getElementById('tagline');
const dots = document.querySelectorAll('.dot');


// Mise a jour images caroussel
function updateCarousel(index) {
    bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;
    tagline.innerHTML = slides[index].tagLine;
	updateDots(index);
}

// Evenements et fleches
document.getElementById('previous').addEventListener('click', () => {
	if (currentIndex != 0) 
    currentIndex = currentIndex - 1 
	else
	currentIndex = slides.length - 1
    updateCarousel(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
    if (currentIndex < slides.length) 
	currentIndex = currentIndex + 1 
	else
	currentIndex = 0
    updateCarousel(currentIndex);
});

// Mise à jour des dots
function updateDots(index) {
    dots.forEach((dot, dotIndex) => {
        if (dotIndex === index) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}


// Initialisation du carrousel
updateCarousel(currentIndex);
updateDots();//
*/

