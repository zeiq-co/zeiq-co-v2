import React from 'react';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import OurProcess from '../components/OurProcess';
import HomeHero from '../components/HomeHero';
import Work from '../components/Work';
import Hire from '../components/Hire';
import SocialStuff from '../components/SocialStuff';
import NewsAndUpdates from '../components/NewsAndUpdates';

const data = [
  {
    text: 'Requirement Analysis',
    arrow: ' ',
    icon: 'far fa-circle',
  },
  {
    text: 'Requirement Analysis',
    arrow: ' ',
    icon: 'fas fa-palette',
  },
  {
    text: 'Requirement Analysis',
    icon: 'fas fa-code',
  },
  {
    text: 'Requirement Analysis',
    arrow: ' ',
    icon: 'fas fa-code',
  },
  {
    text: 'Requirement Analysis',
    arrow: ' ',
    icon: 'fas fa-rocket',
  },
  {
    text: 'Requirement Analysis',
    icon: 'fas fa-code',
  },
];

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" description="Home" />
      <HomeHero />
      <Work />
      <Hire />
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {data.map(item => (
              <OurProcess
                text={item.text}
                sideImage={item.arrow}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>
      <SocialStuff />
      <NewsAndUpdates />
    </Layout>
  );
};
export default IndexPage;
