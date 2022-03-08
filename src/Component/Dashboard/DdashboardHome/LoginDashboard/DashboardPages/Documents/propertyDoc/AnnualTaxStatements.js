import React from "react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

const AnnualTaxStatements = ({ getInvestmentList }) => {
  const dateCreatedAt = dateFormat(
    getInvestmentList && getInvestmentList.created_at,
    "dd mmm,yy"
  );

  return (
    <div className="property-detailswrap mt-4">
      <table className="table ">
        <thead className="tablehading-wrapper">
          <tr>
            <th className="tabelheadsline">Year</th>
            <th className="tabelheadsline">Property Name</th>
            <th className="tabelheadsline">Document Name</th>
            <th className="tabelheadsline">Document Status</th>
            <th className="tabelheadsline">Action</th>
          </tr>
        </thead>

        <tbody>
          {getInvestmentList &&
            getInvestmentList.map((investList, key) => (
              <tr className="tabel-row" key={key}>
                <td className="proprty-data">
                  <b>{dateCreatedAt}</b>
                </td>
                <th className="tablebody">
                  <b>{investList.property[0] && investList.property[0].name}</b>
                  <p>
                    {investList.property[0] && investList.property[0].address}
                  </p>
                </th>
                <td className="proprty-data">
                  <b>
                    {investList.property[0] &&
                      investList.property[0].annual_document_name}
                  </b>
                </td>
                <td className="proprty-data">
                  {investList.property[0] &&
                  investList.property[0].annual_document ? (
                    <div className="buttonProperty btn btn-success">
                      Complete
                    </div>
                  ) : (
                    <div className="buttonProperty btn btn-danger">Pending</div>
                  )}
                </td>
                <td className="proprty-data">
                  {investList.property[0] &&
                  investList.property[0].annual_document ? (
                    <a
                      href={
                        investList.property[0] &&
                        investList.property[0].annual_document
                      }
                      download
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      <button className="download-btn">Download</button>
                    </a>
                  ) : (
                    <Link to="#">
                      <button
                        className="download-btn"
                        style={{ cursor: "not-allowed" }}
                      >
                        Download
                      </button>
                    </Link>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnnualTaxStatements;
