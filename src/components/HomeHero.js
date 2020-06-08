import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Section = styled.section`
  padding-bottom: 0rem !important;
  img {
    margin: 0px auto;
  }
`;

const Button = styled.button`
  margin-top: 15px;
  margin-right: 18px;
`;

const StoreContainer = styled.div`
  margin-top: 36px;
  img {
    margin-right: 10px;
    width: auto;
    height: 46px;
  }
`;

const HomeHero = ({
  title,
  subtitle,
  storeIcons,
  image,
  firstButtonText,
  secondButtonText,
}) => (
  <Section className="section">
    <div className="container">
      <div className="columns is-vcentered">
        <div className="column is-6-desktop has-text-centered-touch">
          <h1 className="title is-spaced is-1">{title}</h1>
          <p className="subtitle is-6 has-text-weight-normal">{subtitle}</p>
          {firstButtonText && (
            <Link to="/">
              <Button className="button is-primary is-medium" type="button">
                {firstButtonText}
              </Button>
            </Link>
          )}
          {secondButtonText && (
            <Link to="/">
              <Button className="button is-primary is-medium" type="button">
                {secondButtonText}
              </Button>
            </Link>
          )}

          {storeIcons && (
            <StoreContainer>
              <a href="/">
                <img src="/images/store/playstore.png" alt="Zeiq play store" />
              </a>
              <a href="/">
                <img src="/images/store/appstore.png" alt="Zeiq play store" />
              </a>
            </StoreContainer>
          )}
        </div>
        <div className="column is-2" />
        <div className="column">
          <figure className="image">
            <img src={image} alt="placeholder" />
          </figure>
        </div>
      </div>
    </div>
  </Section>
);

export default HomeHero;
