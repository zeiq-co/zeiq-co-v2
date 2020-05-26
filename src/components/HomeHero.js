import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .image {
    max-width: 600px;
    margin: 0px auto;
  }
`;

const HomeHero = () => (
  <Section className="section hero  is-relative">
    <div className="container">
      <div className="columns is-vcentered is-desktop">
        <div className="column is-5-desktop has-text-centered-touch">
          <header>
            <h1 className="title is-spaced is-1">
              Your Trusted Developer Partner
            </h1>
            <p className="subtitle is-6 has-text-weight-normal">
              We deliver web and mobile app development services to global
              businesses since 1997, with 100% project delivery success. Hire
              the best programmers at affordable prices. Our design-focused
              approach and project execution processes help you to deliver the
              right solutions.
            </p>
            <button className="button is-primary is-medium" type="button">
              What we do
            </button>
          </header>
        </div>
        <div className="column is-1" />
        <div className="column">
          <figure className="image">
            <img src="/images/ecommerce-app.png" alt="placeholder" />
          </figure>
        </div>
      </div>
    </div>
  </Section>
);

export default HomeHero;
