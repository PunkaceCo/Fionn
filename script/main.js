// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName('myImg');
var modalImg = document.getElementById("img");

for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
  }

}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function myFunction() {
  var x = document.getElementById("mob");
  var icon = document.getElementById("icon");
  if (x.style.display === "block") {
    x.style.display = "none";
    icon.style.display = "block";
  } else {
    x.style.display = "block";
    icon.style.display = "block";

  }
}

