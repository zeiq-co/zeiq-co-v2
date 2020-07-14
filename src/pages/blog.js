import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Blog from '../components/Blog';
import Heading from '../components/elements/Heading';

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
              fluid(maxWidth: 700) {
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
      <Heading
        title="Our Blogs"
        subtitle="A home for inspiring stories on business and technology."
      />
      <Blog data={blog} />
    </Layout>
  );
};

export default Blogs;
