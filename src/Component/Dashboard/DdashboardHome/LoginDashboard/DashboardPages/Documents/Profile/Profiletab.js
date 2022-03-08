import React, { useEffect, useState } from "react";
import "./Profiletab.css";
import Investpage from "./Investpage";
import ProfileInfo from "./ProfileInfo";
import Document from "./ProfileTab/Document";
import InsiderStaus from "./ProfileTab/InsiderStaus";
import Objective from "./ProfileTab/Objective";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getUserProfileData,
  onUpdateUserData,
} from "../../../../../../../store/homeAction";

const Profiletab = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [values, setValues] = useState({});
  const [currentTab, setCurrentTab] = useState(4);
  const [profileInfo, setProfileInfo] = useState();
  const [objective, setObjective] = useState();
  const [insiderStatus, setInsiderStatus] = useState();
  const [document, setDocument] = useState();
  const [message, setMessage] = useState();
  const [residentalState, setResidentalState] = useState();
  const [employmentState, setEmploymentState] = useState();
  const getUserProfileDetails = useSelector(
    (state) => state.home.getUserProfileDetails
  );
  const getUpdateUserData = useSelector(
    (state) => state.home.getUpdateUserData
  );
  const [certificateFile, setCertificateFile] = useState("");
  const [dentificationFile, setDentificationFile] = useState("");

  useEffect(() => {
    dispatch(getUserProfileData());
  }, [dispatch]);

  useEffect(() => {
    if (getUserProfileDetails) {
      setValues(getUserProfileDetails);

      if (
        getUserProfileDetails.first_name === "" ||
        getUserProfileDetails.first_name === null ||
        getUserProfileDetails.first_name === undefined ||
        getUserProfileDetails.middle_name === "" ||
        getUserProfileDetails.middle_name === null ||
        getUserProfileDetails.middle_name === undefined ||
        getUserProfileDetails.last_name === "" ||
        getUserProfileDetails.last_name === null ||
        getUserProfileDetails.last_name === undefined ||
        getUserProfileDetails.dob === "" ||
        getUserProfileDetails.dob === null ||
        getUserProfileDetails.dob === undefined ||
        getUserProfileDetails.social_insurance_name === "" ||
        getUserProfileDetails.social_insurance_name === null ||
        getUserProfileDetails.social_insurance_name === undefined ||
        getUserProfileDetails.marital_status === "" ||
        getUserProfileDetails.marital_status === null ||
        getUserProfileDetails.marital_status === undefined ||
        getUserProfileDetails.number_of_dependents === "" ||
        getUserProfileDetails.number_of_dependents === null ||
        getUserProfileDetails.number_of_dependents === undefined ||
        getUserProfileDetails.email === "" ||
        getUserProfileDetails.email === null ||
        getUserProfileDetails.email === undefined ||
        getUserProfileDetails.mobile === "" ||
        getUserProfileDetails.mobile === null ||
        getUserProfileDetails.mobile === undefined ||
        getUserProfileDetails.citizenship === "" ||
        getUserProfileDetails.citizenship === null ||
        getUserProfileDetails.citizenship === undefined ||
        getUserProfileDetails.canadian_permanet === "" ||
        getUserProfileDetails.canadian_permanet === null ||
        getUserProfileDetails.canadian_permanet === undefined ||
        getUserProfileDetails.residential_street_number === "" ||
        getUserProfileDetails.residential_street_number === null ||
        getUserProfileDetails.residential_street_number === undefined ||
        getUserProfileDetails.residential_unit_number === "" ||
        getUserProfileDetails.residential_unit_number === null ||
        getUserProfileDetails.residential_unit_number === undefined ||
        getUserProfileDetails.residential_street_name === "" ||
        getUserProfileDetails.residential_street_name === null ||
        getUserProfileDetails.residential_street_name === undefined ||
        getUserProfileDetails.residential_city === "" ||
        getUserProfileDetails.residential_city === null ||
        getUserProfileDetails.residential_city === undefined ||
        getUserProfileDetails.residential_country === "" ||
        getUserProfileDetails.residential_country === null ||
        getUserProfileDetails.residential_country === undefined ||
        getUserProfileDetails.residential_state === "" ||
        getUserProfileDetails.residential_state === null ||
        getUserProfileDetails.residential_state === undefined ||
        getUserProfileDetails.residential_postal_code === "" ||
        getUserProfileDetails.residential_postal_code === null ||
        getUserProfileDetails.residential_postal_code === undefined ||
        getUserProfileDetails.employment_street_number === "" ||
        getUserProfileDetails.employment_street_number === null ||
        getUserProfileDetails.employment_street_number === undefined ||
        getUserProfileDetails.employment_unit_number === "" ||
        getUserProfileDetails.employment_unit_number === null ||
        getUserProfileDetails.employment_unit_number === undefined ||
        getUserProfileDetails.employment_street_name === "" ||
        getUserProfileDetails.employment_street_name === null ||
        getUserProfileDetails.employment_street_name === undefined ||
        getUserProfileDetails.employment_city === "" ||
        getUserProfileDetails.employment_city === null ||
        getUserProfileDetails.employment_city === undefined ||
        getUserProfileDetails.employment_country === "" ||
        getUserProfileDetails.employment_country === null ||
        getUserProfileDetails.employment_country === undefined ||
        getUserProfileDetails.employment_state === "" ||
        getUserProfileDetails.employment_state === null ||
        getUserProfileDetails.employment_state === undefined ||
        getUserProfileDetails.employment_postal_code === "" ||
        getUserProfileDetails.employment_postal_code === null ||
        getUserProfileDetails.employment_postal_code === undefined
      ) {
        setProfileInfo(false);
      } else {
        setProfileInfo(true);
      }
      if (
        getUserProfileDetails.annual_income === "" ||
        getUserProfileDetails.annual_income === null ||
        getUserProfileDetails.annual_income === undefined ||
        getUserProfileDetails.net_assets_of_share === "" ||
        getUserProfileDetails.net_assets_of_share === null ||
        getUserProfileDetails.net_assets_of_share === undefined ||
        getUserProfileDetails.primary_investment_object === "" ||
        getUserProfileDetails.primary_investment_object === null ||
        getUserProfileDetails.primary_investment_object === undefined ||
        getUserProfileDetails.expected_investment_time === "" ||
        getUserProfileDetails.expected_investment_time === null ||
        getUserProfileDetails.expected_investment_time === undefined ||
        getUserProfileDetails.invest_in_real_estate === "" ||
        getUserProfileDetails.invest_in_real_estate === null ||
        getUserProfileDetails.invest_in_real_estate === undefined ||
        getUserProfileDetails.investing_instruments === "" ||
        getUserProfileDetails.investing_instruments === null ||
        getUserProfileDetails.investing_instruments === undefined ||
        getUserProfileDetails.concept_of_risk === "" ||
        getUserProfileDetails.concept_of_risk === null ||
        getUserProfileDetails.concept_of_risk === undefined ||
        getUserProfileDetails.absorb_investment_risk === "" ||
        getUserProfileDetails.absorb_investment_risk === null ||
        getUserProfileDetails.absorb_investment_risk === undefined ||
        getUserProfileDetails.investments_with_us === "" ||
        getUserProfileDetails.investments_with_us === null ||
        getUserProfileDetails.investments_with_us === undefined
      ) {
        setObjective(false);
      } else {
        setObjective(true);
      }

      if (
        getUserProfileDetails.insider_question1 === "" ||
        getUserProfileDetails.insider_question1 === null ||
        getUserProfileDetails.insider_question1 === undefined ||
        getUserProfileDetails.corporation_member_name === "" ||
        getUserProfileDetails.corporation_member_name === null ||
        getUserProfileDetails.corporation_member_name === undefined ||
        getUserProfileDetails.corporation_primary_occupation === "" ||
        getUserProfileDetails.corporation_primary_occupation === null ||
        getUserProfileDetails.corporation_primary_occupation === undefined ||
        getUserProfileDetails.reason_of_information === "" ||
        getUserProfileDetails.reason_of_information === null ||
        getUserProfileDetails.reason_of_information === undefined ||
        getUserProfileDetails.beneficial_ownership_name === "" ||
        getUserProfileDetails.beneficial_ownership_name === null ||
        getUserProfileDetails.beneficial_ownership_name === undefined ||
        getUserProfileDetails.beneficial_ownership_address === "" ||
        getUserProfileDetails.beneficial_ownership_address === null ||
        getUserProfileDetails.beneficial_ownership_address === undefined ||
        getUserProfileDetails.beneficial_ownership_primary_occupation === "" ||
        getUserProfileDetails.beneficial_ownership_primary_occupation ===
          null ||
        getUserProfileDetails.beneficial_ownership_primary_occupation ===
          undefined ||
        getUserProfileDetails.beneficial_ownership === "" ||
        getUserProfileDetails.beneficial_ownership === null ||
        getUserProfileDetails.beneficial_ownership === undefined ||
        getUserProfileDetails.foreign_owernership === "" ||
        getUserProfileDetails.foreign_owernership === null ||
        getUserProfileDetails.foreign_owernership === undefined ||
        getUserProfileDetails.another_individual === "" ||
        getUserProfileDetails.another_individual === null ||
        getUserProfileDetails.another_individual === undefined ||
        getUserProfileDetails.other_individuals === "" ||
        getUserProfileDetails.other_individuals === null ||
        getUserProfileDetails.other_individuals === undefined ||
        getUserProfileDetails.other_individuals_interest === "" ||
        getUserProfileDetails.other_individuals_interest === null ||
        getUserProfileDetails.other_individuals_interest === undefined ||
        getUserProfileDetails.foreign_person === "" ||
        getUserProfileDetails.foreign_person === null ||
        getUserProfileDetails.foreign_person === undefined
      ) {
        setInsiderStatus(false);
      } else {
        setInsiderStatus(true);
      }

      if (
        getUserProfileDetails.dentification_document === "" ||
        getUserProfileDetails.dentification_document === null ||
        getUserProfileDetails.dentification_document === undefined ||
        getUserProfileDetails.certificate === "" ||
        getUserProfileDetails.certificate === null ||
        getUserProfileDetails.certificate === undefined
      ) {
        setDocument(false);
      } else {
        setDocument(true);
      }
    }
  }, [getUserProfileDetails]);

  setTimeout(() => {
    if (getUpdateUserData && getUpdateUserData.status === true) {
      window.location.reload();
    }
  }, 500);

  const onInvestProperty = () => {
    if (
      profileInfo === true &&
      objective === true &&
      insiderStatus === true &&
      document === true
    ) {
      history.push("/paymentstep");
    } else {
      setMessage("please fill all the fields");
    }
  };

  const onInputChange = (e) => {
    if (e.target.value === "provinceState") {
      setValues({ ...values, [e.target.name]: "" });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  const onResidentalChange = (e) => {
    if (e.target.value === "provinceState") {
      setResidentalState("Sorry, We are working only these 4 state");
    } else {
      setResidentalState("");
    }
  };

  const onEmploymentChange = (e) => {
    if (e.target.value === "provinceState") {
      setEmploymentState("Sorry, We are working only these 4 state");
    } else {
      setEmploymentState("");
    }
  };

  const onDataSubmit = (e, type, value) => {
    e.preventDefault();

    setCurrentTab(currentTab + 1);

    if (type === 0 && value === true) {
      setProfileInfo(true);
    }
    if (type === 1 && value === true) {
      setObjective(true);
    }
    if (type === 2 && value === true) {
      setInsiderStatus(true);
    }
    if (type === 3 && value === true) {
      setDocument(true);
    }

    let formData = new FormData();
    formData.append("first_name", values.first_name);
    formData.append("middle_name", values.middle_name);
    formData.append("last_name", values.last_name);
    formData.append("dob", values.dob);
    formData.append("social_insurance_name", values.social_insurance_name);
    formData.append("gender", values.gender);
    formData.append("marital_status", values.marital_status);
    formData.append("number_of_dependents", values.number_of_dependents);
    formData.append("email", values.email);
    formData.append("mobile", values.mobile);
    formData.append("citizenship", values.citizenship);
    formData.append("canadian_permanet", values.canadian_permanet);
    formData.append(
      "residential_street_number",
      values.residential_street_number
    );
    formData.append("residential_unit_number", values.residential_unit_number);
    formData.append("residential_street_name", values.residential_street_name);
    formData.append("residential_city", values.residential_city);
    formData.append("residential_country", values.residential_country);
    formData.append("residential_state", values.residential_state);
    formData.append("residential_postal_code", values.residential_postal_code);
    formData.append(
      "employment_street_number",
      values.employment_street_number
    );
    formData.append("employment_unit_number", values.employment_unit_number);
    formData.append("employment_street_name", values.employment_street_name);
    formData.append("employment_city", values.employment_city);
    formData.append("employment_country", values.employment_country);
    formData.append("employment_state", values.employment_state);
    formData.append("employment_postal_code", values.employment_postal_code);
    formData.append("annual_income", values.annual_income);
    formData.append("net_assets_of_share", values.net_assets_of_share);
    formData.append(
      "primary_investment_object",
      values.primary_investment_object
    );
    formData.append(
      "expected_investment_time",
      values.expected_investment_time
    );
    formData.append("invest_in_real_estate", values.invest_in_real_estate);
    formData.append("investing_instruments", values.investing_instruments);
    formData.append("concept_of_risk", values.concept_of_risk);
    formData.append("absorb_investment_risk", values.absorb_investment_risk);
    formData.append("investments_with_us", values.investments_with_us);
    formData.append("insider_question1", values.insider_question1);
    formData.append("corporation_member_name", values.corporation_member_name);
    formData.append(
      "corporation_primary_occupation",
      values.corporation_primary_occupation
    );
    formData.append("reason_of_information", values.reason_of_information);
    formData.append(
      "beneficial_ownership_name",
      values.beneficial_ownership_name
    );
    formData.append(
      "beneficial_ownership_address",
      values.beneficial_ownership_address
    );
    formData.append(
      "beneficial_ownership_primary_occupation",
      values.beneficial_ownership_primary_occupation
    );
    formData.append("beneficial_ownership", values.beneficial_ownership);
    formData.append("foreign_person", values.foreign_person);
    formData.append("another_individual", values.another_individual);
    formData.append("other_individuals", values.other_individuals);
    formData.append(
      "other_individuals_interest",
      values.other_individuals_interest
    );
    formData.append("foreign_owernership", values.foreign_owernership);
    formData.append("dentification_document", dentificationFile);
    formData.append("certificate", certificateFile);

    if (currentTab === 3) {
      dispatch(onUpdateUserData(formData));
    }
  };

  return (
    <div className="Property-wraper">
      <div className="Property-tabwraper">
        <span
          className={`profile-item ${
            currentTab === 0 && "profile-item-active"
          }`}
          onClick={() => setCurrentTab(0)}
        >
          Personal Information
        </span>
        <span
          className={`profile-item ${
            currentTab === 1 && "profile-item-active"
          }`}
          onClick={() => setCurrentTab(1)}
        >
          Objective and Experience
        </span>
        <span
          className={`profile-item  ${
            currentTab === 2 && "profile-item-active"
          }`}
          onClick={() => setCurrentTab(2)}
        >
          Insider staus & AML
        </span>
        <span
          className={`profile-item ${
            currentTab === 3 && "profile-item-active"
          }`}
          onClick={() => setCurrentTab(3)}
        >
          Documents
        </span>
        <span
          className={`profile-item ${
            currentTab === 4 && "profile-item-active"
          }`}
          onClick={() => setCurrentTab(4)}
        >
          Review
        </span>
      </div>

      {currentTab === 0 && (
        <ProfileInfo
          profileValue={values}
          onInputChange={onInputChange}
          onProfileDataSubmit={onDataSubmit}
          residentalMessage={residentalState}
          employmentMessage={employmentState}
          onResidentalChange={onResidentalChange}
          onEmploymentChange={onEmploymentChange}
        />
      )}
      {currentTab === 1 && (
        <Objective
          profileValue={values}
          onInputChange={onInputChange}
          onProfileDataSubmit={onDataSubmit}
        />
      )}
      {currentTab === 2 && (
        <InsiderStaus
          profileValue={values}
          onInputChange={onInputChange}
          onProfileDataSubmit={onDataSubmit}
        />
      )}
      {currentTab === 3 && (
        <Document
          onProfileDataSubmit={onDataSubmit}
          profileValue={values}
          certificateFile={certificateFile}
          onChangeCertificateFile={(file) => setCertificateFile(file)}
          dentificationFile={dentificationFile}
          onChangeDentificationFile={(file) => setDentificationFile(file)}
        />
      )}
      {currentTab === 4 && (
        <Investpage
          setCurrentTab={setCurrentTab}
          profileInfo={profileInfo}
          objective={objective}
          insiderStatus={insiderStatus}
          document={document}
          investProperty={onInvestProperty}
          message={message}
        />
      )}
    </div>
  );
};

export default Profiletab;
