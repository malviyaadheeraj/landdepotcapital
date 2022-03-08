import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { resetPassword } from "../../../store/homeAction";

const Confirmpassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [message, setMessage] = useState();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const passwordToken = localStorage.getItem("landPassword_token");
  const getResetPassword = useSelector((state) => state.home.getResetPassword);

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  setTimeout(() => {
    if (getResetPassword && getResetPassword.status === false) {
      setMessage(getResetPassword && getResetPassword.message);
    }
  }, 500);

  const onDataSubmit = (e) => {
    e.preventDefault();

    let errorExist = false;
    let errorsObject = {};

    if (
      values.password === "" ||
      values.password === null ||
      values.password === undefined
    ) {
      errorsObject.password = true;
      errorExist = true;
    }

    if (
      values.confirm_password === "" ||
      values.confirm_password === null ||
      values.confirm_password === undefined
    ) {
      errorsObject.confirm_password = true;
      errorExist = true;
    }

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

    if (values.password !== values.confirm_password) {
      setMessage(`Password and Confirm Password does not matched..!`);
    } else {
      setMessage("");
    }

    const data = {
      password: values.password,
      confirm_password: values.confirm_password,
    };

    const token = `${passwordToken}?password=${values.password}&confirm_password=${values.confirm_password}`;

    dispatch(resetPassword(data, token, history));
  };
  return (
    <>
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
              <form onSubmit={onDataSubmit} className="singupform-wrap">
                <h1 className="resetform-hading">Reset Password </h1>

                <div className="" style={{ height: "82px" }}>
                  <input
                    type="password"
                    className="pwd-input"
                    placeholder="New Password"
                    name="password"
                    value={values.password}
                    onChange={onInputChange}
                  />
                  <span className="signup-error">
                    {errors.password && "Please enter your password"}
                  </span>
                </div>

                <div className="" style={{ height: "82px" }}>
                  <input
                    type="password"
                    className="pwd-input"
                    placeholder="Confirm Password"
                    name="confirm_password"
                    value={values.confirm_password}
                    onChange={onInputChange}
                  />
                  <span className="signup-error">
                    {errors.confirm_password &&
                      "Please enter your confirm password"}
                  </span>
                </div>
                <div className="text-danger">{message}</div>
                <button type="submit" className="forget-submit-btn">
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirmpassword;
