import React from "react";
import { Link } from "react-router-dom";

const Investpage = ({
  setCurrentTab,
  profileInfo,
  objective,
  insiderStatus,
  document,
  investProperty,
  message,
}) => {
  const propertyDetails = JSON.parse(
    localStorage.getItem("landdepot-properties")
  );

  return (
    <>
      <div className="review-pagewrapper">
        <div className="info-edit-wrapp">
          <p className="proinfo-line">
            01. Personal Information
            {profileInfo ? (
              <i className="fas fa-check ms-2 " />
            ) : (
              <i className="fas fa-remove ms-2 text-danger" />
            )}
          </p>
          <div className="edit-btn-wrap">
            <button className="editbtn" onClick={() => setCurrentTab(0)}>
              <i className="fas fa-pencil-alt"></i>
            </button>
          </div>
        </div>

        <div className="info-edit-wrapp">
          <p className="proinfo-line">
            02. Objective & Experienc{" "}
            {objective ? (
              <i className="fas fa-check ms-2 " />
            ) : (
              <i className="fas fa-remove ms-2 text-danger" />
            )}
          </p>
          <div className="edit-btn-wrap">
            <button className="editbtn" onClick={() => setCurrentTab(1)}>
              <i className="fas fa-pencil-alt"></i>
            </button>
          </div>
        </div>

        <div className="info-edit-wrapp">
          <p className="proinfo-line">
            03. Insider status & AML{" "}
            {insiderStatus ? (
              <i className="fas fa-check ms-2 " />
            ) : (
              <i className="fas fa-remove ms-2 text-danger" />
            )}
          </p>
          <div className="edit-btn-wrap">
            <button className="editbtn" onClick={() => setCurrentTab(2)}>
              <i className="fas fa-pencil-alt"></i>
            </button>
          </div>
        </div>

        <div className="info-edit-wrapp">
          <p className="proinfo-line">
            04. Document
            {document ? (
              <i className="fas fa-check ms-2 " />
            ) : (
              <i className="fas fa-remove ms-2 text-danger" />
            )}
          </p>
          <div className="edit-btn-wrap">
            <button className="editbtn" onClick={() => setCurrentTab(3)}>
              <i className="fas fa-pencil-alt"></i>
            </button>
          </div>
        </div>

        {propertyDetails && propertyDetails.id ? (
          <button
            className="top-propertis-btn mt-4"
            onClick={() => investProperty()}
          >
            Invest In Property
          </button>
        ) : (
          <Link to="/properties">
            <button className="top-propertis-btn mt-4">
              Invest In Property
            </button>
          </Link>
        )}

        <span style={{ marginLeft: "10px" }} className="text-danger">
          {message}
        </span>
      </div>
    </>
  );
};

export default Investpage;
