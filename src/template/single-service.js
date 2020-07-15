import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Heading from '../components/elements/Heading';
import ServicesType from '../components/ServicesType';
import Tabs from '../components/Tabs';

export const singleServiceQuery = graphql`
  query($slug: String) {
    sanityService(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      singleServices {
        _key
        reverse
        title
        description
        image {
          asset {
            fluid {
              src
            }
          }
        }
        features
      }
    }
  }
`;

const SingleService = ({ data }) => {
  const service = data.sanityService;
  return (
    <Layout>
      <Seo title="Services" description="Our Services" />
      <div className="section">
        <div className="container">
          <Heading
            columnSize
            title="Web Development Company"
            subtitle="A successful offshore software application development company since 1997, providing a full range of website and mobile app development , and other IT services and solutions globally."
          />
          {service.singleServices.map(item => (
            <ServicesType
              to="/contact"
              image={item.image.asset.fluid.src}
              flex={item.reverse}
              title={item.title}
              description={item.description}
              features={item.features}
            />
          ))}
        </div>
      </div>
      <div className="section">
        <Heading title="Technologies we work with" />
        <div className="container">
          <Tabs data={service} />
        </div>
      </div>
    </Layout>
  );
};
export default SingleService;
