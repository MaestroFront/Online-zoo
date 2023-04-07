let amounts = document.querySelectorAll('.amount__item input');
const circles = document.querySelectorAll('.amount__item');
const input = document.querySelector('.add-amount');
const border = document.querySelectorAll('.border-20');
const dollars = document.querySelectorAll('.amount__item label');
let pageWidth = document.querySelector('body').offsetWidth;

let values = [];
amounts.forEach(item => values.push(item.value));

if (pageWidth <= 1000 && pageWidth > 640) {
    values.shift();
} else if (pageWidth <= 640) {
    values.shift();
    values.shift();
    values.shift();
}

amounts.forEach(item => {
    item.addEventListener('click', function () {
        input.value = this.value;
    });
});

setInterval(function () {
    if (input.value > +values[0]) {
        input.value = `${values[0]}`;
    }
    if (input.value === '0') {
        input.value = `${values[values.length - 1]}`;
    }

    input.value = input.value.replace(/[e,+,-]/gi, '');

    if (input.value.split('').includes('.')) {
        input.value = '';
    }

}, 200);

if (input.value.length > 0) {
    for (let i = 0; i < amounts.length; i++) {
    setInterval(function () {

        if (+input.value === +amounts[i].value) {
            circles.forEach(item => {
                item.style.outlineColor = 'transparent';
            });
            border.forEach(item => {
                item.style.opacity = '0';
            });
            dollars.forEach(item => {
                item.style.color = '#333b41';
            });
            circles[i].style.outlineColor = '#fe9013';
            border[i].style.opacity = '1';
            dollars[i].style.color = '#fe9013';
        }
        if (!values.includes(input.value)) {
            circles.forEach(item => {
                item.style.outlineColor = 'transparent';
            });
            border.forEach(item => {
                item.style.opacity = '0';
            });
            dollars.forEach(item => {
                item.style.color = '#333b41';
            });
        }

    }, 200);

    amounts[i].addEventListener('click', () => {
        circles.forEach(item => {
            item.style.outlineColor = 'transparent';
        });
        border.forEach(item => {
            item.style.opacity = '0';
        });
        dollars.forEach(item => {
            item.style.color = '#333b41';
        });
        circles[i].style.outlineColor = '#fe9013';
        border[i].style.opacity = '1';
        dollars[i].style.color = '#fe9013';
    });

};
}