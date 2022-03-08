import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScrollToTop from "react-scroll-to-top";
import { onPrivacyData } from "../../store/homeAction";
import Helmet from "react-helmet";

const Privacy = () => {
  const dispatch = useDispatch();
  const getPrivacyList = useSelector((state) => state.home.getPrivacyList);

  useEffect(() => {
    dispatch(onPrivacyData());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Privacy</title>
      </Helmet>
      <ScrollToTop smooth />
      <div
        dangerouslySetInnerHTML={{
          __html: getPrivacyList && getPrivacyList.section_1,
        }}
      ></div>
    </>
  );
};

export default Privacy;
