import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import WorkHero from '../components/WorkHero';
import Heading from '../components/elements/Heading';
import NewsCard from '../components/NewsCard';
import RegisterForm from '../components/form/RegisterForm';

export const workQuery = graphql`
  query Works {
    allSanityWork {
      edges {
        node {
          slug {
            current
          }
          name
          type
          description
          tags
          image {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;

const Work = ({ data }) => {
  const work = data.allSanityWork.edges;
  return (
    <Layout>
      <Seo title="Work" description="Our Work" />
      <WorkHero />
      <div className="hero section">
        <div className="container">
          <Heading title="OUR WORk" />
          <div className="columns is-multiline">
            {work.map(item => (
              <NewsCard
                asset={item.node.image.asset.url}
                title={item.node.type}
                subtitle={item.node.name}
                pera={item.node.description}
                tags={item.node.tags}
                to={`${item.node.slug.current}`}
              />
            ))}
          </div>
        </div>
      </div>
      <RegisterForm />
    </Layout>
  );
};
export default Work;
