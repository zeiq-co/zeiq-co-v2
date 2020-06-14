import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Heading from '../components/elements/Heading';
import WhatWeDo from '../components/WhatWeDo';
import Tabs from '../components/Tabs';

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
              <figure className="image">
                <img src="/images/about.png" alt="website" />
              </figure>
            </div>
          </div>

          <WhatWeDo />
          <WhatWeDo flex />
        </div>
      </div>

      <div className="section">
        <Heading title="Technologies we work with" />
        <div className="container">
          <Tabs />
        </div>
      </div>
    </Layout>
  );
};
export default About;
