const musicContainer = document.querySelector('.music-container')
const title = document.querySelector('#title')
const audio = document.querySelector('#audio')
const playButton = document.querySelector('#play')
const prevButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const cover = document.querySelector('#cover')

// Array with songs
const songs = ['Genesis - In Too Deep', 'Бумбокс - Люди', 'Мандри - Дорога']
//Default Song
let songIndex = 0

loadSong(songs[songIndex])

// Actual song for some moment
function loadSong(song) {             //
  title.innerText = song              // refer on to id="title", type = text, reffer on array
  audio.src = `music/${song}.mp3`     // the same, and refer on folder with music
  cover.src = `img/${song}.png`
}
//Event Click Buttons
function playSong(){                                      //To be clear, it's menu which climb out from main block, when I click on button play
  musicContainer.classList.add('play')                           //I use DOM in order to use my all elements, when music start playing. classList it's like an array, which include all the elements
  playButton.querySelector('i.fas').classList.remove('fa-play') //I remove whole button remove
  playButton.querySelector('i.fas').classList.add('fa-pause')   //In order to change on another button (pause)

  audio.play()          //The play() method starts playing the current audio.
}

function pauseSong(){
  musicContainer.classList.remove('play')   //If click again then I hide block and stop playing audio
  playButton.querySelector('i.fas').classList.remove('fa-pause')
  playButton.querySelector('i.fas').classList.add('fa-play')

  audio.pause()  //method stop playing ..
}

function prevSong (){
  songIndex--                    //Previous song, step backward
  if(songIndex < 0){             //if <0, then I play latest song in list
    songIndex = songs.length - 1
  }
  loadSong(songs[songIndex])      //after I need to load this audio
  playSong()                      //then play it
}
function nextSong(){
  songIndex++                     //The same situation but in another way
  if(songIndex > songs.length - 1){
    songIndex = 0
  }
  loadSong(songs[songIndex])
  playSong()
}

//eventListener
playButton.addEventListener('click', () =>{
  const isPlaying = musicContainer.classList.contains('play')  //Check if an element has a given class (true/false)

  if (isPlaying) {
    pauseSong()       //My function
  }
  else{
    playSong()        //My function
  }
})

//Change Song event
prevButton.addEventListener('click', prevSong)
nextButton.addEventListener('click', nextSong)
//Actual progress bar when song playing (show actual progress)
audio.addEventListener('timeupdate', updateProgress)
function updateProgress(event){
  const {duration, currentTime} = event.srcElement           //author of the event
  const progressPercent = (currentTime / duration) * 100
  progress.style.width = `${progressPercent}%`
  console.log(event.srcElement.currentTime)
}
//Set progress bar (manage to our pr bar)
progressContainer.addEventListener('click', setProgress)

function setProgress(event) {
  const width = this.clientWidth
  console.log(width)
  const clickX = event.offsetX
  console.log(clickX)
  const duration = audio.duration
  audio.currentTime = (clickX / width) * duration
}

//Go to the next song when previous ends
audio.addEventListener('ended', nextSong)

//var volslider,progress,seek
//progress = document.getElementById("progress-bar")
/*range = document.getElementById("range")

progress.addEventListener("mousedown", function(event){seeking=true} seekf(event)})
progress.addEventListener("mousemove", function(event){ seekf(event) })
range.addEventListener("mousemove", setvolume )
//
function setvolume(){
  audio.volume = range.value / 100
}*/


/*<div class="progress-container">
  <div class="progress" id="progress-bar"></div>
</div>*/

let slider = document.querySelector('#duration_slider')
let current_volume= document.querySelector('#volume')
let volume_show = document.querySelector('#volume_show')


function volume_change(){
	audio.volume = current_volume.value / 100
  //<p id="volume_show">1</p>
  //volume_show.innerHTML = recent_volume.value
}

//--------------------VIDEO------------------------//
let player = document.getElementById('videoplayer')
function play(video, poster){
  player.src = video
  player.poster=poster
}
