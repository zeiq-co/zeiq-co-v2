import React from 'react';
import Heading from './elements/Heading';
import NewsCard from './NewsCard';

const NewsAndUpdates = ({ data, title, subtitle }) => {
  return (
    <div className="hero section">
      <div className="container">
        <Heading title={title} subtitle={subtitle} />
        <div className="columns is-multiline">
          {data.map(item => (
            <NewsCard
              imageSize
              to={`blog/${item.node.slug.current}`}
              key={item.node._id}
              asset={item.node.image.asset.fluid.src}
              title={item.node.date}
              subtitle={item.node.title}
              pera={item.node.except}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default NewsAndUpdates;
