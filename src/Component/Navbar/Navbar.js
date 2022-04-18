import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import DropdownNavbar from "./DropdownNavbar";

const Navbar = () => {
  const [show, setShow] = useState();
  const loginHidden = localStorage.getItem("landdepot-login");

  return (
    <div className="navbar-wrapper">
      <div className="container">
        <div className="navbar">
          <Link className="navbar-brand" to="/" onClick={() => setShow(false)}>
            <img src="/images/Logo2.png" alt="#" />
          </Link>
          <div className="dropdownIcons">
            {!show ? (
              <i
                className="fas fa-bars"
                id="btn"
                onClick={() => setShow(true)}
              ></i>
            ) : (
              <i
                className="fas fa-times"
                id="cancel"
                onClick={() => setShow(false)}
              ></i>
            )}
          </div>
          <ul className="navbarItems">
            <li
              className="navbarItem"
              onClick={() => localStorage.removeItem("landdepot-properties")}
            >
              <Link className="navitems-size" to="/">
                Home
              </Link>
            </li>
            <li
              className="navbarItem"
              onClick={() => localStorage.removeItem("landdepot-properties")}
            >
              <Link className="navitems-size" to="/properties">
                Properties
              </Link>
            </li>
            <li
              className="navbarItem"
              onClick={() => localStorage.removeItem("landdepot-properties")}
            >
              <Link className="navitems-size" to="/about">
                About
              </Link>
            </li>
            <li
              className="navbarItem"
              onClick={() => localStorage.removeItem("landdepot-properties")}
            >
              <Link className="navitems-size" to="/blogs">
                Blogs
              </Link>
            </li>
            <li
              className="navbarItem"
              onClick={() => localStorage.removeItem("landdepot-properties")}
            >
              <Link className="navitems-size" to="/contact">
                Contact Us
              </Link>
            </li>

            {loginHidden === "true" ? (
              <li
                className="navbarItem"
                onClick={() => localStorage.removeItem("landdepot-properties")}
              >
                <Link
                  className="navitems-size"
                  to="/login-dashboard/my-investment"
                >
                  <img
                    src="/images/dashboardicon.png"
                    className="img-fluid dashbord-icon"
                    alt=""
                  />
                  Dashboard
                </Link>
              </li>
            ) : (
              <li
                className="navbarItem"
                onClick={() => localStorage.removeItem("landdepot-properties")}
              >
                <Link className="navitems-size login-btn" to="/login">
                  <i className="fa-solid fa-user me-2"></i>Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      {show && <DropdownNavbar setShow={setShow} />}
    </div>
  );
};

export default Navbar;
