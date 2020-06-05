import React from 'react';
import styled from 'styled-components';

import { theme } from '../../utils/theme';

const Point = styled.div`
  span,
  strong {
    color: ${theme.secondaryBlack};
  }
  strong {
    padding-left: 10px;
  }
`;
const Features = ({ text }) => {
  return (
    <Point>
      <span className="bd-footer-link-icon has-text-light">
        <i className="fas fa-check-circle" />
      </span>
      <strong className="has-text-light">{text}</strong>
    </Point>
  );
};
export default Features;
