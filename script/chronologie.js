let information =  [
  {
    year:'2001',
    title:'TITEL',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.',
  },
  {    
    year:'2002',
    title:'TITEL',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.',
  },
  {   
    year:'2003',
    title:'TITEL',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.',
  },
  {    
    year:'2004',
    title:'TITEL',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.',
  },
];

var main = document.querySelector('.main-timeline');
var timeline = document.createElement('div');
timeline.setAttribute('class', 'timeline');
console.log('timeline',timeline);

var icon = document.createElement('div');
icon.setAttribute('class', 'timeline-icon');
timeline.appendChild(icon);

var span = document.createElement('span');
span.setAttribute('class','year');
icon.appendChild(span);

var content = document.createElement('div');
content.setAttribute('class', 'timeline-content');
timeline.appendChild(content);

var title = document.createElement('h1');
content.appendChild(title);

var desc = document.createElement('p');
desc.setAttribute('class', 'description');
content.appendChild(desc);

function load(n){
span.innerHTML = information[n].year;
title.innerHTML = information[n].title;
desc.innerHTML = information[n].description;
}

function addItems(){
  for (var i = 0; i < information.length; i++) {
    timeline.addEventListener('DOMContentLoaded', load(i));
    var clone = timeline.cloneNode(true);
    main.appendChild(clone);
  }
}

addItems();