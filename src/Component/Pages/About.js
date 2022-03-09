import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { onAboutListData } from "../../store/homeAction";
import BlogsSlide from "../Reviewslide/BlogsSlide";
import Review from "../Reviewslide/Review";
import MyTeam from "./MyTeam";
import OurCountings from "./OurCountings";
import Helmet from "react-helmet";

const About = () => {
  const dispatch = useDispatch();
  const getAboutList = useSelector((state) => state.home.getAboutList);
  const loginHidden = localStorage.getItem("landdepot-login");

  useEffect(() => {
    dispatch(onAboutListData());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>

      <div className="container-fluid pages-bg">
        <div className="container">
          <h2 className="page-title">About US</h2>
          <h6 className="text-center ">
            <Link to="/" className="Link-color">
              Home
            </Link>
            <i className="fas fa-chevron-right centarow" /> About US
          </h6>
        </div>
      </div>
      <section className="aboutwrappr">
        <div className="container-fluid about-bg">
          <div className="container about-section-wrap">
            <div
              dangerouslySetInnerHTML={{
                __html: getAboutList && getAboutList.section_1,
              }}
            ></div>

            {loginHidden === true ? (
              <div className="head-btn-wrap">
                <Link
                  className="get-btnsec"
                  style={{ textDecoration: "none", color: "white" }}
                  to="/login"
                >
                  get started
                </Link>
              </div>
            ) : (
              <div className="head-btn-wrap">
                <Link
                  className="get-btnsec"
                  style={{ textDecoration: "none", color: "white" }}
                  to="/login-dashboard/my-investment"
                >
                  get started
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
      <MyTeam />
      <OurCountings />
      <Review />
      <BlogsSlide />
    </>
  );
};

export default About;
