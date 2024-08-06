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


let currentIndex = 0;
const bannerImage = document.getElementById('bannerImage');
const tagline = document.getElementById('tagline');

// Mise a jour images caroussel
function updateCarousel(index) {
    bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;
    tagline.innerHTML = slides[index].tagLine;
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

// Initialisation du carrousel
updateCarousel(currentIndex);

//fct pour creer tous les points pour etat initial, point remplit = slide affiche, 
//ajouter une classe pour point actif, creer point + id sur les points
//utiliser current index logique

