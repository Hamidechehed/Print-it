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

// Récupérer les éléments des flèches
var slidesContainer = document.querySelector('.banner-img');
var tagLineContainer = document.querySelector('.banner-img + p');
var arrowRight = document.querySelector('.arrow_right');
var arrowLeft = document.querySelector('.arrow_left');
var dots = document.querySelectorAll('.dot');

var currentSlideIndex = 0;


//Fonction pour mettre à jour la slide de l'image, le texte et la "dot" sélectionnée selon index de la slide actuel (en paramètres)
function updateSlide(index) {
	slidesContainer.src = "./assets/images/slideshow/" + slides[index].image;
	tagLineContainer.innerHTML = slides[index].tagLine;
  
	dots.forEach(function(dot, dotIndex) {
	  dot.classList.toggle('dot_selected', dotIndex === index);
	});
}



// Met à jour la slide quand l'utilisateur clique sur la flèche de droite
arrowRight.addEventListener('click', function() {
	currentSlideIndex = (currentSlideIndex + 1) % slides.length;
	updateSlide(currentSlideIndex);
	});

// Met à jour la slide quand l'utilisateur clique sur la flèche de droite
arrowLeft.addEventListener('click', function() {
	currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
	updateSlide(currentSlideIndex);
	});

// Met à jour la slide quand l'utilisateur clique sur une "dot"
dots.forEach(function(dot, dotIndex) {
	dot.addEventListener('click', function() {
		currentSlideIndex = dotIndex;
		updateSlide(currentSlideIndex);
		});
	});

// Initial slide update
updateSlide(currentSlideIndex);



//------------------------------------------------------------- Première partie du projet ------------------------------------------------
// // Ajouter des écouteurs d'événements sur les flèches
// arrowRight.addEventListener('click', function() {
//   console.log('Clic sur la flèche droite');
// });

// arrowLeft.addEventListener('click', function() {
//   console.log('Clic sur la flèche gauche');
// });


// var dotsContainer = document.querySelector('.dots');


// // Ajoute le nombre de dots en se basant sur le nombre de slides
// slides.forEach(function(_, index) {
//   var dot = document.createElement('span');
//   dot.classList.add('dot');
//   if (index === 0) {
//     dot.classList.add('dot_selected');
//   }
//   dotsContainer.appendChild(dot);
// });
