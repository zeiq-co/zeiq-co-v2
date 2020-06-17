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

const WhatWeDo = ({ flex, title, description }) => {
  return (
    <Section className="section">
      <div className="container">
        <Columns className="columns is-multiline" flex={flex}>
          <div className="column is-3">
            <h2 className="title is-3 is-spaced ">{title}</h2>
          </div>
          <BorderDiv className="column is-1" />
          <div className="column ">
            <p className="subtitle is-6">{description}</p>
          </div>
        </Columns>
      </div>
    </Section>
  );
};

export default WhatWeDo;
