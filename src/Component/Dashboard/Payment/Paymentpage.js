import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { updateInvestList } from "../../../store/homeAction";
import Apaylo from "./Apaylo";
import InteracTransfer from "./InteracTransfer";
import WireTransfer from "./WireTransfer";
import utf8 from "utf8";
import sha512 from "js-sha512";
import axios from "axios";
var Buffer = require("buffer/").Buffer;

const Paymentpage = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [tabFirst, setTabFirst] = useState(1);
  const [currentTab, setCurrentTab] = useState("interac");
  const [values, setValues] = useState({});
  const [eftData, setEftData] = useState();
  const apiKey = "b7b3c8f06cc7fbfa679bcbfb92c51c63918f4cf8";
  const secretKey = "kJGRhl4uRsVUTjgg/ftMnw==";
  const time = new Date();
  const formatTime = time.toISOString().split("T")[0];
  var concatinatedValue = `${apiKey}${secretKey}${formatTime}`;
  var bytes = utf8.encode(concatinatedValue);
  const hashingBytes = Buffer.from(sha512(bytes), "hex");
  const base64Value = Buffer.from(hashingBytes).toString("base64");
  console.log(base64Value);

  useEffect(() => {
    setCurrentTab(match.params.id);
  }, [match]);

  const propertyDetails = JSON.parse(
    localStorage.getItem("landdepot-properties")
  );
  const investmentShare = localStorage.getItem("landdepot_share");
  const investmentAmout = localStorage.getItem("landdepot_amount");
  const investmentCheck = localStorage.getItem("landdepot_check");
  const investmentCoupon = localStorage.getItem("landdepot_coupon");

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const investNowProperty = () => {
    const data = {
      property_id: propertyDetails && propertyDetails.id,
      share: investmentShare,
      payment_type: tabFirst,
      is_checkbox: investmentCheck,
    };
    dispatch(updateInvestList(data, history));
  };

  const confirmTransection = (e) => {
    e.preventDefault();

    const transectionConfig = {
      headers: {
        "Content-Type": "application/json",
        Key: "b7b3c8f06cc7fbfa679bcbfb92c51c63918f4cf8",
        Signature: base64Value,
      },
    };

    const transectionData = {
      Email: values.email,
      FirstName: values.firstName,
      LastName: values.lastName,
      TransitNumber: "00006",
      InstitutionNumber: "003",
      AccountNumber: values.accountNumber,
      TransactionTypeCode: "D",
      Amount: investmentShare,
    };

    const eftDataPayment = {
      property_id: propertyDetails && propertyDetails.id,
      share: investmentShare,
      payment_type: tabFirst,
      is_checkbox: investmentCheck,
      account_number: values.accountNumber,
      transaction_id:
        eftData && eftData.Result && eftData.Result.TransactionNumber,
    };

    axios
      .post(
        "https://sandboxapi.apaylo.com/sandboxapi.apaylo.com/api/EFT/CreateEFTTransactionWithCustomer",
        transectionData,
        transectionConfig
      )
      .then((res) => {
        if (res.data.StatusCode === 200) {
          setEftData(res.data);
          dispatch(updateInvestList(eftDataPayment, history));
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
              <li
                className={`payintertab ${
                  currentTab === "apaylo" && "payintertab-active"
                }`}
                onClick={() => {
                  setCurrentTab("apaylo");
                  history.push("/Paymentpage/apaylo");
                  setTabFirst(3);
                }}
              >
                Apaylo
              </li>
            </ul>
          </div>
          <br />
          {currentTab === "interac" && (
            <InteracTransfer
              investmentAmout={investmentAmout}
              propertyDetails={propertyDetails}
              investNowProperty={investNowProperty}
            />
          )}
          {currentTab === "wire-transfer" && (
            <WireTransfer
              propertyDetails={propertyDetails}
              investmentAmout={investmentAmout}
              investNowProperty={investNowProperty}
            />
          )}
          {currentTab === "apaylo" && (
            <Apaylo
              onInputChange={onInputChange}
              confirmTransection={confirmTransection}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Paymentpage;
