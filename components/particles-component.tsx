import React, { useEffect } from 'react';

const ParticlesComponent = () => {
   useEffect(() => {
      require('particles.js'); 
      
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 80, 
            },
            color: {
              value: '#ffffff' 
            },
            shape: {
              type: 'circle', 
            },
            opacity: {
              value: 0.4, 
              random: true,
            },
            size: {
              value: 3, 
              random: true,
            },
            line_linked: {
              enable: true,
              distance: 180, 
              color: '#ffffff',
              opacity: 0.3, 
              width: 1,
            },
            move: {
              enable: true,
              speed: 6, 
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse', 
              },
              onclick: {
                enable: true,
                mode: 'push', 
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
                distance: 150, 
              },
              push: {
                particles_nb: 4, 
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
