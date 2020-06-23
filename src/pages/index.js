import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import Work from '../components/Work';
import Hire from '../components/Hire';
import Steps from '../components/Steps';
import SocialStuff from '../components/SocialStuff';
import NewsAndUpdates from '../components/NewsAndUpdates';
import ClientReview from '../components/ClientReview';

export const query = graphql`
  query HomePageQuery {
    sanitySiteSettings {
      homeHeroTitle
      homeHeroDescription
      buttonLink {
        current
      }
      homeHeroImage {
        alt
        asset {
          url
        }
      }
      workGallery {
        asset {
          url
        }
      }
      purchaseUs {
        title
        description
      }
    }
    allSanityProcess {
      edges {
        node {
          arrowIcon
          svgIcon
          title
        }
      }
    }
    allSanityNews {
      edges {
        node {
          _id
          image {
            alt
            asset {
              url
            }
          }
          releaseDate(formatString: "DD MM YYYY")
          title
          description
        }
      }
    }
    allSanityClientReview {
      edges {
        node {
          _id
          name
          position
          description
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

const IndexPage = ({ data }) => {
  const home = data.sanitySiteSettings;
  const processes = data.allSanityProcess.edges;
  const news = data.allSanityNews.edges;
  const review = data.allSanityClientReview.edges;
  return (
    <Layout>
      <Seo title="Home" description="Home" />
      <HomeHero
        title={home.homeHeroTitle}
        subtitle={home.homeHeroDescription}
        image={home.homeHeroImage.asset.url}
        alt={home.alt}
        firstButtonText="Live Demo"
        to={`/${home.buttonLink.current}`}
      />
      <Work data={home} />
      <Hire data={home.purchaseUs} />
      <Steps data={processes} />
      <SocialStuff />
      <NewsAndUpdates data={news} />
      <ClientReview data={review} />
    </Layout>
  );
};
export default IndexPage;
