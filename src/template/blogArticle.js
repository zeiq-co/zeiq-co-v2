import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';

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

const Content = styled.div`
  h2 {
    color: ${props => props.theme.darkShades} !important;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  a {
    font-weight: 300;
    color: ${props => props.theme.mainBrandColor} !important;
  }
  p,
  h1,
  h3,
  h4,
  h5 {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const blogArticleQuery = graphql`
  query($slug: String) {
    sanityArticle(slug: { current: { eq: $slug } }) {
      seoTitle
      seoDescription
      date
      title
      _rawBody(resolveReferences: { maxDepth: 5 })
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
        title={blog.seoTitle}
        description={blog.seoDescription}
        url={config.siteUrl}
      />
      <Section
        className="hero section is-block is-relative is-medium"
        img={blog.image.asset.url}
      >
        <div className="container">
          <div className="hero-body" />
        </div>
      </Section>
      <Content className="section ">
        <div className="container">
          <BlockContent blocks={blog._rawBody} />
        </div>
      </Content>
    </Layout>
  );
};

export default BlogArticle;
