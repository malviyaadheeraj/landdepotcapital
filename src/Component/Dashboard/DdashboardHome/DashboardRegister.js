import React from "react";
import { Link } from "react-router-dom";
import "./DashbordHome.css";

const DashboardHome = () => {
  return (
    <>
      <div className="container-fluid dashboardbg">
        <div className="container homeWrapper">
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
