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
  h2 {
    color: ${props => props.theme.textColorLite}!important;
  }
`;

const NewsCard = ({ asset }) => {
  return (
    <CardWrapper className="column is-4">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={asset} alt="Place" />
          </figure>
        </div>
        <Content className="card-content">
          <div className="media">
            <div className="media-content">
              <h2 className="is-size-6">04 Jun 2018</h2>
            </div>
          </div>
          <div className="content">
            <h1 className="title is-4 is-spaced">
              Why Do You Need To Join An Affiliate Marketing Network
            </h1>
            <h2 className="is-size-6 has-text-weight-normal">
              Many of us are so used to working on a computer desktop that when
              it comes time to purchase a new computer, we don’t consider
            </h2>
          </div>
        </Content>
      </div>
    </CardWrapper>
  );
};
export default NewsCard;
