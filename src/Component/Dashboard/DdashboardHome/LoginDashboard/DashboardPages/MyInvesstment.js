import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMyInvestList } from "../../../../../store/homeAction";
import "./MyInvest.css";
import dateFormat from "dateformat";
import GrowthPotentional from "./growthPotentional/GrowthPotentional";

const MyInvesstment = ({ setCurrentTab }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const pageNumbers = [];
  const getInvestmentList = useSelector(
    (state) => state.home.getInvestmentList
  );

  useEffect(() => {
    dispatch(getMyInvestList());
  }, [dispatch]);

  const dateCreatedAt = dateFormat(
    getInvestmentList && getInvestmentList.created_at,
    "dd mmm,yy"
  );

  for (
    let i = 1;
    i <=
    Math.ceil(getInvestmentList && getInvestmentList.length / postsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentInvestList =
    getInvestmentList &&
    getInvestmentList.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

  const calculateShare = () => {
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
      <div className="Investment-wrapeer">
        <div className="invastment-tabwraper">
          <ul className="invastment-tabwrap">
            <li className="tabswraping">
              <img src="/images/walle.png" alt="#" className="img-fluid" />
              <p className="tabs-details">
                <b>${calculateAmount()}</b>
                <br />
                <label>Total Investment</label>
              </p>
            </li>

            <li className="tabswraping">
              <img src="/images/money.png" alt="#" className="img-fluid" />
              <p className="tabs-details">
                <b>{0 || (getInvestmentList && getInvestmentList.length)}</b>
                <br />
                <label>Number Of Properties</label>
              </p>
            </li>
          </ul>
        </div>
        {/* <GrowthPotentional
          calculatingAmount={calculateAmount()}
          allProperties={0 || (getInvestmentList && getInvestmentList.length)}
        /> */}
        <div className="property-detailswrap" style={{ overflowX: "auto" }}>
          <table className="table data-scrolls ">
            <thead className="tablehading-wrapper">
              <tr>
                <th className="tabelheadsline">Property Name</th>
                <th className="tabelheadsline">Year Bought</th>
                <th className="tabelheadsline">Investment Amount</th>
                <th className="tabelheadsline">Share Alloted</th>
                <th className="tabelheadsline">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentInvestList &&
                currentInvestList.map((investList, key) => (
                  <tr className="tabel-row" key={key}>
                    <th className="tablebody">
                      <p>
                        {investList.property[0].name}
                        <br />
                        {investList.property[0].prime_location}
                        <br />
                        <span
                          style={{ textDecoration: "none" }}
                          onClick={() =>
                            history.push(`/invest-details/${investList.id}`)
                          }
                        >
                          <div
                            className="viewDetails-link"
                            onClick={() => setCurrentTab("property-details")}
                          >
                            View Details
                          </div>
                        </span>
                      </p>
                    </th>
                    <td className="tabledata">
                      <b>{dateCreatedAt}</b>
                    </td>
                    <td className="tabledata">
                      <b>
                        $
                        {`${investList.share}` *
                          `${investList.property[0].per_share_price}`}
                      </b>
                    </td>
                    <td className="tabledata">${investList.share}</td>

                    <td className="tabledata">
                      {parseInt(investList && investList.payment_status) ===
                      2 ? (
                        <div className="buttonProperty btn btn-success">
                          Complete
                        </div>
                      ) : (
                        <div className="buttonProperty btn btn-danger">
                          Pending
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              <tr className="tabel-row">
                <th>
                  <b>Total</b>
                </th>
                <td colSpan="1"></td>
                <td colSpan="1">
                  <b>${calculateAmount()}</b>
                </td>
                <td>
                  <b>${calculateShare()}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row d-flex align-items-center justify-content-center mt-5">
          <div className="col d-flex align-items-center justify-content-center">
            <ul className=" mb-4">
              {pageNumbers.length > 10 && (
                <>
                  {pageNumbers.map((number) => (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      className="prevButton"
                    >
                      {number}
                    </button>
                  ))}
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyInvesstment;
