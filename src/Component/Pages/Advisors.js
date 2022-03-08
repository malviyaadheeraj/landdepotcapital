import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onAdvisorsData } from "../../store/homeAction";
import Helmet from "react-helmet";

const Advisors = () => {
  const dispatch = useDispatch();
  const getAdvisorsList = useSelector((state) => state.home.getAdvisorsList);

  useEffect(() => {
    dispatch(onAdvisorsData());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Advisors</title>
      </Helmet>
      <div
        dangerouslySetInnerHTML={{
          __html: getAdvisorsList && getAdvisorsList.section_1,
        }}
      ></div>
    </>
  );
};

export default Advisors;
