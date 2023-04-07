const testimonials = document.querySelectorAll('.comments__list .comments__item');
const avatar = document.querySelector('.comments__popup .comment__user img');
const userName = document.querySelector('.comments__popup .comment__info p:first-child');
const place = document.querySelector('.comments__popup .comment__info p:last-child');
const day = document.querySelector('.comments__popup .comment__info span');
const text = document.querySelector('.comments__popup .comments__item_content p');
const popup = document.querySelector('.comments__popup');
const crossPopup = document.querySelector('.x-icon');

if (widthPage <= 640) {
    testimonials.forEach(item => {
        item.addEventListener('click', function () {
            avatar.src = `${this.getElementsByTagName('img')[0].src}`;
            userName.innerText = this.innerText.split('\n').filter(item => item !== '')[0];
            place.innerText = this.innerText.split('\n').filter(item => item !== '')[1];
            text.innerText = this.innerText.split('\n').filter(item => item !== '')[2];
            popup.style.transform = 'scale(1)';
            shadow.style.zIndex = '2';
            shadow.style.opacity = '1';
            if (widthPage <= 320) {
                popup.style.left = '0';
            }
        })
    });

    crossPopup.addEventListener('click', () => {
        shadow.style.zIndex = '-2';
        shadow.style.opacity = '0';
        popup.style.transform = 'scale(0)';
    })
}
