// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';

const login = () => (
  <div>
    <Formik
      initialValues={{ email: "", password: "" }}
      //   validate={
      //     values => {
      //     const errors = {};
      //     if (!values.email) {
      //       errors.email = 'Required';
      //     } else if (
      //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //     ) {
      //       errors.email = 'Invalid email address';
      //     }
      //     return errors;
      //   }
      // }
      onSubmit={(values, { setSubmitting }) => {
        console.log("login form values", values);
        axios.post("/api/users/login",values)
        .then((res)=>{
          console.log("login api response",res)
        })
      }}
    >
      {({ isSubmitting }) => (
        // <Form>
        //   <Field type="email" name="email" />
        //   <ErrorMessage name="email" component="div" />
        //   <Field type="password" name="password" />
        //   <ErrorMessage name="password" component="div" />
        //   <button type="submit" disabled={isSubmitting}>
        //     Submit
        //   </button>
        // </Form>
        <Form className="w-25 mx-auto mt-5">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <Field
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <Field
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
          </div>

        <div className="text-center">
        <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default login;
