import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./DashbordHome.css";

const DashboardHome = () => {
  const handleRemove = () => {
    localStorage.removeItem("landdepot-properties");
    localStorage.removeItem("landdepot_amount");
    localStorage.removeItem("landdepot_coupon");
    localStorage.removeItem("landdepot_share");
    localStorage.removeItem("landdepot_check");
    localStorage.removeItem("landdepot_total");
  };

  return (
    <>
      <Helmet>
        <title>Thank You</title>
      </Helmet>
      <div className="container-fluid dashboardbg">
        <div className="container homeWrapper fade-in-bottom">
          <h1>ALMOST THERE...</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>

          <Link to="/login-dashboard/my-investment" onClick={handleRemove}>
            <button className="complete-btn">COMPLETE</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
