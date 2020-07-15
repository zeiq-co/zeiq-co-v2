import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Heading from '../components/elements/Heading';
import ServicesType from '../components/ServicesType';
import RegisterForm from '../components/form/RegisterForm';

export const query = graphql`
  query servicePageQuery {
    allSanityService {
      edges {
        node {
          slug {
            current
          }
          reverse
          seoTitle
          seoDescription
          title
          description
          image {
            asset {
              fluid(maxWidth: 600) {
                src
              }
            }
          }
          features
        }
      }
    }
  }
`;

const Services = ({ data }) => {
  const service = data.allSanityService.edges;
  return (
    <Layout>
      <Seo title="Services" description="Our Services" />
      <div className="section">
        <div className="container">
          <Heading
            columnSize
            title="A Software Development Company"
            subtitle="Creating future proof reliable websites and apps is our passion and that allows us to make to incredible contribution in making the internet a better place to be! Here are our some of our services that we offer to our clients. Couldn't find what you need here, don't worry reach out to us from the contact page."
          />
          {service.map(item => (
            <ServicesType
              to={item.node.slug.current}
              image={item.node.image.asset.fluid.src}
              flex={item.node.reverse}
              title={item.node.title}
              description={item.node.description}
              features={item.node.features}
            />
          ))}
        </div>
      </div>
      <RegisterForm />
    </Layout>
  );
};
export default Services;
