import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { onContactUs, onSettingData } from "../../store/homeAction";
import Helmet from "react-helmet";

const Contact = ({ mailto }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [thankYou, setThankYou] = useState();
  const getContactUs = useSelector((state) => state.home.getContactUs);
  const getSettingList = useSelector((state) => state.home.getSettingList);

  useEffect(() => {
    dispatch(onSettingData());
  }, [dispatch]);

  console.log(getSettingList);

  setTimeout(() => {
    if (getContactUs && getContactUs.status === true) {
      setThankYou(getContactUs && getContactUs.message);
      window.location.reload();
    } else {
      setThankYou(getContactUs && getContactUs.message);
    }
  }, 100);

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const onDataSubmit = (e) => {
    e.preventDefault();

    let errorExist = false;
    let errorsObject = {};

    if (
      values.name === "" ||
      values.name === null ||
      values.name === undefined
    ) {
      errorsObject.name = true;
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
      values.subject === "" ||
      values.subject === null ||
      values.subject === undefined
    ) {
      errorsObject.subject = true;
      errorExist = true;
    }
    if (
      values.message === "" ||
      values.message === null ||
      values.message === undefined
    ) {
      errorsObject.message = true;
      errorExist = true;
    }

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("subject", values.subject);
    formData.append("message", values.message);

    dispatch(onContactUs(formData));
  };

  return (
    <>
      <Helmet>
        <title>{getSettingList && getSettingList.contactdata.seo_title}</title>
        <meta
          name="description"
          content={getSettingList && getSettingList.contactdata.seo_description}
        />
        <meta
          name="keyword"
          content={getSettingList && getSettingList.contactdata.keyword}
        />
      </Helmet>
      <div className="container-fluid pages-bg">
        <div className="container">
          <h2 className="page-title">Contact US </h2>
          <h6 className="text-center ">
            <Link to="/" className="Link-color">
              Home
            </Link>
            <i className="fas fa-chevron-right centarow" /> Contact US
          </h6>
        </div>
      </div>

      {/* Form section start */}
      <div className="container-fluid  conect-bg">
        <div className="container">
          <div className="row contect-formorder">
            <div className="col-sm-6  col-xl-4 px-0" id="infoSec">
              <div className="contect-info-section">
                <div className="icon-info-wrapper">
                  <ul>
                    <li className="icon-warp">
                      <img src="/images/call.png" alt="#"></img>
                    </li>
                  </ul>
                  <ul className="ps-3">
                    <li className="contect-hading">Phone Number</li>
                    <li className="contect-details">
                      <a
                        href={`tel:${
                          getSettingList && getSettingList.data.number
                        }`}
                        className="social-link contect-detailsLink"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>
                          {getSettingList && getSettingList.data.number}
                        </strong>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="icon-info-wrapper">
                  <ul>
                    <li className="icon-warp">
                      <img src="/images/envelope.png" alt="" />
                    </li>
                  </ul>
                  <ul className="ps-3">
                    <li className="contect-hading">Support email</li>

                    <li className="contect-details">
                      <a
                        href={`mailto:${
                          getSettingList && getSettingList.data.email
                        }`}
                        className="social-link contect-detailsLink"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {getSettingList && getSettingList.data.email}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="icon-info-wrapper">
                  <ul>
                    <li className="icon-warp">
                      <img src="/images/mark.png" alt="" />
                    </li>
                  </ul>
                  <ul className="ps-3">
                    <li className="contect-hading">Office Address</li>
                    <li className="contect-details">
                      <b>{getSettingList && getSettingList.data.address}</b>
                    </li>
                  </ul>
                </div>

                <div className="social-wrapper">
                  <ul>
                    <li>
                      <a
                        className="social-link"
                        href={
                          getSettingList && getSettingList.data.facebook_url
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="social-link"
                        href={
                          getSettingList && getSettingList.data.pinterest_url
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="social-link"
                        href={getSettingList && getSettingList.data.twitter_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href={
                          getSettingList && getSettingList.data.linkedin_url
                        }
                        target="_blank"
                        className="social-link"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="col-sm-6  col-xl-8 ps-0" id="formSec">
              <form onSubmit={onDataSubmit} className="contact-form-wrapper">
                <p className="contact-form-titel">Get in touch with us</p>
                <p
                  className="contact-form-body"
                  dangerouslySetInnerHTML={{
                    __html:
                      getSettingList && getSettingList.contactdata.description,
                  }}
                ></p>
                <div className="form-group contactFormSubmit row">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control contect-form-inpt"
                      placeholder="Your Name"
                      name="name"
                      value={values.name}
                      onChange={(e) => onInputChange(e)}
                    />
                    <span className="signup-error">
                      {errors.name && "Please enter your name"}
                    </span>
                  </div>
                  <div className="col-sm-6 matchinwl-wrap">
                    <input
                      type="email"
                      className="form-control contect-form-inpt"
                      placeholder="Your Email "
                      name="email"
                      value={values.email}
                      onChange={(e) => onInputChange(e)}
                    />
                    <span className="signup-error">
                      {errors.email && "Please enter your email"}
                    </span>
                  </div>
                </div>

                <div className="form-group contactFormSubmit row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control contect-form-inpt"
                      placeholder="Subject"
                      name="subject"
                      value={values.subject}
                      onChange={(e) => onInputChange(e)}
                    />
                    <span className="signup-error">
                      {errors.subject && "Please enter your subject"}
                    </span>
                  </div>
                </div>

                <div className="form-group contactFormSubmit row">
                  <div className="col-sm-12">
                    <textarea
                      className="form-control contect-form-txtrea "
                      rows="6"
                      placeholder="Your Message"
                      name="message"
                      value={values.message}
                      onChange={(e) => onInputChange(e)}
                    ></textarea>
                    <span className="signup-error">
                      {errors.message && "Please enter your message"}
                    </span>
                  </div>
                </div>

                <div className="form-group contactFormSubmit">
                  <button className="btn Contect-submit-btn" type="submit">
                    Send Message
                  </button>
                  <span
                    style={{
                      width: "100%",
                      marginLeft: "10px",
                      color: "red",
                      marginTop: "9px",
                    }}
                  >
                    {thankYou}
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Form section end */}
    </>
  );
};

export default Contact;
