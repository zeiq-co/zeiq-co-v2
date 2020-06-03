import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Heading from '../components/elements/Heading';
import NewsCard from '../components/NewsCard';
import ContactForm from '../components/ContactForm';

const data = [
  {
    image: '/images/news/news-one.png',
  },
  {
    image: '/images/news/news2.png',
  },
  {
    image: '/images/news/news3.png',
  },
];

const Work = () => {
  return (
    <Layout>
      <Seo title="Work" description="Our Work" />
      <div className="hero section">
        <div className="container">
          <Heading title="OUR WORk" />
          <div className="columns is-multiline">
            {data.map(item => (
              <NewsCard
                asset={item.image}
                title="04 Jun 2018"
                subtitle="Why Do You Need To Join An Affiliate Marketing Network"
                pera="Many of us are so used to working on a computer desktop that when
                it comes time to purchase a new computer, we don’t consider"
                tags
              />
            ))}
          </div>
        </div>
      </div>
      <ContactForm />
    </Layout>
  );
};
export default Work;
