import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesData } from "../../../../../../../store/homeAction";

const ProfileInfo = ({
  profileValue,
  onInputChange,
  onProfileDataSubmit,
  residentalMessage,
  employmentMessage,
  onResidentalChange,
  onEmploymentChange,
}) => {
  const dispatch = useDispatch();
  const getCountries = useSelector((state) => state.home.getCountries);

  useEffect(() => {
    dispatch(getCountriesData());
  }, [dispatch]);

  return (
    <>
      <div className="profileform-wraper fade-in-bottom">
        <form onSubmit={(e) => onProfileDataSubmit(e, 0, true)}>
          <div className="profileinpt-wrap">
            <div className="inpt-wrapper mb-3 ">
              <input
                className="persnol-info-input"
                type="text"
                placeholder="First Name"
                value={profileValue.first_name}
                name="first_name"
                onChange={(e) => onInputChange(e)}
                required
              />
              <input
                className="persnol-info-input"
                type="text"
                placeholder="Middle Name"
                value={profileValue.middle_name}
                name="middle_name"
                onChange={(e) => onInputChange(e)}
                required
              />
              <input
                type="text"
                className="persnol-info-input"
                placeholder="Last Name"
                value={profileValue.last_name}
                onChange={(e) => onInputChange(e)}
                name="last_name"
                required
              />
            </div>
            <div className="inpt-wrapper mb-3 ">
              <input
                type="date"
                className="persnol-info-input"
                placeholder="DOB"
                value={profileValue.dob}
                name="dob"
                onChange={(e) => onInputChange(e)}
                required
              />
              <input
                className="persnol-info-input"
                type="number"
                min="0"
                placeholder="Social insurance number(SIN)"
                value={profileValue.social_insurance_name}
                onChange={(e) => onInputChange(e)}
                onWheel={(e) => e.target.blur()}
                name="social_insurance_name"
                required
              />

              <select
                className="persnol-info-input"
                onChange={(e) => onInputChange(e)}
                name="gender"
                value={profileValue.gender}
                required
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="inpt-wrapper mb-3 ">
              <select
                className="persnol-info-input"
                onChange={(e) => onInputChange(e)}
                name="marital_status"
                value={profileValue.marital_status}
                required
              >
                <option value="">Marital Status</option>
                <option value="Married">Married</option>
                <option value="Unmarried">Unmarried</option>
              </select>
              <input
                className="persnol-info-input"
                type="number"
                min="0"
                placeholder="Number of dependents"
                value={profileValue.number_of_dependents}
                onChange={(e) => onInputChange(e)}
                onWheel={(e) => e.target.blur()}
                name="number_of_dependents"
                required
              />
              <input
                className="persnol-info-input"
                placeholder="Email Address"
                value={profileValue.email}
                name="email"
                style={{ color: "rgba(0,0,0,0.6)" }}
                disabled
              />
            </div>
            <div className="inpt-wrapper mb-4">
              <input
                className="persnol-info-input"
                type="number"
                min="0"
                placeholder="Phone"
                value={profileValue.mobile}
                onChange={(e) => onInputChange(e)}
                onWheel={(e) => e.target.blur()}
                name="mobile"
                required
              />
              <select
                className="persnol-info-input"
                onChange={(e) => onInputChange(e)}
                name="citizenship"
                value={profileValue.citizenship}
                required
              >
                <option value=""> Citizenship</option>
                {getCountries &&
                  getCountries.map((country, key) => (
                    <option key={key} value={country.name}>
                      {country.name}
                    </option>
                  ))}
              </select>
              <select
                className="persnol-info-input"
                onChange={(e) => onInputChange(e)}
                name="canadian_permanet"
                value={profileValue.canadian_permanet}
                required
              >
                <option value="">Your status in canada</option>
                <option value="Student">Student</option>
                <option value="Work permit">Work permit</option>
                <option value="PR">PR</option>
                <option value="Citizenship">Citizenship</option>
                <option value="Refugee">Refugee</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <label className="form-currentline">
              Current Residential Address
            </label>
            <div className="inpt-wrapper mb-3 ">
              <input
                className="persnol-info-input"
                type="number"
                min="0"
                placeholder="Street Number"
                value={profileValue.residential_street_number}
                onChange={(e) => onInputChange(e)}
                onWheel={(e) => e.target.blur()}
                name="residential_street_number"
                required
              />
              <input
                className="persnol-info-input"
                type="number"
                min="0"
                placeholder="Unit Number"
                value={profileValue.residential_unit_number}
                onChange={(e) => onInputChange(e)}
                onWheel={(e) => e.target.blur()}
                name="residential_unit_number"
              />
              <input
                type="text"
                className="persnol-info-input"
                placeholder="Street Name"
                value={profileValue.residential_street_name}
                onChange={(e) => onInputChange(e)}
                name="residential_street_name"
                required
              />
            </div>
            <div className="inpt-wrapper mb-2">
              <input
                className="persnol-info-input"
                type="text"
                placeholder="City"
                value={profileValue.residential_city}
                onChange={(e) => onInputChange(e)}
                name="residential_city"
                required
              />
              <input
                className="persnol-info-input"
                type="text"
                placeholder="Country"
                value={profileValue.residential_country}
                onChange={(e) => onInputChange(e)}
                name="residential_country"
                required
              />
              <select
                className="persnol-info-input"
                onChange={(e) => {
                  onInputChange(e);
                  onResidentalChange(e);
                }}
                name="residential_state"
                value={profileValue.residential_state}
                required
              >
                <option value="">Province/state</option>
                <option value="Ontario">Ontario</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Alberta">Alberta</option>
                <option value="Nova scotia">Nova scotia</option>
                <option value="provinceState">Other</option>
              </select>
              <small className="inptWrapperSmall">{residentalMessage}</small>
              <input
                type="text"
                className="postalinpt-wrap"
                name="residential_postal_code"
                placeholder="Postal Code"
                value={profileValue.residential_postal_code}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <label className="form-currentline">Employment</label>
            <div className="inpt-wrapper mb-3 ">
              <input
                className="persnol-info-input"
                type="number"
                min="0"
                placeholder="Street Number"
                value={profileValue.employment_street_number}
                onChange={(e) => onInputChange(e)}
                onWheel={(e) => e.target.blur()}
                name="employment_street_number"
                required
              />
              <input
                className="persnol-info-input"
                type="number"
                min="0"
                placeholder="Unit Number"
                value={profileValue.employment_unit_number}
                onChange={(e) => onInputChange(e)}
                onWheel={(e) => e.target.blur()}
                name="employment_unit_number"
              />
              <input
                type="text"
                className="persnol-info-input"
                placeholder="Street Name"
                value={profileValue.employment_street_name}
                onChange={(e) => onInputChange(e)}
                name="employment_street_name"
                required
              />
            </div>
            <div className="inpt-wrapper ">
              <input
                className="persnol-info-input"
                type="text"
                placeholder="City"
                value={profileValue.employment_city}
                onChange={(e) => onInputChange(e)}
                name="employment_city"
                required
              />
              <input
                className="persnol-info-input"
                type="text"
                placeholder="Country"
                value={profileValue.employment_country}
                onChange={(e) => onInputChange(e)}
                name="employment_country"
                required
              />

              <select
                className="persnol-info-input"
                onChange={(e) => {
                  onInputChange(e);
                  onEmploymentChange(e);
                }}
                name="employment_state"
                value={profileValue.employment_state}
                required
              >
                <option value="">Province/state</option>
                <option value="Ontario">Ontario</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Alberta">Alberta</option>
                <option value="Nova scotia">Nova scotia</option>
                <option value="provinceState">Other</option>
              </select>
              <small className="inptWrapperSmall">{employmentMessage}</small>
              <input
                type="text"
                className="postalinpt-wrap"
                placeholder="Postal Code"
                value={profileValue.employment_postal_code}
                onChange={(e) => onInputChange(e)}
                name="employment_postal_code"
                required
              />
            </div>

            <button type="submit" className="save-btn">
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileInfo;
