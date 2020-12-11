var frame = document.getElementById('playlist');
var info = document.getElementById('info');
function showPlaylist() {
  if (info.style.visibility === 'hidden') {
    info.style.visibility = 'visible';
    frame.style.transform = 'fade 2s';
    frame.style.background =
      'linear-gradient(90.06deg, #C4C4C4 7.82%,  76.66% rgba(255, 255, 255, 0) , rgba(255, 155, 4, 0.8))';

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
    name: 'song1',
    path: '../asset/song/Marjan-Farsad-Porteghale-Man-320.mp3',
    singer: 'FIONN STACY',
  },
  {
    name: 'song2',
    path: '../asset/song/Marjan-Farsad-Porteghale-Man-320.mp3',
    singer: 'FIONN STACY',
  },
  {
    name: 'song3',
    path: '../asset/song/Marjan-Farsad-Porteghale-Man-320.mp3',
    singer: 'FIONN STACY',
  },
];

//add songs in play list
function addSongs(){
  for(var i=0; i< songs.length; i++){
    console.log("list", list);
    var text = document.createTextNode("Water");
    songName.appendChild(text);
    console.log("p-song",songName);
    console.log("p-singer",singerName);
    list.appendChild(songName);
    list.appendChild(singerName);
    console.log("list2", list);

    var clone = list.cloneNode(true);
      playlist.appendChild(clone);
  }
  console.log("list3", playlist);

}


addSongs();

function load_track(index) {
  track.src = songs[index].path;

}

load_track(index);

//mute sound function
// function mute_sound(){
// 	track.volume = 0;
// 	volume.value = 0;
// 	volume_show.innerHTML = 0;
// }

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
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
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
    if (autoplay == 1) {
      index_no += 1;
      load_track(index_no);
      playsong();
    }
  }
}
