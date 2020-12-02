// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("buy")
console.log(btn)
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  console.log("buy")
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
successBuy = document.getElementById('successBuy')
var accept = document.getElementById('accept');

accept.onclick = function () {
  modal.style.display = "none";
  successBuy.style.display = "block";

}

function myFunction() {
  var x = document.getElementById("mob");
  var icon = document.getElementById("icon")
  if (x.style.display === "block") {
    x.style.display = "none";
    icon.style.display = "block"
  } else {
    x.style.display = "block";
    icon.style.display = "block"

  }
}