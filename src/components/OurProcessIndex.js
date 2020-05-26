/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';
import OurProcessIndexData from '../htmlData/OurProcessIndexData';

const Arrow = styled.i`
  color: ${theme.darkAccent};
  font-size: 30px;
  margin: 10px;
`;

const Star = styled.i`
  color: ${theme.darkAccent};
  font-size: 70px;
  background-color: ${theme.backgroundColor};
  border-radius: 100px;
  padding: 20px;
`;

const Text = styled.h2`
  font-family: ${theme.secondaryFontFamily};
  margin-top: 1rem;
`;

const OurProcessIndex = () => {
  return (
    <div>
      <p className="subtitle is-3 has-text-weight-medium">Our Process</p>
      <div className="columns is-multiline is-centered">
        {OurProcessIndexData.map((data, i) => {
          if (data.Icon === 'star') {
            return (
              <div key={i} className="column is-3">
                <Star className="far fa-star" />
                <Text className="title is-6">{data.Text}</Text>
              </div>
            );
          }
          if (data.Icon === null) {
            return true;
          }
          return (
            <div key={i} className="column is-1">
              <Arrow className="fas fa-arrow-right" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default OurProcessIndex;
