import React from 'react';

import OurProcess from './OurProcess';
import Heading from './elements/Heading';

const Steps = ({ data }) => {
  return (
    <section className="section">
      <div className="container">
        <Heading title="Our Process" />
        <div className="columns is-multiline">
          {data.map(item => (
            <OurProcess
              sideImage={item.node.arrowIcon}
              icon={item.node.svgIcon.asset.fluid.src}
              text={item.node.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
