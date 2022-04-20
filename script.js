const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

const music = document.querySelector("audio");

const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

const songs = [
  {
    name: "song-1",
    displayName: "Reggae Fusion",
    artist: "Lisa",
  },
  {
    name: "song-2",
    displayName: "Seven Nation Army",
    artist: "Homer",
  },
  {
    name: "song-3",
    displayName: "Goodnight, Disco Queen",
    artist: "Bart",
  },
  {
    name: "song-4",
    displayName: "FrontRow",
    artist: "Maggi",
  },
];

//Play Pause - Music-Icon
let isPlaying = false;
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.title = "Pause";
  music.play();
}
function pasueSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.title = "Play";
  music.pause();
}

playBtn.addEventListener("click", () => (isPlaying ? pasueSong() : playSong()));

//load Song(load image, title, artist, music)

function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  image.src = `img/${song.name}.jpg`;
  music.src = `music/${song.name}.mp3`;
}

//NEXT - PREVIOUS
let songIndex = 0;

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

//onload
loadSong(songs[songIndex]);
