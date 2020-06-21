import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  .card {
    box-shadow: none;
  }
  img {
    border-radius: 8px;
  }
  .tag {
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

const NewsCard = ({ asset, title, subtitle, pera, tags }) => {
  return (
    <CardWrapper className="column is-4">
      <div className="card">
        <div className="card-image">
          <figure className="image is-1by1">
            <img src={asset} alt="Place" />
          </figure>
        </div>
        <Content className="card-content">
          <div className="media">
            <div className="media-content">
              <h2 className="is-size-6 is-uppercase">{title}</h2>
            </div>
          </div>
          <div className="content">
            <h1 className="subtitle is-5 is-spaced has-text-black">
              {subtitle}
            </h1>
            <h2 className="subtitle is-size-6 has-text-weight-normal">
              {pera}
            </h2>
            {tags && (
              <div className="tags is-uppercase has-text-weight-bold">
                <span className="tag has-text-light">Android</span>
                <span className="tag has-text-light">ios</span>
                <span className="tag has-text-light">React</span>
                <span className="tag has-text-light">React Native</span>
              </div>
            )}
          </div>
        </Content>
      </div>
    </CardWrapper>
  );
};
export default NewsCard;