import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Purple = styled.span`
  color: ${theme.primaryColor};
`;

const Container = styled.div`
  img {
    border: 1px solid ${theme.secondaryBlack};
  }
`;
const uri =
  'https://th.bing.com/th/id/OIP.DFNVLR1eJG3HX54FTiNOTwAAAA?w=128&h=128&c=7&o=5&pid=1.7';

const data = [{ uri }, { uri }, { uri }, { uri }, { uri }, { uri }, { uri }];

const TechStack = () => {
  return (
    <Container className="section">
      <div className="container">
        <div className="columns is-multiline is-centered">
          <div className="column is-12">
            <h1 className="title is-2 is-spaced has-text-centered">
              Technologies we work with
            </h1>
          </div>
          <div className="column is-10 section">
            <div className="columns is-centered">
              <div className="column is-2 ">
                <h1 className="title is-6 has-text-centered">MOBILE</h1>
              </div>
              <div className="column is-2">
                <h1 className="title is-6 has-text-centered">
                  <Purple>FRONT END</Purple>
                </h1>
              </div>
              <div className="column is-2">
                <h1 className="title is-6 has-text-centered">DATABASE</h1>
              </div>
              <div className="column is-2">
                <h1 className="title is-6 has-text-centered">BACKEND</h1>
              </div>
              <div className="column is-2">
                <h1 className="title is-6 has-text-centered">CMS</h1>
              </div>
              <div className="column is-3">
                <h1 className="title is-6 has-text-centered">
                  INFA AND DEVOPS
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-multiline">
          {data.map(image => (
            <div className="column is-3">
              <img alt="react" src={image.uri} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
export default TechStack;
