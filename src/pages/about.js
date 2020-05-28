import React from 'react';

import Layout from '../components/Layout';
import WhatWeDo from '../components/WhatWeDo';
import TechStack from '../components/TechStack';

const About = () => {
  return (
    <Layout>
      <div className="section">
        <div className="container">
          <div className="columns is-centered is-multiline">
            <div className="column is-5 ">
              <h2 className="title is-2 is-spaced  has-text-centered">
                Get to know more about us
              </h2>
              <h2 className="subtitle is-6 has-text-centered">
                We are an agency engaged in the creative industry and business,
                we are ready to help you improve your business performance
                together with our great team.
              </h2>
            </div>
            <div className="column is-10">
              <img
                alt="website"
                src="https://unsplash.com/photos/67l-QujB14w/download?force=true&w=2400"
              />
            </div>
          </div>
          <WhatWeDo />
          <WhatWeDo rowReverse />
          <TechStack />
        </div>
      </div>
    </Layout>
  );
};
export default About;
