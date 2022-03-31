import ClipboardJS from "clipboard";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./referalCode.css";
import {
  getMyReferal,
  getUserProfileData,
} from "../../../../../store/homeAction";
import {
  FacebookButton,
  FacebookCount,
  GooglePlusButton,
  GooglePlusCount,
} from "react-social";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const ReferalCode = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  new ClipboardJS(".btn");
  const getUserProfileDetails = useSelector(
    (state) => state.home.getUserProfileDetails
  );
  const getReferalUsers = useSelector((state) => state.home.getReferalUsers);
  const shareUrl = `http://capital.landdepotcapital.ca/#/singupForm/${
    getUserProfileDetails && getUserProfileDetails.referal_code
  }`;

  useEffect(() => {
    dispatch(getUserProfileData());
    dispatch(getMyReferal());
  }, [dispatch]);

  const copyCodeButton = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Referal Code</title>
      </Helmet>
      <div className="referal-wrapper">
        <h3 className="text-center">Share Your Link</h3>
        <p className="text-center">
          Copy your personal referal link and share it with your friends and
          followers
        </p>
        <label>Referal Link</label>
        <div className="input-group mb-3 referal-input">
          {show && <small className="copiedIcon">Copied</small>}
          <input
            type="text"
            id="foo"
            className="form-control"
            value={`http://capital.landdepotcapital.ca/#/singupForm/${
              getUserProfileDetails && getUserProfileDetails.referal_code
            }`}
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => e}
          />
          <button
            className="copybtn btn"
            id="basic-addon1"
            data-clipboard-target="#foo"
            onClick={copyCodeButton}
          >
            Copy Code
          </button>
        </div>
        <div className="d-flex justify-content-center py-3">
          <div className="p-2">
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon size={32} round />
              <span style={{ marginLeft: "10px", fontWeight: "500" }}>
                Send Via link on facebook
              </span>
            </FacebookShareButton>
          </div>
          <div className="p-2">
            <EmailShareButton url={shareUrl} body="body">
              <EmailIcon size={32} round />
              <span style={{ marginLeft: "10px", fontWeight: "500" }}>
                Send Via link on Email
              </span>
            </EmailShareButton>
          </div>
          <div className="p-2">
            <WhatsappShareButton url={shareUrl} separator=":: ">
              <WhatsappIcon size={32} round />
              <span style={{ marginLeft: "10px", fontWeight: "500" }}>
                Send Via link on Whatsapp
              </span>
            </WhatsappShareButton>
          </div>
        </div>

        <div className="property-detailswrap mt-4 fade-in-bottom">
          <table className="table">
            <thead className="tablehading-wrapper">
              <tr>
                <th className="tabelheadsline">First Name</th>
                <th className="tabelheadsline">Last Name</th>
                <th className="tabelheadsline">Email</th>
                <th className="tabelheadsline">Phone</th>
                <th className="tabelheadsline">Cradit Points</th>
              </tr>
            </thead>

            <tbody>
              {getReferalUsers &&
                getReferalUsers.map((item, key) => (
                  <tr className="tabel-row" key={key}>
                    <td className="proprty-data">
                      <b>{item.first_name}</b>
                    </td>
                    <td className="proprty-data">
                      <b>{item.last_name}</b>
                    </td>
                    <td className="proprty-data">
                      <b>{item.email}</b>
                    </td>
                    <td className="proprty-data">
                      <b>{item.mobile}</b>
                    </td>
                    <td className="proprty-data">
                      <b>${item.creadit_points}</b>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {/* 
      <div className="referal-users-wrapper ">
      <h5 className="referal-heading">Referal User List</h5>
      <div className="referal-users fade-in-bottom">
      {getReferalUsers &&
        getReferalUsers.map((item, key) => (
          <div className="referal-user" key={key}>
          <div className="referal-info">
          <h6>First Name :</h6>
          <span>{item.first_name}</span>
          </div>
          <div className="referal-info">
          <h6>Last Name : </h6>
          <span>{item.last_name}</span>
          </div>
          <div className="referal-info">
          <h6> Email : </h6>
          <span>{item.email}</span>
          </div>
          </div>
          ))}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default ReferalCode;
