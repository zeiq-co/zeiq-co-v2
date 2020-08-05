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
  img {
    max-height: 3rem;
    margin-bottom: 2.5rem;
    @media screen and (max-width: 600px) {
      max-height: 1.75rem;
    }
  }
  a {
    color: ${props => props.theme.secondaryTextColor} !important;
  }
`;
const LinkStyled = styled(Link)``;
const Icon = styled.i`
  color: ${props => props.iconColor}!important;
`;

const Footer = () => (
  <Section className="section">
    <div className="container">
      <Link to="/">
        <img src="/images/zeiq-logo.png" alt="site logo" />
      </Link>
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
          </ul>
        </div>
        <div className="column is-hidden-mobile" />
        <div className="column">
          <ul>
            <li>
              <a href={config.fbUserId} target="_blank">
                <span className="bd-footer-link-icon has-text-star">
                  <Icon
                    iconColor="#3b5998"
                    className="fab fa-facebook-square is-size-4"
                  />
                  <strong>Facebook</strong>
                </span>
              </a>
            </li>
            <li>
              <a href={config.Github} target="_blank">
                <span className="bd-footer-link-icon has-text-star">
                  <Icon
                    iconColor="#000000"
                    className="fab fa-github is-size-4 has-text-grey-light"
                  />
                  <strong>Github</strong>
                </span>
              </a>
            </li>
            <li>
              <a href={config.instagram} target="_blank">
                <span className="bd-footer-link-icon has-text-star">
                  <Icon
                    iconColor="#C536A4"
                    className="fab fa-instagram is-size-4 has-text-grey-light"
                  />
                  <strong>Instagram</strong>
                </span>
              </a>
            </li>
            <li>
              <a href={config.twitter} target="_blank">
                <span className="bd-footer-link-icon has-text-star">
                  <Icon
                    iconColor="#1da1f2"
                    className="fab fa-twitter is-size-4 has-text-grey-light"
                  />
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
