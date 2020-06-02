import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding-bottom: 0rem !important;
  img {
    margin: 0px auto;
  }
`;

const Button = styled.button`
  margin-top: 15px;
`;

const HomeHero = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-6-desktop has-text-centered-touch">
          <h1 className="title is-spaced is-1">
            Your Trusted Developer Partner
          </h1>
          <p className="subtitle is-6 has-text-weight-normal">
            We deliver web and mobile app development services to global
            businesses since 1997, with 100% project delivery success. Hire the
            best programmers at affordable prices. Our design-focused approach
            and project execution processes help you to deliver the right
            solutions.
          </p>
          <Button className="button is-primary is-medium" type="button">
            What we do
          </Button>
        </div>
        <div className="column is-2" />
        <div className="column">
          <figure className="image">
            <img
              className="is-pulled-right-is-desktop"
              src="/images/ecommerce-app.png"
              alt="placeholder"
            />
          </figure>
        </div>
      </div>
    </div>
  </Section>
);

export default HomeHero;
