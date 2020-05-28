import React from 'react';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import OurProcess from '../components/OurProcess';
import HomeHero from '../components/HomeHero';
import Work from '../components/Work';
import SocialStuff from '../components/SocialStuff';
import NewsAndUpdates from '../components/NewsAndUpdates';

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" description="Home" />
      <HomeHero />
      <Work />
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <OurProcess text="Requirement Analysis" sideImage />
            <OurProcess sideImage text="Project Allocation" />
            <OurProcess text="Team match-up" />
            <OurProcess sideImage text="Project implementation" />
            <OurProcess sideImage text="Effect analysis" />
            <OurProcess text="Long-term relationship!" />
          </div>
        </div>
      </section>
      <SocialStuff />
      <NewsAndUpdates />
    </Layout>
  );
};
export default IndexPage;
