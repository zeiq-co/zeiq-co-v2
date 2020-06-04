import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
// import Heading from '../components/elements/Heading';
import HomeHero from '../components/HomeHero';
import AppSlider from '../components/AppSlider';

const Project = () => {
  return (
    <Layout>
      <Seo title="About" description="About Us" />
      <HomeHero
        storeIcons
        image="/images/FoodOnMood.png"
        title="Food On Mood"
        subtitle="Food On Mood is an online food and app that facilitates online shopping for the day-to-day needs of the customers."
      />

      {/* <Heading
        columnSize
        title="About Project"
        subtitle="Food On Mood is a personal assistant to meet your everyday needs of online supermarket. At Mumu, customer can select nearby stores available, and order things as per their needs. The customer can also get alternative products in case the desired item is not available in the store. A Mover goes to the store and buys the ordered items and delivers on a given location at the specified delivery time."
      /> */}

      <AppSlider />
    </Layout>
  );
};
export default Project;
