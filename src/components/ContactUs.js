import React from 'react';
import styled from 'styled-components';
import ContactForm from './form/ContactForm';

import config from '../utils/config';

const Container = styled.section`
  margin-top: -1px;
  a,
  p {
    color: ${props => props.theme.secondaryTextColor} !important;
  }
`;

const Mail = styled.a`
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
  .text {
    margin-bottom: 8px !important;
  }
`;

const Country = styled.div`
  a {
    :hover {
      color: ${props => props.theme.darkShades} !important;
    }
  }

  .icons {
    margin-bottom: 10px !important;
  }
  margin-bottom: 36px;
  img {
    margin-right: 14px;
    height: 20px;
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

const Header = styled.div`
  h1 {
    margin-bottom: 23px !important;
  }

  p {
    margin-bottom: 17px !important;
  }
`;

const Icon = styled.i`
  color: ${props => props.iconColor}!important;
`;

const ContactUs = () => (
  <Container className="section">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-four-fifths">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <section className="hero">
                <div className="hero-body">
                  <Header>
                    <h1 className="title is-2 has-text-black">Get in touch</h1>
                    <p className="subtitle is-6">
                      Tell us about your project, get a quick estimate and a
                      plan for making it live.
                    </p>
                  </Header>
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
                    <div className="main icons">
                      <a href="tel:+91-8847411956">
                        <span className="icon">
                          <img src="/images/india.png" alt="" />
                        </span>
                        01582-888653
                      </a>
                    </div>
                    <div className="main">
                      <a href="tel:01582-888653">
                        <span className="icon">
                          <img src="/images/uk.png" alt="" />
                        </span>
                        +91-8847411956
                      </a>
                    </div>
                  </Country>
                  <MailWrapper>
                    <H2 className="is-size-7 has-text-weight-bold has-text-black is-uppercase">
                      Address
                    </H2>
                    <p>38 Golf Road, Swineshead Bridge, England </p>
                    <p className="text">
                      Guru Amadas Nagar, Salempur Road, Jalandhar
                    </p>
                  </MailWrapper>
                  <Socials>
                    <H2 className="is-size-7 has-text-weight-bold has-text-black is-uppercase">
                      socials
                    </H2>
                    <a href={config.fbUserId} target="_blank">
                      <span className="icon has-text-grey-light is-size-4">
                        <Icon
                          iconColor="#3b5998"
                          className="fab fa-facebook-square"
                        />
                      </span>
                    </a>
                    <a href={config.Github} target="_blank">
                      <span className="icon has-text-grey-light is-size-4">
                        <Icon iconColor="#000000" className="fab fa-github" />
                      </span>
                    </a>
                    <a href={config.instagram} target="_blank">
                      <span className="icon has-text-grey-light is-size-4">
                        <Icon
                          iconColor="#C536A4"
                          className="fab fa-instagram"
                        />
                      </span>
                    </a>
                    <a href={config.twitter} target="_blank">
                      <span className="icon has-text-grey-light is-size-4">
                        <Icon iconColor="#3b5998" className="fab fa-twitter" />
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
);

export default ContactUs;
