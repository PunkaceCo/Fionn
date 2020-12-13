let information =[
  {
    title:'ABOUT ME',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.',
  },
  {
    title:'PERSONAL',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.',
  },
  {
    title:'SKILLS',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.',
  },
  {
    title:'WORK EXPERIENCE',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.',
  },
];

var main = document.querySelector('.main-timeline');
console.log('main',main);
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

// pointerDate.appendChild(date);

function load(n){
span.innerHTML = information[n].title;
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