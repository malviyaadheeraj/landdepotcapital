import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { auth, googleProvider } from "../../../firebase";
import {
  onFacebookLogin,
  onGoogleLogin,
  onRegister,
} from "../../../store/homeAction";
import "./LoginForm.css";
import SocialButton from "./SocialButton ";

const SingupForm = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState();
  const [showEye, setShowEye] = useState("password");
  const [open, setOpen] = useState(false);
  const [showEyeConfirm, setShowEyeConfirm] = useState("password");
  const [openConfirmPassword, setOpenConfirmPassword] = useState(false);
  const [emailMessage, setEmailMessage] = useState();
  const getRegister = useSelector((state) => state.home.getRegister);

  useEffect(() => {
    if (getRegister && getRegister.status === false) {
      setEmailMessage(getRegister && getRegister.message);
    }
  }, [getRegister]);

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
    setMessage();
    setEmailMessage();
    setOpen(false);
    setOpenConfirmPassword(false);
  };
  const onPasswordChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
    setMessage();
    setEmailMessage();
    setOpen(true);
  };
  const onConfirmPasswordChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
    setMessage();
    setEmailMessage();
    setOpenConfirmPassword(true);
  };

  // setTimeout(() => {
  //   if (getRegister && getRegister.status === false) {
  //     setMessage("Your given email id has been already registered.!");
  //     window.location.reload();
  //   } else {
  //     setMessage("");
  //   }
  // }, 500);

  const onDataSubmit = (e) => {
    e.preventDefault();
    setMessage();

    let errorExist = false;
    let errorsObject = {};

    if (
      values.first_name === "" ||
      values.first_name === null ||
      values.first_name === undefined
    ) {
      errorsObject.first_name = true;
      errorExist = true;
    }
    if (
      values.last_name === "" ||
      values.last_name === null ||
      values.last_name === undefined
    ) {
      errorsObject.last_name = true;
      errorExist = true;
    }
    if (
      values.email === "" ||
      values.email === null ||
      values.email === undefined
    ) {
      errorsObject.email = true;
      errorExist = true;
    }
    if (
      (values.password && values.password.length < 6) ||
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
    // if (values.password !== values.confirm_password) {
    //   setMessage(`Password and Confirm Password does not matched..!`);
    // }

    const data = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
      confirm_password: values.confirm_password,
      referal_code: match.params.token,
    };

    dispatch(onRegister(data, history));
  };

  const handleGoogleLogin = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        var token = res.credential.accessToken;
        const googleLoginData = {
          provider: "google",
          access_token: token,
        };
        dispatch(onGoogleLogin(googleLoginData, history));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSocialLogin = (user) => {
    const facebookLoginData = {
      provider: "facebook",
      access_token: user._token.accessToken,
    };
    dispatch(onFacebookLogin(facebookLoginData, history));
  };

  const handleSocialLoginFailure = (err) => {
    console.error(err);
  };

  const showPassword = () => setShowEye("password");
  const hidePassword = () => setShowEye("text");
  const showConfirmPassword = () => setShowEyeConfirm("password");
  const hideConfirmPassword = () => setShowEyeConfirm("text");

  return (
    <>
      <Helmet>
        <title>Sign Up</title>
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
            <div className="col-sm-12 col-md-6 form-bg">
              <form onSubmit={onDataSubmit} className="singupform-wrap">
                <h1 className="form-hading">Sign Up to Account</h1>
                <p className="form-subhading">Enter your Sign Up data</p>
                <div style={{ width: "100%" }}>
                  <div className="d-flex" style={{ height: "71px" }}>
                    <div style={{ width: "90%" }}>
                      <input
                        type="text"
                        className="firstname-input"
                        placeholder="First Name"
                        name="first_name"
                        style={{ width: "90%" }}
                        value={values.first_name}
                        onChange={onInputChange}
                      />
                      <span className="signup-error">
                        {errors.first_name && "Please enter your first name"}
                      </span>
                    </div>
                    <div style={{ width: "90%" }}>
                      <input
                        type="text"
                        className="firstname-input"
                        placeholder="Last Name"
                        name="last_name"
                        style={{ width: "100%" }}
                        value={values.last_name}
                        onChange={onInputChange}
                      />
                      <span className="signup-error">
                        {errors.last_name && "Please enter your last name"}
                      </span>
                    </div>
                  </div>
                  <div style={{ height: "81px" }}>
                    <input
                      type="email"
                      className="pwd-input"
                      placeholder="Enter Your Email"
                      name="email"
                      value={values.email}
                      onChange={onInputChange}
                    />
                    <span className="signup-error">
                      {errors.email && "Please enter your email address"}
                    </span>
                  </div>
                  <div style={{ height: "81px", position: "relative" }}>
                    <input
                      type={showEye === "text" ? "text" : "password"}
                      className="pwd-input"
                      placeholder="Password"
                      name="password"
                      value={values.password}
                      onChange={onPasswordChange}
                    />
                    <span className="signup-error">
                      {errors.password && "Please enter your password"}
                    </span>
                    {open && (
                      <div>
                        {showEye === "text" ? (
                          <i
                            className="fa-solid fa-eye text-secondary"
                            onClick={showPassword}
                          ></i>
                        ) : (
                          <i
                            class="fas fa-eye-slash text-secondary"
                            onClick={hidePassword}
                          ></i>
                        )}
                      </div>
                    )}
                  </div>
                  <div style={{ height: "81px", position: "relative" }}>
                    <input
                      type={showEyeConfirm === "text" ? "text" : "password"}
                      className="pwd-input"
                      placeholder="Confirm Password"
                      name="confirm_password"
                      value={values.confirm_password}
                      onChange={onConfirmPasswordChange}
                    />
                    <span className="signup-error">
                      {errors.confirm_password &&
                        "Please enter your Confirm Password"}
                    </span>
                    {openConfirmPassword && (
                      <div>
                        {showEyeConfirm === "text" ? (
                          <i
                            className="fa-solid fa-eye text-secondary"
                            onClick={showConfirmPassword}
                          ></i>
                        ) : (
                          <i
                            class="fas fa-eye-slash text-secondary"
                            onClick={hideConfirmPassword}
                          ></i>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="text-danger">{message}</div>
                  <div className="text-danger">{emailMessage}</div>
                  <button type="submit" className="singup-btn">
                    Sign up
                  </button>

                  <p className="change-form ">
                    Already have an account?{" "}
                    <Link to="/login" className="login-txt">
                      Log in
                    </Link>
                  </p>
                </div>
              </form>
              <h3 className="orlinewrap">OR</h3>

              <div className="social-btn-wrap">
                <button className="google-btn" onClick={handleGoogleLogin}>
                  <img
                    src="/images/Google.png"
                    alt="#"
                    className="img-fluid google-img"
                  />
                  Google Account
                </button>

                <SocialButton
                  provider="facebook"
                  appId="279694474059992"
                  className="google-btn"
                  onLoginSuccess={handleSocialLogin}
                  onLoginFailure={handleSocialLoginFailure}
                >
                  <img
                    src="./images/facebook.png"
                    alt="#"
                    className="img-fluid google-img"
                  />
                  Facebook Account
                </SocialButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingupForm;
