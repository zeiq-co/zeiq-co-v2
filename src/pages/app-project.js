import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import AppSlider from '../components/AppSlider';
import Heading from '../components/elements/Heading';
import ContactUs from '../components/ContactUs';

const FeatureWrapper = styled.div`
  .icon,
  span {
    margin-right: 10px;
    color: ${props => props.theme.darkAccent}!important;
  }
  .box {
    padding: 17px !important;
    background: #f3f3f3;
  }
`;
const data = [
  {
    title: 'Allow customers to see your catalogue',
  },
  {
    title: 'Configure your delivery area',
  },
  {
    title: 'Net order notification and manage deliver on the go',
  },
  {
    title: 'Send push notification or SMS for offers and discounts',
  },
  {
    title: 'Full user accessibility (e.g. alt tags for images)',
  },
];

const slider = [
  {
    screen: 'https://www.zeiq.co/images/FoodApp/Categories.png',
  },
  {
    screen: ' https://www.zeiq.co/images/FoodApp/Checkout.png',
  },
  {
    screen: ' https://www.zeiq.co/images/FoodApp/Checkout.png',
  },
];

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

      <section className="section">
        <div className="container">
          <Heading
            columnSize
            title="About Project"
            subtitle="Food On Mood is a personal assistant to meet your everyday needs of online supermarket. At Mumu, customer can select nearby stores available, and order things as per their needs. The customer can also get alternative products in case the desired item is not available in the store. A Mover goes to the store and buys the ordered items and delivers on a given location at the specified delivery time."
          />
          <AppSlider data={slider} />
        </div>
      </section>

      <div className="section">
        <Heading title="Features" />
        <div className="container">
          {data.map(item => (
            <FeatureWrapper className="columns is-centered">
              <div className="column is-6 ">
                <div className="box">
                  <span className="icon">
                    <i className="fas fa-check-circle" />
                  </span>
                  <span>{item.title}</span>
                </div>
              </div>
            </FeatureWrapper>
          ))}
        </div>
      </div>
      <ContactUs />
    </Layout>
  );
};
export default Project;
