let items = document.querySelectorAll('.pet__list_first .slide');
let currentItem = 0;
let isEnabled = true;

let imagesFirst = document.querySelectorAll('.pet__list .pet__list_first .img-container img');
let namesFirst = document.querySelectorAll('.pet__list .pet__list_first .pet__name');
let locationsFirst = document.querySelectorAll('.pet__list .pet__list_first .pet__location');

function mixCards() {
    cards_1.sort(() => Math.random() - 0.5);
    return cards_1;
};
mixCards();
imagesFirst[0].src = `${cards_1[0].src}`;
imagesFirst[1].src = `${cards_1[1].src}`;
imagesFirst[2].src = `${cards_1[2].src}`;
imagesFirst[3].src = `${cards_1[3].src}`;
imagesFirst[4].src = `${cards_1[4].src}`;
imagesFirst[5].src = `${cards_1[5].src}`;
imagesFirst[6].src = `${cards_1[6].src}`;
imagesFirst[7].src = `${cards_1[7].src}`;
imagesFirst[8].src = `${cards_1[8].src}`;

function updateSlide() {
    mixCards();
    if (items[0].classList.contains('active')) {
        imagesFirst[3].src = `${cards_1[3].src}`;
        imagesFirst[4].src = `${cards_1[4].src}`;
        imagesFirst[5].src = `${cards_1[5].src}`;
        imagesFirst[6].src = `${cards_1[6].src}`;
        imagesFirst[7].src = `${cards_1[7].src}`;
        imagesFirst[8].src = `${cards_1[8].src}`;
    } else if (items[1].classList.contains('active')) {
        imagesFirst[0].src = `${cards_1[0].src}`;
        imagesFirst[1].src = `${cards_1[1].src}`;
        imagesFirst[2].src = `${cards_1[2].src}`;
        imagesFirst[6].src = `${cards_1[6].src}`;
        imagesFirst[7].src = `${cards_1[7].src}`;
        imagesFirst[8].src = `${cards_1[8].src}`;
    } else if (items[2].classList.contains('active')) {
        imagesFirst[0].src = `${cards_1[0].src}`;
        imagesFirst[1].src = `${cards_1[1].src}`;
        imagesFirst[2].src = `${cards_1[2].src}`;
        imagesFirst[3].src = `${cards_1[3].src}`;
        imagesFirst[4].src = `${cards_1[4].src}`;
        imagesFirst[5].src = `${cards_1[5].src}`;
    }
}

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
};

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('active', direction);
    });
};

function showItem(direction) {
    items[currentItem].classList.add('next-top', direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('next-top', direction);
        this.classList.add('active');
        isEnabled = true;
    });
};

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
};

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
};

document.querySelector('.btn__left').addEventListener('click', function () {
    if (isEnabled) {
        previousItem(currentItem);
        updateSlide();
    }
});

document.querySelector('.btn__right').addEventListener('click', function () {
    if (isEnabled) {
        nextItem(currentItem);
        updateSlide()
    }
});