import React from 'react';

import Button from './elements/Button';

const FreeClassifieds = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-6">
            <h2 className="title is-3 is-spaced  has-text-centered">
              Free Classifieds Using Them To Promote Your Stuff Online
            </h2>
            <h2 className="subtitle is-6 has-text-centered">
              Audio player software is used to playback sound recordings in one
              of the many formats available for computers today.
            </h2>
          </div>
        </div>
        <div className="columns is-multiline is-centered">
          <div className="column is-3">
            <img src="images/google-logo.jpg" alt="company" />
          </div>
          <div className="column is-3">
            <img src="images/google-logo.jpg" alt="company" />
          </div>
          <div className="column is-3">
            <img src="images/google-logo.jpg" alt="company" />
          </div>
          <div className="column is-3">
            <img src="images/google-logo.jpg" alt="company" />
          </div>
        </div>
        <div className="has-text-centered">
          <Button to="/" />
        </div>
      </div>
    </div>
  );
};
export default FreeClassifieds;
