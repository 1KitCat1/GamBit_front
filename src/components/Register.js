import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { FormattedMessage } from "react-intl";

const schema = Yup.object().shape({
  email: Yup.string()
    .min(3, "First name must be mininum 3 characters")
    .max(15, "First name must be maximum 15 characters")
    .required("First name is a required field"),
  username: Yup.string()
    .min(3, "Mininum 3 characters")
    .max(15, "Maximum 15 characters")
    .required("Username is a required field"),
  password: Yup.string()
    .required("Password is a required field")
    .min(5, "Password must be at least 5 characters")
    .max(21, "Maximum 21 characters"),
});

function Register() {
  const [message, setMessage] = useState("");

  const handleRegisterSubmit = async (values) => {
    console.log("Values: ", values);
    setMessage("");
    values.name = values.username;
    try {
      const response = await axios.post(
          "http://localhost:8080/testPost",
        {}
      );
      setMessage("Success! Go to the login page to sign in.");
      console.log(response.data);
    } catch (err) {
      setMessage("Bad credentials");

      console.log("Error: ", err);
    }
  };

  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{
          email: "",
          username: "",
          password: "",
        }}
        onSubmit={(values) => {
          handleRegisterSubmit(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="Auth-form-container">
            <form className="Auth-form" noValidate onSubmit={handleSubmit}>
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">
                  <FormattedMessage id="signup" />
                </h3>
                {message ? (
                  <>
                    <label>{message}</label>
                    <br />
                    <br />
                  </>
                ) : (
                  <span></span>
                )}
                <label>
                  <FormattedMessage id="email" />
                </label>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                  className="form-group mt-3"
                >
                  <input
                    type="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="form-control mt-1"
                    placeholder="Enter email"
                    id="email"
                  />
                </div>
                {errors.firstName && touched.firstName && errors.firstName ? (
                  <label>
                    {errors.firstName && touched.firstName && errors.firstName}
                  </label>
                ) : (
                  <span></span>
                )}
                {errors.email &&
                touched.email ? (
                  <br />
                ) : (
                  <></>
                )}
                {errors.email && touched.email && errors.email ? (
                  <>
                    <label>
                      {errors.email && touched.email}
                    </label>
                  </>
                ) : (
                  <span></span>
                )}
                <div className="form-group mt-3">
                  <label>
                    <FormattedMessage id="username" />
                  </label>
                  <input
                    type="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    className="form-control mt-1"
                    placeholder="Enter username"
                    id="username"
                  />
                  {errors.username && touched.username && errors.username ? (
                    <label>
                      {errors.username && touched.username && errors.username}
                    </label>
                  ) : (
                    <span></span>
                  )}
                </div>
                <div className="form-group mt-3">
                  <label>
                    <FormattedMessage id="password" />
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className="form-control mt-1"
                    placeholder="Enter password"
                  />
                  {errors.password && touched.password && errors.password ? (
                    <label>
                      {errors.password && touched.password && errors.password}
                    </label>
                  ) : (
                    <span></span>
                  )}
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-warning">
                    <FormattedMessage id="submit" />
                  </button>
                </div>
                <p className="forgot-password text-right mt-2">
                  <FormattedMessage id="alreadyhaveaccount" />{" "}
                  <Link to="/signin">
                    <FormattedMessage id="signinhere" />
                  </Link>
                </p>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </>
  );
}

export default Register;
