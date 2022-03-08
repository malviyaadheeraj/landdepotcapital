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
        >
          {/* <div className="col-md-3 col-sm-6">
            <div className="OurCount_style">
              <img src="/images/Teemsi.png" alt="img" />
              <h1>1000+</h1>
              <p>Our Customer</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="OurCount_style">
              <img src="/images/Clientsi.png" alt="img" />
              <h1>1700+</h1>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="OurCount_style">
              <img src="/images/projects.png" alt="img" />
              <h1>11,900</h1>
              <p>Project Complete</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="OurCount_style">
              <img src="/images/Customers.png" alt="img" />
              <h1>800+</h1>
              <p>Team</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OurCountings;
