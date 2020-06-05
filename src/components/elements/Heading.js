import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  .title {
    line-height: 46px !important;
  }
  .column {
    :last-child {
      margin-bottom: 1.5rem !important;
    }
  }
`;
const Heading = ({ title, subtitle, columnSize }) => {
  return (
    <Header className="columns is-centered">
      <div className={`column is-7 ${columnSize || 'column is-8'}`}>
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
