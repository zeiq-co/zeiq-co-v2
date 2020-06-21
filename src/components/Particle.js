import React, { Component } from 'react';
import Particles from 'react-particles-js';

class Particle extends Component {
  render() {
    return (
      <Particles
        params={{
          particles: {
            number: {
              value: 8,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 1,
              out_mode: 'out',
            },
            shape: {
              type: ['image', 'circle'],
              image: [
                {
                  src: '/images/particles/gatsby.svg',
                  height: 30,
                  width: 30,
                },
                {
                  src: '/images/particles/react-brands.svg',
                  height: 30,
                  width: 30,
                },
                {
                  src: '/images/particles/api.png',
                  height: 30,
                  width: 30,
                },
                {
                  src: '/images/particles/expo.png',
                  height: 20,
                  width: 20,
                },
                {
                  src: '/images/particles/ql.png',
                  height: 30,
                  width: 30,
                },
                {
                  src: '/images/particles/aws.png',
                  height: 20,
                  width: 23,
                },
                {
                  src: '/images/particles/next.png',
                  height: 30,
                  width: 30,
                },
              ],
            },
            color: {
              value: '#CCC',
            },
            size: {
              value: 30,
              random: false,
              anim: {
                enable: true,
                speed: 5,
                size_min: 10,
                sync: false,
              },
            },
          },
          retina_detect: false,
        }}
      />
    );
  }
}

export default Particle;
