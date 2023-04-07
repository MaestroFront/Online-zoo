let slides = document.querySelectorAll('.pet__list_second .slide');
let currentSlide = 0;
let isOk = true;

let imagesSecond = document.querySelectorAll('.pet__list .pet__list_second .img-container img');
let namesSecond = document.querySelectorAll('.pet__list .pet__list_second .pet__name');
let locationsSecond = document.querySelectorAll('.pet__list .pet__list_second .pet__location');

function mixCards() {
    cards_2.sort(() => Math.random() - 0.5);
    return cards_2;
};

mixCards();
imagesSecond[0].src = `${cards_2[0].src}`;
imagesSecond[1].src = `${cards_2[1].src}`;
imagesSecond[2].src = `${cards_2[2].src}`;
imagesSecond[3].src = `${cards_2[3].src}`;
imagesSecond[4].src = `${cards_2[4].src}`;
imagesSecond[5].src = `${cards_2[5].src}`;
imagesSecond[6].src = `${cards_2[6].src}`;
imagesSecond[7].src = `${cards_2[7].src}`;
imagesSecond[8].src = `${cards_2[8].src}`;

function updateSlide() {
    mixCards();
    if (slides[0].classList.contains('active')) {
        imagesSecond[3].src = `${cards_2[3].src}`;
        imagesSecond[4].src = `${cards_2[4].src}`;
        imagesSecond[5].src = `${cards_2[5].src}`;
        imagesSecond[6].src = `${cards_2[6].src}`;
        imagesSecond[7].src = `${cards_2[7].src}`;
        imagesSecond[8].src = `${cards_2[8].src}`;
    } else if (slides[1].classList.contains('active')) {
        imagesSecond[0].src = `${cards_2[0].src}`;
        imagesSecond[1].src = `${cards_2[1].src}`;
        imagesSecond[2].src = `${cards_2[2].src}`;
        imagesSecond[6].src = `${cards_2[6].src}`;
        imagesSecond[7].src = `${cards_2[7].src}`;
        imagesSecond[8].src = `${cards_2[8].src}`;
    } else if (slides[2].classList.contains('active')) {
        imagesSecond[0].src = `${cards_2[0].src}`;
        imagesSecond[1].src = `${cards_2[1].src}`;
        imagesSecond[2].src = `${cards_2[2].src}`;
        imagesSecond[3].src = `${cards_2[3].src}`;
        imagesSecond[4].src = `${cards_2[4].src}`;
        imagesSecond[5].src = `${cards_2[5].src}`;
    }
}

function changeCurrentSlide(n) {
    currentSlide = (n + slides.length) % slides.length;
};

function hideSlide(direction) {
    isOk = false;
    slides[currentSlide].classList.add(direction);
    slides[currentSlide].addEventListener('animationend', function () {
        this.classList.remove('active', direction);
    });
};

function showSlide(direction) {
    slides[currentSlide].classList.add('next-bottom', direction);
    slides[currentSlide].addEventListener('animationend', function () {
        this.classList.remove('next-bottom', direction);
        this.classList.add('active');
        isOk = true;
    });
};

function previousSlide(n) {
    hideSlide('to-right');
    changeCurrentSlide(n - 1);
    showSlide('from-left');
};

function nextSlide(n) {
    hideSlide('to-left');
    changeCurrentSlide(n + 1);
    showSlide('from-right');
};

document.querySelector('.btn__left').addEventListener('click', function () {
    if (isOk) {
        previousSlide(currentSlide);
        updateSlide()
    }
});

document.querySelector('.btn__right').addEventListener('click', function () {
    if (isOk) {
        nextSlide(currentSlide);
        updateSlide()
    }
});