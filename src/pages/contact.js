import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import config from '../utils/config';
import ContactForm from '../components/form/ContactForm';

const Container = styled.section`
  margin-top: -1px;
`;

const Content = styled.div`
  .title {
    margin-bottom: 7.6px !important;
    line-height: 7.6px !important;
  }
`;

const ContactPage = () => {
  return (
    <Layout>
      <Seo
        title="Contact Us"
        description={`Contact us ${config.siteName}`}
        url={`${config.siteUrl}/Contact`}
      />
      <Container className="section">
        <div className="container">
          <div className="columns is-mobile is-centered">
            <div className="column is-four-fifths">
              <div className="columns">
                <div className="column is-6">
                  <section className="hero">
                    <div className="hero-body">
                      <h1 className="title is-2 has-text-black">
                        Get in touch
                      </h1>
                      <p className="subtitle is-6 has-text-grey-light">
                        When you enter into any new area of science you almost
                        always find yourself.
                      </p>
                      <ContactForm />
                    </div>
                  </section>
                </div>
                <Content className="column">
                  <section className="hero">
                    <div className="hero-body">
                      <h2 className="title is-6 has-text-black">EMAIL</h2>
                      <a>hi@zeiq.co</a>
                    </div>
                  </section>
                </Content>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default ContactPage;
