import React, { Component } from 'react';
import Slider from 'react-slick';

import styled from 'styled-components';
import Heading from './elements/Heading';

const Section = styled.div`
  padding: 3rem 1.5rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
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
const data = [
  {
    id: 1,
    screen: 'https://www.zeiq.co/images/FoodApp/Categories.png',
  },
  {
    id: 2,
    screen: 'https://www.zeiq.co/images/FoodApp/Checkout_Scroll%20View.png',
  },
  {
    id: 3,
    screen: ' https://www.zeiq.co/images/FoodApp/Checkout.png',
  },
  {
    id: 4,
    screen: ' https://www.zeiq.co/images/FoodApp/Checkout.png',
  },
  {
    id: 5,
    screen: ' https://www.zeiq.co/images/FoodApp/Checkout.png',
  },
];

export default class AppSlider extends Component {
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
        <Heading
          columnSize
          title="About Project"
          subtitle="Food On Mood is a personal assistant to meet your everyday needs of online supermarket. At Mumu, customer can select nearby stores available, and order things as per their needs. The customer can also get alternative products in case the desired item is not available in the store. A Mover goes to the store and buys the ordered items and delivers on a given location at the specified delivery time."
        />
        <div className="container">
          <Slider {...settings}>
            {data.map(item => (
              <div>
                <img src={item.screen} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </Section>
    );
  }
}
