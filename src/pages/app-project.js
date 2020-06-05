import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import AppSlider from '../components/AppSlider';
import ContactUs from '../components/ContactUs';

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
      <AppSlider />
      <ContactUs />
    </Layout>
  );
};
export default Project;
