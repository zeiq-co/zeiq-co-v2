import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  .card {
    border-radius: 8px;
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
              <p className="title is-4">John Smith</p>
              <p className="subtitle is-6">@johnsmith</p>
            </div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{' '}
            <a href="#">#responsive</a>
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </Content>
      </div>
    </CardWrapper>
  );
};
export default NewsCard;
