/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.section`
  padding: 2rem 1.5rem;
  font-family: ${props => props.theme.secondaryFontFamily};
  .navbar {
    background-color: transparent;
  }
  .navbar-brand {
    margin-right: 20px;
    .navbar-item img {
      max-height: 3rem;
      @media screen and (max-width: 600px) {
        max-height: 1.75rem;
      }
    }
  }
  .navbar-menu {
    @media screen and (max-width: 600px) {
      position: absolute;
      width: 100%;
      transition: 0.6s;
    }
  }
  .navbar-item {
    font-family: ${props => props.theme.secondaryFontFamily} !important;
    letter-spacing: 1px;
    font-weight: 400;
    height: 3rem;
    color: ${props => props.theme.darkShades};
    :hover {
      color: ${props => props.theme.darkShades} !important;
      background: transparent;
    }
    :focus {
      background: transparent;
      color: ${props => props.theme.darkShades} !important;
    }
  }
  .navbar-burger {
    background-color: ${props => props.theme.mainBrandColor};
    color: #fff;
    opacity: 0.6;
    border-radius: 4px;
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleMobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;

    return (
      <Section className="section">
        <div className="container">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img src="/images/zeiq-logo.png" alt="site logo" />
              </Link>
              <a
                href="#"
                role="button"
                className={
                  isActive
                    ? 'navbar-burger burger mobile is-active'
                    : 'navbar-burger burger mobile'
                }
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={() => this.handleMobileMenu()}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
              <div className="navbar-end">
                <Link to="/" className="navbar-item">
                  Work
                </Link>
                <Link to="/services" className="navbar-item">
                  Services
                </Link>
                <Link to="/about" className="navbar-item">
                  About
                </Link>
                <Link to="/contact" className="navbar-item">
                  News
                </Link>
                <Link to="/contact" className="navbar-item">
                  Contact
                </Link>
                <Link to="/" className="navbar-item">
                  Jobs
                </Link>
                <Link to="/" className="navbar-item">
                  Open Source
                </Link>
                <div className="buttons">
                  <Link to="/contact" className="button is-primary">
                    <strong>Contact Us</strong>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </Section>
    );
  }
}
