import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Columns = styled.div`
  flex-direction: ${props => (props.flex ? 'row-reverse' : '')};
`;

const BorderDiv = styled.div`
  border: solid ${theme.primaryColor};
  border-width: 0px 0px 0px 3px;
`;

const WhatWeDo = ({ flex }) => {
  return (
    <div className="section">
      <div className="container">
        <Columns className="columns is-multiline" flex={flex}>
          <div className="column is-4">
            <h2 className="title is-3 is-spaced ">Who We Are</h2>
          </div>
          <BorderDiv className="column is-1" />
          <div className="column is-">
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
    </div>
  );
};

export default WhatWeDo;
