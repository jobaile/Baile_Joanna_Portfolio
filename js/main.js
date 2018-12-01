(() => {
    //Hamburger Menu Toggle
    var strokes = document.querySelectorAll(".strokes"),
        hamburger = document.querySelector(".menu-toggle"),
        menuOverlay = document.querySelector(".menu-overlay");
  
    function transformStart() {
        //console.log("from transformStart()");

        strokes[0].classList.toggle("animate0")
        strokes[1].classList.toggle("hide");
        strokes[2].classList.toggle("animate2");
        menuOverlay.classList.toggle("show");

        // var topLogo = document.querySelector(".topLogo");
        // topLogo.style.display = "none";
    }
    
    hamburger.addEventListener("click", transformStart);

})();

