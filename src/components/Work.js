import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Heading from './elements/Heading';

const Section = styled.div`
  .slick-dots {
    bottom: -50px !important;
  }
  .slick-dots li button:before {
    color: ${props => props.theme.mainBrandColor} !important;
    font-size: 8px;
  }
  .slick-dots li button {
    font-size: 15px;
  }
`;
// const LinkStyled = styled(Link)``;

const data = [
  {
    img: '/images/work/Packers.png',
  },
  {
    img: '/images/work/work.png',
  },
  {
    img: '/images/work/Packers.png',
  },
  {
    img: '/images/work/work.png',
  },
];

export default class Work extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 3500,
      autoplay: true,
      fade: true,
      cssEase: 'linear',
    };
    return (
      <Section className="section">
        <div className="container">
          <Heading title="Work" />
          <Slider {...settings}>
            {data.map(item => (
              <Link to="/work">
                <img src={item.img} alt="" />
              </Link>
            ))}
          </Slider>
        </div>
      </Section>
    );
  }
}
