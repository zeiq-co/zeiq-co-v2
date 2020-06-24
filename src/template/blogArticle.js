import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import config from '../utils/config';

const Section = styled.div`
  background-image: url(${props => props.img});
  background-size: 100% 100%;
  img {
    max-width: 570px;
    margin: 0px auto;
  }
`;

const Content = styled.div``;

export const blogArticleQuery = graphql`
  query($slug: String) {
    sanityArticle(slug: { current: { eq: $slug } }) {
      date
      title
      image {
        asset {
          url
        }
      }
    }
  }
`;

const BlogArticle = ({ data }) => {
  const blog = data.sanityArticle;
  return (
    <Layout>
      <Seo
        title="blog-article"
        description="Blog Article"
        url={config.siteUrl}
        keywords="blog"
      />

      <Section
        className="hero section is-block is-relative is-medium"
        img={blog.image.asset.url}
      >
        <div className="container">
          <div className="hero-body" />
        </div>
      </Section>
      <Content className="section columns is-mobile is-centered">
        <div className="column is-10">
          <h4 className="title is-spaced is-4 has-text-centered">
            {blog.title}
          </h4>
          {/* <p className="subtitle is-6 has-text-centered">{blog.body}</p> */}
        </div>
      </Content>
    </Layout>
  );
};

export default BlogArticle;
