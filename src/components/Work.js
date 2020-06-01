import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Heading from './elements/Heading';

const Section = styled.div`
  img {
    width: 100%;
    height: 38rem;
  }
  .slick-dots {
    bottom: -50px !important;
  }
  .slick-dots li button:before {
    color: ${props => props.theme.mainBrandColor} !important;
    font-size: 15px;
    line-height: 20px;
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
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <Section className="section">
        <div className="container">
          <Heading title="Work" />
          <Slider {...settings}>
            <div>
              <img src="/images/work/Packers.png" alt="" />
            </div>
            <div>
              <img src="/images/work/work1.png" alt="" />
            </div>
          </Slider>
        </div>
      </Section>
    );
  }
}
