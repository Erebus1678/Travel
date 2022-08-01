let offset = -385
const container = document.querySelector('.slider__container');
const dotOne = document.querySelector('.dots__item_1');
const dotTwo = document.querySelector('.dots__item_2');
const dotThree = document.querySelector('.dots__item_3');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next')
const dotsArray = [dotOne, dotTwo, dotThree]
const dotsMobArr = document.querySelectorAll('.dots_mobile__item')
console.log(dotsMobArr);
function mobDots() {
    switch (offset) {
        case (-385):
            dotsMobArr.forEach(element => element.classList.remove('active'));
            dotsMobArr[1].classList.add('active')
            break;
        case (-785):
            dotsMobArr.forEach(element => element.classList.remove('active'));
            dotsMobArr[2].classList.add('active')
            break;
        case (15):
            dotsMobArr.forEach(element => element.classList.remove('active'));
            dotsMobArr[0].classList.add('active')
            break;
    }
}

// -785
if (window.screen.width <= 390) {
    // next
    nextBtn.addEventListener('click', function () {
        offset = offset - 400
        if (offset < (-900)) {
            offset = 15
        }
        container.style.left = offset + 'px';
        switch (offset) {
            case (-385):
                dotsMobArr.forEach(element => element.classList.remove('active'));
                dotsMobArr[1].classList.add('active')
                break;
            case (-785):
                dotsMobArr.forEach(element => element.classList.remove('active'));
                dotsMobArr[2].classList.add('active')
                break;
            case (15):
                dotsMobArr.forEach(element => element.classList.remove('active'));
                dotsMobArr[0].classList.add('active')
                break;
        }
    })
    // prev
    prevBtn.addEventListener('click', function () {
        offset = offset + 400
        if (offset > 15) {
            offset = -785
        }
        container.style.left = offset + 'px';
        switch (offset) {
            case (-385):
                dotsMobArr.forEach(element => element.classList.remove('active'));
                dotsMobArr[1].classList.add('active')
                break;
            case (-785):
                dotsMobArr.forEach(element => element.classList.remove('active'));
                dotsMobArr[2].classList.add('active')
                break;
            case (15):
                dotsMobArr.forEach(element => element.classList.remove('active'));
                dotsMobArr[0].classList.add('active')
                break;
        }
    })



} else {
    // first dot and slide
    document.querySelector('.dots__item_1').addEventListener('click', function () {
        container.style.left = 326 + 'px';
        dotsArray.forEach(element => element.classList.remove('active'));
        dotOne.classList.add('active');

    });
    document.querySelector('#firstSlide').addEventListener('click', function () {
        container.style.left = 326 + 'px';
        dotsArray.forEach(element => element.classList.remove('active'));
        dotOne.classList.add('active');

    });

    // second slide and dot
    document.querySelector('.dots__item_2').addEventListener('click', function () {
        container.style.left = -542 + 'px';
        dotsArray.forEach(element => element.classList.remove('active'));
        dotTwo.classList.add('active');
    });

    document.querySelector('#secondSlide').addEventListener('click', function () {
        container.style.left = -542 + 'px';
        dotsArray.forEach(element => element.classList.remove('active'));
        dotTwo.classList.add('active');
    });


    // third slide and dot
    document.querySelector('.dots__item_3').addEventListener('click', function () {
        container.style.left = -1400 + 'px';
        dotsArray.forEach(element => element.classList.remove('active'));
        dotThree.classList.add('active');
    });
    document.querySelector('#thirdSlide').addEventListener('click', function () {
        container.style.left = -1400 + 'px';
        dotsArray.forEach(element => element.classList.remove('active'));
        dotThree.classList.add('active');
    });

}
