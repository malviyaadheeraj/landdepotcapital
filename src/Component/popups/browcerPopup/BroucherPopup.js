import React from "react";
import "react-responsive-modal/styles.css";

const BroucherPopup = () => {
  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//forms.aweber.com/form/17/587154017.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "aweber-wjs-5jqrd0skw");

  return <div class="AW-Form-587154017"></div>;
};

export default BroucherPopup;
