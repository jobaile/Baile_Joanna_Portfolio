(() => {
    
    //Hamburger Menu Toggle
    var hamburger = document.querySelector(".menu-toggle"),
        menuOverlay = document.querySelector(".menu-overlay");

    //Video Player
    var video = document.querySelector("#headerVid");
    var playButton = document.querySelector("#playPause");
    var seekBar = document.querySelector("#seek-bar");
    var rewindVideo = document.querySelector("#rewind");
    var muteButton = document.querySelector("#muteVideo");
    var volumeBar = document.querySelector('#volumeBar');
    var fullVideo = document.querySelector("#full-screen");
  
    function transformStart() {
        //console.log("from transformStart()");
        var strokes = document.querySelectorAll(".strokes");

        strokes[0].classList.toggle("animate0")
        strokes[1].classList.toggle("hide");
        strokes[2].classList.toggle("animate2");
        menuOverlay.classList.toggle("show");

        // var topLogo = document.querySelector(".topLogo");
        // topLogo.style.display = "none";
    }

    function playVideo(){
        //console.log("from playVideo");
        if (video.paused) {
        document.getElementById("playPause").innerHTML='<button id="playPause"><i class="fas fa-pause"></i></button>';
        video.play();
      } else {
        document.getElementById("playPause").innerHTML='<button id="playPause"><i class="fas fa-play"></i></button>';
        video.pause();
      }
    }

    function progressBar(){
        //console.log("from progressBar");
        var time = video.duration * (seekBar.value / 100);
        video.currentTime = time;
      }
    
      function rewindVid(){
        //console.log("from rewind");
        video.currentTime -= 5;
      }
    
      function progPlay(){
        //console.log("from progPlay");
        var value = (100 / video.duration) * video.currentTime;
        seekBar.value = value;
      }
    
      function muteVideo(){
        //console.log("from muteVideo");
        if (video.muted) {
        video.muted = false;
        document.getElementById("muteVideo").innerHTML='<button id="muteVideo" class="control"><i class="fas fa-volume-up"></i></button>';
        theVolumeSVG.dataset.icon = "volume-up";
        volumeBar.value = 1;
        vidPlayer.volume = 1;
        } else {
        video.muted = true;
        document.getElementById("muteVideo").innerHTML='<button id="muteVideo" class="control"><i class="fas fa-volume-off"></i></button>';
        volumeBar.value = 0;
        vidPlayer.volume = 0;
        }
      }
    
      function fullScreen(){ //This will give default video controls
        console.log("from fullScreen");
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen(); // Firefox
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen(); // Chrome and Safari
        }
      }
    
    hamburger.addEventListener("click", transformStart);
    playButton.addEventListener("click", playVideo); //VIDEO
    seekBar.addEventListener("change", progressBar); //SEEK BAR
    muteButton.addEventListener("click", muteVideo); //MUTE
    rewindVideo.addEventListener("click", rewindVid); //REWIND VIDEO X
    fullVideo.addEventListener("click", fullScreen); //FULLSCREEN
    video.addEventListener("timeupdate", progPlay); //TIME UPDATE
  

})();

