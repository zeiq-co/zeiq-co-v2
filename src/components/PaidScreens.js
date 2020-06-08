import React from 'react';
import styled from 'styled-components';
import Heading from './elements/Heading';
import Features from './elements/Features';

const features = [
  {
    title: 'Asteroids',
    points: ['Long Feature One', 'Feature Two', 'Long Feature Three'],
  },
  {
    title: 'The Night Sky',
    points: ['Long Feature One', 'Feature Two', 'Long Feature Three'],
  },
  {
    title: 'Telescopes 101',
    points: ['Long Feature One', 'Feature Two', 'Long Feature Three'],
  },
  {
    title: 'Moon Fever',
    points: ['Long Feature One', 'Feature Two', 'Long Feature Three'],
  },
];

const Section = styled.div`
  h1 {
    margin-bottom: 8px !important;
    line-height: 40px !important;
  }
`;
const PaidScreens = () => {
  return (
    <Section className="section is-medium">
      <div className="container">
        <Heading
          title="GROCERY ORDERING SYSTEM SCREENS"
          subtitle="Fully customizable, functional, ready-to-use by the end-users with easily configurable Online Grocery Ordering Mobile Application/Software built on the latest leading technology Flutter. You Should check out with app features."
        />

        <div className="columns is-multiline">
          {features.map(item => (
            <div className="column is-3">
              <h1 className="title is-size-6">{item.title}</h1>
              {item.points.map(text => (
                <Features text={text} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default PaidScreens;
