import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const Section = styled.div`
  .slick-slider {
    max-width: 1152px;

    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 18px;
    margin: 0px auto;
    overflow: hidden;
    padding: 8px;
  }
`;

export default class Work extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Section className="section">
        <div className="container">
          <Slider {...settings}>
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
    );
  }
}
