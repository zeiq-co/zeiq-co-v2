import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const BorderDiv = styled.div`
  border: solid ${theme.primaryColor};
  border-width: 0px 0px 0px 3px;
`;

const WhatWeDo = ({ rowReverse }) => {
  return (
    <div className="section">
      <div
        style={{ flexDirection: rowReverse ? 'row-reverse' : 'row' }}
        className="columns is-multiline is-centered">
        <div className="column is-4">
          <h2 className="title is-1 is-spaced ">Who We Are</h2>
        </div>
        <BorderDiv className="column is-1" />
        <div className="column is-6">
          <h2 className="subtitle is-5 is-spaced">
            A successful offshore software application development company since
            1997, providing a full range of website and mobile app development ,
            and other IT services and solutions globally. We deliver web and
            mobile app development services to global businesses since 1997,
            with 100% project delivery success. Hire the best programmers at
            affordable prices. Our design-focused approach and project execution
            processes help you to deliver the right solutions.
          </h2>
        </div>
      </div>
    </div>
  );
};
WhatWeDo.defaultProps = {
  rowReverse: false,
};
WhatWeDo.propTypes = {
  rowReverse: PropTypes.bool,
};

export default WhatWeDo;
