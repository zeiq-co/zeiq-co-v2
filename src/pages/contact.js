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
  margin-bottom: 37px !important;
`;

const H2 = styled.h2`
  margin-bottom: 7.6px !important;
`;
const MailWrapper = styled.div`
  margin-bottom: 37px !important;
  @media only screen and (min-width: 768px) {
    p {
      padding: 0px 8rem 0px 0px;
    }
  }
`;

const Country = styled.div`
  margin-bottom: 36px;
  img {
    margin-right: 14px;
  }
  span {
    width: 3rem !important;
  }
`;

const Socials = styled.div`
  span {
    margin-right: 10px;
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
                      <MailWrapper>
                        <H2 className="is-size-7 has-text-weight-bold has-text-black is-uppercase">
                          EMAIL
                        </H2>
                        <Mail href="mailto:hi@zeiq.co">hi@zeiq.co</Mail>
                      </MailWrapper>
                      <H2 className="is-size-7 has-text-weight-bold has-text-black is-uppercase">
                        Phone
                      </H2>
                      <Country>
                        <div className="main">
                          <a href="tel:+91-8847411956">
                            <span className="icon">
                              <img src="/images/india.png" alt="" />
                            </span>
                            +91-8847411956
                          </a>
                        </div>
                        <div className="main">
                          <a href="tel:01582-888653">
                            <span className="icon">
                              <img src="/images/uk.png" alt="" />
                            </span>
                            01582-888653
                          </a>
                        </div>
                      </Country>
                      <MailWrapper>
                        <H2 className="is-size-7 has-text-weight-bold has-text-black is-uppercase">
                          Address
                        </H2>
                        <p>Guru Amadas Nagar, Salempur Road, Jalandhar</p>
                        <p>38 Golf Road, Swineshead Bridge, England </p>
                      </MailWrapper>
                      <Socials>
                        <H2 className="is-size-7 has-text-weight-bold has-text-black is-uppercase">
                          socials
                        </H2>
                        <a href="">
                          <span className="icon has-text-grey-light is-size-4">
                            <i className="fab fa-facebook-square" />
                          </span>
                        </a>
                        <a href="">
                          <span className="icon has-text-grey-light is-size-4">
                            <i className="fab fa-google-plus-g" />
                          </span>
                        </a>
                        <a href="">
                          <span className="icon has-text-grey-light is-size-4">
                            <i className="fab fa-twitter" />
                          </span>
                        </a>
                        <a href="">
                          <span className="icon has-text-grey-light is-size-4">
                            <i className="fab fa-instagram" />
                          </span>
                        </a>
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
