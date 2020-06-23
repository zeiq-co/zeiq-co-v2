import React from 'react';
import Heading from './elements/Heading';
import NewsCard from './NewsCard';

const NewsAndUpdates = ({ data }) => {
  return (
    <div className="hero section">
      <div className="container">
        <Heading title="News and Updates" />
        <div className="columns is-multiline">
          {data.map(item => (
            <NewsCard
              key={item.node._id}
              asset={item.node.image.asset.url}
              title={item.node.releaseDate}
              subtitle={item.node.title}
              pera={item.node.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default NewsAndUpdates;
