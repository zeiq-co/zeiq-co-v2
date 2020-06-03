import React from 'react';
import styled from 'styled-components';
import Heading from './elements/Heading';
import { theme } from '../utils/theme';

const Container = styled.div`
  input,
  select {
    color: ${theme.darkAccent}!important;
    background: #f3f3f3;
    box-shadow: none;
    ::-webkit-input-placeholder {
      color: ${theme.darkAccent}!important;
    }
  }
  .button {
    justify-content: flex-start;
  }
  .field:not(:last-child) {
    margin-bottom: 20px;
  }
  input,
  button,
  select {
    border-radius: 8px !important;
  }
`;

const ButtonIcon = styled.div`
  margin-left: 75% !important;
`;
const ContactForm = () => {
  return (
    <Container className="section">
      <Heading
        title="Ready to start a Project"
        subtitle="To start, use form below to tell us about you and the project"
      />
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-5">
            <div className="field">
              <p className="control">
                <input
                  className="input is-medium"
                  type="text"
                  placeholder="Name"
                />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <input
                  className="input is-medium"
                  type="email"
                  placeholder="Email"
                />
              </p>
            </div>

            <div className="field">
              <p className="control">
                <span className="select is-fullwidth is-medium">
                  <select>
                    <option selected>Requirement </option>
                    <option>Requirement </option>
                    <option>With options</option>
                  </select>
                </span>
              </p>
            </div>
            <button
              className="button is-medium is-primary is-fullwidth has-text-weight-medium"
              type="button"
            >
              <strong>Submit</strong>
              <ButtonIcon className="icon">
                <i className="fas fa-user-tie" />
              </ButtonIcon>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ContactForm;
