import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { theme } from '../../utils/theme';

const StyledButton = styled(Link)`
  box-shadow: none !important;
  border-color: transparent;
  background-color: ${theme.primaryColor};
  padding: 1rem;
  width: 100%;
  text-align: left;
`;

const ServicesButton = ({ to }) => {
  return (
    <StyledButton className="button" type="button" to={to}>
      <span className="has-text-white has-text-weight-bold">Learn More</span>
    </StyledButton>
  );
};
export default ServicesButton;
