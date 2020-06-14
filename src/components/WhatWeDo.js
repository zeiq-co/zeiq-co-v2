import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';

const Columns = styled.div`
  flex-direction: ${props => (props.flex ? 'row-reverse' : '')};
`;

const Section = styled.div`
  @media only screen and (min-width: 1023px) {
    padding: 3rem 1.5rem !important;
  }
`;
const BorderDiv = styled.div`
  border: solid ${theme.primaryColor};
  border-width: 0px 0px 0px 3px;
`;

const WhatWeDo = ({ flex }) => {
  return (
    <Section className="section">
      <div className="container">
        <Columns className="columns is-multiline" flex={flex}>
          <div className="column is-3">
            <h2 className="title is-3 is-spaced ">Who We Are</h2>
          </div>
          <BorderDiv className="column is-1" />
          <div className="column ">
            <p className="subtitle is-6">
              A successful offshore software application development company
              since 1997, providing a full range of website and mobile app
              development , and other IT services and solutions globally. We
              deliver web and mobile app development services to global
              businesses since 1997, with 100% project delivery success. Hire
              the best programmers at affordable prices. Our design-focused
              approach and project execution processes help you to deliver the
              right solutions.
            </p>
          </div>
        </Columns>
      </div>
    </Section>
  );
};

export default WhatWeDo;
