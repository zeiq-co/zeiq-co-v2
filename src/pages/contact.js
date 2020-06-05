import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import config from '../utils/config';
import ContactUs from '../components/ContactUs';

const ContactPage = () => {
  return (
    <Layout>
      <Seo
        title="Contact Us"
        description={`Contact us ${config.siteName}`}
        url={`${config.siteUrl}/Contact`}
      />
      <ContactUs />
    </Layout>
  );
};

export default ContactPage;
