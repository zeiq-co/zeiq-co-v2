import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 0.5rem;

  img {
    border-radius: 0.5rem 0.5rem 0 0;
  }
`;

const Blogs = ({ data }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline is-variable is-6">
          {data.map(item => (
            <div className="column is-4 ">
              <Card className="card">
                <Link to={`blog/${item.node.slug.current}`}>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={item.node.image.asset.url} alt="" />
                    </figure>
                  </div>

                  <div className="card-content">
                    <div>
                      <h6 className="subtitle is-spaced is-7 has-text-info">
                        {item.node.date}
                      </h6>
                    </div>
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
