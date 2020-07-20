import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import style from '../utils/devices.min.css';

const Section = styled.div``;

const AppSlider = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Section>
      <div className="mockups" style={style}>
        <div id="mockup-slider-titles" className="owl-carousel" />
        <div className="css-mb with-glare">
          <div className="mb-display-position">
            <div className="mb-display">
              <div className="mb-screen-position">
                <div className="mb-screen">
                  <section id="mockup-slider" className="owl-carousel">
                    <Slider {...settings}>
                      {data.screenshots.map(item => (
                        <div>
                          <img src={item.asset.fluid.src} alt="" />
                        </div>
                      ))}
                    </Slider>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-body" />
          <div className="mb-bottom-cover" />
        </div>
      </div>
    </Section>
  );
};

export default AppSlider;
