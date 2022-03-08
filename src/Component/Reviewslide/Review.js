import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onClientReviewData } from "../../store/homeAction";
import Rating from "../Pages/Rating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  const dispatch = useDispatch();
  const getClientReviewList = useSelector(
    (state) => state.home.getClientReviewList
  );

  useEffect(() => {
    dispatch(onClientReviewData());
  }, [dispatch]);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <section className="container-fluid nine-bg">
        <div className="container">
          <h3 className="eight-bg-text">Trusted Client's Reviews</h3>
          <div className="review-wrapper">
            <div className="row">
              <Slider {...settings}>
                {getClientReviewList &&
                  getClientReviewList.map((review, key) => (
                    <div className="col-md-12" key={key}>
                      <div className="row">
                        <div className="col-sm-3">
                          <div className="slide-imgwrap">
                            <img
                              src={review.image}
                              className="img-fluid"
                              alt="#"
                            />
                          </div>
                        </div>
                        <div
                          className="col"
                          style={{ padding: "0px 20px", marginTop: "10px" }}
                        >
                          <div className="txt-wrap">
                            <p>{review.description}</p>

                            <label>
                              <b className="reviewr-name">{review.name}</b>
                            </label>
                            <br />
                            <label>{review.occupation}</label>
                            <br />
                            <Rating rating={review.rating}></Rating>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
