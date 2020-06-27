import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { theme } from '../utils/theme';

const Column = styled.div`
  .title {
    margin: 24px 0px 0px 0px;
    line-height: 32px !important;
  }
  .box {
    box-shadow: none;
  }

  }
`;

const Figure = styled.figure`
  margin: 0 auto;
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
            <Figure className="image is-48x48">
              <img src={icon} alt="" />
            </Figure>
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
