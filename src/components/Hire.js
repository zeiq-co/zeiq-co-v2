import React from 'react';
import styled from 'styled-components';
import Button from './elements/Button';

const Container = styled.section`
  .columns {
    border-radius: 8px;
    border: 1px solid #654ce8;
  }
`;

const Hire = () => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-5 ">
          <h1 className="title is-spaced is-1">
            Hire the Best Web and Mobile App Developers
          </h1>
        </div>
        <div className="column">
          <p className="subtitle is-6 has-text-weight-normal">
            Zeiq is a top web design agency and software development company
            with a large pool of software developers available for dedicated and
            fixed time/cost projects. Hire web developers from IndiaNIC who have
            proven expertise in trending web technologies like PHP, Laravel,
            Magento, ReactJS, front-end technologies like AngularJS and back-end
            technologies like Node.js to develop custom and responsive websites,
            web apps and eCommerce solutions.
          </p>
          <Button to="/" text="Contact Us" />
        </div>
      </div>
    </div>
  </Container>
);

export default Hire;
