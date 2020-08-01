import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Heading from '../components/elements/Heading';
import WhatWeDo from '../components/WhatWeDo';
import Tabs from '../components/Tabs';

export const query = graphql`
  query aboutPageQuery {
    sanitySiteSettings {
      aboutSeoTitle
      aboutSeoDescription
      aboutTitle
      aboutSubtitle
      aboutImage {
        asset {
          fluid(maxWidth: 1200) {
            src
          }
        }
      }
      about {
        columnReverse
        title
        description
      }
    }
  }
`;

const About = ({ data }) => {
  const about = data.sanitySiteSettings;
  return (
    <Layout>
      <Seo
        title={about.aboutSeoTitle}
        description={about.aboutSeoDescription}
      />
      <div className="section">
        <div className="container">
          <Heading title={about.aboutTitle} subtitle={about.aboutSubtitle} />
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={about.aboutImage.asset.fluid.src} alt="website" />
              </figure>
            </div>
          </div>
          {about.about.map(item => (
            <WhatWeDo
              flex={item.columnReverse}
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
