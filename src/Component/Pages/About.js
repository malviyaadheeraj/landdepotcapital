import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { onAboutListData } from "../../store/homeAction";
import BlogsSlide from "../Reviewslide/BlogsSlide";
import Review from "../Reviewslide/Review";
import MyTeam from "./MyTeam";
import OurCountings from "./OurCountings";
import InvestPopup from "../popups/InvestPopup/InvestPopup";
import Helmet from "react-helmet";

const About = () => {
  const dispatch = useDispatch();
  const [formOpenModal, setFormOpenModal] = useState(false);
  const getAboutList = useSelector((state) => state.home.getAboutList);

  useEffect(() => {
    dispatch(onAboutListData());
  }, [dispatch]);

  const onCloseInvestModal = () => setFormOpenModal(false);
  const onOpenInvestModal = () => setFormOpenModal(true);

  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <InvestPopup
        formOpenModal={formOpenModal}
        onCloseModal={onCloseInvestModal}
      />
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
            >
              {/* 
<div class="about-wrapper">
              <div class="about-left">
                <img alt="#" class="img-fluid" src="images/About.png" />
              </div>

              <div class="about-right">
                <div class="Section-Two-wrapper">
                  <p class="head-text">About Land Depot Capital</p>
                  <h2>
                    Real estate investing on
                    <br />
                    your terms.
                  </h2>
                  <p class="aboutwo-body">
                    Land Depot Capital is a highly experienced team working to
                    bring out the best real estate investments options for you.
                    We have committed ourselves to the mission of making
                    property ownership affordable and hassle-free. We have
                    created a program that allows real estate investment to be
                    passive giving our clients their time back. Fractional
                    ownership is the best new way to invest in property without
                    all the hassle, without a mortgage, and without a down
                    payment.
                  </p>

                  <p class="aboutwo-body-text">
                    We believe in transparency, honesty, and that everyone
                    should have the opportunity to invest in the real estate
                    market. To show these beliefs our membership to the platform
                    is 100% completely free. This means anyone can look at the
                    opportunities that we provide without any commitment.
                  </p>
                </div>
              </div>
            </div>

            <p class="aboutwotwo-body">
              look at the opportunities that we provide without any commitment.
            </p>
            <p class="aboutwotwo-body">
              Fractional ownership is a way to invest in real estate without
              dealing with tenants, mortgages, maintenance, and any other
              hassles. LDC has invested in an artificial intelligence program
              that searches for the best deals and then posts them on our
              platform. Once on the platform all of our members have the chance
              to invest in the property, this allows everyone to own a piece of
              the investment and watch the value grow.
            </p>

            <p class="aboutwo-body">
              With the help of our AI program, we are able to acquire and bring
              to our members the best-undervalued properties which supply them
              with walk-in equity on each and every property. This allows your
              investment to grow from day one when you invest with LDC.
            </p>

            <p class="aboutwo-body">
              The main pillars of this company are accessibility and simplicity.
              My team and I have created a system that is so simple you
              won&#39;t have to think twice about it. We understand that not
              everyone has intermediate knowledge of the real estate market but
              we do not believe that should be the reason they do not invest. We
              are trying to demolish the barriers into the real estate market,
              not build them up.
            </p> */}
            </div>

            {/* <div className="head-btn-wrap">
              <button className="get-btnsec">get started</button>
            </div> */}
            <div className="head-btn-wrap" onClick={onOpenInvestModal}>
              <button className="get-btnsec">get started</button>
            </div>
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
