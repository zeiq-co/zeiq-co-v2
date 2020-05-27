import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  .card {
    box-shadow: none;
  }
  img {
    border-radius: 8px;
  }
`;

const Content = styled.div`
  padding-left: 0;
  padding-right: 0;
`;

const NewsCard = () => {
  return (
    <CardWrapper className="column is-4">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Place"
            />
          </figure>
        </div>
        <Content className="card-content">
          <div className="media">
            <div className="media-content">
              <time dateTime="2016-1-1">04 Jun 2018</time>
            </div>
          </div>
          <div className="content">
            <h1 className="is-size-4">
              Why Do You Need To Join An Affiliate Marketing Network
            </h1>
          </div>
        </Content>
      </div>
    </CardWrapper>
  );
};
export default NewsCard;
