import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useHistory } from "react-router-dom";
import "./Paymentstep.css";

const Paymentstep = () => {
  const history = useHistory();
  const [amount, setAmount] = useState();
  const [message, setMessage] = useState();
  const [shareAlloted, setShareAlloted] = useState();
  const [check, setCheck] = useState();
  const propertyDetails = JSON.parse(
    localStorage.getItem("landdepot-properties")
  );

  const isFloat = (n) => {
    return Number(n) === n && n % 1 !== 0;
  };

  const onInputChange = (e) => {
    setAmount(e.target.value);

    const shareAllotedAmount =
      `${e.target.value}` /
      `${propertyDetails && propertyDetails.per_share_price}`;
    setShareAlloted(shareAllotedAmount);
  };

  const remainingAmount = localStorage.getItem("landdepot_total");

  const onInvestNow = () => {
    if (amount === "" || amount === null || amount === undefined) {
      setMessage("Please enter investment amount");
    } else if (isFloat(shareAlloted)) {
      setMessage("float value is not allowed");
    } else if (parseInt(amount) > parseInt(remainingAmount)) {
      setMessage(`max amount is ${remainingAmount}`);
    } else if (
      parseInt(amount) <
      parseInt(propertyDetails && propertyDetails.mini_invest_amount)
    ) {
      setMessage(
        `min amount is ${propertyDetails && propertyDetails.mini_invest_amount}`
      );
    } else if (
      parseInt(propertyDetails && propertyDetails.mini_invest_amount) <
        parseInt(amount) ||
      parseInt(remainingAmount) === parseInt(amount) ||
      parseInt(remainingAmount) > parseInt(amount)
    ) {
      history.push("/Paymentpage/interac");
    }

    localStorage.setItem("landdepot_share", shareAlloted);
    localStorage.setItem("landdepot_amount", amount);
    localStorage.setItem("landdepot_check", check);
  };

  console.log(check);

  return (
    <>
      <Helmet>
        <title>Payment</title>
      </Helmet>
      <div className="container-fluid dashboardbg ">
        <div className="container">
          <div className="row g-4 fade-in-bottom">
            <div className="col-md-6 col-sm-12 col-lg-5 mt-4 ">
              <div className=" payment-stepbgwrap">
                <div className="propertyimg-wrap">
                  <img
                    src={propertyDetails && propertyDetails.cover_image}
                    alt="#"
                    className="img-fluid propert-img"
                  />
                </div>
                <div className="paymentbody-wrapeer">
                  <p className="proprtyname">
                    {propertyDetails && propertyDetails.name}
                  </p>
                  <p className="proprtydetails">
                    {propertyDetails && propertyDetails.address}
                  </p>
                  <p className="proprtytxt">Condominium</p>
                </div>
                <div className="backpaybtn-wrapper">
                  <Link to="/properties">
                    <button className="Backprperty-btn">
                      Back to Property
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6  col-sm-12 col-lg-7  mt-4 ">
              <div className="payment-stepbgwrap">
                <p className="stepsTitle">1. Payment Details</p>
                <div className="invastmentWrapper">
                  <p>
                    Investment Amount{" "}
                    <span className="text-danger ml-2">
                      (min amount $
                      {propertyDetails && propertyDetails.mini_invest_amount}
                    </span>
                    )
                  </p>
                  <form className="form-wrapper">
                    <input
                      type="number"
                      className="invest-input"
                      placeholder="Enter your Amount"
                      value={amount}
                      min="0"
                      onChange={(e) => onInputChange(e)}
                      onWheel={(e) => e.target.blur()}
                    />
                    <span className="investAmountDolor">$</span>
                    <div className="PriceWrapper">
                      <div className="purchase-box">
                        <p className="purchase-wrap">Purchase Price</p>
                        <label className="Price-amount">
                          ${propertyDetails && propertyDetails.purcahse_price}
                        </label>
                      </div>
                      <div className="purchase-box">
                        <p className="purchase-wrap">Allocated Shares</p>
                        <label className="Price-amount">
                          {(propertyDetails &&
                            propertyDetails.purcahse_price - remainingAmount) ||
                            0}
                        </label>
                      </div>
                      <div className="purchase-box">
                        <p className="purchase-wrap">Share Allotted</p>
                        <label className="Price-amount">
                          {shareAlloted || 0}
                        </label>
                      </div>
                    </div>

                    <div className="Promo-wrap">
                      <input
                        type="txt"
                        className="apply-input"
                        placeholder="Enter Your Promo Code"
                      />
                      <button className="apply-btn">Apply</button>
                    </div>
                  </form>

                  <div className="check-wrapper mt-4">
                    {check === "1" ? (
                      <input
                        type="checkbox"
                        value="0"
                        name="check"
                        className="me-2"
                        onChange={(e) => setCheck(e.target.value)}
                      />
                    ) : (
                      <input
                        type="checkbox"
                        value="1"
                        name="check"
                        className="me-2"
                        onChange={(e) => setCheck(e.target.value)}
                      />
                    )}
                    Do you want to redeem your credits?
                    <p style={{ marginTop: "5px" }}>
                      By checking this box we can redeem $10 credit which you
                      have collected in your account.{" "}
                      <Link style={{ color: "#0075be" }} to="/promotion">
                        Know here
                      </Link>
                    </p>
                  </div>
                  <div className="check-wrapper mt-4">
                    <p>
                      <input type="checkbox" className="me-2" />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                  </div>
                </div>
                <button className="next-btn" onClick={onInvestNow}>
                  Next
                </button>

                <span
                  className="text-danger"
                  style={{ marginLeft: "10px", fontWeight: "500" }}
                >
                  {message}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paymentstep;
