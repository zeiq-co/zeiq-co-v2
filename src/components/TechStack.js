import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';
import Heading from './elements/Heading';

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
        <Heading title="Technologies we work with" />
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
