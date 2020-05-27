import React from 'react';
import styled from 'styled-components';

const Point = styled.div`
  strong {
    padding-left: 10px;
  }
`;
const Features = ({ text }) => {
  return (
    <Point>
      <span className="bd-footer-link-icon has-text-star">
        <i className="fas fa-check-circle" />
      </span>
      <strong>{text}</strong>
    </Point>
  );
};
export default Features;
