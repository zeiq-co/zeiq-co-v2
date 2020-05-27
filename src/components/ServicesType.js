import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Features from './elements/Features';
import ServicesButton from './elements/ServicesButton';

const Container = styled.div`
  img {
    border-radius: 10px;
  }
`;

const ServicesType = ({ rowReverse }) => {
  return (
    <Container className="section">
      <div
        style={{ flexDirection: rowReverse ? 'row-reverse' : 'row' }}
        className="columns is-multiline"
      >
        <div className="column is-6">
          <figure className="image is-4by5">
            <img
              src="https://images.unsplash.com/photo-1565306257414-bbc84fdaaade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="mobile"
            />
          </figure>
        </div>
        <div className="column is-6">
          <h2 className="title is-1 is-spaced ">Mobile Apps development</h2>
          <h2 className="subtitle is-6 is-spaced">
            A successful offshore software application development company since
            1997, providing a full range of website and mobile app development ,
            and other IT services and solutions globally. We deliver web and
            mobile app development services to global businesses since 1997,
            with 100% project delivery success. Hire the best programmers at
            affordable prices. Our design-focused approach and project execution
            processes help you to deliver the right solutions.
          </h2>
          <h2 className="title is-4 is-spaced ">Features</h2>
          <div className="columns is-multiline">
            <div className="column is-5">
              <Features />
            </div>
            <div className="column is-5">
              <Features />
            </div>
            <div className="column is-5">
              <Features />
            </div>
            <div className="column is-5">
              <Features />
            </div>
            <div className="column is-5">
              <Features />
            </div>
            <div className="column is-5">
              <Features />
            </div>

            <div className="column is-5">
              <ServicesButton />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
ServicesType.defaultProps = {
  rowReverse: false,
};
ServicesType.propTypes = {
  rowReverse: PropTypes.bool,
};

export default ServicesType;
