import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { onEventWebinarsData } from "../../store/homeAction";
import Helmet from "react-helmet";

const Events = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const pageNumbers = [];
  const getEventWebinarsList = useSelector(
    (state) => state.home.getEventWebinarsList
  );

  useEffect(() => {
    dispatch(onEventWebinarsData());
  }, [dispatch]);

  for (
    let i = 1;
    i <=
    Math.ceil(
      getEventWebinarsList && getEventWebinarsList.length / postsPerPage
    );
    i++
  ) {
    pageNumbers.push(i);
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBlogs =
    getEventWebinarsList &&
    getEventWebinarsList.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {" "}
      <Helmet>
        <title>Events</title>
      </Helmet>
      <div className="container-fluid pages-bg">
        <div className="container">
          <h2 className="Termspage-title">Events and webinars</h2>
        </div>
      </div>
      <section className="container-fluid blogs-section-wrap">
        <div className="container">
          <div className="row pt-5 pb-5">
            {currentBlogs &&
              currentBlogs.map((event, key) => (
                <div
                  className="col-md-6 col-lg-4 col-sm-6 blog-text-wrap  mt-4 mb-4 pe-2"
                  key={key}
                >
                  <img
                    src={event.image}
                    alt="#"
                    style={{ width: "100%", height: "250px" }}
                  />
                  <br />
                  <div className="event-heightName">
                    <p className="eventbdy-text">{event.name}</p>
                  </div>
                  <div className="event-height">
                    <span
                      className="event-text"
                      dangerouslySetInnerHTML={{
                        __html: event.description,
                      }}
                    ></span>
                  </div>

                  <Link to={`/event-details/${event.slug}`}>
                    <button className="event-btnsec"> View More</button>
                  </Link>
                </div>
              ))}
          </div>
          <div className="row d-flex align-items-center justify-content-center w-100">
            <div className="col d-flex align-items-center justify-content-center">
              <ul className="mb-4">
                {pageNumbers.length > 3 && (
                  <>
                    {pageNumbers.map((number) => (
                      <button
                        key={number}
                        onClick={() => paginate(number)}
                        className="prevButton"
                      >
                        {number}
                      </button>
                    ))}
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
