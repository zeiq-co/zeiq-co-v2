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
          <div className="columns is-centered">
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
