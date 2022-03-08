import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyInvestList } from "../../../../../../../store/homeAction";
import "../PropertyDoc.css";
import AnnualTaxStatements from "./AnnualTaxStatements";
import HalfYearlyDocument from "./HalfYearlyDocument";
import PropertyDocument from "./PropertyDocument";
import QuarterlyStatements from "./QuarterlyStatements";

const PropertyDoc = () => {
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState(0);
  const getInvestmentList = useSelector(
    (state) => state.home.getInvestmentList
  );

  useEffect(() => {
    dispatch(getMyInvestList());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="Property-wraper">
        <div className="Property-tabwraper">
          <span
            className={`profile-item ${
              currentTab === 0 && "profile-item-active"
            }`}
            onClick={() => {
              setCurrentTab(0);
            }}
          >
            Property Documents
          </span>
          <span
            className={`profile-item ${
              currentTab === 1 && "profile-item-active"
            }`}
            onClick={() => {
              setCurrentTab(1);
            }}
          >
            Quarterly Statements{" "}
          </span>
          <span
            className={`profile-item ${
              currentTab === 2 && "profile-item-active"
            }`}
            onClick={() => {
              setCurrentTab(2);
            }}
          >
            Half Yearly Document
          </span>
          <span
            className={`profile-item ${
              currentTab === 3 && "profile-item-active"
            }`}
            onClick={() => {
              setCurrentTab(3);
            }}
          >
            Annual Tax Statements
          </span>
        </div>

        {currentTab === 0 && (
          <PropertyDocument getInvestmentList={getInvestmentList} />
        )}
        {currentTab === 1 && (
          <QuarterlyStatements getInvestmentList={getInvestmentList} />
        )}
        {currentTab === 2 && (
          <HalfYearlyDocument getInvestmentList={getInvestmentList} />
        )}
        {currentTab === 3 && (
          <AnnualTaxStatements getInvestmentList={getInvestmentList} />
        )}
      </div>
    </div>
  );
};

export default PropertyDoc;
