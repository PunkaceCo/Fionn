var frame = document.getElementById('playlist');
var info = document.getElementById('info');

function showPlaylist() {
  if (info.style.visibility === 'hidden') {
    info.style.visibility = 'visible';
    frame.style.background= 
    '-webkit-gradient(linear, left top,left bottom, '+
    'from(rgba(196,196,196, 1)), color-stop(76.66%, rgba(255, 255, 255, 0)),'+
    'color-stop(76.66%, rgba(255, 255, 255, 0)), to(rgba(255, 155, 4, 0.8)))';
      
      // background: -moz-linear-gradient(top, rgba(255,255, 255, .5), rgba(255, 255, 255, .2) 50%, rgba(0, 0, 0, .2) 50%, rgba(255, 255, 255,.1));';

    // frame.style.transform = 'fade 2s';
      // 'linear-gradient(90.06deg, #C4C4C4 7.82%,  76.66% rgba(255, 255, 255, 0) , rgba(255, 155, 4, 0.8))';
  } else {
    info.style.visibility = 'hidden';
    frame.style.background = 'transparent';

  }
}

//Player
let singer = document.querySelector('#singer');
let name = document.querySelector('#title');
let slider = document.querySelector('#duration_slider');

let playlistContainer = document.querySelector('#playlist');

let track = document.createElement('audio');
let Playing_song = false;
let index = 0;
let timer;
let playlist = playlistContainer.querySelector('.listItems');

let list = document.createElement('li');
let songName =document.createElement("p");
songName.setAttribute("id", "name");
let singerName = document.createElement('p');
singerName.setAttribute("id", "singer");

let songs = [
  {
    name: 'Diary of Dreams',
    path: '../asset/song/DiaryofDreams.mp3',
    singer: 'FIONN STACY',
  },
  {
    name: 'Lithium',
    path: '../asset/song/Lithium.mp3',
    singer: 'FIONN STACY',
  },
  {
    name: 'My warm tears',
    path: '../asset/song/Rana-Farhan_My-Warm-Tears.mp3',
    singer: 'FIONN STACY',
    icon:'',
  },
  {
    name: 'Love',
    path: '../asset/song/RooPanesLullabyLove.mp3',
    singer: 'FIONN STACY',
    icon:'',
  },
  {
    name: 'Someone like you',
    path: '../asset/song/SomeoneLikeYou.mp3',
    singer: 'FIONN STACY',
    icon:'',
  },
  {
    name: 'Stay here',
    path: '../asset/song/StayHere.mp3',
    singer: 'FIONN STACY',
    icon:'',
  },
  {
    name: 'The wild one',
    path: '../asset/song/TheWildOne.mp3',
    singer: 'FIONN STACY',
    icon:'',
  },
];
function start(n){
  // slideContainer.style.backgroundImage = ` url(${sliderImages[n].src})`;
  // slideContainer.style.backgroundSize = 'cover';
  // slideContainer.style.width = '100vw';
  songName.innerHTML = songs[n].name;
  singerName.innerHTML = songs[n].singer + ' - ';
}
//add songs in play list
function addSongs(){
  for (var i = 0, len = songs.length; i < len; i++) {
        console.log("list", list);

    list.addEventListener('DOMContentLoaded', start(i));
        console.log("s",songName.innerHTML);

        list.appendChild(singerName);
    list.appendChild(songName);
    var clone = list.cloneNode(true);
    playlist.appendChild(clone);
  }
}


addSongs();

function load_track(index) {
	clearInterval(timer);
	reset_slider();

  track.src = songs[index].path;
  // songs[index-1].icon = "";
  songs[index].icon = "<i class='fas fa-music'></i>";
	// title.innerHTML = songs[index].name;	
  //   artist.innerHTML = songs[index].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	// total.innerHTML = All_song.length;
	// present.innerHTML = index_no + 1;
}


load_track(index);
var mute = document.querySelector('#mute');
//mute sound function
function mute_sound(){
  if(track.muted){
    track.muted = false;
    mute.innerHTML = '<i class="fas fa-volume-up fa-sm" style="margin-top: 10px;"></i>';
  }
	else{
    track.muted = true;
    mute.innerHTML = '<i class="fas fa-volume-mute fa-sm" style="margin-top: 10px;"></i>';
  }
}

// checking.. the song is playing or not
function justplay() {
  if (Playing_song == false) {
    playsong();
  } else {
    pausesong();
  }
}

// reset song slider
function reset_slider() {
  slider.value = 0;
}

function playsong() {
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fas fa-pause fa-lg" aria-hidden="true" style="margin-top: 15px;"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fas fa-play fa-lg" aria-hidden="true" style="margin-top: 15px;"></i>';
}

// change slider position
function change_duration() {
  slider_position = track.duration * (slider.value / 100);
  track.currentTime = slider_position;
}



function range_slider() {
  let position = 0;

  // update slider position
  if (!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration);
    slider.value = position;
  }

  // function will run when the song is over
  if (track.ended) {
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
      index++;
      load_track(index);
      playsong();
  }
}
