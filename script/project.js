const slideContainer = document.querySelector('.sliders');
const sliderText = document.querySelector('.slider--text');
const btnLeft = document.querySelector('.slider__btn-left');
const btnRight = document.querySelector('.slider__btn-right');
console.log(slideContainer);
console.log(sliderText);
console.log(btnLeft);
console.log(btnRight);
const sliderImages = [
    {
    src: '../asset/svg/project01.svg',
    text: 'magic'
  },
  {
    src: '../asset/svg/project-page02.svg',
    text: 'incredible'
  },
  {
    src: '../asset/svg/project-page03.svg',
    text: 'dream'
  }

];
let slideCounter = 0;

const startSlider = () => {
  slideContainer.style.backgroundImage = ` url(${sliderImages[0].src})`;
  // sliderText.innerHTML = sliderImages[0].text;
};

btnRight.addEventListener('click', function() {
  if (slideCounter === sliderImages.length - 1) {
    slideContainer.style.backgroundImage = `url(${sliderImages[0].src})`;
    sliderText.innerHTML = sliderImages[0].text;
    slideCounter = -1;

    slideContainer.classList.add('fadeIn');
    setTimeout(() => {
      slideContainer.classList.remove('fadeIn');
    }, 1000);
  }
  slideContainer.style.backgroundImage = `url(${sliderImages[slideCounter + 1].src})`;
  sliderText.innerHTML = sliderImages[slideCounter + 1].text;
  slideCounter++;
  slideContainer.classList.add('fadeIn');
  setTimeout(() => {
    slideContainer.classList.remove('fadeIn');
  }, 1000);
});

btnLeft.addEventListener('click', function() {
  if (slideCounter === 0) {
    slideContainer.style.backgroundImage = `url(${sliderImages[sliderImages.length - 1].src})`;
    sliderText.innerHTML = sliderImages[sliderImages.length - 1].text;
    slideCounter = sliderImages.length;
    slideContainer.classList.add('fadeIn');
    setTimeout(() => {
      slideContainer.classList.remove('fadeIn');
    }, 1000);
  }

  slideContainer.style.backgroundImage = `url(${sliderImages[slideCounter - 1].src})`;
  sliderText.innerHTML = sliderImages[slideCounter - 1].text;
  slideCounter--;
  slideContainer.classList.add('fadeIn');
  setTimeout(() => {
    slideContainer.classList.remove('fadeIn');
  }, 1000);
});

document.addEventListener('DOMContentLoaded', startSlider);
