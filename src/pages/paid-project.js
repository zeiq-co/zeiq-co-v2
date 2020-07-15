import React from 'react';
import Layout from '../components/Layout';

import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import PaidScreens from '../components/PaidScreens';
import PaidFeatures from '../components/PaidFeatures';
// import AppSlider from '../components/AppSlider';

const PaidProject = () => {
  return (
    <Layout>
      <Seo title="Live Project" description="Live Projects" />
      <HomeHero
        title="ZEIQ DELIVERY APP"
        subtitle="Are you looking to launch your online Food Shop, Delivery Shop, or an ECommerce mobile app for your supermarket business? Then this readymade flutter app will help you to build your business with your own mobile app in just few days.The mobile application offers amazing features to build a powerful online ordering system or app for your Zeiq shop. So what are you waiting for? Start your online business with your Mobile app today!"
        image="/images/LiveProject.png"
        firstButtonText="Buy Now"
        secondButtonText="Live Demo"
      />
      <PaidScreens />
      <section className="section">
        <div className="container">{/* <AppSlider data={slider} /> */}</div>
      </section>
      <PaidFeatures />
    </Layout>
  );
};
export default PaidProject;
