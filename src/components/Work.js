import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const Section = styled.div`
  .container {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 18px;
  }
  img {
    width: 100%;
    height: 30rem;
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
            <div className="box">
              <img src="/images/work.png" alt="" />
            </div>
            <div className="box">
              <img src="/images/ecommerce-app.png" alt="" />
            </div>
            <div className="box">
              <img src="/images/work.png" alt="" />
            </div>
          </Slider>
        </div>
      </Section>
    );
  }
}
