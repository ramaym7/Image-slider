const sliderItem = document.querySelector('.slider-item');
const sliderPrev = document.querySelector('#sliderPrev');
const sliderNext = document.querySelector('#sliderNext');
const sliderLength = sliderItem.children;
let counter = 0;
console.log(sliderItem);
console.log(sliderLength);

let intervel = setInterval(run, 2000);

function run() {
    counter++;
    changeSlider();
}

function changeSlider() {
    if (counter > sliderLength.length -1) {
        counter = 0;
    } else if (counter < 0) {
        counter = sliderLength.length - 1;
    }

    sliderItem.style.transform = `translateX(${-counter * 100}%)`;
}

function resetInterval() {
    clearInterval(intervel);
    intervel = setInterval(run, 2000);
}


sliderNext.addEventListener('click', () => {
    counter++;
    if (counter > sliderLength.length - 1) {
        counter = 0;
    } else if (counter < 0) {
        counter = sliderLength.length - 1;
    }
    sliderItem.style.transform = `translateX(${-counter * 100}%)`;
    resetInterval();
})

sliderPrev.addEventListener('click', () => {
    counter--;
    if (counter > sliderLength.length - 1) {
        counter = 0;
    } else if (counter < 0) {
        counter = sliderLength.length - 1;
    }
    sliderItem.style.transform = `translateX(${-counter * 100}%)`;
    resetInterval();
})