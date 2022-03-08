import React from "react";
import Helmet from "react-helmet";

const InvestNowPopup = () => {
  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//forms.aweber.com/form/20/593383620.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "aweber-wjs-f765ct995");

  return (
    <>
      {" "}
      <Helmet>
        <title>Invest Property</title>
      </Helmet>
      <div class="AW-Form-593383620"></div>;
    </>
  );
};

export default InvestNowPopup;
