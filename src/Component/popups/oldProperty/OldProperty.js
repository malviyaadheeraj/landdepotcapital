import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import PropertyPost from "./PropertyPost";
import { useDispatch, useSelector } from "react-redux";
import { getOldPropertyList } from "../../../store/homeAction";
// const postsPerPage = 3;
// let arrayForHoldingPosts = [];

const OldProperty = () => {
  const dispatch = useDispatch();
  const getOldProperties = useSelector((state) => state.home.getOldProperties);
  // const [postsToShow, setPostsToShow] = useState([]);
  // const [next, setNext] = useState(3);

  console.log(getOldProperties);

  useEffect(() => {
    dispatch(getOldPropertyList());
  }, [dispatch]);

  // useEffect(() => {
  //   loopWithSlice(0, postsPerPage);
  // }, []);

  // const loopWithSlice = (start, end) => {
  //   const slicedPosts = getOldProperties && getOldProperties.slice(start, end);
  //   arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
  //   setPostsToShow(arrayForHoldingPosts);
  // };

  // const handleShowMorePosts = () => {
  //   loopWithSlice(next, next + postsPerPage);
  //   setNext(next + postsPerPage);
  // };

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
