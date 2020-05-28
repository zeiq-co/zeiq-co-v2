import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  .column {
    :last-child {
      margin-bottom: 2rem !important;
    }
  }
`;
const Heading = ({ title, subtitle }) => {
  return (
    <Header className="columns is-centered">
      <div className="column is-6">
        {title && (
          <h2 className="title is-3 is-spaced has-text-centered">{title}</h2>
        )}
        {subtitle && (
          <p className="subtitle is-6 has-text-centered">{subtitle}</p>
        )}
      </div>
    </Header>
  );
};
export default Heading;
