let icons = [
  {
    icon:'../',
    address:''
  },
  {
    icon:'../',
    address:''
  },
  {
    icon:'../',
    address:''
  },
  {
    icon:'../',
    address:''
  },
];
var links = document.querySelector('.component-links');
var newLink = document.createElement('a');
var newIcon = document.createElement('i');
newLink.appendChild(newIcon);


function loadIcons(n){
  
}

function addIcons(){
  for (var i = 0; i < information.length; i++) {
    newLink.addEventListener('DOMContentLoaded', loadIcons(i));
    var clone = newLink.cloneNode(true);
    links.appendChild(clone);
  }
}

addIcons();