var background = document.body.background;
console.log("bg",background);
function mouseEnter(e) {
  console.log("e",e.id);
  if(e.id == "landing-right"){
    document.body.style.background ="#52575D url(../asset/png/LNDASS0021.png) no-repeat fixed bottom ";
  }
  
  // e.style.opacity = "10"
  // background.style.opacity = "0"
  if(e.id == "landing-left"){
    document.body.style.background ="#595B83 url(../asset/svg/LNDASSgg.svg) no-repeat fixed bottom";
  }
  
  e.style.opacity="10";
}

function mouseLeave(e) {
  console.log("e",e.id);
  document.body.style.background ="#52575D url(../asset/svg/LNDA.svg) no-repeat fixed bottom";
  e.style.opacity ="0";

}


// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }