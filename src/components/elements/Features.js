import React from 'react';
import styled from 'styled-components';

import { theme } from '../../utils/theme';

const Point = styled.div`
  margin-bottom: 8px;
  span,
  strong {
    color: ${props => props.theme.secondaryTextColor} !important;
  }
  strong {
    padding-left: 10px;
  }
`;
const Features = ({ text }) => {
  return (
    <Point>
      <span className="bd-footer-link-icon">
        <i className="fas fa-check-circle" />
      </span>
      <strong className="">{text}</strong>
    </Point>
  );
};
export default Features;
