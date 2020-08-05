import React from 'react';
import styled from 'styled-components';

import { theme } from '../../utils/theme';

const Point = styled.div`
  display: flex;
  margin-bottom: 8px;
  .bd-footer-link-icon,
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
      <div className="bd-footer-link-icon">
        <i className="fas fa-check-circle" />
      </div>
      <strong className="">{text}</strong>
    </Point>
  );
};
export default Features;
