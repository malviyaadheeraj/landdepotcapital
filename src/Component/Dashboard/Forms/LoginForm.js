import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { auth, googleProvider } from "../../../firebase";
import {
  onLogin,
  onGoogleLogin,
  onFacebookLogin,
} from "../../../store/homeAction";
import "./LoginForm.css";
import SocialButton from "./SocialButton ";

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState();
  const getLogin = useSelector((state) => state.home.getLogin);
  const getResetPassword = useSelector((state) => state.home.getResetPassword);

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  setInterval(() => {
    if (getLogin && getLogin.status === false) {
      setMessage(getLogin && getLogin.message);
      window.location.reload();
    } else if (getResetPassword && getResetPassword.status === true) {
      setMessage(getResetPassword && getResetPassword.message);
      window.location.reload();
    }
  }, 1000);

  const onDataSubmit = (e) => {
    e.preventDefault();

    let errorExist = false;
    let errorsObject = {};

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

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

    const data = {
      email: values.email,
      password: values.password,
    };

    dispatch(onLogin(data, history));
  };

  const handleGoogleLogin = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        var token = res.credential.accessToken;
        console.log(token);
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
    console.log(user._token.accessToken);
    const facebookLoginData = {
      provider: "facebook",
      access_token: user._token.accessToken,
    };
    dispatch(onFacebookLogin(facebookLoginData, history));
  };

  const handleSocialLoginFailure = (err) => {
    console.error(err);
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
            <div className="col-sm-12 col-md-6 form-bg">
              <form onSubmit={onDataSubmit} className="singupform-wrap">
                <h1 className="form-hading">Login to Account</h1>
                <p className="form-subhading">Enter your login data</p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div className="input_field mb-2" style={{ height: "75px" }}>
                    <input
                      type="email"
                      className="pwd-input"
                      placeholder="Email or Username"
                      name="email"
                      value={values.email}
                      onChange={onInputChange}
                    />
                    <span className="signup-error">
                      {errors.email && "Please enter your email"}
                    </span>
                  </div>

                  <div className="input_field mb-2" style={{ height: "75px" }}>
                    <input
                      type="password"
                      className="pwd-input"
                      placeholder="Password"
                      name="password"
                      value={values.password}
                      onChange={onInputChange}
                    />
                    <span className="signup-error">
                      {errors.password && "Please enter your password"}
                    </span>
                  </div>
                  <div className="remamber-wrap">
                    <p className="remambertxt">
                      <input type="checkbox" className="me-2" />
                      Remember Password
                    </p>
                    <Link to="forgetpassword" className="forgetpwd-wrap">
                      Forget Password?
                    </Link>
                  </div>
                  <div className="text-danger">{message}</div>
                  <button type="submit" className="singup-btn">
                    Login Account
                  </button>
                  <p className="change-form ">
                    Already have an account?{" "}
                    <Link to="/singupForm" className="login-txt">
                      Create Account
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

export default LoginForm;
