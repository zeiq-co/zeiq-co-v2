import React from 'react';

import Heading from './elements/Heading';
import Button from './elements/Button';

const data = [
  {
    source: '/images/google-logo.jpg',
  },
  {
    source: '/images/google-logo.jpg',
  },
  {
    source: '/images/google-logo.jpg',
  },
  {
    source: '/images/google-logo.jpg',
  },
];

const SocialStuff = () => {
  return (
    <div className="section">
      <div className="container">
        <Heading
          title="Free Classifieds Using Them To Promote Your Stuff Online"
          subtitle=" Audio player software is used to playback sound recordings in one
          of the many formats available for computers today."
        />
        <div className="columns is-multiline is-centered">
          {data.map(items => (
            <div className="column is-3">
              <img src={items.source} alt="company" />
            </div>
          ))}
        </div>
        <div className="has-text-centered">
          <Button to="/" text="Learn More" />
        </div>
      </div>
    </div>
  );
};
export default SocialStuff;
