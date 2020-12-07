const slideContainer = document.querySelector('.sliders');

const sliderText = document.querySelector('.slider--text');
const sliderTitle = document.querySelector('.slider--title');


const btnLeft = document.querySelector('.slider__btn-left');
const btnRight = document.querySelector('.slider__btn-right');

const sliderImages = [
    {
    src: '../asset/svg/project01.svg',
    title: 'TITLE1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' +
     'Suscipit fugiat repellat fugit possimus, minima voluptates culpa quia a odio dolores.'  },
  {
    src: '../asset/svg/project-page02.svg',
    title: 'TITLE2',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' +
     'Suscipit fugiat repellat fugit possimus, minima voluptates culpa quia a odio dolores.'  },
  {
    src: '../asset/svg/project-page03.svg',
    title: 'TITLE3',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' +
     'Suscipit fugiat repellat fugit possimus, minima voluptates culpa quia a odio dolores.'
  }

];


var dotContainer = slideContainer.querySelector('.slider_navigation_dots');
var templateListItem = document.createElement('li');

const dots = [];

let slideCounter = 0;

const startSlider = () => {
  slideContainer.style.backgroundImage = ` url(${sliderImages[0].src})`;
  slideContainer.style.backgroundSize = 'cover';
  slideContainer.style.width = '100vw';

  sliderText.innerHTML = sliderImages[0].text;
  sliderTitle.innerHTML = sliderImages[0].title;

  for (var i = 0, len = sliderImages.length; i < len; i++) {
    var clone = templateListItem.cloneNode();
    dotContainer.appendChild(clone);
  }
  dotContainer.childNodes[0].classList.add('active');


};

btnRight.addEventListener('click', function() {
  if (slideCounter === sliderImages.length - 1) {
    slideContainer.style.backgroundImage = `url(${sliderImages[0].src})`;
    sliderText.innerHTML = sliderImages[0].text;
    sliderTitle.innerHTML = sliderImages[0].title;
    slideCounter = -1;

    slideContainer.classList.add('fadeIn');
    setTimeout(() => {
      slideContainer.classList.remove('fadeIn');
    }, 1000);
  }
  slideContainer.style.backgroundImage = `url(${sliderImages[slideCounter + 1].src})`;
  sliderText.innerHTML = sliderImages[slideCounter + 1].text;
  sliderTitle.innerHTML = sliderImages[slideCounter + 1].title;

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
    sliderTitle.innerHTML = sliderImages[sliderImages.length - 1].title;
    slideCounter = sliderImages.length;
    slideContainer.classList.add('fadeIn');
    setTimeout(() => {
      slideContainer.classList.remove('fadeIn');
    }, 1000);
  }

  slideContainer.style.backgroundImage = `url(${sliderImages[slideCounter - 1].src})`;
  sliderText.innerHTML = sliderImages[slideCounter - 1].text;
  sliderTitle.innerHTML = sliderImages[slideCounter - 1].title;
  slideCounter--;
  slideContainer.classList.add('fadeIn');
  setTimeout(() => {
    slideContainer.classList.remove('fadeIn');
  }, 1000);
});

document.addEventListener('DOMContentLoaded', startSlider);

