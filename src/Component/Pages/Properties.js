import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPropertyList } from "../../store/homeAction";
import BlogsSlide from "../Reviewslide/BlogsSlide";
import "./Properties.css";
import Helmet from "react-helmet";

const Properties = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const getProperties = useSelector((state) => state.home.getProperties);
  const pageNumbers = [];

  useEffect(() => {
    dispatch(getPropertyList());
  }, [dispatch]);

  for (
    let i = 1;
    i <= Math.ceil(getProperties && getProperties.length / postsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentProperties =
    getProperties && getProperties.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Helmet>
        <title>Properties</title>
      </Helmet>
      <section>
        <div className="container-fluid pages-bg">
          <div className="container">
            <h2 className="page-title">Properties</h2>
            <h6 className="text-center ">
              <Link to="/" className="Link-color">
                Home
              </Link>{" "}
              <i className="fas fa-chevron-right centarow" /> Properties
            </h6>
          </div>
        </div>
        <div className="container section-Three-wrap">
          <div className="row mt-5 mb-5">
            {currentProperties &&
              currentProperties.map((properties, key) => (
                <div className="col-md-6 col-lg-4 col-sm-6 mt-2 mb-3" key={key}>
                  <div className="card card-wrap">
                    <div className="proprtyimg-wraper">
                      <img
                        className="card-img-top img-fluid"
                        src={properties.cover_image}
                        alt=""
                      />
                      <div className="card-upper-text">
                        <label className="just-text text-capitalize">
                          {properties.tags}
                        </label>
                        <div className="address-text">
                          <Link
                            to={`/property/${properties.slug}`}
                            className="proprty-name-link"
                            onClick={() =>
                              localStorage.setItem(
                                "landdepot-properties",
                                JSON.stringify(properties)
                              )
                            }
                          >
                            <h3>{properties.name}</h3>
                          </Link>
                          <span
                            className="white"
                            dangerouslySetInnerHTML={{
                              __html: properties.address,
                            }}
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div className="card-body card-title-wrapper">
                      <span className="card-title-wrap">
                        <Link
                          to={`/property/${properties.slug}`}
                          className="proprty-link"
                          onClick={() =>
                            localStorage.setItem(
                              "landdepot-properties",
                              JSON.stringify(properties)
                            )
                          }
                        >
                          {properties.name}
                        </Link>
                        {/* <label className="hert-icon-wrap">
                          <i className="far fa-heart"></i>
                        </label> */}
                      </span>
                      <div className="list-item-wrap">
                        <ul className="list-group list-first-row">
                          <li className=" lists-wrap">
                            <img
                              src="/images/home.png"
                              alt="#"
                              className="img-fluid me-2"
                            />
                            <label>{properties.area} sq ft</label>
                          </li>
                          <li className=" lists-wrap">
                            <img
                              src="/images/bed.png"
                              alt="#"
                              className="img-fluid me-2"
                            />
                            <label>{properties.bhk} BHK</label>
                          </li>
                          <li className=" lists-wrap">
                            <img
                              src="/images/bath.png"
                              alt="#"
                              className="img-fluid me-2"
                            />
                            <label>{properties.bathroom} Bathroom</label>
                          </li>
                        </ul>
                        <ul className="list-secnd-row">
                          <li className="#">
                            <label className="propert-detls">Purchase</label>
                            <br />
                            <b>$ {properties.purcahse_price}</b>{" "}
                          </li>
                          <li className="#">
                            <label className="propert-detls">Project</label>
                            <br />

                            <b>{properties.property_term} Years</b>
                          </li>
                          <li className="#">
                            <label className="propert-detls">
                              Projected Annual
                            </label>
                            <br />
                            <b>{properties.annual_rol}%</b>
                          </li>
                        </ul>
                      </div>
                      <div className="card-btn-wrap">
                        <Link to={`/property/${properties.slug}`}>
                          <button
                            className="invest-btn"
                            onClick={() => {
                              localStorage.setItem(
                                "landdepot-properties",
                                JSON.stringify(properties)
                              );
                            }}
                          >
                            Invest Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="row d-flex align-items-center justify-content-center">
            <div className="col d-flex align-items-center justify-content-center">
              <ul className="mb-4">
                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className="prevButton"
                  >
                    {number}
                  </button>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Properties wrap end */}

        <BlogsSlide />
      </section>
    </>
  );
};

export default Properties;
