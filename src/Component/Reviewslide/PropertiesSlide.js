import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getHomePropertyList, onPropertyLiked } from "../../store/homeAction";

const PropertiesSlide = () => {
  const dispatch = useDispatch();
  const getHomeProperties = useSelector(
    (state) => state.home.getHomeProperties
  );

  useEffect(() => {
    dispatch(getHomePropertyList());
  }, [dispatch]);

  const propertyLiked = (id) => {
    const data = {
      property_id: id,
    };

    dispatch(onPropertyLiked(data));
  };

  return (
    <div className="container section-T">
      <div className="row propertySlideWrapper">
        {getHomeProperties &&
          getHomeProperties.map((properties, key) => (
            <div
              className="col-md-6 col-lg-4 col-sm-12 mt-2 mb-3 pe-2"
              key={key}
            >
              <div className="card card-wrap">
                <div className="proprtyimg-wraper">
                  <img
                    className="card-img-top img-fluid "
                    src={properties.cover_image}
                    alt=""
                  />
                  <div className="card-upper-text">
                    {properties.tags.split(",").map((item) => (
                      <label className="just-text text-capitalize">
                        {item}
                      </label>
                    ))}
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
                        className="property-addrs"
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
                    <label
                      className="hert-icon-wrap"
                      onClick={() => propertyLiked(properties.id)}
                    >
                      <i className="far fa-heart"></i>
                    </label>
                  </span>
                  {/* </div>

                <div className="card-body"> */}
                  <div className="list-item-wrap">
                    <ul className="list-group list-first-row">
                      <li className="lists-wrap">
                        <img
                          src="/images/home.png"
                          alt="#"
                          className="img-fluid me-2"
                        />
                        <label>{properties.area} sq ft</label>
                      </li>
                      <li className="lists-wrap">
                        <img
                          src="/images/bed.png"
                          alt="#"
                          className="img-fluid me-2"
                        />
                        <label>{properties.bhk} BHK</label>
                      </li>
                      <li className="lists-wrap">
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

                        <b>
                          {properties.property_term}
                          Years
                        </b>
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
    </div>
  );
};

export default PropertiesSlide;
