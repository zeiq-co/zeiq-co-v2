import React, { Component } from 'react';
import Particles from 'react-particles-js';

class Particle extends Component {
  render() {
    return (
      <Particles
        params={{
          particles: {
            number: {
              value: 9,
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
              type: ['image'],
              image: [
                {
                  src:
                    'https://www.zeiq.co/static/1c69680f3ddc8121a0add7a1aa25c114/c4cc1/api.png',
                  height: 40,
                  width: 40,
                },
                {
                  src:
                    'https://www.zeiq.co/static/f4a6009688cc0b1197c0ec0b845e30e4/8afbc/aws.png',
                  height: 40,
                  width: 40,
                },
                {
                  src:
                    'https://www.zeiq.co/static/a3cc31c7659540aee2c270dbcdcfd6a2/8afbc/contentful.png',
                  height: 40,
                  width: 40,
                },
                {
                  src:
                    'https://www.zeiq.co/static/af6024eb2c50b2d606d4631feebda1a5/8afbc/amazon-web.png',
                  height: 40,
                  width: 40,
                },
                {
                  src:
                    'https://www.zeiq.co/static/3c7b082cc439aae9a592b1d26f622b48/8afbc/graphql.png',
                  height: 40,
                  width: 40,
                },
                {
                  src:
                    'https://www.zeiq.co/static/af07a466d9a3ac09d852440d1c2b092b/8afbc/gatsby.png',
                  height: 40,
                  width: 40,
                },
                {
                  src:
                    'https://www.zeiq.co/static/0f2ab8cc0e9d5b2d15643785d71f3d3f/8afbc/machine-learning.png',
                  height: 40,
                  width: 40,
                },
                {
                  src:
                    'https://www.zeiq.co/static/b825c1b2a86b71abce3c689d86a04c7d/8afbc/react.png',
                  height: 40,
                  width: 40,
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
                size_min: 2,
                sync: true,
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
