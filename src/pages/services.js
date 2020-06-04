import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Heading from '../components/elements/Heading';
import ServicesType from '../components/ServicesType';
import RegisterForm from '../components/form/RegisterForm';

const Services = () => {
  return (
    <Layout>
      <Seo title="Services" description="Our Services" />
      <div className="section">
        <div className="container">
          <Heading
            columnSize
            title="Web Development Company"
            subtitle="A successful offshore software application development company since 1997, providing a full range of website and mobile app development , and other IT services and solutions globally."
          />
          <ServicesType />
          <ServicesType flex />
          <ServicesType />
          <ServicesType flex />
          <ServicesType />
          <ServicesType flex />
        </div>
      </div>
      <RegisterForm />
    </Layout>
  );
};
export default Services;
