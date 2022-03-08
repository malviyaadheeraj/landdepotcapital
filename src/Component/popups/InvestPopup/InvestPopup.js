import React from "react";
import "./investPopup.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState } from "react";

const Form = ({ onCloseModal, formOpenModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Special handling for in-app browsers that don't always support new windows
  const browserSupportsNewWindows = (userAgent) => {
    var rules = [
      "FBIOS",
      "Twitter for iPhone",
      "WebView",
      "(iPhone|iPod|iPad)(?!.*Safari/)",
      "Android.*(wv|.0.0.0)",
    ];
    var pattern = new RegExp("(" + rules.join("|") + ")", "ig");
    return !pattern.test(userAgent);
  };

  if (
    !browserSupportsNewWindows(
      navigator.userAgent || navigator.vendor || window.opera
    )
  ) {
    document
      .getElementById("af-form-735710842")
      .parentElement.removeAttribute("target");
  }

  // (function() {
  //     var IE = /*@cc_on!@*/false;
  //     if (!IE) { return; }
  //     if (document.compatMode && document.compatMode == 'BackCompat') {
  //         if (document.getElementById("af-form-735710842")) {
  //             document.getElementById("af-form-735710842").className = 'af-form af-quirksMode';
  //         }
  //         if (document.getElementById("af-body-735710842")) {
  //             document.getElementById("af-body-735710842").className = "af-body inline af-quirksMode";
  //         }
  //         if (document.getElementById("af-header-735710842")) {
  //             document.getElementById("af-header-735710842").className = "af-header af-quirksMode";
  //         }
  //         if (document.getElementById("af-footer-735710842")) {
  //             document.getElementById("af-footer-735710842").className = "af-footer af-quirksMode";
  //         }
  //     }
  // })();

  return (
    <Modal
      open={formOpenModal}
      onClose={onCloseModal}
      classNames={{ modal: "form-popup-modal" }}
    >
      <form
        method="post"
        className="af-form-wrapper"
        accept-charset="UTF-8"
        action="https://www.aweber.com/scripts/addlead.pl"
      >
        <div style={{ display: "none" }}>
          <input type="hidden" name="meta_web_form_id" value="735710842" />
          <input type="hidden" name="meta_split_id" value="" />
          <input type="hidden" name="listname" value="awlist5959109" />
          <input
            type="hidden"
            name="redirect"
            value="https://portal.equivesto.com/signup/"
            id="redirect_50c668072973e0e3477217c05bd386c0"
          />
          <input
            type="hidden"
            name="meta_redirect_onlist"
            value="https://portal.equivesto.com/signup/"
          />
          <input type="hidden" name="meta_adtracking" value="My Web Form" />
          <input type="hidden" name="meta_message" value="1" />
          <input
            type="hidden"
            name="meta_required"
            value="name,email,custom Phone Number"
          />
          <input type="hidden" name="meta_forward_vars" value="1" />
          <input type="hidden" name="meta_tooltip" value="" />
        </div>
        <div id="af-form-735710842" className="af-form">
          <div id="af-body-735710842" className="af-body af-standards">
            <div className="af-element">
              <div className="bodyText">
                <p style={{ textAlign: "center" }}>
                  <span
                    style={{
                      color: "#000000",
                      fontFamily: "tahoma, arial, helvetica, sans-serif",
                      fontSize: "24px",
                      letterSpacing: "0.25px",
                      textAlign: "left",
                    }}
                  >
                    Invest with us today...
                  </span>
                </p>
              </div>
              <div className="af-clear"></div>
            </div>
            <div className="af-element">
              <label className="previewLabel" for="awf_field-113513324">
                Name:
              </label>
              <div className="af-textWrap">
                <input
                  id="awf_field-113513324"
                  type="text"
                  name="name"
                  className="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onfocus=" if (this.value == '') { this.value = ''; }"
                  onblur="if (this.value == '') { this.value='';} "
                  tabindex="500"
                />
              </div>
              <div className="af-clear"></div>
            </div>
            <div className="af-element">
              <label className="previewLabel" for="awf_field-113513325">
                Email:
              </label>
              <div className="af-textWrap">
                <input
                  type="email"
                  id="awf_field-113513325"
                  className="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  tabindex="501"
                  onfocus=" if (this.value == '') { this.value = ''; }"
                  onblur="if (this.value == '') { this.value='';} "
                />
              </div>
              <div className="af-clear"></div>
            </div>
            <div className="af-element">
              <label className="previewLabel" for="awf_field-113513326">
                Phone Number
              </label>
              <div className="af-textWrap">
                <input
                  type="text"
                  id="awf_field-113513326"
                  className="text"
                  name="custom Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  onfocus=" if (this.value == '') { this.value = ''; }"
                  onblur="if (this.value == '') { this.value='';} "
                  tabindex="502"
                />
              </div>
              <div className="af-clear"></div>
            </div>
            <div className="af-element buttonContainer">
              <input
                name="submit"
                className="submit"
                type="submit"
                value="Ready To Invest"
                tabindex="503"
              />
              <div className="af-clear"></div>
            </div>
            <div className="af-element tag" style={{ display: "none" }}>
              <input
                id="awf_tag-113513328"
                type="hidden"
                name="tag_113513328"
                value="website to portal"
              />
            </div>
          </div>
        </div>
        <div style={{ display: "none" }}>
          <img
            src="https://forms.aweber.com/form/displays.htm?id=7Mys7IwMHCxM"
            alt=""
          />
        </div>
      </form>
    </Modal>
  );
};

export default Form;
