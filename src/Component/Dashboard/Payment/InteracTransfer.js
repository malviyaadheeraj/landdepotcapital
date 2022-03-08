import React from "react";

const InteracTransfer = ({ investmentAmout }) => {
  return (
    <div className="interac-transfer">
      <div className="paymentDetailsWrapper">
        <ul className="paydetails-wrap">
          <li>
            Investment Amount
            <span className="float-end">${investmentAmout}</span>
          </li>
          <li>
            Mode to be funded through
            <span className="float-end">e-Transfer</span>
          </li>
          <li>
            Recipent <span className="float-end">Land Depot Capital</span>
          </li>
          <li>
            EMail <span className="float-end">LandDepotCapital.com</span>
          </li>
          <li>
            Transfer reference number
            <span className="float-end">6f841r</span>
          </li>
          <li>
            Mobile Number<span className="float-end">797-652-4617</span>
          </li>
          <li>
            Security Response <span className="float-end"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InteracTransfer;
