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
      <HomeHero
        title="Your Trusted Developer Partner"
        subtitle="  We deliver web and mobile app development services to global
        businesses since 1997, with 100% project delivery success. Hire the
        best programmers at affordable prices. Our design-focused approach
        and project execution processes help you to deliver the right
        solutions."
        image="/images/ecommerce-app.png"
        firstButtonText="Live Demo"
      />
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
