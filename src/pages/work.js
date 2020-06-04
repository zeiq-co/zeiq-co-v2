import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Heading from '../components/elements/Heading';
import NewsCard from '../components/NewsCard';
import RejisterForm from '../components/form/RejisterForm';

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
                title="ECOMMERCE"
                subtitle="Food On Mood"
                pera="An online food ordering and delivery app for Android & iOS users."
                tags
              />
            ))}
          </div>
        </div>
      </div>
      <RejisterForm />
    </Layout>
  );
};
export default Work;
