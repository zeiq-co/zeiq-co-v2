import React from 'react';
import styled from 'styled-components';
import Heading from './elements/Heading';
import NewsCard from './NewsCard';

const NewsAndUpdates = () => {
  return (
    <div className="hero section is-block is-relative">
      <div className="container">
        <Heading title="News and Updates" />
        <div className="columns is-multiline">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </div>
  );
};
export default NewsAndUpdates;
