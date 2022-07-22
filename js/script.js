const cards = Array.from(document.querySelectorAll('.block__card'));
const picture = Array.from(document.querySelectorAll('.block__img'));
const slider = document.querySelector('.slider');
const sliderBody = document.querySelector('.slider__body');
const body = document.querySelector('body');
const sliderBtnLeft = document.querySelector('.slider__left');
const sliderBtnRight = document.querySelector('.slider__right');
const sliderClose = document.querySelector('.slider__close');

let cardIndex = -1;
let pictureFull;

for (card of cards) {
    card.addEventListener('click', (event) => {
        event.preventDefault();
        cardIndex = cards.indexOf(card);
        pictureFull = picture[cardIndex].cloneNode();
        pictureFull.classList.add('fullimg');
        sliderBody.append(pictureFull);
        slider.classList.add('open');
        body.classList.add('lock');
    });
}

sliderBtnLeft.addEventListener("click", (event) => {
    event.preventDefault();
    changePicture("left");
})


sliderBtnRight.addEventListener("click", (event) => {
    event.preventDefault();
    changePicture("right");
})

function changePicture(dir) {
    if (dir === "left") {
        if (cardIndex > 0) {
            cardIndex--;
        } else {
            cardIndex = cards.length - 1;
        }
    } else if (dir === "right") {
        if (cardIndex < cards.length - 1) {
            cardIndex++;
        } else {
            cardIndex = 0;
        }
    }
    let newPictureFull = picture[cardIndex].cloneNode();
    pictureFull.replaceWith(newPictureFull);
    pictureFull = newPictureFull;
    pictureFull.classList.add('fullimg');
}

sliderClose.addEventListener("click", (event) => {
    event.preventDefault();
    slider.classList.remove('open');
    pictureFull.remove();
    document.body.style.overflow = "auto";
});

