import React from 'react';
import Heading from './elements/Heading';
import NewsCard from './NewsCard';

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

const Service = () => {
  return (
    <div className="hero section">
      <div className="container">
        <Heading title="News and Updates" />
        <div className="columns is-multiline">
          {data.map(item => (
            <NewsCard
              imageSize
              asset={item.image}
              title="04 Jun 2018"
              subtitle="Why Do You Need To Join An Affiliate Marketing Network"
              pera="Many of us are so used to working on a computer desktop that when
              it comes time to purchase a new computer, we don’t consider"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Service;
