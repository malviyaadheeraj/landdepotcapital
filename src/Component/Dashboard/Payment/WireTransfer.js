import React from "react";

const WireTransfer = ({ propertyDetails, investmentAmout }) => {
  return (
    <div className="interac-transfer">
      <div className="paymentDetailsWrapper">
        <ul className="paydetails-wrap">
          <li>
            Investment Amount{" "}
            <span className="float-end">${investmentAmout}</span>
          </li>
          <li>
            Mode to be funded through
            <span className="float-end">e-Transfer</span>
          </li>
          <li>
            Benificiary Name
            <span className="float-end">
              {propertyDetails && propertyDetails.beneficiary_name}
            </span>
          </li>
          <li>
            Benificiary Address
            <span className="float-end">
              {propertyDetails && propertyDetails.beneficiary_address}
            </span>
          </li>
          <li>
            Benificiary Account Information
            <span className="float-end">
              {propertyDetails && propertyDetails.swift_code}
            </span>
          </li>
          <li>
            Benificiary Bank{" "}
            <span className="float-end">
              {propertyDetails && propertyDetails.beneficiary_bank}
              beneficiary_bank
            </span>
          </li>
          <li>
            Benificiary Bank Address{" "}
            <span className="float-end">
              {propertyDetails && propertyDetails.beneficiary_bank_address}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WireTransfer;
