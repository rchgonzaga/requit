import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import { Formik, Field, Form, FormikConsumer, ErrorMessage  } from 'formik';
import * as Yup from 'yup';

export class GenericForm extends Component {
  static propTypes = {
    sales: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const SignUpSchema = Yup.object().shape({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      firstName: Yup.string()
        .min(2, 'Must be longer than 2 characters')
        .max(20, 'Nice try, nobody has a first name that long')
        .required('Required'),
      lastName: Yup.string()
        .min(2, 'Must be longer than 2 characters')
        .max(20, 'Nice try, nobody has a last name that long')
        .required('Required'),
    });

    const Debug = () => (
      <div
        style={{
          margin: '3rem 0',
          borderRadius: 4,
          background: '#f6f8fa',

          boxShadow: '0 0 1px  #eee inset',
        }}
      >
        <div
          style={{
            textTransform: 'uppercase',
            fontSize: 11,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            fontWeight: 500,
            padding: '.5rem',
            background: '#555',
            color: '#fff',
            letterSpacing: '1px',
          }}
        >
          Formik State
        </div>
        <FormikConsumer>
          {({ validationSchema, validate, onSubmit, ...rest }) => (
            <pre
              style={{
                fontSize: '.65rem',
                padding: '.25rem .5rem',
                overflowX: 'scroll',
              }}
            >
              {JSON.stringify(rest, null, 2)}
            </pre>
          )}
        </FormikConsumer>
      </div>
    );

    return (
      <div>
        <h1>Sign up</h1>
        <Formik
          initialValues={{
            email: '',
            firstName: '',
            lastName: '',
          }}
          validationSchema={SignUpSchema}
          onSubmit={values => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
            }, 500);
          }}
          render={({ errors, touched }) => (
            <Form>
              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" placeholder="Jane" type="text" />

              <ErrorMessage name="firstName" component="div" className="field-error" />

              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" placeholder="Doe" type="text" />
              <ErrorMessage name="lastName" component="div" className="field-error" />

              <label htmlFor="email">Email</label>
              <Field name="email" placeholder="jane@acme.com" type="email" />
              <ErrorMessage name="email" component="div" className="field-error" />

              <button type="submit">Submit</button>
              <Debug />
            </Form>
          )}
        />
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    sales: state.sales,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GenericForm);
