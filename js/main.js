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

    //Escape key working for lightbox!!!   
    var modal = document.querySelector(".lightBox");

    document.addEventListener('keydown', function(esc) { //Esc key
      let keyCode = esc.keyCode; 
      //console.log("from esc key");

      if (keyCode === 27) { //This is the integer for escape!
          modal.style.display = "none";
      }
  });
    
  
    //For hamburger
    function transformStart() {
        //console.log("from transformStart()");
        var strokes = document.querySelectorAll(".strokes");

        strokes[0].classList.toggle("animate0")
        strokes[1].classList.toggle("hide");
        strokes[2].classList.toggle("animate2");
        menuOverlay.classList.toggle("show");
    }

    //Video player functions
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

      var skillBarStart = function(bars) {
        this.bars = document.querySelectorAll(bars);
        if( this.bars.length > 0 ) {
          this.init();
        }	
      };
      
      skillBarStart.prototype = {
        init: function() {
          const self= this;
          self.index = -1;
          self.timer = setTimeout(function() {
            self.action();
          }, 400);
          
          
        },
        select: function( n ) {
          const self= this,
            bar = self.bars[n];
            
            if( bar ) {
              var width = bar.parentNode.dataset.percent;
            
              bar.style.width = width;
              bar.parentNode.classList.add( "complete" );	
            }
        },
        action: function() {
          const self= this;
          self.index++;
          if( self.index == self.bars.length ) {
            clearTimeout( self.timer );
          } else {
            self.select( self.index );	
          }
          
          setTimeout(function() {
            self.action();
          },400);
        }
      };
    
    hamburger.addEventListener("click", transformStart);
    playButton.addEventListener("click", playVideo); //VIDEO
    seekBar.addEventListener("change", progressBar); //SEEK BAR
    muteButton.addEventListener("click", muteVideo); //MUTE
    rewindVideo.addEventListener("click", rewindVid); //REWIND VIDEO X
    fullVideo.addEventListener("click", fullScreen); //FULLSCREEN
    video.addEventListener("timeupdate", progPlay); //TIME UPDATE
    document.addEventListener("DOMContentLoaded", skillNewBars); // skill bar
  

})();

