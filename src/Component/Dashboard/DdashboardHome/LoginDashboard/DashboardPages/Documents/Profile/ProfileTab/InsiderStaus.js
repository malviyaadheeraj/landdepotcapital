import React from "react";

const InsiderStaus = ({ profileValue, onInputChange, onProfileDataSubmit }) => {
  return (
    <>
      <div className="Insider-wrapper fade-in-bottom">
        <form onSubmit={(e) => onProfileDataSubmit(e, 2, true)}>
          <div className="row">
            <div className="col-md-12">
              <p>
                Canadian law states that significant shareholders or insiders of
                companies must disclose their status as such whenever a purchase
                is placed on their behalf.
              </p>
              <label className="object-heading">
                Is the officer/director of the public issuer also an
                officer/director of the corporation?
              </label>
              <select
                className="select-input-wrap"
                onChange={(e) => onInputChange(e)}
                name="insider_question1"
                value={profileValue.insider_question1}
                required
              >
                <option value="">select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                Land Depot Capital is considered under law as a “gatekeeper”.
                This means LDC is obligated to know if an account is being
                operated on behalf of a third party.
              </p>
              <label className="object-heading">
                For any members of the Board of Directors, please provide your
                name and primary occupation.
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Member Name"
                className="select-input-wrap"
                value={profileValue.corporation_member_name}
                onChange={(e) => onInputChange(e)}
                name="corporation_member_name"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Primary Occupation"
                className="select-input-wrap"
                value={profileValue.corporation_primary_occupation}
                onChange={(e) => onInputChange(e)}
                name="corporation_primary_occupation"
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <label className="object-heading">
                Please explain any absence of information in the above question.
              </label>
              <input
                type="text"
                className="select-input-wrap"
                value={profileValue.reason_of_information}
                onChange={(e) => onInputChange(e)}
                name="reason_of_information"
                required
              />
            </div>
          </div>
          <div className="row">
            <label className="object-heading">
              For any person that sustains a 25% or greater beneficial ownership
              in the corporation/trust/entity please provide the following
              information: ???
            </label>
            <div className="col-md-3">
              <input
                type="text"
                placeholder="Name"
                className="select-input-wrap"
                value={profileValue.beneficial_ownership_name}
                onChange={(e) => onInputChange(e)}
                name="beneficial_ownership_name"
                required
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                placeholder="Address"
                className="select-input-wrap"
                value={profileValue.beneficial_ownership_address}
                onChange={(e) => onInputChange(e)}
                name="beneficial_ownership_address"
                required
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                placeholder="Primary occupation"
                className="select-input-wrap"
                value={profileValue.beneficial_ownership_primary_occupation}
                onChange={(e) => onInputChange(e)}
                name="beneficial_ownership_primary_occupation"
                required
              />
            </div>
            <div className="col-md-3">
              <input
                type="number"
                min="0"
                placeholder="Ownership %"
                className="select-input-wrap"
                value={profileValue.beneficial_ownership}
                onChange={(e) => onInputChange(e)}
                onWheel={(e) => e.target.blur()}
                name="beneficial_ownership"
                required
              />
            </div>
          </div>

          <div className="Row">
            <div className="col-md-12">
              <label className="object-heading">
                Is any of the above persons identified as a politically exposed
                person?
              </label>

              <select
                className="select-input-wrap"
                onChange={(e) => onInputChange(e)}
                name="foreign_owernership"
                value={profileValue.foreign_owernership}
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
                Are you conducting these transactions on behalf of any other
                person/entity?
              </label>

              <select
                className="select-input-wrap"
                onChange={(e) => onInputChange(e)}
                name="another_individual"
                value={profileValue.another_individual}
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
                Are any other persons authorized for transactions on these
                accounts?
              </label>

              <select
                className="select-input-wrap"
                onChange={(e) => onInputChange(e)}
                name="other_individuals"
                value={profileValue.other_individuals}
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
                Are there any other persons that have an interest in any of your
                transactions?
              </label>

              <select
                className="select-input-wrap"
                onChange={(e) => onInputChange(e)}
                name="other_individuals_interest"
                value={profileValue.other_individuals_interest}
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
                Have you or an immediate family member been identified as a
                politically exposed foreign person?
              </label>

              <select
                className="select-input-wrap"
                onChange={(e) => onInputChange(e)}
                name="foreign_person"
                value={profileValue.foreign_person}
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

export default InsiderStaus;
