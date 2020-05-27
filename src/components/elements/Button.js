import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledButton = styled(Link)`
  box-shadow: none !important;
  border-color: transparent;
  :active,
  :hover,
  :focus {
    box-shadow: none !important;
    border-color: transparent;
  }
`;

const Button = ({ to }) => {
  return (
    <StyledButton className="button" type="button" to={to}>
      <span>Learn More</span>
      <span className="icon has-text-info">
        <i className="fas fa-chevron-circle-right" />
      </span>
    </StyledButton>
  );
};
export default Button;
