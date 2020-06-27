import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import AppSlider from '../components/AppSlider';
import Heading from '../components/elements/Heading';
import ContactUs from '../components/ContactUs';

const FeatureWrapper = styled.div`
  .icon,
  span {
    margin-right: 10px;
    color: ${props => props.theme.darkAccent}!important;
  }
  .box {
    padding: 17px !important;
    background: #f3f3f3;
  }
`;

export const productQuery = graphql`
  query project($slug: String) {
    sanityWork(slug: { current: { eq: $slug } }) {
      seoTitle
      seoDescription
      name
      description
      homeHeroImage {
        asset {
          url
        }
      }
      playStoreUrl
      appStoreUrl
      about {
        title
        description
        screenshots {
          asset {
            url
          }
        }
        features
      }
    }
  }
`;

const Project = ({ data }) => {
  const projects = data.sanityWork;

  return (
    <Layout>
      <Seo title={projects.seoTitle} description={projects.seoDescription} />
      <HomeHero
        storeIcons
        image={projects.homeHeroImage.asset.url}
        title={projects.name}
        subtitle={projects.description}
        playStoreUrl={projects.playStoreUrl}
        appStoreUrl={projects.appStoreUrl}
      />
      <section className="section">
        <div className="container">
          <Heading
            columnSize
            title={projects.about.title}
            subtitle={projects.about.description}
          />
          <AppSlider data={projects.about} />
        </div>
      </section>

      <div className="section">
        <Heading title="Features" />
        <div className="container">
          {projects.about.features.map(item => (
            <FeatureWrapper className="columns is-centered">
              <div className="column is-6 ">
                <div className="box">
                  <span className="icon">
                    <i className="fas fa-check-circle" />
                  </span>
                  <span>{item}</span>
                </div>
              </div>
            </FeatureWrapper>
          ))}
        </div>
      </div>
      <ContactUs />
    </Layout>
  );
};
export default Project;
