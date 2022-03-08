import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onCareerData } from "../../store/homeAction";
import Helmet from "react-helmet";

const Careers = () => {
  const dispatch = useDispatch();
  const getCareerList = useSelector((state) => state.home.getCareerList);

  useEffect(() => {
    dispatch(onCareerData());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Careers</title>
      </Helmet>
      <div
        dangerouslySetInnerHTML={{
          __html: getCareerList && getCareerList.section_1,
        }}
      ></div>
    </>
  );
};

export default Careers;
