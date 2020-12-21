let information =[
  {
    title:'Show Name',
    address:'Lorem, ipsum dolor sit amet.',
    date:'Date',
    link:'',
  },
  {
    title:'Show Name',
    address:'Lorem, ipsum dolor sit amet.',
    date:'Date',
    link:'',
  },
  {
    title:'Show Name',
    address:'Lorem, ipsum dolor sit amet.',
    date:'Date',
    link:'',
  },
  {
    title:'Show Name',
    address:'Lorem, ipsum dolor sit amet.',
    date:'Date',
    link:'',
  },
  {
    title:'Show Name',
    address:'Lorem, ipsum dolor sit amet.',
    date:'Date',
    link:'',
  },
  {
    title:'Show Name',
    address:'Lorem, ipsum dolor sit amet.',
    date:'Date',
    link:'',
  },
];

var all = document.querySelector('.main-information');
var card = document.createElement('div');
card.setAttribute('class', 'info');

var pointerTitle = document.createElement('div');
pointerTitle.setAttribute('class', 'pointer');
card.appendChild(pointerTitle);

var title = document.createElement('div');
title.setAttribute('class', 'title');
var showName = document.createElement('p');
title.appendChild(showName);
pointerTitle.appendChild(title);

var desc = document.createElement('div');
desc.setAttribute('class', 'description');
card.appendChild(desc);

var pointerDate = document.createElement('div');
pointerDate.setAttribute('class', 'pointer');
card.appendChild(pointerDate);

var date = document.createElement('div');
date.setAttribute('class', 'date');
var showDate = document.createElement('p');
date.appendChild(showDate);
pointerDate.appendChild(date);

function load(n){
showName.innerHTML = information[n].title;
desc.innerHTML = information[n].address;
showDate.innerHTML = information[n].date;
}

function addItems(){
  for (var i = 0; i < information.length; i++) {
    card.addEventListener('DOMContentLoaded', load(i));

    // card.appendChild(title);
    // card.appendChild(desc);
    // card.appendChild(date);


    var clone = card.cloneNode(true);
    all.appendChild(clone);
  }
}

addItems();