import { Field, Form, Formik } from "formik";
import Link from "next/link";
import React from "react";
import axios from "axios";

const index = () => {
  return (
    <>
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
            axios.post("/api/users/register", values).then((res) => {
              console.log("api response", res);
            });
            console.log("POSTED");
          }}
        >
          {({ isSubmitting }) => (
            <Form className="w-25 mx-auto mt-5">
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
                  REGISTER
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <div className=" d-flex justify-content-center mx-auto">
        {/* <h3 className="">Welcome to Homepage !!!</h3> */}

        <Link href="/login">
          <button className="btn btn-primary mt-5 ">LOGIN</button>
        </Link>
      </div>
    </>
  );
};

export default index;
