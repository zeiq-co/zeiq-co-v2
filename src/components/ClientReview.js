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
    height: 19rem;
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
      'Our website previously was static, and we wanted enhancements to the presentation layer. Thankfully, Zeiq knows how to build a good website.',
  },
  {
    position: 'Project Manager',
    name: 'Lenora Andrews',
    content:
      'Having worked intensively with Zeiq on multiple projects, our partnership has been a professional and productive experience with impressive results to date. The team is responsive, full of ideas and delivers on their commitments. I can highly recommend Zeiq as a serious partner in modern web development projects involving JAMstack and React.',
  },
  {
    position: 'Project Manager',
    name: 'Francis Morgan',
    content:
      'Zeiq stood out as experts on the JAMstack products that are available and recommended sanity CMS which was not on our radar previously. That kind of guidance, approachability and subject matter expertise is what we were looking for. I am very happy with our decision.',
  },
  {
    position: 'Project Manager',
    name: 'Lenora Andrews',
    content:
      'Zeiq became a natural development partner for us given their deep knowledge of web development. Despite the geographical distance, our collaboration has been successful with strong deliveries on time, together with a good communication.      ',
  },
  {
    position: 'Project Manager',
    name: 'Francis Morgan',
    content:
      'Zeiq team cares deeply about not just the project but also the people they partner with. It’s not often that you see this in people with Deep domain expertise and relentless energy.      ',
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
