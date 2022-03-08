import React, { useEffect, useState } from "react";
import "./Financial.css";

const Financial = ({ getSingleProperties }) => {
  const [range, setRange] = useState(10);
  const [investedAmount, setInvestedAmount] = useState(
    getSingleProperties && getSingleProperties.property.purcahse_price
  );
  const [investedYear, setInvestedYear] = useState(
    getSingleProperties && getSingleProperties.property.property_term
  );
  const [investedReturn, setInvestedReturn] = useState(0);
  const [investedReturnPercentage, setInvestedReturnPercentage] = useState(0);

  useEffect(() => {
    calculateROI(range, investedAmount, investedYear);
  }, [range, investedAmount, investedYear]);

  const calculateROI = (range, investedAmount, investedYear) => {
    const invested =
      ((parseInt(investedAmount) * parseInt(range)) / 100) *
      parseInt(investedYear);
    setInvestedReturn(parseInt(investedAmount) + parseInt(invested));
    setInvestedReturnPercentage((invested / parseInt(investedAmount)) * 100);
  };

  return (
    <div className="financial-botam-wrap">
      <div
        dangerouslySetInnerHTML={{
          __html:
            getSingleProperties &&
            getSingleProperties.property &&
            getSingleProperties.property.financial,
        }}
      ></div>
      <div className="annual-rol-wrapper">
        <h4>
          <img
            src="/images/image_2021_12_18T11_00_32_995Z.png"
            alt=""
            style={{ marginRight: "10px", width: "40px", height: "40px" }}
          />{" "}
          Understanding Annual ROI
        </h4>
        <h6>Projected Annual ROI</h6>

        <input
          type="range"
          className="annualInputRange"
          min="5"
          max="50"
          value={range}
          onChange={(e) => {
            setRange(e.target.value);
            calculateROI(e.target.value, investedAmount, investedYear);
          }}
        />

        <div>
          <span style={{ fontWeight: "bold" }}>{range}%</span>
        </div>
        <div className="annualRolNumber">
          <div style={{ position: "relative" }}>
            <h6>I would like to invest</h6>
            <input
              type="number"
              name="investamount"
              value={investedAmount}
              onChange={(e) => {
                setInvestedAmount(e.target.value);
                calculateROI(range, e.target.value, investedYear);
              }}
              style={{ paddingLeft: "20px" }}
            />
            <span style={{ position: "absolute", left: "8px", top: "67px" }}>
              $
            </span>
          </div>
          <div>
            <h6>I would like to invest</h6>
            <select
              name="year"
              value={investedYear}
              onChange={(e) => {
                setInvestedYear(e.target.value);
                calculateROI(range, investedAmount, e.target.value);
              }}
            >
              <option value="1">1 Year</option>
              <option value="2">2 Years</option>
              <option value="3">3 Years</option>
              <option value="4">4 Years</option>
              <option value="5">5 Years</option>
              <option value="7">7 Years</option>
              <option value="10">10 Years</option>
            </select>
          </div>
        </div>
        <div className="annualRollBottom">
          <h6>Projected total returns:</h6>
          <h6>${investedReturn || "00"}</h6>
          <div className="buttonAnnual">
            {Math.floor(investedReturnPercentage) || 0}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financial;
