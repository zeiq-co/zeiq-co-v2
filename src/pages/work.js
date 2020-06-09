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
    title: 'ECOMMERCE',
    subtitle: 'Food On Mood',
    pera: 'An online food ordering and delivery app for Android & iOS users.',
  },
  {
    image: '/images/work/work two.png',
    title: 'TOURISM AND HOSPITALITY',
    subtitle: 'Venture East Africa',
    pera: 'A website which offers user to explore things to do in Africa.',
  },
  {
    image: '/images/work/work tree.png',
    title: 'ECOMMERCE',
    subtitle: 'Packrs',
    pera:
      'ECommerce website designed to create the largest florist network in India.',
  },
  {
    image: '/images/work/work four.png',
    title: 'MEDIA AND ENTERTAINMENT',
    subtitle: 'Podcast',
    pera:
      'An entertainment app where users get exclusive movie content & win prizes.',
  },
  {
    image: '/images/work/work five.png',
    title: 'online courses',
    subtitle: 'SuperSkool',
    pera: 'A website which offers user to explore things to do in Africa.',
  },
  {
    image: '/images/work/work six.png',
    title: 'ECOMMERCE',
    subtitle: 'Packrs',
    pera:
      'ECommerce website designed to create the largest florist network in India.',
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
                title={item.title}
                subtitle={item.subtitle}
                pera={item.pera}
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
