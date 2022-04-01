import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { onHomeListData } from "../../store/homeAction";
import BlogsSlide from "../Reviewslide/BlogsSlide";
import PropertiesSlide from "../Reviewslide/PropertiesSlide";
import Review from "../Reviewslide/Review";
import "./Home.css";
import Helmet from "react-helmet";

const Home = () => {
  const dispatch = useDispatch();
  const getHomeList = useSelector((state) => state.home.getHomeList);
  const loginHidden = localStorage.getItem("landdepot-login");

  useEffect(() => {
    dispatch(onHomeListData());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Land Depot Capital</title>
        <link rel="canonical" href="/"></link>
      </Helmet>

      <div className="container-fluid first-bg">
        <div className="overlay-home">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="Section-first-wrapper">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: getHomeList && getHomeList.section_1,
                    }}
                  ></div>

                  <div className="head-btn-wrap-sec">
                    {loginHidden === true ? (
                      <Link to="/login">
                        <button className="get-active-btn">get started</button>
                      </Link>
                    ) : (
                      <Link to="/login-dashboard/my-investment">
                        <button className="get-active-btn">get started</button>
                      </Link>
                    )}

                    <Link to="/properties">
                      <button className="view-active-btn">
                        view properties
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid two-bg">
        <div className="container section-two-wrap">
          <div
            dangerouslySetInnerHTML={{
              __html: getHomeList && getHomeList.section_2,
            }}
          ></div>

          {loginHidden === true ? (
            <div className="head-btn-wrap">
              <Link className="geBtntnSect" to="/login">
                get started
              </Link>
            </div>
          ) : (
            <div className="head-btn-wrap">
              <Link className="geBtntnSect" to="/login-dashboard/my-investment">
                get started
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="container-fluid Three-bg">
        <div className="container section-Three-wrap">
          <div
            dangerouslySetInnerHTML={{
              __html: getHomeList && getHomeList.section_12,
            }}
          ></div>

          <PropertiesSlide />
        </div>
      </div>

      <section className="realstate-wrapper container-fluid">
        <div className="container artifical-wrapeers">
          <div className="container artifical-wrapeers">
            <div
              dangerouslySetInnerHTML={{
                __html: getHomeList && getHomeList.section_3,
              }}
            ></div>

            {loginHidden === true ? (
              <Link className="get-btn-sect" to="/login">
                get started
              </Link>
            ) : (
              <Link
                className="get-btn-sect"
                to="/login-dashboard/my-investment"
              >
                get started
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="forth-bg container-fluid ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="Section-forth-wrapper">
                <div
                  dangerouslySetInnerHTML={{
                    __html: getHomeList && getHomeList.section_4,
                  }}
                ></div>

                {loginHidden === true ? (
                  <div className="head-btnBTn-wrap">
                    <Link className="geBtntnSectionWrapper" to="/login">
                      get started
                    </Link>
                  </div>
                ) : (
                  <div className="head-btnBTn-wrap">
                    <Link
                      className="geBtntnSectionWrapper"
                      to="/login-dashboard/my-investment"
                    >
                      get started
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className="col-md-6 col-sm-12">
              <img
                alt="#"
                className="img-fluid mob-img-wrapper"
                src="/images/04.png"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid five-bg">
        <div
          className="container section-five-wrap"
          dangerouslySetInnerHTML={{
            __html: getHomeList && getHomeList.section_5,
          }}
        ></div>
      </div>

      <section className="container-fluid section-six">
        <div
          className="container"
          dangerouslySetInnerHTML={{
            __html: getHomeList && getHomeList.section_6,
          }}
        ></div>
      </section>

      <section className="seavan-bg container-fluid ">
        <div
          className="container"
          dangerouslySetInnerHTML={{
            __html: getHomeList && getHomeList.section_7,
          }}
        ></div>
      </section>

      <section className="container-fluid eight-bg">
        <div className="container">
          <h3 className="eight-bg-text">Easy Steps to Grow Your Wealth</h3>
          <div
            className="eight-bg-wrapper"
            dangerouslySetInnerHTML={{
              __html: getHomeList && getHomeList.section_8,
            }}
          ></div>
        </div>
      </section>

      <div className="container-fluid five-bg">
        <div
          className="container section-five-wrap"
          dangerouslySetInnerHTML={{
            __html: getHomeList && getHomeList.section_9,
          }}
        ></div>
      </div>

      <section className="container-fluid section-six">
        <div
          className="container"
          dangerouslySetInnerHTML={{
            __html: getHomeList && getHomeList.section_10,
          }}
        ></div>
      </section>

      <section className="seavan-bg container-fluid ">
        <div
          className="container"
          dangerouslySetInnerHTML={{
            __html: getHomeList && getHomeList.section_11,
          }}
        ></div>
      </section>

      <Review />
      <BlogsSlide />
    </>
  );
};

export default Home;
