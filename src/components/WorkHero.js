import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  h1 {
    margin-bottom: 35.6px;
  }
`;

const Section = styled.div`
  @media only screen and (min-width: 1023px) {
    padding: 3rem 5rem !important;
  }
`;

const WorkHero = () => {
  return (
    <section className="columns is-vcentered">
      <div className="column is-6">
        <figure className="image is-3by2">
          <img src="/images/work/worked.png" alt="work" />
        </figure>
      </div>
      <Section className="column is-6 section">
        <Header>
          <h1 className="title is-spaced is-1">
            Projects that speak about our versatility
          </h1>
          <p className="">
            We’re passionate about what we do! Our portfolio is a sheer
            presentation about 20+ years of industry experience, collaboration,
            expertise, and quality deliverables.
          </p>
        </Header>
      </Section>
    </section>
  );
};

export default WorkHero;
