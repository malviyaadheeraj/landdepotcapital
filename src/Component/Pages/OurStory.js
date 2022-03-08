import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onOurStoryData } from "../../store/homeAction";
import Helmet from "react-helmet";

const OurStory = () => {
  const dispatch = useDispatch();
  const getOurStoryList = useSelector((state) => state.home.getOurStoryList);

  useEffect(() => {
    dispatch(onOurStoryData());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Our Story</title>
      </Helmet>
      <div
        dangerouslySetInnerHTML={{
          __html: getOurStoryList && getOurStoryList.section_1,
        }}
      ></div>
    </>
  );
};

export default OurStory;
