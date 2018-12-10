(() => {

    //Hamburger Menu Toggle
    var hamburger = document.querySelector(".menu-toggle"),
        menuOverlay = document.querySelector(".menu-overlay");


    //Escape key working for lightbox!!!   
    var modal = document.querySelector(".lightBox");
    
  
    //For hamburger
    function transformStart() {
        //console.log("from transformStart()");
        var strokes = document.querySelectorAll(".strokes");

        strokes[0].classList.toggle("animate0")
        strokes[1].classList.toggle("hide");
        strokes[2].classList.toggle("animate2");
        menuOverlay.classList.toggle("show");
    }

    hamburger.addEventListener("click", transformStart);
    document.addEventListener("DOMContentLoaded", skillNewBars); // skill bar
    document.addEventListener('keydown', function(esc) { //Esc key
      let keyCode = esc.keyCode; 
      //console.log("from esc key");

      if (keyCode === 27) { //This is the integer for escape!
          modal.style.display = "none";
      }
    });

    
})();

