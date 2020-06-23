import React from 'react';
import styled from 'styled-components';
import Button from './elements/Button';

const Container = styled.section`
  .hero {
    border-radius: 8px;
    border: 1px solid ${props => props.theme.mainBrandColor};
  }
  p {
    text-align: justify;
  }
`;

const Hire = ({ data }) => (
  <Container className="section">
    <div className="container">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns  is-centered">
              <div className="column is-11">
                <div className="columns">
                  <div className="column is-5 ">
                    <h1 className="title is-spaced is-1">{data.title}</h1>
                  </div>
                  <div className="column">
                    <p className="subtitle is-6 has-text-weight-normal">
                      {data.description}
                    </p>
                    <Button to="/contact" text="Contact Us" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Container>
);

export default Hire;
