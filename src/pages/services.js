import React from 'react';

import Layout from '../components/Layout';
import ServicesType from '../components/ServicesType';

const Services = () => {
  return (
    <Layout>
      <div className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-6">
              <h2 className="title is-2 is-spaced  has-text-centered">
                Web and Mobile Software Development Services
              </h2>
              <h2 className="subtitle is-6 has-text-centered">
                A successful offshore software application development company
                since 1997, providing a full range of website and mobile app
                development , and other IT services and solutions globally.
              </h2>
            </div>
          </div>
          <ServicesType />
          <ServicesType flex />
          <ServicesType />
          <ServicesType flex />
          <ServicesType />
          <ServicesType flex />
        </div>
      </div>
    </Layout>
  );
};
export default Services;
