import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Features from './elements/Features';

const Container = styled.div`
  padding: 3rem 0rem;
  .columns {
    flex-direction: ${props => (props.flex ? 'row-reverse' : '')};
  }
  img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
  }
  .subtitle {
    margin-bottom: 36px;
    text-align: justify;
  }
  .button {
    margin-top: 10px;
  }
`;

const Points = styled.div`
  padding: 10px !important;
  .gdQBmQ {
    margin-bottom: 0px !important;
  }
`;

const features = [
  {
    feature: 'Native iOS App Development',
  },
  {
    feature: 'Native Android App Development',
  },
  {
    feature: 'Cross-platform App Development',
  },
  {
    feature: 'Feature Five',
  },
  {
    feature: 'Wearable App Development',
  },

  {
    feature: 'Feature Six',
  },
];

const ServicesType = ({ flex, title, image, description }) => {
  return (
    <Container flex={flex}>
      <div className="columns is-multiline  is-variable is-8">
        <div className="column is-5">
          <img src={image} alt="mobile" />
        </div>
        <div className="column">
          <h2 className="title is-2 is-spaced">Mobile Apps Development </h2>
          <p className="subtitle is-6">
            From B2B or B2E apps for enterprises, small businesses, and
            startups, we have a proven track record of offering high-impact,
            result driven and engaging mobile application development services.
            Zeiq is a top mobile app development company that is renowned for
            delivering native Android app development, native iOS app
            development, hybrid and cross-platform app development services to
            build next-gen mobile applications using the latest technology
            stack.
          </p>
          <div>
            <h2 className="title is-4">Features</h2>
          </div>
          <div className="columns is-multiline">
            {features.map(item => (
              <Points className="column is-6 points">
                <Features text={item.feature} />
              </Points>
            ))}
          </div>
          <Link
            to="/single-service"
            className="button is-primary is-medium has-text-weight-medium has-text-white"
          >
            <strong>Learn More</strong>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ServicesType;
