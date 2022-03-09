import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import PropertyPost from "./PropertyPost";
import { useDispatch, useSelector } from "react-redux";
import { getOldPropertyList } from "../../../store/homeAction";

const OldProperty = () => {
  const dispatch = useDispatch();
  const getOldProperties = useSelector((state) => state.home.getOldProperties);

  useEffect(() => {
    dispatch(getOldPropertyList());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Previous Deals</title>
      </Helmet>
      <div className="holdproperty-wrapper">
        <div className="container-fluid pages-bg">
          <div className="container">
            <h2 className="page-title">Previous Deals</h2>
            <h6 className="text-center ">
              <Link to="/" className="Link-color">
                Home
              </Link>
              <i className="fas fa-chevron-right centarow" /> Properties
            </h6>
          </div>
        </div>
        <div className="container section-Three-wrap previousDeals">
          <div
            dangerouslySetInnerHTML={{
              __html:
                getOldProperties && getOldProperties.contentdata.description,
            }}
          ></div>

          <PropertyPost postsToRender={getOldProperties} />
        </div>
      </div>
    </>
  );
};

export default OldProperty;
