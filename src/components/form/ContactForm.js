/* eslint jsx-a11y/label-has-associated-control: "off" */
/* eslint jsx-a11y/label-has-for: "off" */
import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { withFormik } from 'formik';
import styled from 'styled-components';
import InputGroup from '../elements/InputGroup';

const InputContainer = styled.form`
  .field:not(:last-child) {
    margin-bottom: 10px;
  }
  .input,
  .textarea {
    background-color: ${props => props.theme.backgroundColorLight};
    box-shadow: none !important;
    border-radius: 8px !important;
    ::-webkit-input-placeholder {
      color: ${props => props.theme.darkAccent}!important;
    }
    background: #f3f3f3;

    :active,
    :focus {
      color: ${props => props.theme.darkAccent} !important;
    }
  }
  .button {
    margin-top: 10px;
  }
`;

const ContactForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <InputContainer onSubmit={handleSubmit}>
      <InputGroup
        name="name"
        className="is-medium"
        placeholder="Name"
        type="text"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        errors={errors.name && touched.name ? errors.name : undefined}
      />
      <InputGroup
        name="email"
        className="is-medium"
        placeholder="E-mail"
        type="text"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        errors={errors.email && touched.email ? errors.email : undefined}
      />
      <div className="field">
        <div className="control">
          <textarea
            className="textarea is-medium"
            name="message"
            placeholder="Message"
            type="text"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </div>
      <button
        type="submit"
        className="button is-primary is-medium has-text-weight-bold"
        onClick={() => alert('working on it')}
      >
        <span>Submit</span>
        <span className="icon">
          <i className="fas fa-user-tie" />
        </span>
      </button>
    </InputContainer>
  );
};

ContactForm.propTypes = {
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  // isSubmitting: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    name: '',
    message: '',
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    name: Yup.string().required('Name is required!'),
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    // console.log('handle submit', values, props);
    props.onSubmit(values).finally(() => {
      setSubmitting(false);
    });
  },

  displayName: 'ContactForm',
})(ContactForm);
