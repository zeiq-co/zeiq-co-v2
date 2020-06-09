import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const Section = styled.div`
  padding: 3rem 1.5rem;

  .container {
    padding-right: 10px !important;
    padding-left: 4px !important;
  }
  .slick-slider {
    width: 328px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 18px;
    margin: 0px auto;
    overflow: hidden;
    padding: 23px;
    border-radius: 61px;
  }
  .slick-slider::before {
    content: '';
    background-image: url(https://www.packrs.co/images/iphone-mokeup.png);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 1;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .slick-slider .slick-track {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
`;

const AppSlider = ({ data }) => {
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
      <Slider {...settings}>
        {data.map(item => (
          <div>
            <img src={item.screen} alt="" />
          </div>
        ))}
      </Slider>
    </Section>
  );
};

export default AppSlider;
