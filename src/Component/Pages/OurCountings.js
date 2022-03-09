import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAboutListData } from "../../store/homeAction";
import "./OurCounting.css";
const OurCountings = () => {
  const dispatch = useDispatch();
  const getAboutList = useSelector((state) => state.home.getAboutList);

  useEffect(() => {
    dispatch(onAboutListData());
  }, [dispatch]);

  return (
    <div className=" container-fluid ourcountings-wrapper">
      <div className="container">
        <div
          className="row text-center"
          dangerouslySetInnerHTML={{
            __html: getAboutList && getAboutList.section_2,
          }}
        ></div>
      </div>
    </div>
  );
};

export default OurCountings;
