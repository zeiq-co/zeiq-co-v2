import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

const Section = styled.div`
  .slick-slide {
    margin: 0 10px;
  }

  .slick-list {
    margin: 0 -10px;
  }
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      centerMode: true,

      slidesToScroll: 1,
      centerPadding: 30,
      // slidesToScroll: 3,
    };
    return (
      <div>
        <h1 className="title is-3 has-text-centered">Work</h1>
        <Section className="section">
          <div className="">
            <Slider {...settings}>
              <div>
                <img src="/images/work.png" alt="" />
              </div>{' '}
              <div>
                <img src="/images/work.png" alt="" />
              </div>{' '}
              <div>
                <img src="/images/work.png" alt="" />
              </div>
              <div>
                <img src="/images/work.png" alt="" />
              </div>
              <div>
                <img src="/images/work.png" alt="" />
              </div>
            </Slider>
          </div>
        </Section>
      </div>
    );
  }
}
