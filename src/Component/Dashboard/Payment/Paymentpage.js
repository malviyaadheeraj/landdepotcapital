import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { updateInvestList } from "../../../store/homeAction";
import InteracTransfer from "./InteracTransfer";
import WireTransfer from "./WireTransfer";

const Paymentpage = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [tabFirst, setTabFirst] = useState(1);
  const [currentTab, setCurrentTab] = useState("interac");

  useEffect(() => {
    setCurrentTab(match.params.id);
  }, [match]);

  const propertyDetails = JSON.parse(
    localStorage.getItem("landdepot-properties")
  );
  const investmentShare = localStorage.getItem("landdepot_share");
  const investmentAmout = localStorage.getItem("landdepot_amount");
  const investmentCheck = localStorage.getItem("landdepot_check");

  const investNowProperty = () => {
    const data = {
      property_id: propertyDetails && propertyDetails.id,
      share: investmentShare,
      payment_type: tabFirst,
      is_checkbox: investmentCheck,
    };

    dispatch(updateInvestList(data, history));
  };

  return (
    <>
      <Helmet>
        <title>Payment</title>
      </Helmet>
      <div className="container-fluid dashboardbg">
        <div className="container payment-step-wrapper  fade-in-bottom">
          <p className="stepsTitle">1. Payment Details</p>
          <div>
            <ul className="paymentTab">
              <li
                className={`payintertab ${
                  currentTab === "interac" && "payintertab-active"
                }`}
                onClick={() => {
                  setCurrentTab("interac");
                  history.push("/Paymentpage/interac");
                  setTabFirst(1);
                }}
              >
                Interac
              </li>
              <li
                className={`payintertab ${
                  currentTab === "wire-transfer" && "payintertab-active"
                }`}
                onClick={() => {
                  setCurrentTab("wire-transfer");
                  history.push("/Paymentpage/wire-transfer");
                  setTabFirst(2);
                }}
              >
                Wire Transfer
              </li>
            </ul>
          </div>
          <br />
          {currentTab === "interac" && (
            <InteracTransfer
              investmentAmout={investmentAmout}
              propertyDetails={propertyDetails}
            />
          )}
          {currentTab === "wire-transfer" && (
            <WireTransfer
              propertyDetails={propertyDetails}
              investmentAmout={investmentAmout}
            />
          )}

          <div className="paybtn-wrapper">
            <Link to="/paymentstep">
              <button className="backbtn-wrap">Back</button>
            </Link>

            <button className="confirm-btn" onClick={investNowProperty}>
              Confirm Transaction
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paymentpage;
