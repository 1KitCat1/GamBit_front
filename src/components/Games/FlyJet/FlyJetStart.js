import React from 'react';

import { Formik } from "formik";
import { FormattedMessage } from "react-intl";

function FlyJetStart() {
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

                <div className="form-group mt-3">
                  <label>
                    <FormattedMessage id="bettokens" />
                  </label>
                  <input
                    type="tokensamount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tokensInput}
                    className="form-control mt-1"
                    placeholder="Enter amount of tokens"
                    id="tokensamount"
                  />
                </div>
                <div className="form-group mt-3"> 
                <label>
                    <FormattedMessage id="selectwallet" />
                </label>                 
                <select
                  name="color"
                  value={values.walletAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{ display: 'block' }}
                  className="form-control mt-1"
                >
                  <option value="Select a wallet" label="Select a wallet" />
                  
                  <option value="A6a4511E25C7F2A29Be5ccf3978A0f3E238fd2C1" label="A6a45...fd2C1" />
                  <option value="199D5ED7F45F4eE35960cF22EAde2076e95B253F" label="199D5...B253F" />
                </select>
                {errors.color &&
                  touched.color &&
                  <div className="input-feedback">
                    {errors.color}
                  </div>
                }
                
              <label>
                <FormattedMessage id="walletbalance" />
                10200
              </label>

                </div>
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-warning">
                    <FormattedMessage id="startgame" />
                  </button>
                </div>
              </div>
              
            </form>
          </div>
        )}
      </Formik>
    );
  }
  
  export default FlyJetStart;
  
