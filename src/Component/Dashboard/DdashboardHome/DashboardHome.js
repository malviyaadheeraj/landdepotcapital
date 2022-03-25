import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./DashbordHome.css";

const DashboardHome = () => {
  return (
    <>
      <Helmet>
        <title>Thank You</title>
      </Helmet>
      <div className="container-fluid dashboardbg">
        <div className="container homeWrapper">
          <h1>ALMOST THERE...</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>

          <Link
            to="/login-dashboard/my-investment"
            onClick={() => localStorage.removeItem("landdepot-properties")}
          >
            <button className="complete-btn">COMPLETE</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
