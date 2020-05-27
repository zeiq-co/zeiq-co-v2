import React from 'react';
import styled from 'styled-components';
import NewsCard from './NewsCard';

const Header = styled.header`
  margin-bottom: 2rem;
`;

const NewsAndUpdates = () => {
  return (
    <div className="hero section is-block is-relative">
      <div className="container">
        <Header className="">
          <h1 className="title is-3 has-text-centered ">News and Updates</h1>
        </Header>
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
