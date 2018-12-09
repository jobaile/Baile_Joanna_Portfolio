(() => {

// Video
    var VideoPlayer = { 
        init: function() {     
          video.volume = .0;
         
          // Buttons
          var playButton = document.querySelector("#play-pause");
          var muteButton = document.querySelector("#mute");
          var fullScreenButton = document.querySelector("#full-screen");
          video = document.querySelector("#video");
          
          // Sliders
          var seekBar = document.querySelector("#seek-bar");
          var volumeBar = document.querySelector("#volume-bar");
          volumeBar.value = video.volume;
          
          // Controls
          videoControls = document.querySelector("#video-controls");
          playCenterButton = document.querySelector("#video-play-center");
          
          // Event listener for the play/pause button 
          VideoPlayer.hideControls(); 


          //display control on mousemove
          document.querySelector("#video-container").addEventListener("mousemove", function() {   
            VideoPlayer.showControls(); 
          });

          videoControls.addEventListener("mouseover", function() {   
            VideoPlayer.showControls();
            clearTimeout(hideControl);
          });

          playButton.addEventListener("click", function() {
            //console.log('from playBtn');
            playVideo();
          });

          playCenterButton.addEventListener("click", function() { 
            //console.log('from playCenterBtn');
            playVideo();
          }); 
          function playVideo(){ 
            if (video.paused == true) {
              // Play the video
              video.play();
              // Update the button text to 'Pause'
              playButton.classList.toggle("fa-play");
              playButton.classList.toggle("fa-pause");
              playCenterButton.classList.toggle("fa-play-circle-o");
              playCenterButton.classList.toggle("fa-pause");
              playCenterButton.style.opacity = 0;
            } else {
              // Pause the video
              video.pause();
              // Update the button text to 'Play'
              playButton.classList.toggle("fa-play");
              playButton.classList.toggle("fa-pause");
              playCenterButton.classList.toggle("fa-play-circle-o");
              playCenterButton.classList.toggle("fa-pause");
              playCenterButton.style.opacity = .8;
            }
          };
  
          // Checks if the document is currently in fullscreen mode
          var isFullScreen = function() {
            return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
          }
  
          // Fullscreen
          fullScreenButton.addEventListener("click", function() {
            // If fullscreen mode is active...	
            if (isFullScreen()) {
              // ...exit fullscreen mode
              if (document.exitFullscreen) document.exitFullscreen();
              else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
              else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
              else if (document.msExitFullscreen) document.msExitFullscreen();       
            } else {
              if (video.requestFullscreen) video.requestFullscreen();
              else if (video.mozRequestFullScreen) video.mozRequestFullScreen();
              else if (video.webkitRequestFullScreen) {
                video.webkitRequestFullScreen();
              } else if (video.msRequestFullscreen) video.msRequestFullscreen();
              VideoPlayer.hideControls();         
            }
          });
  
  
          // Event listener for the mute button
          muteButton.addEventListener("click", function() {
            if (video.muted == false) {
              // Mute the video
              video.muted = true;
              // Update the volume Bar
              volumeBar.value = 0;
            } else {
              // Unmute the video
              video.muted = false;
              // Update the volume Bar
              volumeBar.value = video.volume;
            }
          });
          
          // Event listener for the seek bar
          var seekBarActive = false;
          seekBar.addEventListener("mousedown", function() {
            seekBarActive = true;
            clearTimeout(hideControl);
          });
          seekBar.addEventListener("mouseup", function() { 
            seekBarActive = false;
            VideoPlayer.hideControls(); 
          });
          seekBar.addEventListener("mousemove", function() {
            if (seekBarActive == true){
              // Calculate the new time
              var time = video.duration * (seekBar.value / 100);
              // Update the video time
              video.currentTime = time;
              clearTimeout(hideControl);
            }
          });
          
          // Update the seek bar as the video plays
          video.addEventListener("timeupdate", function() {
            // Calculate the slider value
            var value = (100 / video.duration) * video.currentTime;
            // Update the slider value
            seekBar.value = value;
          });
          
          // Event listener for the volume bar
          var volumeBarActive = false;
          volumeBar.addEventListener("mousedown", function() {
            volumeBarActive = true;
            clearTimeout(hideControl);
          });
          volumeBar.addEventListener("mouseup", function() { 
            volumeBarActive = false;
  
          });
          volumeBar.addEventListener("mousemove", function() {
            if (volumeBarActive == true){
              video.volume = volumeBar.value;
              clearTimeout(hideControl);
            }
          });
        },
  
        hideControls: function(){
          hideControl = setTimeout(function(){ 
            videoControls.style.opacity = .0;
            playCenterButton.style.opacity = .0;
            [].forEach.call(document.getElementsByClassName("controls"), function(el) {
              el.style.visibility = "hidden";
            });
          }, 1000);  
        },
        showControls: function(){
  
          //Hide Display Control Bar
          videoControls.style.opacity = .8;
          playCenterButton.style.opacity = .8;
          [].forEach.call(document.getElementsByClassName("controls"), function(el) {
            el.style.visibility = "visible";
          });
          clearTimeout(hideControl);
          VideoPlayer.hideControls();  
        }
      }
      document.addEventListener('DOMContentLoaded', function () {
        VideoPlayer.init();
    });

})();