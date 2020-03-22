const API_KEYS =
	'https://pixabay.com/api/?key=15698950-f1ae4ab87a2ca18af26716ce2';

const form = document.querySelector('form');
const input = document.querySelector('input');

const loadingImages = document.querySelector('#loadingImages');
const imageSection = document.querySelector('.images');

loadingImages.style.display = 'none';

form.addEventListener('submit', formSubmitted);

function formSubmitted(event) {
	event.preventDefault();
	const searchTerm = input.value;
	search(searchTerm).then(displayImages);
}

function search(searchTerm) {
	loadingImages.style.display = '';
	imageSection.innerHTML = '';
	return fetch(`${API_KEYS}&q=${searchTerm}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			return data.hits;
		});
}

function displayImages(images) {
	images.forEach((image) => {
		const imageElement = document.createElement('img');
		imageElement.src = image.webformatURL;
		imageSection.appendChild(imageElement);
	});
	loadingImages.style.display = 'none';
}
