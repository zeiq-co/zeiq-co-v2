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

const NewsAndUpdates = () => {
  return (
    <div className="hero section is-block is-relative">
      <div className="container">
        <Heading title="News and Updates" />
        <div className="columns is-multiline">
          {data.map(item => (
            <NewsCard asset={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default NewsAndUpdates;
