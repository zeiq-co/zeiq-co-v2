import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { theme } from '../utils/theme';

const Column = styled.div`
  .title {
    line-height: 32px !important;
  }
  .box {
    box-shadow: none;
  }
  span {
    background-color: ${theme.backgroundColor};
    height: 5rem;
    width: 5rem;
    border-radius: 3rem;
    margin: 0 0 20px;
  }
`;

const SideImage = styled.div`
  align-self: center !important;
`;

const Arrow = styled.i`
  color: ${theme.darkAccent};
  font-size: 30px;
  margin: 10px;
`;

const OurProcess = ({ sideImage, text, icon }) => {
  return (
    <div className="column is-4 has-text-centered">
      <div className="columns">
        <Column className="column">
          <article className="box">
            <span className="icon has-text-light is-size-2">
              <i className={icon} />
            </span>
            <div className="title is-5">{text}</div>
          </article>
        </Column>
        {sideImage && (
          <SideImage className="column is-2">
            <Arrow className="fas fa-arrow-right" />
          </SideImage>
        )}
      </div>
    </div>
  );
};

OurProcess.defaultProps = {
  sideImage: false,
};

OurProcess.propTypes = {
  sideImage: PropTypes.bool,
};

export default OurProcess;
