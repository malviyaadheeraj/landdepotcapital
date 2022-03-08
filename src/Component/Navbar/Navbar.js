import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import DropdownNavbar from "./DropdownNavbar";
import InvestPopup from "../popups/InvestPopup/InvestPopup";

const Navbar = () => {
  const [show, setShow] = useState();
  const [formOpenModal, setFormOpenModal] = useState(false);

  const onCloseInvestModal = () => setFormOpenModal(false);
  const onOpenInvestModal = () => setFormOpenModal(true);

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
            <li className="navbarItem">
              <Link className="navitems-size" to="/">
                Home
              </Link>
            </li>
            <li className="navbarItem">
              <Link className="navitems-size" to="/properties">
                Properties
              </Link>
            </li>
            <li className="navbarItem">
              <Link className="navitems-size" to="/previous-deals">
                Previous Deals
              </Link>
            </li>
            {/* <li className="navbarItem">
              <Link className="navitems-size" to="/invest-property">
                Invest Property
              </Link>
            </li> */}
            <li className="navbarItem">
              <Link className="navitems-size" to="/about">
                About
              </Link>
            </li>
            <li className="navbarItem">
              <Link className="navitems-size" to="/blogs">
                Blogs
              </Link>
            </li>
            <li className="navbarItem">
              <Link className="navitems-size" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="navbarItem">
              <button className="navitemsButton" onClick={onOpenInvestModal}>
                INVEST NOW
              </button>
            </li>

            {/* {loginHidden === "true" ? (
              <li className="navbarItem">
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
              <li className="navbarItem">
                <Link className="navitems-size login-btn" to="/login">
                  <i className="fa-solid fa-user me-2"></i>Login
                </Link>
              </li>
            )} */}
          </ul>
        </div>
      </div>
      {show && <DropdownNavbar setShow={setShow} />}

      <InvestPopup
        formOpenModal={formOpenModal}
        onCloseModal={onCloseInvestModal}
      />
    </div>
  );
};

export default Navbar;