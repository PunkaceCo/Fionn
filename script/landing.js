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


var action = document.getElementById('action');
var music = document.getElementById('music');
console.log(action);
btnAction = action.querySelector('.dropbtn');
console.log(btnAction);
btnMusic = music.querySelector('.dropbtn');
console.log(btnMusic);

btnMusic.onmouseover = function (){
 btnAction.style.background = "#FF9B04";
 btnAction.style.borderRadius = "0 0 25px 0";
 btnAction.innerHTML = "FIONN STACY";
};
btnMusic.onmouseLeave = function (){
 btnAction.style.background = "#transparent";
 btnAction.innerHTML = "ACTION";
};
btnAction.onmouseover = function (){
  btnMusic.style.background = "#FDDB3A";
  btnMusic.style.borderRadius = "0 0 0 25px";
  btnMusic.innerHTML = "FIONN STACY";
};
btnAction.onmouseLeave = function (){
  btnMusic.style.background = "#transparent";
  btnMusic.innerHTML = "MUSIC";
};
// var actionContent = document.getElementsByClassName('dropdown-content');
// console.log(actionContent);
// var musicContent = music.getElementsByClassName('dropdown-content');
// console.log(musicContent);

// action.onmouseover = function (e){
//   music.style.backgroundColor = "#FDDB3A";
//   music.style.borderRadius = "0 0 0 25px";
//   music.innerHTML = "FIONN STACY";
//   music.style.fontSize = '17px';
//   music.style.color = 'white';
//   music.style.padding = '14px 16px';
//   music.style.fontFamily='inherit';
//   music.style.textAlign='center';
//   // actionContent.style.display = "block";

// };

// music.onmouseover = function (e){
//   action.style.backgroundColor = "#FF9B04";
//   action.style.borderRadius = "0 0 25px 0";
//   action.innerHTML = "FIONN STACY";
//   action.style.fontSize = '17px';
//   action.style.color = 'white';
//   action.style.padding = '14px 16px';
//   action.style.fontFamily='inherit';
//   action.style.textAlign='center';
//   // musicContent.style.display = "block";
// };

// action.onmouseleave = function(e){
//   music.style.backgroundColor = "transparent";
//   music.innerHTML = "MUSIC";

// };

// music.onmouseleave = function(e){
//   action.style.backgroundColor = "transparent";
//   action.innerHTML = "ACTION";

// };