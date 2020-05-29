import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Features from './elements/Features';

const Container = styled.div`
  .columns.is-flex {
    flex-direction: ${props => (props.flex ? 'row-reverse' : '')};
  }
  img {
    border-radius: 8px;
  }
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
    <Container className="section is-block is-relative " flex={flex}>
      <div className="columns is-multiline is-flex">
        <div className="column is-6">
          <figure className="images">
            <img
              src="https://images.unsplash.com/photo-1565306257414-bbc84fdaaade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="mobile"
            />
          </figure>
        </div>
        <div className="column is-6 ">
          <h1 className="title is-1 is-spaced ">Mobile Apps development</h1>
          <p className="subtitle is-6 is-spaced">
            A successful offshore software application development company since
            1997, providing a full range of website and mobile app development ,
            and other IT services and solutions globally. We deliver web and
            mobile app development services to global businesses since 1997,
            with 100% project delivery success. Hire the best programmers at
            affordable prices. Our design-focused approach and project execution
            processes help you to deliver the right solutions.
          </p>
          <h2 className="title is-4 is-spaced ">Features</h2>
          <div className="columns is-multiline">
            {features.map(item => (
              <div className="column is-6">
                <Features text={item.text} />
              </div>
            ))}
          </div>
          <Link to="/" className="button is-primary">
            <strong>Learn More</strong>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ServicesType;
