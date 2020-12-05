var frame = document.getElementById('playlist');

function showPlaylist() {
  
  console.log(frame.style.visibility)

  if (frame.style.visibility === "hidden") {
    frame.style.visibility="visible";

  } else {
    frame.style.visibility="hidden";
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