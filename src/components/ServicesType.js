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

const ServicesType = ({ flex, title, image, description, features }) => {
  return (
    <Container flex={flex}>
      <div className="columns is-multiline  is-variable is-8">
        <div className="column is-5">
          <img src={image} alt="mobile" />
        </div>
        <div className="column">
          <h2 className="title is-2 is-spaced">{title}</h2>
          <p className="subtitle is-6">{description}</p>
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
