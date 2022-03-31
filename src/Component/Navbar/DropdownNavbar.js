import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { onLogoutUser } from "../../store/homeAction";

const DropdownNavbar = ({ setShow }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loginHidden = localStorage.getItem("landdepot-login");

  const handleLogout = () => {
    dispatch(onLogoutUser(history));
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="dropdownNavbar">
      <div className="container">
        <ul className="dropdownNavbarItems">
          <li className="dropdownNavbarItem" onClick={() => setShow(false)}>
            <Link className="navitems-size" to="/">
              Home
            </Link>
          </li>
          <li className="dropdownNavbarItem" onClick={() => setShow(false)}>
            <Link className="navitems-size" to="/properties">
              Properties
            </Link>
          </li>
          <li className="dropdownNavbarItem" onClick={() => setShow(false)}>
            <Link className="navitems-size" to="/about">
              About
            </Link>
          </li>
          <li className="dropdownNavbarItem" onClick={() => setShow(false)}>
            <Link className="navitems-size" to="/blogs">
              Blogs
            </Link>
          </li>
          <li className="dropdownNavbarItem" onClick={() => setShow(false)}>
            <Link className="navitems-size" to="/contact">
              Contact Us
            </Link>
          </li>
          {loginHidden === "true" ? (
            <>
              <li
                className="dropdownNavbarItem"
                onClick={() => {
                  setShow(false);
                  history.push(`/login-dashboard/my-investment`);
                }}
              >
                <img
                  src="/images/dashboardicon.png"
                  className="img-fluid dashbord-icon"
                  alt=""
                />
                Dashboard
              </li>
              <li
                className="dropdownNavbarItem"
                onClick={() => {
                  setShow(false);
                  history.push(`/login-dashboard/my-investment`);
                }}
              >
                <i className="fas fa-hand-holding-usd me-1"></i>
                <span>My Investments</span>
              </li>
              <li
                className="dropdownNavbarItem"
                onClick={() => {
                  setShow(false);
                  history.push(`/login-dashboard/my-documents`);
                }}
              >
                <i className="far fa-address-card me-2"></i>
                <span>My Documents</span>
              </li>

              <li
                className="dropdownNavbarItem"
                onClick={() => {
                  setShow(false);
                  history.push(`/login-dashboard/my-profile`);
                }}
              >
                <i className="far fa-user me-2"></i>
                <span>My Profile</span>
              </li>
              <li
                className="dropdownNavbarItem"
                onClick={() => {
                  setShow(false);
                  history.push(`/login-dashboard/growth`);
                }}
              >
                <i className="far fa-user me-2"></i>
                <span>Growth Potentional</span>
              </li>
              <li
                className="dropdownNavbarItem"
                onClick={() => {
                  setShow(false);
                  history.push(`/login-dashboard/referal`);
                }}
              >
                <i className="far fa-user me-2"></i>
                <span>Referal</span>
              </li>
              <li
                className="dropdownNavbarItem"
                onClick={() => {
                  setShow(false);
                  handleLogout();
                }}
              >
                <i className="fas fa-sign-out-alt me-2"></i>
                <span>Logout</span>
              </li>
            </>
          ) : (
            <li className="navbarItem" onClick={() => setShow(false)}>
              <Link className="navitems-size login-btn" to="/login">
                <i className="fa-solid fa-user me-2"></i>Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DropdownNavbar;
