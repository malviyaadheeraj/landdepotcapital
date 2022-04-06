import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Helmet from "react-helmet";
import { getPromotion } from "../../store/homeAction";

const Promotion = () => {
  const dispatch = useDispatch();
  const getPromotionData = useSelector((state) => state.home.getPromotionData);

  useEffect(() => {
    dispatch(getPromotion());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Promotion</title>
      </Helmet>
      <div
        dangerouslySetInnerHTML={{
          __html: getPromotionData && getPromotionData.section_1,
        }}
      ></div>
    </>
  );
};

export default Promotion;
