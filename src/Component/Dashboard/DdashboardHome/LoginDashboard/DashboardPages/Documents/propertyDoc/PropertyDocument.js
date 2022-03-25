import React from "react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import Helmet from "react-helmet";

const PropertyDocument = ({ getInvestmentList }) => {
  const dateCreatedAt = dateFormat(
    getInvestmentList && getInvestmentList.created_at,
    "dd mmm,yy"
  );

  return (
    <>
      <Helmet>
        <title>Property Document</title>
      </Helmet>
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
                <>
                  {parseInt(investList.payment_status) === 2 && (
                    <>
                      <tr className="tabel-row" key={key}>
                        <td className="proprty-data">
                          <b>{dateCreatedAt}</b>
                        </td>
                        <th className="tablebody">
                          <b>
                            {investList.property[0] &&
                              investList.property[0].name}
                          </b>
                          <p>
                            {investList.property[0] &&
                              investList.property[0].address}
                          </p>
                        </th>
                        <td className="proprty-data">
                          <b>{investList && investList.signed_document_name}</b>
                        </td>
                        <td className="proprty-data">
                          {investList && investList.signed_document ? (
                            <div className="buttonProperty btn btn-success">
                              Complete
                            </div>
                          ) : (
                            <div className="buttonProperty btn btn-danger">
                              Pending
                            </div>
                          )}
                        </td>
                        <td className="proprty-data">
                          {investList && investList.signed_document ? (
                            <a
                              href={investList && investList.signed_document}
                              download
                              target="_blank"
                              rel="noreferrer"
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

                      <tr className="tabel-row" key={key}>
                        <td className="proprty-data">
                          <b>{dateCreatedAt}</b>
                        </td>
                        <th className="tablebody">
                          <b>
                            {investList.property[0] &&
                              investList.property[0].name}
                          </b>
                          <p>
                            {investList.property[0] &&
                              investList.property[0].address}
                          </p>
                        </th>
                        <td className="proprty-data">
                          <b>
                            {investList && investList.payment_certificate_name}
                          </b>
                        </td>
                        <td className="proprty-data">
                          {investList && investList.payment_certificate ? (
                            <div className="buttonProperty btn btn-success">
                              Complete
                            </div>
                          ) : (
                            <div className="buttonProperty btn btn-danger">
                              Pending
                            </div>
                          )}
                        </td>
                        <td className="proprty-data">
                          {investList && investList.payment_certificate ? (
                            <a
                              href={
                                investList && investList.payment_certificate
                              }
                              download
                              target="_blank"
                              rel="noreferrer"
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
                    </>
                  )}
                </>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PropertyDocument;
