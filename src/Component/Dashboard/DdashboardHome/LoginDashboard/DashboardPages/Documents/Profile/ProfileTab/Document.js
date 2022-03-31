import React from "react";

const Document = ({
  onProfileDataSubmit,
  onChangeDentificationFile,
  onChangeCertificateFile,
  dentificationFile,
  certificateFile,
  profileValue,
}) => {
  return (
    <>
      <div className="document-wrapper fade-in-bottom">
        <form onSubmit={(e) => onProfileDataSubmit(e, 3, true)}>
          <div className="row">
            <div className="col-md-10 mb-3">
              <div className="col-md-2">
                {profileValue.dentification_document ? (
                  <a
                    href={profileValue.dentification_document}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={profileValue.dentification_document}
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                    />
                  </a>
                ) : (
                  ""
                )}
              </div>
              <label className="object-heading mb-2 mt-2">
                Dentification Document - Signing Authority 1 *
              </label>
              <div className="documentSmFile">
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control body-flie"
                    id="inputGroupFile02"
                    // value={dentificationFile.name}
                    onChange={(e) =>
                      onChangeDentificationFile(e.target.files[0])
                    }
                    name="dentification_document"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-10">
              <div className="col-md-2">
                {profileValue.certificate ? (
                  <a
                    href={profileValue.certificate}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="mb-3"
                      src={profileValue.certificate}
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                    />
                  </a>
                ) : (
                  ""
                )}
              </div>
              <label className="object-heading mb-2">
                Certificate of Incorporation or other *
              </label>
              <div className="documentSmFile">
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control body-flie"
                    id="inputGroupFile02"
                    // value={certificateFile.name}
                    onChange={(e) => onChangeCertificateFile(e.target.files[0])}
                    name="certificate"
                  />
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="docsubmit-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Document;
