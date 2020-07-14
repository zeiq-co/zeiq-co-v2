import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Heading from '../components/elements/Heading';
import WhatWeDo from '../components/WhatWeDo';
import Tabs from '../components/Tabs';

const Data = [
  {
    title: 'Who We Are',
    description: `A successful offshore software application development company
      since 1997, providing a full range of website and mobile app
      development , and other IT services and solutions globally. We
      deliver web and mobile app development services to global
      businesses since 1997, with 100% project delivery success. Hire
      the best programmers at affordable prices. Our design-focused
      approach and project execution processes help you to deliver the
      right solutions.`,
    flex: false,
  },

  {
    title: 'What We Do',
    description: `We design JAMstack websites and cross platform apps for IOS and Android
      with Expo and React Native, We design our apps with serverless architecture that scales
      automatically as your usage or user base extends, so you can scale
      your app or site without hassle and all our websites are
      statically rendered websites with no plugins
       that are a fortress and let you save money on security.`,
    flex: true,
  },
];

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

          {Data.map(item => (
            <WhatWeDo
              flex={item.flex}
              description={item.description}
              title={item.title}
            />
          ))}
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
