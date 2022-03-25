import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { onForgotPassword } from "../../../store/homeAction";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const [alertMessage, setAlertMessage] = useState();
  const getForgotPassword = useSelector(
    (state) => state.home.getForgotPassword
  );

  setTimeout(() => {
    if (getForgotPassword && getForgotPassword.status === true) {
      setAlertMessage(getForgotPassword && getForgotPassword.message);
      localStorage.setItem(
        "landPassword_token",
        getForgotPassword && getForgotPassword.token
      );
    } else {
      setAlertMessage(getForgotPassword && getForgotPassword.message);
    }
  }, 100);

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const forgotPasword = (e) => {
    e.preventDefault();

    const data = {
      email: values.email,
    };

    dispatch(onForgotPassword(data));
  };

  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <div className="container-fluid formsbg">
        <div className="container forms-container">
          <div className="row">
            <div className="col-sm-12 col-md-6 Welcomebg">
              <h1 className="welcomewrap">Welcome To...</h1>
              <img
                src="./images/welcomelogo.png"
                alt="#"
                className="img-fluid laptop-img"
              />
              <p className="welcomeline">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
            </div>
            <div className="col-sm-12 col-md-6 Forgetform-bg">
              <form onSubmit={forgotPasword} className="singupform-wrap">
                <h1 className="form-hading"> Forgot your password ?</h1>
                <p className="forgot-subhading">Enter your login Email</p>
                <div>
                  <div className="input_field mb-4">
                    <input
                      type="email"
                      className="pwd-input"
                      placeholder="Email or Username"
                      name="email"
                      value={values.email}
                      onChange={onInputChange}
                      required
                    />
                  </div>
                  <span
                    style={{
                      color: "green",
                      fontWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    {alertMessage}
                  </span>
                  <button type="submit" className="forget-submit-btn mt-3">
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
