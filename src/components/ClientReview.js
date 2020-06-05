import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Heading from './elements/Heading';

const Section = styled.div`
  .slick-slide {
    padding: 0 8px;
    box-sizing: border-box;
  }
  .slick-dots {
    bottom: -50px !important;
  }
  .slick-dots li button:before {
    color: ${props => props.theme.mainBrandColor} !important;
    font-size: 15px;
    line-height: 20px;
  }
  .wrapper {
    :focus {
      outline: none;
    }
  }
  .card {
    border: 1px solid #f3f3f3 !important;
    border-radius: 8px;
    box-shadow: none;
  }
  .title {
    line-height: 18px !important;
  }
`;

const data = [
  {
    position: 'Project Manager',
    name: 'Zachary Frank',
    content:
      'For business professionals caught between high OEM price and mediocre print and graphic output, there’s a solution: Business Express’s Eclipse line of compatible laser toner cartridges that meet or exceed ',
  },
  {
    position: 'Project Manager',
    name: 'Lenora Andrews',
    content:
      'There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun. The truth is the universe is a constantly changing, moving, some would say “living” thing because you just never know what you.',
  },
  {
    position: 'Project Manager',
    name: 'Francis Morgan',
    content:
      'While it was just a TV show, that little speech at the beginning of the original Star Trek show really did do a good job of capturing our feelings about space. It is those feelings that drive our love of astronomy and our desire.',
  },
  {
    position: 'Project Manager',
    name: 'Lenora Andrews',
    content:
      'For business professionals caught between high OEM price and mediocre print and graphic output, there’s a solution: Business Express’s Eclipse line of compatible laser toner cartridges that meet or exceed ',
  },
  {
    position: 'Project Manager',
    name: 'Francis Morgan',
    content:
      'For business professionals caught between high OEM price and mediocre print and graphic output, there’s a solution: Business Express’s Eclipse line of compatible laser toner cartridges that meet or exceed ',
  },
];

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <Section className="section">
        <div className="container">
          <Heading title="WORDS FROM CLIENTS" />
          <Slider {...settings}>
            {data.map(item => (
              <div className="wrapper">
                <div className="card">
                  <div className="card-content">
                    <p className="subtitle is-6">{item.content}</p>
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img
                            className="is-rounded"
                            src="/images/userIcon.png"
                            alt="Place"
                          />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-6">{item.name}</p>
                        <p className="subtitle is-7">{item.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Section>
    );
  }
}
