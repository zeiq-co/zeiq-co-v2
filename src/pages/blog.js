import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import NewsAndUpdates from '../components/NewsAndUpdates';

export const query = graphql`
  query blogPageQuery {
    allSanityArticle {
      edges {
        node {
          date(formatString: "DD MM YYYY")
          title
          except
          slug {
            current
          }
          image {
            asset {
              fluid(maxWidth: 1200) {
                src
              }
            }
          }
        }
      }
    }
  }
`;

const Blogs = ({ data }) => {
  const blog = data.allSanityArticle.edges;
  return (
    <Layout>
      <Seo title="Blog" description="Blog" keywords="Blog" />
      <NewsAndUpdates
        title="Our Blogs"
        subtitle="A home for inspiring stories on business and technology."
        data={blog}
      />
    </Layout>
  );
};

export default Blogs;
