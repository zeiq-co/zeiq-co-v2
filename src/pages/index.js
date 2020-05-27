import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import OurProcess from '../components/OurProcess';
import HomeHero from '../components/HomeHero';
import Work from '../components/Work';
import FreeClassifieds from '../components/FreeClassifieds';
import NewsAndUpdates from '../components/NewsAndUpdates';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
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
        <FreeClassifieds />
        <NewsAndUpdates />
      </Layout>
    );
  }
}
