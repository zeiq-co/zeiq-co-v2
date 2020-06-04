import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import config from '../utils/config';
import ContactForm from '../components/form/ContactForm';

const Container = styled.section`
  margin-top: -1px;
`;

const Mail = styled.a`
  color: ${props => props.theme.mainBrandColor} !important;
`;

const H2 = styled.h2`
  margin-bottom: 7.6px !important;
  line-height: 7.6px !important;
`;
const H1 = styled.h1`
  margin-top: 30px !important;
  line-height: 7.6px !important;
`;

const Country = styled.div`
  img {
    margin-right: 14px;
  }
  span {
    width: 3rem !important;
  }
`;

const Socials = styled.div``;

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
              <div className="columns is-vcentered">
                <div className="column is-6">
                  <section className="hero">
                    <div className="hero-body">
                      <h1 className="title is-2 has-text-black">
                        Get in touch
                      </h1>
                      <p className="subtitle is-6">
                        When you enter into any new area of science you almost
                        always find yourself.
                      </p>
                      <ContactForm />
                    </div>
                  </section>
                </div>
                <div className="column">
                  <section className="hero">
                    <div className="hero-body">
                      <H2 className="title is-7 has-text-black">EMAIL</H2>
                      <Mail href="mailto:hi@zeiq.co">hi@zeiq.co</Mail>
                      <H1 className="title is-7 has-text-black is-uppercase">
                        Phone
                      </H1>
                      <Country>
                        <a href="tel:+91-8847411956">
                          <span className="icon">
                            <img src="/images/india.png" alt="" />
                          </span>
                          +91-8847411956
                        </a>
                      </Country>
                      <Country>
                        <a href="tel:01582-888653">
                          <span className="icon">
                            <img src="/images/uk.png" alt="" />
                          </span>
                          01582-888653
                        </a>
                      </Country>
                      <h1 className="title is-7 has-text-black">Address</h1>
                      <p>Guru Amadas Nagar, Salempur Road, Jalandhar</p>
                      <p>38 Golf Road, Swineshead Bridge, England </p>
                      <Socials>
                        <h1 className="title is-7 has-text-black is-uppercase">
                          socials
                        </h1>
                        <span className="icon has-text-light">
                          <i className="fab fa-facebook-square" />
                        </span>
                        <span className="icon has-text-light">
                          <i className="fab fa-google-plus-g" />
                        </span>
                        <span className="icon has-text-light">
                          <i className="fab fa-twitter" />
                        </span>
                        <span className="icon has-text-light">
                          <i className="fab fa-instagram" />
                        </span>
                      </Socials>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default ContactPage;
