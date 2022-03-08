import React from "react";
import { Link } from "react-router-dom";

const Distributions = () => {
  return (
    <>
      <div className="container">
        <div className="distribution-wrapper">
          <Link to="#" className="backlink">
            <i className="fas fa-chevron-left me-3"></i>Back To My Investments
          </Link>

          <div className=" Property-tabwraper mt-4">
            <ul className=" distribution-tabwrap">
              <li>Distributions</li>
              <li className="purchase-m">Purchase Transactionns </li>
              <li>Updates</li>
            </ul>
          </div>

          <div className="propert-dist-wrapper">
            <div className="property-Add">
              <h3>Ottawa</h3>
              <p className="addrs-line">
                390 Bank Street, Ottawa, Ontario, KP 1Y5
              </p>
              <div className="Distribution-status">
                <p className="dist-status-line">
                  Since This is a Pre-construction Project, There Are No Rental
                  Distributions
                </p>
              </div>
            </div>

            <div className="property-Addrs">
              <h3>Ottawa</h3>
              <p className="addrs-line">
                s 390 Bank Street, Ottawa, Ontario, KP 1Y5
              </p>

              <div className="PriceWrapper-propert">
                <div className="purchase-box-propert">
                  <p className="purchase-wrap">Purchase Price</p>
                  <label className="Price-amount">$121,098</label>
                </div>
                <div className="purchase-box-propert">
                  <p className="purchase-wrap">Total Investing Amount</p>
                  <label className="Price-amount">$500</label>
                </div>{" "}
                <div className="purchase-box-propert">
                  <p className="purchase-wrap">My Distributions to Dates</p>
                  <label className="Price-amount">NO</label>
                </div>
              </div>

              <Link to="#" className="viewLink">
                View Original Listing{" "}
                <i className="fas fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Distributions;
