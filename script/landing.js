document.body.style.background ="#52575D url(../asset/svg/landing/main.png) no-repeat center bottom fixed";


function mouseEnter(e) {
  console.log("e",e.id);
  if(e.id == "landing-right"){
    document.body.style.background ="#52575D url(../asset/svg/landing/right.png) no-repeat center bottom fixed ";
    document.body.style.transition = 'background-image 1s';
  }
  

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

var content = document.querySelector('#content');
var action = document.getElementById('action');
var music = document.getElementById('music');
console.log(action);
btnAction = action.querySelector('.dropbtn');
console.log(btnAction);
btnMusic = music.querySelector('.dropbtn');
console.log(btnMusic);

var content = document.querySelector('.dropdown-content');

console.log(content);
btnMusic.onmouseover = function (){
  
 btnAction.style.background = "#FF9B04";
 btnAction.style.borderRadius = "0 0 25px 0";
 btnAction.innerHTML = "FIONN STACY";
 document.body.style.background ="#52575D url(../asset/svg/landing/right.png) no-repeat center bottom fixed ";
    document.body.style.transition = 'background-image 1s';
    btnMusic.style.background = "#ff9b045b";
    btnMusic.style.borderRadius = "0 0 0 25px";
    btnMusic.innerHTML = "MUSIC";

};
btnMusic.mouseLeave = function (){
 btnAction.style.background = "#transparent";
 btnAction.innerHTML = "ACTING";
};

btnAction.onmouseover = function (){
  btnMusic.style.background = "#FDDB3A";
  btnMusic.style.borderRadius = "0 0 25px 0";
  btnMusic.innerHTML = "FIONN STACY";
  btnAction.style.padding="28px 32px";
  document.body.style.background ="#595B83 url(../asset/svg/landing/left.png) no-repeat center bottom fixed";
    document.body.style.transition = 'background-image 1s';
    btnAction.style.background = "#ff9b045b";
    btnAction.innerHTML = "ACTING";


  };

btnAction.mouseLeave = function (){
  btnMusic.style.background = "#transparent";
  btnMusic.innerHTML = "MUSIC";
  // btnAction.style.background = "transparent";

};

window.onclick = function (e) {
  console.log("E", e.target.id);
  if(e.target.id == 'landing-left'){
    btnAction.style.background = "transparent";
    btnAction.innerHTML = "ACTING";
  }
  if(e.target.id == 'landing-right'){
    btnMusic.style.background = "transparent";
    btnMusic.innerHTML = "MUSIC";
  }
};
