import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onRiskPageData } from "../../store/homeAction";
import Helmet from "react-helmet";

const KeyDisclosure = () => {
  const dispatch = useDispatch();
  const getRiskPageList = useSelector((state) => state.home.getRiskPageList);

  useEffect(() => {
    dispatch(onRiskPageData());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Key Disclosure</title>
      </Helmet>
      <div
        dangerouslySetInnerHTML={{
          __html: getRiskPageList && getRiskPageList.section_1,
        }}
      ></div>
    </>
  );
};

export default KeyDisclosure;
