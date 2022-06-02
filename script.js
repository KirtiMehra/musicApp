// Take Refrence of id and Classes
const play = document.getElementById("play");
const music = document.querySelector("audio");
const songName = document.getElementById("songName");
const movieTitle = document.getElementById("movieTitle");
const MovieTitle = document.getElementById("MovieTitle");
const artist = document.getElementById("artist");
const songType = document.getElementById("songType");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const img = document.getElementById("img");
const arr1 = document.getElementById("arr1");
const arr2 = document.getElementById("arr2");
const arr3 = document.getElementById("arr3");
const arr4 = document.getElementById("arr4");
const arr5 = document.getElementById("arr5");
const arr6 = document.getElementById("arr6");


// Create array for Songs 
const songs = [
    {
       musicName : "Chand balliya", 
       artist: "Ankit vabhav",
       songTitle: "Album ",
       photo : "1",
       songType: "Hindi",
       songId : "song_1"
    },
    {
        musicName : "Love Story ", 
        artist: "Tailor Swift",
        songTitle: "Love Story",
        photo : "2",
        songType: "English",
        songId : "song_2"
     },
      {
        musicName : "Titanic ", 
        artist: "AstiPichacho",
        songTitle: "Titanic",
        photo : "3",
        songType: "english",
        songId : "song_3"
     },
     {
        musicName : "Dilliwali Girl friend ", 
        artist: "Sunidhi Chauhan ",
        songTitle: "Yeh Jawani hai dewani",
        photo : "4",
        songType: "Hindi",
        songId : "song_4"
     },
     {
      musicName : "Maiyya mainu", 
      artist: "Ankit Bhrdwaj ",
      songTitle: "Maiyya mainu",
      photo : "5",
      songType: "Hindi",
      songId : "song_6"
   },
   {
    musicName : "Shaam", 
    artist: "KK bhanushali ",
    songTitle: "Shaam",
    photo : "6",
    songType: "Hindi",
    songId : "song_7"
 },

]

//Function For PlayMusic 
let isPlaying = false;
const playMusic = () => {
   isPlaying = true;
   music.play();
   play.innerHTML= "Play";

}

//Function For PauseMusic 
const pauseMusic = () => {
   isPlaying = false;
   music.pause();
   play.innerHTML= "stop";
  
 
}

// Play Functionality
play.addEventListener("click", ()=>{
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
})

// For change event 
const loadSongs = (songs) =>{
    music.src="./music/"+ songs.songId + ".mp3";
    img.src="./images/"+songs.photo + ".jpg";
    songName.textContent = songs.musicName;
    movieTitle.textContent = songs.songTitle ;
    MovieTitle.textContent = songs.songTitle ;
    artist.textContent = songs.artist;
    songType.textContent= songs.songType;
  
} 

// for next song 
songIndex =0;
const nextSong = () =>{
  songIndex = (songIndex+1) % songs.length;
  loadSongs(songs[songIndex]);
  playMusic();
}

// for prev song 
songIndex =0;
const prevSong = () =>{
  songIndex = (songIndex-1) % songs.length;
  loadSongs(songs[songIndex]);
  playMusic();
}

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

arr1.addEventListener("click", ()=>{
  loadSongs(songs[0]);
  playMusic();
  console.log(songs(loadSongs[0]));
})

arr2.addEventListener("click", ()=>{
  loadSongs(songs[1]);
  playMusic();
})

arr3.addEventListener("click", ()=>{
  loadSongs(songs[2]);
  playMusic();
})

arr4.addEventListener("click", ()=>{
  loadSongs(songs[3]);
  playMusic();
})


arr5.addEventListener("click", ()=>{
  loadSongs(songs[4]);
  playMusic();
})

arr6.addEventListener("click", ()=>{
  loadSongs(songs[5]);
  playMusic();
})

