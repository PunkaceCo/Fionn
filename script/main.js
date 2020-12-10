
function myFunction() {
var content = document.getElementById('content');
var menu = document.getElementById('menu');
var icon = document.getElementById('icon');
var close = document.getElementById('close');
var logo = document.getElementById('logo');

  if(menu.style.display === 'block'){
    icon.style.display = 'block';
    menu.style.display = 'none';
    content.style.display = 'none'; 
    // close.style.display = 'none';
    logo.style.display = 'none';

  }
  else{
    icon.style.display = 'none';
    // close.style.display = 'block';
    menu.style.display = 'block';
    content.style.display = 'block';
    logo.style.display = 'block';
  }
}
// var item = document.getElementById('item3');

// window.onclick = function(event) {
//   if (event.target == item) {
//     menu.style.display = "none";
//   }
// };