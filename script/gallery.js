const sliderImages = [
  {src:'../asset/png/pic02.png'},
  {src:'../asset/png/pic03.png'},
  {src:'../asset/png/pic04.png'},
  {src:'../asset/png/pic05.png'},
  {src:'../asset/png/pic06.png'},
  {src:'../asset/png/pic07.png'},
  {src:'../asset/png/pic02.png'},
  {src:'../asset/png/pic06.png'},
  {src:'../asset/png/pic05.png'},
  {src:'../asset/png/pic05.png'},
  
  ];
// var gallery = document.querySelector('.gallery');
// var container = document.createElement('div');
// container.setAttribute('class', 'container');
// var grid = document.createElement('div');
// grid.setAttribute('class', 'grid');
// container.appendChild(grid);
// gallery.appendChild(container);

// function makeSection(){
//   for(let i=0; i<=5 ; i++){
//     var column = document.createElement('div');
//     var img = document.createElement('img');
//     if( i==0 || i==1 || i==2){
//       console.log("1",i);
//       column.setAttribute('class','col-4');
//       img.src = sliderImages[i].src;
//       column.appendChild(img);
//     }
//     else if(i==3 || i==4){
//       console.log("2",i);
//       column.setAttribute('class','col-6');
//       img.src = sliderImages[i].src;
//       column.appendChild(img);
//     }
//     else{
//       console.log("3",i);
//       column.setAttribute('class','col-12');
//       img.src = sliderImages[i].src;
//       column.appendChild(img);
//     }
//     grid.appendChild(column);
//   }

// }
// makeSection();

const slideContainer = document.querySelector('.slider');

const sliderText = document.querySelector('.slider--text');
const sliderTitle = document.querySelector('.slider--title');


const btnLeft = document.querySelector('.slider__btn-left');
const btnRight = document.querySelector('.slider__btn-right');






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
var list = document.createElement('div');
list.setAttribute('class','item');

var img = document.createElement('img');
img.setAttribute('class','myImg');
list.appendChild(img);
console.log(list);

function add(n){
  list.setAttribute('onclick',`thumbChange(${n})`);
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

//show img with click on thumbnail
function thumbChange(n){
  slideContainer.style.backgroundImage = `url(${sliderImages[n].src})`;
}

