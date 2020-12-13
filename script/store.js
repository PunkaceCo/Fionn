// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("buy");
console.log(btn);
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function() {
//   console.log("buy");
//   modal.style.display = "block";
// };

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
successBuy = document.getElementById('successBuy');
var accept = document.getElementById('accept');
var done = document.getElementById('ok');
accept.onclick = function () {
  modal.style.display = "none";
  successBuy.style.display = "block";

};

done.onclick = function () {
  modal.style.display = "none";
  successBuy.style.display = "none";

};

function myFunction() {
  var x = document.getElementById("mob");
  var icon = document.getElementById("icon");
  if (x.style.display === "block") {
    x.style.display = "none";
    icon.style.display = "block";
  } else {
    x.style.display = "block";
    icon.style.display = "block";

  }
}

var all = document.querySelector('.all');
console.log('all',all);

var image = document.createElement('img');
var title = document.createElement('h1');
var description = document.createElement('p');
var btn = document.createElement('button');

let products =[
  {
    img:'../asset/png/cd.png',
    title:'TITEL',
    price:'66$',
    desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veritatis.',
  },
  {
    img:'../asset/png/coffe.png',
    title:'TITEL',
    price:'66$',
    desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veritatis.',
  },
  {
    img:'../asset/png/cd.png',
    title:'TITEL',
    price:'66$',
    desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veritatis.',
  },
  {
    img:'../asset/png/cd.png',
    title:'TITEL',
    price:'66$',
    desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veritatis.',
  },
  {
    img:'../asset/png/coffe.png',
    title:'TITEL',
    price:'66$',
    desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veritatis.',
  },
  {
    img:'../asset/png/cd.png',
    title:'TITEL',
    price:'66$',
    desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veritatis.',
  },
];

var all = document.querySelector('.all');
var card = document.createElement('div');
card.setAttribute('class', 'product-card col-3');



function load(n){
  image.src = products[n].img;
  console.log(image);
  title.innerHTML = products[n].title;
  description.innerHTML = products[n].desc;
  btn.innerHTML = 'BUY';
}

function addItems(){
  for (var i = 0; i < products.length; i++) {
    card.addEventListener('DOMContentLoaded', load(i));

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(btn);

    var clone = card.cloneNode(true);
    all.appendChild(clone);
  }
}

addItems();