import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';

const LiveProject = () => {
  return (
    <Layout>
      <Seo title="Live Project" description="Live Projects" />
      <HomeHero
        title="Make Myspace Your Best Designed Space"
        subtitle="The thing that is most exciting about studying the universe is also the most frustrating and that is that."
        image="/images/LiveProject.png"
        firstButtonText="Buy Now"
        secondButtonText="Live Demo"
      />
    </Layout>
  );
};
export default LiveProject;
