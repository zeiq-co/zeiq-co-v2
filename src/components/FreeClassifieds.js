import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { theme } from '../utils/theme';

const SubTitle = styled.h2`
  padding-top: 20px;
`;
const ButtonText = styled.h2`
  color: ${theme.mainBrandColor};
  text-align: center;
`;

const FreeClassifieds = () => {
  return (
    <div className="section">
      <div className="columns is-multiline">
        <div className="column is-3" />
        <div className="column">
          <h2 className="  title is-3  has-text-centered">
            Free Classifieds Using Them To Promote Your Stuff Online{' '}
          </h2>
          <SubTitle className="subtitle is-6 has-text-centered">
            Audio player software is used to playback sound recordings in one of
            the many formats available for computers today.
          </SubTitle>
        </div>
        <div className="column is-3" />
      </div>
      <div className="columns is-multiline">
        <div className="column is-2" />
        <div className="column is-2">
          <img src="images/google-logo.jpg" alt="company" />
        </div>
        <div className="column is-2">
          <img src="images/google-logo.jpg" alt="company" />
        </div>
        <div className="column is-2">
          <img src="images/google-logo.jpg" alt="company" />
        </div>
        <div className="column is-2">
          <img src="images/google-logo.jpg" alt="company" />
        </div>
      </div>
      <Link to="/">
        <ButtonText>
          Learn More <i className="fas fa-chevron-circle-right" />
        </ButtonText>
      </Link>
    </div>
  );
};
export default FreeClassifieds;
