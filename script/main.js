

function myFunction() {

  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  var icon = document.getElementById('icon');
  var logo = document.getElementById('logo');

  if(menu.style.display === 'block'){
    icon.style.display = 'block';
    menu.style.display = 'none';
    content.style.display = 'none';
    logo.style.display = 'none';

  }
  else{
    icon.style.display = 'none';
    menu.style.display = 'block';
    content.style.display = 'block';
    logo.style.display = 'block';
    content.style.backgroundColor= '#ff9b045b' ;
  }


}

var close = document.querySelector('.dropbtn');
var content = document.getElementById('content');
var menu = document.getElementById('menu');
var icon = document.getElementById('icon');
var logo = document.getElementById('logo');

window.onclick = function(event){
  if(event.target == close){
    icon.style.display = 'block';
    menu.style.display = 'none';
    content.style.display = 'none';
    logo.style.display = 'none';

  }
};