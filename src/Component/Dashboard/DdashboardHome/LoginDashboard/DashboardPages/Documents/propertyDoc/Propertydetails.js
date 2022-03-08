import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleInvestDetails } from "../../../../../../../store/homeAction";
import dateFormat from "dateformat";
import Sidebar from "../../../Sidebar/Sidebar";

const Propertydetails = ({ match }) => {
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState("my-investment");
  const singleInvestList = useSelector((state) => state.home.singleInvestList);

  useEffect(() => {
    const data = {
      id: match.params.invest_id,
    };

    dispatch(getSingleInvestDetails(data));
  }, [match, dispatch]);

  const dateCreatedAt = dateFormat(
    singleInvestList && singleInvestList.created_at,
    "dd mmmm,yy"
  );

  return (
    <div className="LoginDashbord-wrapper">
      <div className="container">
        <div className="sidebarwrap">
          <Sidebar setCurrentTab={setCurrentTab} currentTab={currentTab} />
        </div>
        <div className="Right-sideWrapper">
          <div className="propertyDetailsWrapper">
            <div className="properetyDetailsHeading">
              <label className="property-namewrapeer">Land Depot</label>
              <small className="float-end dateswraper">
                Date: {dateCreatedAt}
              </small>
            </div>
            <div className="properetyDetailsBodyWrapper">
              <div className="propertyDetailsBodyOne">
                <h6 className="propertyTextHeading">User Details:</h6>
                <div className="propertyDetailsText">
                  <div className="propertyDetails-text">
                    <h6>Name:</h6>
                    <span>
                      {singleInvestList &&
                        singleInvestList.user[0] &&
                        singleInvestList.user[0].first_name}
                    </span>
                  </div>
                  <div className="propertyDetails-text">
                    <h6>Address:</h6>
                    <span>
                      {singleInvestList &&
                        singleInvestList.property[0] &&
                        singleInvestList.property[0].address}
                    </span>
                  </div>
                  <div className="propertyDetails-text">
                    <h6>Phone:</h6>
                    <span>
                      {singleInvestList &&
                        singleInvestList.user[0] &&
                        singleInvestList.user[0].mobile}
                    </span>
                  </div>
                  <div className="propertyDetails-text">
                    <h6>Email:</h6>
                    <span>
                      {singleInvestList &&
                        singleInvestList.user[0] &&
                        singleInvestList.user[0].email}
                    </span>
                  </div>
                </div>
              </div>
              <div className="propertyDetailsBodyTwo">
                <h6 className="propertyTextHeading">Property Details:</h6>
                <div className="propertyDetailsText">
                  <div className="propertyDetails-text">
                    <h6>Name:</h6>
                    <span>
                      {singleInvestList &&
                        singleInvestList.property[0] &&
                        singleInvestList.property[0].name}
                    </span>
                  </div>
                  <div className="propertyDetails-text">
                    <h6>Address:</h6>
                    <span>
                      {singleInvestList &&
                        singleInvestList.property[0] &&
                        singleInvestList.property[0].address}
                    </span>
                  </div>
                  <div className="propertyDetails-text">
                    <h6>Area:</h6>
                    <span>
                      {singleInvestList &&
                        singleInvestList.property[0] &&
                        singleInvestList.property[0].area}
                    </span>
                  </div>
                  <div className="propertyDetails-text">
                    <h6>Price:</h6>
                    <span>
                      {singleInvestList &&
                        singleInvestList.property[0] &&
                        singleInvestList.property[0].purcahse_price}
                    </span>
                  </div>
                </div>
              </div>
              <div className="propertyDetailsBodyThree">
                <h6 className="propertyTextHeading">Payment Details:</h6>
                <div className="propertyDetailsText">
                  <div className="propertyDetails-text">
                    <h6>Payment Status:</h6>
                    {parseInt(
                      singleInvestList && singleInvestList.payment_status
                    ) === 2 ? (
                      <span className="btn btn-success">Complete</span>
                    ) : (
                      <span className="btn btn-danger">Pending</span>
                    )}
                  </div>
                  <div className="propertyDetails-text">
                    <h6>Share Price:</h6>
                    <span>
                      {singleInvestList &&
                        singleInvestList.property[0] &&
                        singleInvestList.property[0].per_share_price}
                    </span>
                  </div>
                  <div className="propertyDetails-text">
                    <h6>Shares Allotted:</h6>
                    <span>{singleInvestList && singleInvestList.share}</span>
                  </div>
                  <div className="propertyDetails-text">
                    <h6>Total:</h6>
                    <span>
                      {singleInvestList &&
                        singleInvestList.property[0] &&
                        singleInvestList.property[0].total_price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="propertyDetails">
              <h6 className="property-namewrapeer">Payment Details:</h6>
              <div className="propertyBenificiaryWrapper">
                <div className="propertyDetailsLeft">
                  <div className="propertyDetails-text">
                    <h6>Beneficiary Name:</h6>
                    <span>
                      {singleInvestList &&
                        singleInvestList.property[0] &&
                        singleInvestList.property[0].beneficiary_name}
                    </span>
                  </div>
                  <div className="propertyDetails-text">
                    <h6>Beneficiary Address:</h6>
                    <span>
                      {singleInvestList &&
                        singleInvestList.property[0] &&
                        singleInvestList.property[0].beneficiary_address}
                    </span>
                  </div>
                  <div className="propertyDetails-text">
                    <h6>Beneficiary Bank:</h6>
                    <span>
                      {singleInvestList &&
                        singleInvestList.property[0] &&
                        singleInvestList.property[0].beneficiary_bank}
                    </span>
                  </div>
                  <div className="propertyDetails-text">
                    <h6>Beneficiary Bank Address:</h6>
                    <span>
                      {singleInvestList &&
                        singleInvestList.property[0] &&
                        singleInvestList.property[0].beneficiary_bank_address}
                    </span>
                  </div>
                </div>
                <div className="propertyDetailsRight">
                  <div className="propertyDetails-text">
                    <h6>Swift Code:</h6>
                    <span>
                      {singleInvestList &&
                        singleInvestList.property[0] &&
                        singleInvestList.property[0].swift_code}
                    </span>
                  </div>
                  <div className="propertyDetails-text">
                    <h6>Institution number:</h6>
                    <span>
                      {singleInvestList &&
                        singleInvestList.property[0] &&
                        singleInvestList.property[0].institution_number}
                    </span>
                  </div>
                  <div className="propertyDetails-text">
                    <h6>Branch number:</h6>
                    <span>
                      {singleInvestList &&
                        singleInvestList.property[0] &&
                        singleInvestList.property[0].branch_number}
                    </span>
                  </div>
                  <div className="propertyDetails-text">
                    <h6>Account number:</h6>
                    <span>
                      {singleInvestList &&
                        singleInvestList.property[0] &&
                        singleInvestList.property[0].account_number}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Propertydetails;
