import React from 'react';

import OurProcess from './OurProcess';
import Heading from './elements/Heading';

const data = [
  {
    text: 'Requirement Analysis',
    arrow: ' ',
    icon: 'far fa-circle',
  },
  {
    text: 'Project Allocation',
    arrow: ' ',
    icon: 'fas fa-palette',
  },
  {
    text: 'Team match-up',
    icon: 'fas fa-code',
  },
  {
    text: 'Project implementation',
    arrow: ' ',
    icon: 'fas fa-code',
  },
  {
    text: 'Effect analysis',
    arrow: ' ',
    icon: 'fas fa-rocket',
  },
  {
    text: 'Long-term relationship !',
    icon: 'fas fa-code',
  },
];

const Steps = () => {
  return (
    <section className="section">
      <div className="container">
        <Heading title="Our Process" />
        <div className="columns is-multiline">
          {data.map(item => (
            <OurProcess
              sideImage={item.arrow}
              icon={item.icon}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
