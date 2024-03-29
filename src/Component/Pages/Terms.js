import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onTermData } from "../../store/homeAction";
import Helmet from "react-helmet";

const Terms = () => {
  const dispatch = useDispatch();
  const getTermList = useSelector((state) => state.home.getTermList);

  useEffect(() => {
    dispatch(onTermData());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Terms</title>
      </Helmet>
      <div
        dangerouslySetInnerHTML={{
          __html: getTermList && getTermList.section_1,
        }}
      ></div>
    </>
  );
};

export default Terms;
