import React from 'react';

import Layout from '../components/Layout';

import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import PaidScreens from '../components/PaidScreens';
import PaidFeatures from '../components/PaidFeatures';

import AppSlider from '../components/AppSlider';

const slider = [
  {
    screen: ' https://www.zeiq.co/images/FoodApp/Checkout.png',
  },
  {
    screen: 'https://www.zeiq.co/images/FoodApp/Categories.png',
  },
  {
    screen: ' https://www.zeiq.co/images/FoodApp/Checkout.png',
  },
];

const PaidProject = () => {
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
      <PaidScreens />
      <section className="section">
        <div className="container">
          <AppSlider data={slider} />
        </div>
      </section>
      <PaidFeatures />
    </Layout>
  );
};
export default PaidProject;
