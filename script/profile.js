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

function select(event){
 console.log(event)
}
// var profile = document.getElementsByClassName("timeline-icon");

// for (var i = 0; i < profile.length; i++) {
//   var prof = profile[i];
//   console.log('p', prof)
//   // and attach our click listener for this .
//   prof.onclick = function(evt) {
//     // modal.style.display = "block";
//     // modalImg.src = this.src;
//     console.log(evt)
//   }

//}