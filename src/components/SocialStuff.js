import React from 'react';
import styled from 'styled-components';

import Heading from './elements/Heading';
import Button from './elements/Button';

const data = [
  {
    source: '/images/social/Amazon.png',
  },
  {
    source: '/images/social/Facebook.png',
  },
  {
    source: '/images/social/Google Copy.png',
  },
  {
    source: '/images/social/Linkdedin.png',
  },
];

const Wrapper = styled.div`
  .box {
    min-height: 8rem;
  }
  img {
    width: auto;
    margin: 0 auto;
  }
`;

const SocialStuff = () => {
  return (
    <div className="section">
      <div className="container">
        <Heading
          title="Free Classifieds Using Them To Promote Your Stuff Online"
          subtitle=" Audio player software is used to playback sound recordings in one
          of the many formats available for computers today."
        />
        <div className="columns is-multiline">
          {data.map(items => (
            <Wrapper className="column is-one-quarter hero">
              <div className="box hero-body">
                <figure className="image">
                  <img src={items.source} alt="social" />
                </figure>
              </div>
            </Wrapper>
          ))}
        </div>
        <div className="has-text-centered">
          <Button to="/contact" text="Learn More" />
        </div>
      </div>
    </div>
  );
};
export default SocialStuff;
