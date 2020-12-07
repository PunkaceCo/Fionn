document.body.style.background ="#52575D url(../asset/svg/landing/main.png) no-repeat center bottom fixed";


function mouseEnter(e) {
  console.log("e",e.id);
  if(e.id == "landing-right"){
    document.body.style.background ="#52575D url(../asset/svg/landing/right.png) no-repeat center bottom fixed ";
    document.body.style.transition = 'background-image 1s';
  }
  
  // e.style.opacity = "10"
  // background.style.opacity = "0"
  if(e.id == "landing-left"){
    document.body.style.background ="#595B83 url(../asset/svg/landing/left.png) no-repeat center bottom fixed";
    document.body.style.transition = 'background-image 1s';
  }
  
  e.style.opacity="10";
}

function mouseLeave(e) {
  console.log("e",e.id);
  document.body.style.background ="#52575D url(../asset/svg/landing/main.png) no-repeat center bottom fixed";
  document.body.style.transition = 'background-image 1s';
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