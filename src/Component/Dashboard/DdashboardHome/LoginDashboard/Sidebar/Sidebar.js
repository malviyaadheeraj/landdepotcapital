import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { onLogoutUser } from "../../../../../store/homeAction";
import "./Sidebar.css";

const Sidebar = ({ setCurrentTab, currentTab }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(onLogoutUser(history));
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <div className="login-sidebar-wrapper">
        <ul className="sidebar-list-wrap">
          <li
            className={`sidebar-item ${
              currentTab === "my-investment" && "sidebar-item-active"
            }`}
            onClick={() => {
              history.push(`/login-dashboard/my-investment`);
              setCurrentTab("my-investment");
            }}
          >
            <i className="fas fa-hand-holding-usd me-1"></i>
            <span>My Investments</span>
          </li>
          <li
            className={`sidebar-item ${
              currentTab === "my-documents" && "sidebar-item-active"
            }`}
            onClick={() => {
              history.push(`/login-dashboard/my-documents`);
              setCurrentTab("my-documents");
            }}
          >
            <i className="far fa-address-card me-2"></i>
            <span>My Documents</span>
          </li>
          <li
            className={`sidebar-item ${
              currentTab === "my-profile" && "sidebar-item-active"
            }`}
            onClick={() => {
              history.push(`/login-dashboard/my-profile`);
              setCurrentTab("my-profile");
            }}
          >
            <i className="far fa-user me-2"></i>
            <span>My Profile</span>
          </li>
          <li
            className={`sidebar-item ${
              currentTab === "growth" && "sidebar-item-active"
            }`}
            onClick={() => {
              history.push(`/login-dashboard/growth`);
              setCurrentTab("growth");
            }}
          >
            <i className="far fa-address-card me-2"></i>
            <span>Growth Potentional</span>
          </li>
          <li className="sidebar-item" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt me-2"></i> <span> Logout</span>
          </li>
          <Link to="/properties">
            <button className="top-propertis-btn">
              Top Properties<i className="fas fa-arrow-right ms-2"></i>
            </button>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
