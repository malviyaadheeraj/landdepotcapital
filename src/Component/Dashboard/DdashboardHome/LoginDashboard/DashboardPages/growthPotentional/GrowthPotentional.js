import React from "react";
import "./growthPotentinal.css";

const GrowthPotentional = ({ calculatingAmount, allProperties }) => {
  return (
    <div className="growth-potentional-wrapper">
      <div className="growth-left">
        <h6 className="growth-title">Portfolio Summary</h6>
        <div className="growth-input-wrapper">
          <h6>Total</h6>
          <input type="range" className="growth-input" />
        </div>
        <div className="growth-input-wrapper">
          <h6>Ottowa</h6>
          <input type="range" className="growth-input" />
        </div>
      </div>
      <div className="growth-right">
        <div className="growth-right-heading">
          <h6>Total investment</h6>
          <span>${calculatingAmount}</span>
        </div>
        <div className="growth-right-heading">
          <h6>Number of properties</h6>
          <span>{allProperties}</span>
        </div>
        <div className="growth-right-button">
          <div className="growth-button-left">
            <h6>Average Age of Investment</h6>
            <h6>2 months</h6>
          </div>
          <div className="growth-button-left">
            <h6>Distributions*</h6>
            <h6>Nill</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthPotentional;
