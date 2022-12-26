import React from 'react';

import { Formik } from "formik";
import { FormattedMessage } from "react-intl";
import JetImage from "../../../imgs/flyjet.jpg"
import projectLocalData from '../../Data';

function FlyJetProcess() {
    return (
        <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
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
                  <FormattedMessage id="flyjet" />
                </h3>
              <div>
                <label>
                  <FormattedMessage id="gameinprogress" />
                </label>
              </div>
              <div>
                <label>
                  You deposited: {projectLocalData.depositedTokens} tokens
                </label>
              </div>
              <div>
                <label>
                  Hashed result: {projectLocalData.hashedResult}
                </label>
              </div>
              <div class="alert alert-success" role="alert">
                Current multiplier: x1.12
              </div>
              <div>
              <img src={JetImage} style={{backgroundSize: 'cover', height: "100px"}}></img>
              </div>
              

                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-warning">
                    <FormattedMessage id="finishgame" />
                  </button>
                </div>
              </div>
              
            </form>
          </div>
        )}
      </Formik>
    );
  }
  
  export default FlyJetProcess;
  
