var mobileMenu = document.getElementById("mob");
var iconMenu = document.getElementById("icon")

var gridContainer = document.getElementById('maingrid');


function myFunction() {

  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
    iconMenu.style.display = "block"
  } else {
    mobileMenu.style.display = "block";
    iconMenu.style.display = "block"

  }
}
