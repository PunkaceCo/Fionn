let information = [
  {
    id: 'about-me',
    title: 'ABOUT ME',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.',
  },
  {
    id: 'personal',
    title: 'PERSONAL',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.',
  },
  {
    id: 'skills',
    title: 'SKILLS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.',
  },
  {
    id: 'work-experience',
    title: 'WORK EXPERIENCE',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.',
  },
];

var main = document.querySelector('.main-timeline');
var timeline = document.createElement('div');
timeline.setAttribute('class', 'timeline');
// console.log('timeline',timeline);

var icon = document.createElement('div');
icon.setAttribute('class', 'timeline-icon');
timeline.appendChild(icon);

var span = document.createElement('span');
span.setAttribute('class', 'year');
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

function load(n) {
  icon.setAttribute('onclick', `show(${n})`);
  span.setAttribute('id', information[n].id);
  desc.innerHTML = information[n].description;
  span.innerHTML = information[n].title;
  titleDes.innerHTML = information[n].title;
  descParag.innerHTML = information[n].description;
  descr.setAttribute('id',information[n].id);
  timeline.setAttribute('id',information[n].id);
}

function addItems() {
  for (var i = 0; i < information.length; i++) {
    timeline.addEventListener('DOMContentLoaded', load(i));

    var clone = timeline.cloneNode(true);
    main.appendChild(clone);

    clone = descr.cloneNode(true);
    mainDesc.appendChild(clone);
  }
}

addItems();





var spans = document.querySelectorAll('.year');
var descriptions = document.querySelectorAll('.desc');
console.log(descriptions);
function show(n) {

  console.log('click', spans[n].id);
  switch (n) {
    case 0: {
      descriptions[n].style.display ="block";
      descriptions[1].style.display ="none";
      descriptions[2].style.display ="none";
      break;
    }
    case 1: {
      descriptions[n].style.display ="block";
      descriptions[0].style.display ="none";
      descriptions[2].style.display ="none";
      break;
    }
    case 2: {
      descriptions[1].style.display ="none";
      descriptions[0].style.display ="none";
      descriptions[n].style.display ="block";
      break;

    }
    case 3: {
      location.href = "../html/workExperience.html";
      break;

    }

    default: {
      descriptions.style.display ="none";
    }
  }
}

