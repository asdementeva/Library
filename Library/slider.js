const images = document.querySelectorAll('.about-image');
const prevButton = document.querySelector('.slider-control.prev');
const nextButton = document.querySelector('.slider-control.next');
const points = document.querySelectorAll('.about-point');
let currentImageIndex = 0;

function updateSlider() {
    images.forEach(image => {
        image.classList.remove('active', 'left', 'center', 'right');
    });

    if (window.innerWidth >= 1024) {
        images[currentImageIndex].classList.add('active', 'left');
        images[currentImageIndex + 1].classList.add('active', 'center');
        images[currentImageIndex + 2].classList.add('active', 'right');
    } else {
        images[currentImageIndex].classList.add('active', 'center');
    }

    points.forEach(point => point.classList.remove('active'));
    points[currentImageIndex].classList.add('active');

    prevButton.disabled = currentImageIndex === 0;
    nextButton.disabled = currentImageIndex === images.length - 1;
}

prevButton.addEventListener('click', () => {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateSlider();
    }
});

nextButton.addEventListener('click', () => {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        updateSlider();
    }
});

points.forEach((point, index) => {
    point.addEventListener('click', () => {
        currentImageIndex = index;
        updateSlider();
    });
});

window.addEventListener('resize', () => {
    updateSlider();
});

updateSlider();
