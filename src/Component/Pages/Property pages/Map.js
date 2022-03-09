import React from "react";

const Map = ({ mapAddress }) => {
  return (
    <div style={{ width: "100%", height: "350px" }}>
      <iframe
        title={mapAddress}
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={`https://maps.google.com/maps?hl=en&q=${mapAddress}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
      >
        <a href="https://www.gps.ie/golf-gps/">golf gps</a>
      </iframe>
    </div>
  );
};

export default Map;
