import { Field, Form, Formik } from "formik";
import React from "react";
import axios from "axios";

const AddUser = () => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
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
          console.log("form values", values);
          axios.post("http://localhost:8000/add-user", values)
          .then((res) => {
            console.log("api response", res);
          });
          console.log("POSTED");
        }}
      >
        {({ isSubmitting }) => (
          <Form className="w-50 mx-auto mt-5">
            <h3>ADD NEW USER</h3>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <Field
                type="string"
                className="form-control"
                id="name"
                name="name"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Address
              </label>
              <Field
                type="string"
                className="form-control"
                id="address"
                name="address"
                aria-describedby="addressHelp"
              />
            </div>
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
              <label htmlFor="name" className="form-label">
                Mobile Number
              </label>
              <Field
                type="string"
                className="form-control"
                id="mobile"
                name="mobile"
                aria-describedby="mobileHelp"
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Add New User
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddUser;
