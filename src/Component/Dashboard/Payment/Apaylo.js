import React from "react";
import { Link } from "react-router-dom";

const Apaylo = ({ onInputChange, confirmTransection }) => {
  return (
    <div className="apaylo-wrapper mt-3">
      <form onSubmit={confirmTransection}>
        <div className="col-md-6 mb-3 px-3">
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              className="form-control"
              onChange={onInputChange}
              placeholder="First name"
            />
          </div>
        </div>
        <div className="col-md-6 mb-3 px-3">
          <div className="input-group">
            <input
              type="text"
              name="lastName"
              className="form-control"
              onChange={onInputChange}
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="col-md-6 mb-3 px-3">
          <div className="input-group">
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={onInputChange}
              placeholder="Email"
            />
          </div>
        </div>
        <div className="col-md-6 mb-3 px-3">
          <div className="input-group">
            <input
              type="number"
              name="accountNumber"
              className="form-control"
              onChange={onInputChange}
              placeholder="Account Number"
            />
          </div>
        </div>
        <div className="paybtn-wrapper">
          <Link to="/paymentstep">
            <button className="backbtn-wrap">Back</button>
          </Link>

          <button type="submit" className="confirm-btn">
            Confirm Transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default Apaylo;
