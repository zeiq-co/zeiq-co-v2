import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import config from '../utils/config';
import Seo from './Seo';

import Heading from './elements/Heading';
import Layout from './Layout';

const ReactMarkdownContainer = styled(ReactMarkdown)`
  p {
    color: ${props => props.theme.lightShades} !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.darkShades}!important;
    font-size: 24px !important;
  }
  p {
    font-size: 18px !important;
  }
`;

export const pageQuery = graphql`
  query PageByPath($slug: String!) {
    sanityPages(slug: { current: { eq: $slug } }) {
      id
      title
      slug {
        current
      }
      description
    }
  }
`;

export default class PageView extends React.Component {
  render() {
    const { data } = this.props;
    const page = data.sanityPages;

    return (
      <Layout>
        <Seo
          title={page.title}
          description={`Read news & updates about ${page.title}`}
          url={`${config.siteUrl}/page/${page.slug}`}
        />

        <section className="section">
          <div className="container">
            <Heading title={page.title} />
            <div className="markdown-container">
              <ReactMarkdownContainer source={page.description} />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
