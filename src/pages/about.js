import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Heading from '../components/elements/Heading';
import WhatWeDo from '../components/WhatWeDo';
import TechStack from '../components/TechStack';

const About = () => {
  return (
    <Layout>
      <Seo title="About" description="About Us" />
      <div className="section">
        <div className="container">
          <Heading
            title="Get to know more about us"
            subtitle=" We are an agency engaged in the creative industry and business,
            we are ready to help you improve your business performance
            together with our great team."
          />
          <div className="columns">
            <div className="column">
              <figure className="image is-2by1">
                <img
                  src="https://unsplash.com/photos/67l-QujB14w/download?force=true&w=2400"
                  alt="website"
                />
              </figure>
            </div>
          </div>
          <WhatWeDo />
          <WhatWeDo flex />
          <TechStack />
        </div>
      </div>
    </Layout>
  );
};
export default About;
