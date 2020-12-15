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

var mainDesc = document.querySelector('.main-description');
var descr = document.createElement('div');
descr.setAttribute('class', 'desc');

var titleDes = document.createElement('h1');
titleDes.setAttribute('class', 'Title');
descr.appendChild(titleDes);

var br = document.createElement('br');
descr.appendChild(br);

var descParag = document.createElement('p');
descr.appendChild(descParag);

function load(n){
span.innerHTML = information[n].title;
titleDes.innerHTML = information[n].title;
descParag.innerHTML = information[n].description;
}

function addItems(){
  for (var i = 0; i < information.length; i++) {
    timeline.addEventListener('DOMContentLoaded', load(i));
    var clone = timeline.cloneNode(true);
    main.appendChild(clone);

    clone = descr.cloneNode(true);
    mainDesc.appendChild(clone);
  }
}

addItems();

var span = document.getElementsByClassName('year');

function show(i){

switch(i){
  case 0:{
    console.log(span[i]);
    break;
  }
  case 'PERSONAL':{
    console.log('span',e.target.innerHTML);

    break;

  }    
  case 'SKILLS':{
    console.log('span',e.target.innerHTML);

    break;

  }    
  case 'WORK EXPERIENCE':{
    console.log('span',e.target.innerHTML);

    break;

  }
  default:{

  }
}
}




for(let i=0; i<=3; i++){
  span[i].onclick = show(i);
}