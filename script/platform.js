var frame = document.getElementById('playlist');
var info = document.getElementById('info');
function showPlaylist() {
  
  if (info.style.visibility === "hidden") {
    info.style.visibility="visible";
    frame.style.transform = "fade 2s";
    frame.style.background = "#FFD9B4";
    
    // 'linear-gradient(90.06deg, #C4C4C4 7.82%,  76.66% rgba(255, 255, 255, 0) , rgba(255, 155, 4, 0.8)';

  } else {
    info.style.visibility="hidden";
    frame.style.background= "transparent";
  }
}

// function myFunction() {
//   var x = document.getElementById("mob");
//   var icon = document.getElementById("icon");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//     icon.style.display = "block";
//   } else {
//     x.style.display = "block";
//     icon.style.display = "block";

//   }
// }