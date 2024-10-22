 // Initialize particles.js with enhanced functionality
 particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 150, // Increase the number of particles
            "density": {
                "enable": true,
                "value_area": 800 // Particle density
            }
        },
        "color": {
            "value": "#ffffff" // Default color of particles
        },
        "shape": {
            "type": "circle", // Shape of particles
            "stroke": {
                "width": 1,
                "color": "#ffffff" // Outline color
            }
        },
        "opacity": {
            "value": 0.6, // Opacity of particles
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.2,
                "sync": false
            }
        },
        "size": {
            "value": 5, // Default size of particles
            "random": true, 
            "anim": {
                "enable": true,
                "speed": 3, // Animation speed
                "size_min": 0.5, // Minimum size during animation
                "sync": false
            }
        },
        "line_linked": {
            "enable": true, // Lines between particles
            "distance": 100, // Shorter distance for connections
            "color": "#ffffff",
            "opacity": 0.5,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2, // Particle speed
            "direction": "none",
            "random": true, // Random movement
            "straight": false,
            "out_mode": "out", // Particles re-enter the canvas
            "bounce": false,
            "attract": {
                "enable": true,
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
                "mode": "repulse" // Repulse particles on hover
            },
            "onclick": {
                "enable": true,
                "mode": "push" // Add particles on click
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 200,
                "line_linked": {
                    "opacity": 1 // Make lines stronger on hover
                }
            },
            "bubble": {
                "distance": 400,
                "size": 15,
                "duration": 2,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 50, // Repulse distance on hover
                "duration": 0.5
            },
            "push": {
                "particles_nb": 10 // Push more particles on click
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true // Support retina displays
});