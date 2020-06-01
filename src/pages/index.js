import React from 'react';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import OurProcess from '../components/OurProcess';
import HomeHero from '../components/HomeHero';
import Work from '../components/Work';
import Hire from '../components/Hire';
import SocialStuff from '../components/SocialStuff';
import NewsAndUpdates from '../components/NewsAndUpdates';
import ClientReview from '../components/ClientReview';

const data = [
  {
    text: 'Requirement Analysis',
    arrow: ' ',
    icon: 'far fa-circle',
  },
  {
    text: 'Project Allocation',
    arrow: ' ',
    icon: 'fas fa-palette',
  },
  {
    text: 'Team match-up',
    icon: 'fas fa-code',
  },
  {
    text: 'Project implementation',
    arrow: ' ',
    icon: 'fas fa-code',
  },
  {
    text: 'Effect analysis',
    arrow: ' ',
    icon: 'fas fa-rocket',
  },
  {
    text: 'Long-term relationship !',
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
                sideImage={item.arrow}
                icon={item.icon}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>
      <SocialStuff />
      <NewsAndUpdates />
      <ClientReview />
    </Layout>
  );
};
export default IndexPage;
