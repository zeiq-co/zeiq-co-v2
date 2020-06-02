import React from 'react';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import Work from '../components/Work';
import Hire from '../components/Hire';
import Steps from '../components/Steps';
import SocialStuff from '../components/SocialStuff';
import NewsAndUpdates from '../components/NewsAndUpdates';
import ClientReview from '../components/ClientReview';

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" description="Home" />
      <HomeHero />
      <Work />
      <Hire />
      <Steps />
      <SocialStuff />
      <NewsAndUpdates />
      <ClientReview />
    </Layout>
  );
};
export default IndexPage;
