import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./DashbordHome.css";

const DashboardHome = () => {
  return (
    <>
      <Helmet>
        <title>Thank You for Registration</title>
      </Helmet>
      <div className="container-fluid dashboardbg">
        <div className="container homeWrapper  fade-in-bottom">
          <h1>Thank you for Registration</h1>
          <p>Please check your email and verify your account...</p>
          <Link to="/login">
            <button className="complete-btn">Okay</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
