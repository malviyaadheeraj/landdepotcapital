import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPropertyListId, getPropertyList } from "../../../store/homeAction";
import Financial from "./Financ/Financial";
import "./Propertypage.css";
import "./imgSlider.css";
import ImageGallery from "react-image-gallery";
import "../../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import Map from "./Map";
import Helmet from "react-helmet";

const PropertyPage = ({ match }) => {
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState(0);
  const getPropertiesId = useSelector((state) => state.home.getPropertiesId);
  const getProperties = useSelector((state) => state.home.getProperties);
  const [gallaryImages, setGallaryImages] = useState([]);

  useEffect(() => {
    dispatch(getPropertyList());
  }, [dispatch]);

  useEffect(() => {
    let images = [];
    let gallery_image =
      getPropertiesId &&
      getPropertiesId.property &&
      getPropertiesId.property.property_image;

    if (gallery_image) {
      for (let i = 0; i < gallery_image.length; i++) {
        images.push({
          original: gallery_image[i].property_image,
          thumbnail: gallery_image[i].property_image,
        });
      }

      setGallaryImages(images);
    }
  }, [getPropertiesId]);

  useEffect(() => {
    if (getProperties) {
      for (let i = 0; i < getProperties.length; i++) {
        if (getProperties[i].slug === match.params.property_id) {
          getPropertyDetails(getProperties[i].id);
        }
      }
    }
  }, [getProperties]);

  const getPropertyDetails = (id) => {
    const data = {
      id: id,
    };
    dispatch(getPropertyListId(data));
  };

  const loginHidden = localStorage.getItem("landdepot-login");

  return (
    <>
      <Helmet>
        <title>
          {getPropertiesId &&
            getPropertiesId.property &&
            getPropertiesId.property.seo_title}
        </title>
        <meta
          name="description"
          content={
            getPropertiesId &&
            getPropertiesId.property &&
            getPropertiesId.property.seo_description
          }
        />
        <meta
          name="keyword"
          content={
            getPropertiesId &&
            getPropertiesId.property &&
            getPropertiesId.property.keyword
          }
        />
      </Helmet>
      <div className="container-fluid propertypage-bg" id="helloWorld">
        <div className="container">
          <div className="propertypage-wrapper">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <ImageGallery items={gallaryImages} />;
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="Property-details-wrapp">
                  <div className="proprty-titel">
                    <div className="proprty-title">
                      <h1>
                        {getPropertiesId &&
                          getPropertiesId.property &&
                          getPropertiesId.property.name}
                      </h1>
                      <p className="paybody-text">
                        {getPropertiesId &&
                          getPropertiesId.property &&
                          getPropertiesId.property.address}
                      </p>
                    </div>
                    <div className="proprty-wrapes">
                      <Link to="/properties" className="backlink">
                        <i className="fas fa-chevron-left me-2"></i>Back To My
                        Property
                      </Link>
                    </div>
                    <div className="propty-invastmentwper">
                      <p>
                        {getPropertiesId &&
                          getPropertiesId.property &&
                          getPropertiesId.property.property_type &&
                          getPropertiesId.property.property_type.map(
                            (type, key) => <b key={key}>{type.name}</b>
                          )}
                      </p>

                      <div className="PriceWrapper">
                        <div className="purchase-box">
                          <p className="purchase-wraps">Purchase Price</p>
                          <label className="Price-amounts">
                            {getPropertiesId &&
                              getPropertiesId.property &&
                              getPropertiesId.property.purcahse_price}
                          </label>
                        </div>
                        <div className="purchase-box">
                          <p className="purchase-wraps">Project Term</p>
                          <label className="Price-amounts">
                            {getPropertiesId &&
                              getPropertiesId.property &&
                              getPropertiesId.property.property_term}
                          </label>
                        </div>
                        <div className="purchase-box">
                          <p className="purchase-wraps">
                            Projected
                            <br />
                            Annual ROI
                          </p>
                          <label className="Price-amounts">
                            {getPropertiesId &&
                              getPropertiesId.property &&
                              getPropertiesId.property.annual_rol}
                            %
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="my-5 investbook-btns">
                      {loginHidden === "true" ? (
                        <Link
                          to="/login-dashboard/my-profile"
                          onClick={() =>
                            localStorage.setItem(
                              "landdepot_total",
                              getPropertiesId && getPropertiesId.remaningamount
                            )
                          }
                        >
                          <button
                            className="boook-btn"
                            onClick={() =>
                              localStorage.setItem(
                                "landdepot_total",
                                getPropertiesId && getPropertiesId.investtotal
                              )
                            }
                          >
                            Invest Now
                          </button>
                        </Link>
                      ) : (
                        <Link to="/login">
                          <button className="boook-btn">Invest Now</button>
                        </Link>
                      )}
                      <button className="boook-btn ">
                        <i className="far fa-calendar-alt me-2"></i> Book a
                        Meeting
                      </button>
                    </div>
                    <p className="capital-risk">
                      Capital At Risk - Please read key Risks and purchaseer's
                      Right Before Investing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="botamitem-wrap ">
            <ul className="bootems-wrap">
              <li
                className={`bootams-item ${
                  currentTab === 0 && "bootams-item-active"
                }`}
                onClick={() => setCurrentTab(0)}
              >
                About the Property
              </li>

              <li
                className={`bootams-item ${
                  currentTab === 1 && "bootams-item-active"
                }`}
                onClick={() => setCurrentTab(1)}
              >
                Property highlight
              </li>
              <li
                className={`bootams-item bootams-border  ${
                  currentTab === 2 && "bootams-item-active"
                }`}
                onClick={() => setCurrentTab(2)}
              >
                Financials
              </li>
            </ul>
          </div>
          {currentTab === 0 && (
            <div className="row">
              <div className="col-md-6">
                <h3 className="hading-tab">About the Property</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      getPropertiesId &&
                      getPropertiesId.property &&
                      getPropertiesId.property.about,
                  }}
                ></div>
              </div>
              <div className="col-md-6 text-center">
                <Map
                  mapAddress={
                    getPropertiesId &&
                    getPropertiesId.property &&
                    getPropertiesId.property.address
                  }
                />
              </div>
            </div>
          )}
          {currentTab === 1 && (
            <div className="property-annual">
              <div className="row mt-3">
                <div className="col-12">
                  <h3 className="hading-tab">Property highlight</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        getPropertiesId &&
                        getPropertiesId.property &&
                        getPropertiesId.property.property_highlight,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          {currentTab === 2 && (
            <div className="property-annual">
              <Financial getSingleProperties={getPropertiesId} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PropertyPage;
