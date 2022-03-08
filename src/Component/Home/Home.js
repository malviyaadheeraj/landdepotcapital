import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { onHomeListData } from "../../store/homeAction";
import BlogsSlide from "../Reviewslide/BlogsSlide";
import PropertiesSlide from "../Reviewslide/PropertiesSlide";
import Review from "../Reviewslide/Review";
import InvestPopup from "../popups/InvestPopup/InvestPopup";
import "./Home.css";
import Helmet from "react-helmet";

const Home = () => {
  const dispatch = useDispatch();
  const [formOpenModal, setFormOpenModal] = useState(false);
  const getHomeList = useSelector((state) => state.home.getHomeList);
  const loginHidden = localStorage.getItem("landdepot-login");

  useEffect(() => {
    dispatch(onHomeListData());
  }, [dispatch]);

  const onCloseInvestModal = () => setFormOpenModal(false);
  const onOpenInvestModal = () => setFormOpenModal(true);

  return (
    <>
      <Helmet>
        <title>Land Depot Capital</title>
      </Helmet>
      <InvestPopup
        formOpenModal={formOpenModal}
        onCloseModal={onCloseInvestModal}
      />
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
                  >
                    {/* <p className="head-text">
                      Welcome to land Depot Capital <span>━━</span>
                    </p>

                    <h1>Real Estate Investing made simple and easy for you</h1>

                    <p className="head-body-text">
                      Have you ever considered investing in real estate but
                      backed out because of the added responsibilities and rigid
                      liabilities? The idea of property maintenance, taxes, and
                      paying mortgages can weigh negatively on your real estate
                      investing decisions. What if we told you that you can
                      invest in potentially lucrative properties without
                      incurring any extra cost or downpayment and have zero
                      responsibilities towards its maintenance? Yes, you can now
                      invest in real estate properties in the easiest way
                      possible, from the comfort of your home using Land Depot.
                    </p> */}
                  </div>

                  <div className="head-btn-wrap-sec">
                    {/* {loginHidden === true ? (
                      <Link to="/login">
                        <button className="get-active-btn">get started</button>
                      </Link>
                    ) : (
                      <Link to="/login-dashboard/my-investment">
                        <button className="get-active-btn">get started</button>
                      </Link>
                    )} */}

                    <button
                      className="get-active-btn"
                      onClick={onOpenInvestModal}
                    >
                      get started
                    </button>

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
          {/* <div className="row">
              <div className="col-sm-12 col-md-5">
                <img
                  alt="#"
                  className="img-fluid img-wrap"
                  src="/images/01.png"
                />
              </div>

              <div className="col-sm-12 col-md-7">
                <div className="Section-Two-wrapper">
                  <h2 className="head-text">Why Land Depot Capital?</h2>

                  <ul>
                    <li>
                      <h3>100% Free to Sign Up</h3>
                    </li>
                    <li>
                      <h3>Completely Hassle-Free</h3>
                    </li>
                    <li>
                      <h3>We Aim to Provide Walk-In Equity&nbsp;</h3>
                    </li>
                  </ul>

                  <p className="sectiontwo-body-text">
                    Land Depot Capital plans to use a Renting to Own program
                    which is a program specifically designed to assist Canadians
                    who are experiencing difficulty in obtaining financing for
                    the purchase of their home. We understand that the real
                    estate market is growing rapidly and we want to be able to
                    provide Canadians with the opportunity to own their own home
                    without having to out-save the growth of the market.
                  </p>
                  
                </div>
              </div>
            </div> */}

          {/* <div className="head-btn-wrap" onClick={onOpenInvestModal}>
            <a className="geBtntnSect" href="#/">
              get started
            </a>
          </div> */}
          <div className="head-btn-wrap">
            <a className="geBtntnSect" href="#/" onClick={onOpenInvestModal}>
              get started
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid Three-bg">
        <div className="container section-Three-wrap">
          <div
            dangerouslySetInnerHTML={{
              __html: getHomeList && getHomeList.section_12,
            }}
          ></div>
          {/* <h2>Our Marketplace</h2>
          <p className="section-Threepara">
            Get access to exclusive properties in the real estate landscape.
            Invest for better returns in a lucrative marketplace, share your
            shares anytime or explore. The Land Depot Marketplace welcomes you
            with arms wide open!
          </p> */}
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
            >
              {/* <h3 className="artifical-heading">Our Highlights</h3>

              <p className="artifical-para">
                Land Depot Capital has committed itself to the mission of making
                real estate investments affordable and hassle-free. Currently,
                you can invest in an income property for as little as $250, no
                maintenance responsibilities, no massive down payment, and no
                need to find tenants.
              </p> */}
            </div>

            <a className="get-btn-sect" href="#/" onClick={onOpenInvestModal}>
              get started
            </a>
            {/* <a className="get-btn-sect" href="#/" onClick={onOpenInvestModal}>
              get started
            </a> */}
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
                >
                  {/* <h3>Our Algorithm</h3>

                  <p className="sectiontwo-body-text">
                    LDC has invested time and money into our algorithm which
                    will search for the best deals in Ontario and then post them
                    on our platform for our members to view.
                  </p>

                  <p className="sectiontwo-body-text">
                    With the help of our algorithm, we will be able to acquire
                    and provide our members with the best-undervalued properties
                    which will supply them with walk-in equity on every
                    property.
                  </p> */}
                </div>

                <div className="head-btnBTn-wrap">
                  <a
                    className="geBtntnSectionWrapper"
                    href="#/"
                    onClick={onOpenInvestModal}
                  >
                    get started
                  </a>
                </div>
                {/* <div className="head-btnBTn-wrap" onClick={onOpenInvestModal}>
                  <a className="geBtntnSectionWrapper" href="#/">
                    get started
                  </a>
                </div> */}
              </div>
            </div>

            <div class="col-md-6 col-sm-12">
              <img
                alt="#"
                class="img-fluid mob-img-wrapper"
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
        >
          {/* <div className="row">
            <div class="col-md-6 col-sm-12 mt-3 mb-4">
              <img
                alt="#"
                className="img-five-wrap img-fluid"
                src="/images/no-extraimag.png"
              />
            </div>

            <div className="col-sm-7 col-md-6 col-sm-12">
              <div className="Section-five-wrapper">
                <h2>How Much Does it Cost?</h2>

                <p className="sectionfive-body-text">
                  Land Depot Capital aims to keep the cost for investors low,
                  this is why the marketplace and ability to look at listings
                  will be <strong>100% free</strong>. The only expenses the
                  investors will incur are the initial minimum investment of
                  $250 and a 2.5% property maintenance fee. All of the costs and
                  expenses related to the property will be incurred by us and
                  managed by us.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <section className="container-fluid section-six">
        <div
          className="container"
          dangerouslySetInnerHTML={{
            __html: getHomeList && getHomeList.section_6,
          }}
        >
          {/* <div className="row">
            <div className="col-md-6 col-sm-12">
              <div class="Section-Six-wrapper">
                <h3>Fractional Ownership</h3>

                <p className="head-body-text">
                  Fractional ownership is a hassle-free way to invest in the
                  real estate market. Investors will have the opportunity to
                  purchase a share of the property of their choice. That share
                  will allow them to benefit from the profits of the property as
                  well as receive a sum upon the sale of the property, this will
                  be proportional to the percentage of the property they own
                </p>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 mt-4 mb-4">
              <img
                alt="#"
                class="img-fluid img-six-wrap"
                src="/images/liabilites.png"
              />
            </div>
          </div> */}
        </div>
      </section>

      <section className="seavan-bg container-fluid ">
        <div
          className="container"
          dangerouslySetInnerHTML={{
            __html: getHomeList && getHomeList.section_7,
          }}
        >
          {/* <div className="row">
            <div className="col-md-6 col-sm-12">
              <img
                alt="#"
                class="img-fluid imgseavanwrap"
                src="/images/07.png"
              />
            </div>

            <div className="col-md-6 col-sm-12">
              <div className="Section-seavan-wrapper">
                <h3>#InvestTogetherGrowTogether</h3>

                <p className="head-body-text">
                  LDC's proprietary technology platform connects ordinary
                  Canadians to investment opportunities in nearly any asset.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section className="container-fluid eight-bg">
        <div className="container">
          <h3 className="eight-bg-text">Easy Steps to Grow Your Wealth</h3>
          <div
            className="eight-bg-wrapper"
            dangerouslySetInnerHTML={{
              __html: getHomeList && getHomeList.section_8,
            }}
          >
            {/* <div className="eight-bg-items">
              <div className="eight-bg-item">
                <div className="eight-imgsection">
                  <img alt="#" src="/images/Teant.png" />{" "}
                  <img
                    alt=""
                    className="sectionEightIconImage"
                    src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-right-128.png"
                  />
                </div>
                Find a Property
              </div>

              <div className="eight-bg-item">
                <div className="eight-imgsection">
                  <img alt="#" src="/images/RealTokan.png" />{" "}
                  <img
                    alt=""
                    className="sectionEightIconImage"
                    src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-right-128.png"
                  />
                </div>
                Purchase Your Share
              </div>
            </div>

            <div className="eight-bg-items">
              <div className="eight-bg-item">
                <div className="eight-imgsection">
                  <img alt="#" src="/images/manegment.png" />{" "}
                  <img
                    alt=""
                    className="sectionEightIconImage"
                    src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-right-128.png"
                  />
                </div>
                <span className="eightbg-text">Let Us Manage the Property</span>
              </div>
            </div>

            <div className="eight-bg-items">
              <div className="eight-bg-item">
                <div className="eight-imgsection">
                  <img alt="#" src="/images/PaysUsd.png" />{" "}
                  <img
                    alt=""
                    className="sectionEightIconImage"
                    src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-right-128.png"
                  />
                </div>

                <p>
                  <span className="eightbg-text">Receive Your Share</span>
                </p>
                <p>
                  <span className="eightbg-text">of The Profits</span>
                </p>
              </div>

              <div className="eight-bg-item">
                <div className="eight-imgsection">
                  <img alt="#" src="/images/Bank.png" />{" "}
                  <img
                    alt=""
                    className="sectionEightIconImage"
                    src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-right-128.png"
                  />
                </div>
                <p>
                  <span className="eightbg-text">Receive Your Share</span>
                </p>
                <p>
                  <span className="eightbg-text">of The Value</span>
                </p>
              </div>
            </div> */}
          </div>
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
