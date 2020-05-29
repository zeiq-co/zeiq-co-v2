import React from 'react';
import styled from 'styled-components';
import Button from './elements/Button';

const Container = styled.section`
  .box {
    border-radius: 8px;
    border: 1px solid #654ce8;
  }
`;

const Hire = () => (
  <Container className="section">
    <div className="container">
      <div className="columns box">
        <div className="column is-5 hero is-normal">
          <div className="hero-body">
            <h1 className="title is-spaced is-1">
              Hire the Best Web and Mobile App Developers
            </h1>
          </div>
        </div>
        <div className="column is-1" />
        <div className="column hero is-normal">
          <header className="hero-body">
            <p className="subtitle is-6 has-text-weight-normal">
              Zeiq is a top web design agency and software development company
              with a large pool of software developers available for dedicated
              and fixed time/cost projects. Hire web developers from IndiaNIC
              who have proven expertise in trending web technologies like PHP,
              Laravel, Magento, ReactJS, front-end technologies like AngularJS
              and back-end technologies like Node.js to develop custom and
              responsive websites, web apps and eCommerce solutions.
            </p>
            <Button to="/" text="Contact Us" />
          </header>
        </div>
      </div>
    </div>
  </Container>
);

export default Hire;
