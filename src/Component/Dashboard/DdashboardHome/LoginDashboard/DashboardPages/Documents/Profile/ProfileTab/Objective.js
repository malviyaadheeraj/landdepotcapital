import React from "react";
import "./Profiletabs.css";

const Objective = ({ profileValue, onInputChange, onProfileDataSubmit }) => {
  return (
    <>
      <div className="Objectibe-wrapper fade-in-bottom">
        <form onSubmit={(e) => onProfileDataSubmit(e, 1, true)}>
          <div className="Row">
            <div className="col-md-12">
              <label className="object-heading">
                Project annual income, before tax, of the majority shareholder.
                2021 tax year
              </label>
              <select
                className="select-input-wrap"
                onChange={(e) => onInputChange(e)}
                name="annual_income"
                value={profileValue.annual_income}
                required
              >
                <option value="">select</option>
                <option value="Less than $75,000">Less than $75,000</option>
                <option value="$75,000-$200,0000">$75,000-$200,0000</option>
                <option value="Greater than $200,000">
                  Greater than $200,000
                </option>
              </select>
            </div>
          </div>
          <div className="Row">
            <div className="col-md-12">
              <label className="object-heading">
                Majority shareholder’s total net assets. Net assets = total
                assets - total debt Assets = cash, public investments, private
                investments, real estate, etc.
              </label>

              <select
                className="select-input-wrap"
                onChange={(e) => onInputChange(e)}
                name="net_assets_of_share"
                value={profileValue.net_assets_of_share}
                required
              >
                <option value="">select</option>
                <option value="less than $400,000">less than $400,000</option>
                <option value="$400,000-$5Mn">$400,000-$5Mn</option>
                <option value="More than $5Mn">More than $5Mn</option>
              </select>
            </div>
          </div>
          <div className="Row">
            <div className="col-md-12">
              <label className="object-heading">
                What is your objective of investing?
              </label>

              <select
                className="select-input-wrap"
                onChange={(e) => onInputChange(e)}
                name="primary_investment_object"
                value={profileValue.primary_investment_object}
                required
              >
                <option value="">select</option>
                <option value="Capital appreciation">
                  Capital appreciation
                </option>
                <option value="Regular Cash flow">Regular Cash flow</option>
                <option value="Total return">Total return</option>
                <option value="Diversification">Diversification</option>
              </select>
            </div>
          </div>
          <div className="Row">
            <div className="col-md-12">
              <label className="object-heading">
                How long do you plan to hold your investment? Please note that
                this is based on the assumption that the investment succeeds
                your goals
              </label>

              <select
                className="select-input-wrap"
                onChange={(e) => onInputChange(e)}
                name="expected_investment_time"
                value={profileValue.expected_investment_time}
                required
              >
                <option value="">select</option>
                <option value="Less than 1 Year">Less than 1 Year</option>
                <option value="1-3 Year">1-3 Year</option>
                <option value="3-5 Year">3-5 Year</option>
                <option value="5-10 Year">5-10 Year</option>
                <option value="Greater than 10 Years">
                  Greater than 10 Years
                </option>
              </select>
            </div>
          </div>

          <div className="Row">
            <div className="col-md-12">
              <label className="object-heading">
                How much do you plan to invest this calendar year?
              </label>
              <select
                className="select-input-wrap"
                onChange={(e) => onInputChange(e)}
                name="invest_in_real_estate"
                value={profileValue.invest_in_real_estate}
                required
              >
                <option value="">select</option>
                <option value="Less than $15,000">Less than $15,000</option>
                <option value="$15,000-$25,000">$15,000-$25,000</option>
                <option value="Greater than $25,000">
                  Greater than $25,000
                </option>
              </select>
            </div>
          </div>

          <div className="Row">
            <div className="col-md-12">
              <label className="object-heading">
                What previous experience do you have with investing?
              </label>

              <select
                className="select-input-wrap"
                onChange={(e) => onInputChange(e)}
                name="investing_instruments"
                value={profileValue.investing_instruments}
                required
              >
                <option value="">select</option>
                <option value="Bonds">Bonds</option>
                <option value="Equity[stoks/ETFS/Mutual Funds">
                  Equity stoks/ETFS/Mutual Funds
                </option>
                <option value="Real Estate">Real Estate</option>
              </select>
            </div>
          </div>

          <div className="Row">
            <div className="col-md-12">
              <label className="object-heading">
                How familiar are you with the concept of risk and return?
              </label>
              <p>
                The concept of risk and return states that an increased risk can
                mean an increased potential return. Therefore, low risk can be
                associated with low returns and high risk can be associated with
                high expected returns.
              </p>

              <select
                className="select-input-wrap"
                onChange={(e) => onInputChange(e)}
                name="concept_of_risk"
                value={profileValue.concept_of_risk}
                required
              >
                <option value="">select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <div className="Row">
            <div className="col-md-12">
              <label className="object-heading">
                What is your risk tolerance? What ability do you have to
                incorporate risk into your investment portfolio?
              </label>
              <ul className="objectiveTab">
                <li>
                  High risk tolerance = high level of uncertainty and loss in
                  exchange for a potentially higher return
                </li>
                <li>
                  Medium risk tolerance = medium level of uncertainty and loss
                  in exchange for a medium potential return
                </li>
                <li>
                  Low risk tolerance = low level of uncertainty in exchange for
                  a low potential return
                </li>
              </ul>
              <select
                className="select-input-wrap"
                onChange={(e) => onInputChange(e)}
                name="absorb_investment_risk"
                value={profileValue.absorb_investment_risk}
                required
              >
                <option value="">select</option>
                <option value="High Risk">High Risk</option>
                <option value="Medium Risk">Medium Risk</option>
                <option value="low Risk">low Risk</option>
              </select>
            </div>
          </div>

          <div className="Row">
            <div className="col-md-12">
              <label className="object-heading">
                Will the funds for your investment with us be personal or
                borrowed?
              </label>

              <select
                className="select-input-wrap"
                onChange={(e) => onInputChange(e)}
                name="investments_with_us"
                value={profileValue.investments_with_us}
                required
              >
                <option value="">select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <button type="submit" className="save-btn">
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default Objective;
