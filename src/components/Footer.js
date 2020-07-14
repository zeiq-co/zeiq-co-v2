import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import config from '../utils/config';

const Section = styled.section`
  li,
  p {
    margin-bottom: 1rem;
  }
  strong {
    margin-left: 0.5em !important;
  }
`;
const LinkStyled = styled(Link)``;

const Footer = () => (
  <Section className="section">
    <div className="container">
      <div className="columns has-text-centered-mobile">
        <div className="column">
          <p className="is-uppercase is-size-6 has-text-weight-semibold">
            ZEIQ
          </p>
          <ul>
            <li>
              <LinkStyled to="/">About Us</LinkStyled>
            </li>
            <li>
              <LinkStyled to="/">News & Updates</LinkStyled>
            </li>
            <li>
              <LinkStyled to="/">Support</LinkStyled>
            </li>
            <li>
              <LinkStyled to="/">Fourth Link</LinkStyled>
            </li>
          </ul>
        </div>
        <div className="column">
          <p className="is-uppercase is-size-6 has-text-weight-semibold">
            Our Information
          </p>
          <ul>
            <li>
              <LinkStyled to="/">Faq</LinkStyled>
            </li>
            <li>
              <LinkStyled to="/">Terms and Conditions</LinkStyled>
            </li>
            <li>
              <LinkStyled to="/">Privacy Policy</LinkStyled>
            </li>
            <li>
              <LinkStyled to="/">Fourth Link</LinkStyled>
            </li>
            <li>
              <LinkStyled to="/">Fifth Link</LinkStyled>
            </li>
          </ul>
        </div>
        <div className="column">
          <p className="is-uppercase is-size-6 has-text-weight-semibold">
            Reach us
          </p>
          <ul>
            <li>
              <LinkStyled to="/">Career</LinkStyled>
            </li>
            <li>
              <LinkStyled to="/contact">Contact Us</LinkStyled>
            </li>
            <li>
              <LinkStyled to="/app-project/">Third Link</LinkStyled>
            </li>
            <li>
              <LinkStyled to="/paid-project/">Fourth Link</LinkStyled>
            </li>
          </ul>
        </div>
        <div className="column is-hidden-mobile" />
        <div className="column">
          <ul>
            <li>
              <a href={config.fbUserId} target="_blank">
                <span className="bd-footer-link-icon has-text-star">
                  <i className="fab fa-facebook-square" />
                  <strong>Facebook</strong>
                </span>
              </a>
            </li>
            <li>
              <a href={config.Github} target="_blank">
                <span className="bd-footer-link-icon has-text-star">
                  <i className="fab fa-github" />
                  <strong>Github</strong>
                </span>
              </a>
            </li>
            <li>
              <a href={config.instagram} target="_blank">
                <span className="bd-footer-link-icon has-text-star">
                  <i className="fab fa-instagram" />
                  <strong>Instagram</strong>
                </span>
              </a>
            </li>
            <li>
              <a href={config.twitter} target="_blank">
                <span className="bd-footer-link-icon has-text-star">
                  <i className="fab fa-twitter" />
                  <strong>Twitter</strong>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Section>
);

export default Footer;
