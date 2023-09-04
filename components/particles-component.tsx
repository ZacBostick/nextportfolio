// components/ParticlesComponent.tsx
import React, { useEffect } from 'react';

const ParticlesComponent = () => {
   useEffect(() => {
      require('particles.js');  // This will attach `particlesJS` to the window object
      
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 40, // This determines the number of particles. Reduce as needed.
            },
            color: {
              value: '#ffffff' // White color, can be changed to softer color
            },
            shape: {
              type: 'circle', 
            },
            opacity: {
              value: 0.4, // Adjust opacity to make it less bright. Values between 0 and 1.
              random: true,
            },
            size: {
              value: 3, // Size of particles. You can adjust as per your preference.
              random: true,
            },
            line_linked: {
              enable: true,
              distance: 180, // Distance at which they link. You can adjust.
              color: '#ffffff',
              opacity: 0.3, // Adjust opacity of lines to make them less bright.
              width: 1,
            },
            move: {
              enable: true,
              speed: 1, // Adjust speed. Lower value = slower movement.
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse', // Particles will repel away from the cursor on hover.
              },
              onclick: {
                enable: true,
                mode: 'push', // New particles will be pushed/popped onto the canvas on click.
              },
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200, // Distance from cursor where repulsion effect will be noticeable.
              },
              push: {
                particles_nb: 4, // Number of particles to push on click.
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
        });
        
      }
   }, []);

   return <div id="particles-js"></div>;
};

export default ParticlesComponent;
