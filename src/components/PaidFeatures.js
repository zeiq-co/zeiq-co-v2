import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  margin-top: 1.2rem;
  .icon {
    border-radius: 3rem;
    background: #f3f3f3;
  }
  p {
    line-height: 26px !important;
  }
`;
const data = [
  {
    text: 'An Ugly Myspace Profile Will Sure Ruin Your Reputation',
  },
  {
    text: '5 Reasons To Choose A Notebook Over A Computer Desktop',
  },
  {
    text: 'Popular Uses Of The Internet',
  },
  {
    text: 'How To Meet That Special Someone',
  },
  {
    text:
      'Facts Why Inkjet Printing Is Very Appealing Compared To Ordinary Printing',
  },
];
const PaidFeatures = () => (
  <section className="section is-medium">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-10">
          <h4 className="title is-3 has-text-centered has-text-success">
            Features
          </h4>
          <section className="hero">
            <div className="hero-body">
              <div className="columns is-multiline">
                {data.map(item => (
                  <Container className="column is-6">
                    <div className="columns is-mobile">
                      <div className="column is-1 ">
                        <span className="icon is-size-5">
                          <i className="far fa-star" />
                        </span>
                      </div>
                      <div className="column">
                        <p className="title is-6 has-text-black">{item.text}</p>
                      </div>
                    </div>
                  </Container>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
);

export default PaidFeatures;
