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

export default class MultipleItems extends Component {
  render() {
    const { data } = this.props;
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
                    <p className="subtitle is-6">{item.node.description}</p>
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img
                            className="is-rounded"
                            src={item.node.image.asset.fluid.src}
                            alt="avatar"
                          />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-6">{item.node.name}</p>
                        <p className="subtitle is-7">{item.node.position}</p>
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
