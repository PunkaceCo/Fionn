const slideContainer = document.querySelector('.slider');

const sliderText = document.querySelector('.slider--text');
const sliderTitle = document.querySelector('.slider--title');


const btnLeft = document.querySelector('.slider__btn-left');
const btnRight = document.querySelector('.slider__btn-right');



const sliderImages = [
{src:'../asset/png/pic02.png'},
{src:'../asset/png/pic03.png'},
{src:'../asset/png/pic04.png'},
{src:'../asset/png/pic05.png'},
{src:'../asset/png/pic06.png'},
{src:'../asset/png/pic07.png'},
];


let slideCounter = 0;

const startSlider = () => {
  slideContainer.style.backgroundImage = ` url(${sliderImages[0].src})`;
};

btnRight.addEventListener('click', function() {
  if (slideCounter === sliderImages.length - 1) {
    slideContainer.style.backgroundImage = `url(${sliderImages[0].src})`;
    slideCounter = -1;

    slideContainer.classList.add('fadeIn');
    setTimeout(() => {
      slideContainer.classList.remove('fadeIn');
    }, 1000);
  }
  slideContainer.style.backgroundImage = `url(${sliderImages[slideCounter + 1].src})`;


  slideCounter++;
  slideContainer.classList.add('fadeIn');
  setTimeout(() => {
    slideContainer.classList.remove('fadeIn');
  }, 1000);
});

btnLeft.addEventListener('click', function() {
  if (slideCounter === 0) {
    slideContainer.style.backgroundImage = `url(${sliderImages[sliderImages.length - 1].src})`;

    slideCounter = sliderImages.length;
    slideContainer.classList.add('fadeIn');
    setTimeout(() => {
      slideContainer.classList.remove('fadeIn');
    }, 1000);
  }

  slideContainer.style.backgroundImage = `url(${sliderImages[slideCounter - 1].src})`;

  slideCounter--;
  slideContainer.classList.add('fadeIn');
  setTimeout(() => {
    slideContainer.classList.remove('fadeIn');
  }, 1000);
});

document.addEventListener('DOMContentLoaded', startSlider);

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName('myImg');
var modalImg = document.getElementById("img");

for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";

    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modalImg.src = this.src;
  };

}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var row = document.querySelector('.row');
var column = document.getElementsByClassName('column');
console.log(column);

var thumbnail = document.querySelector('.thumb');
var list = document.createElement('li');

var img = document.createElement('img');
img.setAttribute('class','myImg');
list.appendChild(img);
console.log(list);

function add(n){
img.src = sliderImages[n].src;
}

function addtogrid(){
  for (var i = 0; i < sliderImages.length; i++) {
    list.addEventListener('DOMContentLoaded', add(i));
    var clone = list.cloneNode(true);
    thumbnail.appendChild(clone);
    }
  
}

addtogrid();