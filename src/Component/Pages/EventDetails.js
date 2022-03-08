import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onEventWebinarsData,
  onEventWebinarsDataByID,
} from "../../store/homeAction";
import Helmet from "react-helmet";

const EventDetails = ({ match }) => {
  const dispatch = useDispatch();
  const getEventWebinarsListById = useSelector(
    (state) => state.home.getEventWebinarsListById
  );
  const getEventWebinarsList = useSelector(
    (state) => state.home.getEventWebinarsList
  );

  useEffect(() => {
    dispatch(onEventWebinarsData());
  }, [dispatch]);

  useEffect(() => {
    if (getEventWebinarsList) {
      for (let i = 0; i < getEventWebinarsList.length; i++) {
        if (getEventWebinarsList[i].slug === match.params.event_id) {
          getEventDetaills(getEventWebinarsList[i].id);
        }
      }
    }
  }, [getEventWebinarsList]);

  const getEventDetaills = (id) => {
    const data = {
      id: id,
    };
    dispatch(onEventWebinarsDataByID(data));
  };

  return (
    <>
      <Helmet>
        <title>Event Details</title>
        <meta name="description" content="sijgfgfhfg" />
        <meta name="keyword" content="sijgfgfhfg" />
      </Helmet>
      <div
        className="container-fluid pages-bg"
        style={{
          backgroundImage: `url("${
            getEventWebinarsListById && getEventWebinarsListById.image
          }")`,
        }}
      ></div>
      <div className="container-fluid terms-bgpage">
        <div className="container eventDetailsPage">
          <p className="blog-date"></p>
          <h1>{getEventWebinarsListById && getEventWebinarsListById.name}</h1>

          <label
            dangerouslySetInnerHTML={{
              __html:
                getEventWebinarsListById &&
                getEventWebinarsListById.description,
            }}
          ></label>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
