const header = document.querySelector('.burger');
const burger = document.querySelector('.burger');
const headerPopup = document.querySelector('.popup');
const cross = document.querySelector('.popup__cross');
const shadow = document.querySelector('.shadow');
const btns = document.querySelector('.btn__container');

burger.addEventListener('click', () => {
    headerPopup.style.left = '0px';
    headerPopup.style.position = 'fixed';
    shadow.style.zIndex = '2';
    shadow.style.opacity = '1';
});

cross.addEventListener('click', () => {
    headerPopup.style.position = 'absolute';
    headerPopup.style.left = '800px';
    shadow.style.zIndex = '-2';
    shadow.style.opacity = '0';
});

document.addEventListener('click', (e) => {
    if (e.target.className === 'shadow') {
        headerPopup.style.position = 'absolute';
        headerPopup.style.left = '800px';
        shadow.style.zIndex = '-2';
        shadow.style.opacity = '0';
    }
})