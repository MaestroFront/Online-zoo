let range = document.querySelector('.progress-bar');
let elements = document.querySelectorAll('.comments__list .comments__item');
let widthPage = document.querySelector('body').clientWidth;

widthPage <= 1000 ? range.max = '8' : range.max = '7';

range.oninput = function () {
    elements.forEach(item => {
        item.style.transition = 'all 0.5s linear';
        if (widthPage > 1200) {
            item.style.right = this.value * 11.60 + '%';
        } else if (widthPage <= 1200 && widthPage > 1000) {
            item.style.right = this.value * 10.74 + '%';
        } else {
            item.style.right = this.value * 12.60 + '%';
        }
    })
};

// if (widthPage <= 640) {
//     for (let i = 3; i < elements.length; i++) {
//         elements[i].style.display = 'none';
//     }
// }