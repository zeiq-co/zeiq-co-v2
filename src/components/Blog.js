import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 0.5rem;

  img {
    border-radius: 0.5rem 0.5rem 0 0;
  }
`;
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

const Blogs = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline is-variable is-6">
          {data.map(item => (
            <div className="column is-4 ">
              <Card className="card">
                <Link to="/">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="/images/news/news-one.png" alt="" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h1 className="is-size-6 has-text-weight-bold">
                        Business
                      </h1>
                      <p className="is-size-6 has-text-weight-normal">
                        Learn how to overcome challenges creating medical apps
                        with the help of APIs and how they can benefit both
                        healthcare providers and software developers.
                      </p>
                    </div>
                  </div>
                </Link>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;