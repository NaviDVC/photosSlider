const sliderImages = document.querySelectorAll('.slider__image');
const prevButton = document.querySelector('.slider__button.prev');
const nextButton = document.querySelector('.slider__button.next');
let currentImageIndex = 0;

function showCurrentImage() {
  sliderImages.forEach((image, index) => {
    if (index === currentImageIndex) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });

  if (currentImageIndex === 0) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
  }

  if (currentImageIndex === sliderImages.length - 1) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = 'block';
  }
}

function showNextImage() {
  if (currentImageIndex < sliderImages.length - 1) {
    currentImageIndex++;
  }
  showCurrentImage();
}

function showPrevImage() {
  if (currentImageIndex > 0) {
    currentImageIndex--;
  }
  showCurrentImage();
}

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

showCurrentImage();