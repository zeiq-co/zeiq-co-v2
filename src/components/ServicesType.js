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
`;

const features = [
  {
    text: 'Developers',
  },
  {
    text: 'UI Developers',
  },
  {
    text: 'UX Developers',
  },
  {
    text: 'Frontend',
  },
  {
    text: 'Developers',
  },
  {
    text: 'UI Developers',
  },
  {
    text: 'UX Developers',
  },
  {
    text: 'Frontend',
  },
  {
    text: 'UX Developers',
  },
  {
    text: 'Frontend',
  },
];
const ServicesType = ({ flex }) => {
  return (
    <Container flex={flex}>
      <div className="columns is-multiline  is-variable is-8">
        <div className="column is-5">
          <img
            src="https://images.unsplash.com/photo-1565306257414-bbc84fdaaade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="mobile"
          />
        </div>
        <div className="column">
          <h2 className="title is-2 is-spaced">Mobile Apps development</h2>
          <p className="subtitle is-6">
            A successful offshore software application development company since
            1997, providing a full range of website and mobile app development ,
            and other IT services and solutions globally. We deliver web and
            mobile app development services to global businesses since 1997,
            with 100% project delivery success. Hire the best programmers at
            affordable prices. Our design-focused approach and project execution
            processes help you to deliver the right solutions.
          </p>
          <div>
            <h2 className="title is-4">Features</h2>
          </div>
          <div className="columns is-multiline">
            {features.map(item => (
              <Points className="column is-6 points">
                <Features text={item.text} />
              </Points>
            ))}
          </div>
          <Link
            to="/"
            className="button is-primary is-medium has-text-weight-medium"
          >
            <strong>Learn More</strong>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ServicesType;
