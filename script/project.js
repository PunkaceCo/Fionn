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

const dots = [];

let slideCounter = 0;

const startSlider = () => {
  slideContainer.style.backgroundImage = ` url(${sliderImages[0].src})`;
  slideContainer.style.backgroundSize = 'cover';
  slideContainer.style.width = '100vw';

  sliderText.innerHTML = sliderImages[0].text;
  sliderTitle.innerHTML = sliderImages[0].title;

  // for (let i = 0, len = slideCount; i < len; i++) {
  //   dotContainer.childNodes[i].addEventListener('click', function(e) {
  //     lorySlider.slideTo(Array.prototype.indexOf.call(dotContainer.childNodes, e.target));
  //   });
  // }


};

btnRight.addEventListener('click', function() {
  // for (let i = 0, len = dotContainer.childNodes.length; i < len; i++) {
  //   dotContainer.childNodes[i].classList.remove('active');
  // }
  // dotContainer.childNodes[e.detail.currentSlide - 1].classList.add('active');

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
  // for (var i = 0, len = slideCount; i < len; i++) {
  //   var clone = templateListItem.cloneNode();
  //   dotContainer.appendChild(clone);
  // }
  // dotContainer.childNodes[0].classList.add('active');
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

///////////////////////////////////////////////////////////////

// document.addEventListener('DOMContentLoaded', function () {
//   var slider = document.querySelector('.js_slider');
//   var slideCount = slider.querySelectorAll('.js_slide').length;
//   var dotContainer = slider.querySelector('.slider_navigation_dots');
//   var templateListItem = document.createElement('li');
  
//   function handleEvents(e) {
//     if (e.type === 'before.lory.init') {

//     }
//     if (e.type === 'after.lory.init') {

//     }
//     if (e.type === 'after.lory.slide') {

//     }
//   }

