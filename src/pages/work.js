import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import WorkHero from '../components/WorkHero';

import Heading from '../components/elements/Heading';
import NewsCard from '../components/NewsCard';
import RegisterForm from '../components/form/RegisterForm';

const data = [
  {
    image: '/images/work/work one.png',
    title: '',
    subtitle: '',
    pera: '',
  },
  {
    image: '/images/work/work two.png',
    title: '',
    subtitle: '',
    pera: '',
  },
  {
    image: '/images/work/work tree.png',
    title: '',
    subtitle: '',
    pera: '',
  },
  {
    image: '/images/work/work four.png',
    title: '',
    subtitle: '',
    pera: '',
  },
  {
    image: '/images/work/work five.png',
    title: '',
    subtitle: '',
    pera: '',
  },
  {
    image: '/images/work/work six.png',
    title: '',
    subtitle: '',
    pera: '',
  },
];

const Work = () => {
  return (
    <Layout>
      <Seo title="Work" description="Our Work" />
      <WorkHero />
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
      <RegisterForm />
    </Layout>
  );
};
export default Work;
