(() => {
//Particle.js Stars (using this as a background)
    //https://github.com/VincentGarreau/particles.js/
    particlesJS("particles-js", {
        "particles": {
            "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 70
            }
            },
            "color": {
            "value": "#ffffff" //colour star
            },
            "shape": {
            "type": "star",
            "stroke": {
                "width": 0,
                "color": "#fdd935" //colour stroke
            },
            "polygon": {
                "nb_sides": 5
            },
            },
            "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 0.2,
                "opacity_min": 0,
                "sync": false
            }
            },
            "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0,
                "sync": false
            }
            },
            "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
            },
            "move": {
            "enable": true,
            "speed": 0.2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
            },
            "modes": {
            "grab": {
                "distance": 300,
                "line_linked": {
                "opacity": 1
                }
            },
            "bubble": {
                "distance": 84,
                "size": 2,
                "duration": 3,
                "opacity": 1,
                "speed": 3
            },
            "push": {
                "particles_nb": 4
            },
            }
        },
        "retina_detect": true
    });

})();
