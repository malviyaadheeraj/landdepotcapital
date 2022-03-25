import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import "./LoginDashbord.css";
import MyInvesstment from "./DashboardPages/MyInvesstment";
import PropertyDoc from "./DashboardPages/Documents/propertyDoc/PropertyDoc";
import Profiletab from "./DashboardPages/Documents/Profile/Profiletab";
import GrowthPotentional from "./DashboardPages/growthPotentional/GrowthPotentional";
import { getMyInvestList } from "../../../../store/homeAction";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";

const LoginDashboard = ({ match }) => {
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState("my-investment");
  const getInvestmentList = useSelector(
    (state) => state.home.getInvestmentList
  );

  useEffect(() => {
    dispatch(getMyInvestList());
  }, [dispatch]);

  useEffect(() => {
    setCurrentTab(match.params.id);
  }, [match]);

  const calculateAmount = () => {
    let total = 0;
    if (getInvestmentList) {
      for (let i = 0; i < getInvestmentList.length; i++) {
        const shareAmount =
          parseInt(getInvestmentList[i].share) *
          parseInt(getInvestmentList[i].property[0].per_share_price);
        total = total + shareAmount;
      }
    }

    return total;
  };

  return (
    <>
      <Helmet>
        <title>Login Dashboard</title>
      </Helmet>
      <div className="LoginDashbord-wrapper">
        <div className="container">
          <div className="sidebarwrap">
            <Sidebar setCurrentTab={setCurrentTab} currentTab={currentTab} />
          </div>
          <div className="Right-sideWrapper">
            {currentTab === "my-investment" && (
              <MyInvesstment setCurrentTab={setCurrentTab} />
            )}
            {currentTab === "my-documents" && <PropertyDoc />}
            {currentTab === "my-profile" && <Profiletab />}
            {currentTab === "growth" && (
              <GrowthPotentional
                allProperties={
                  0 || (getInvestmentList && getInvestmentList.length)
                }
                calculatingAmount={calculateAmount()}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginDashboard;
