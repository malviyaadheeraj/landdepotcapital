import React from "react";
import utf8 from "utf8";
import sha512 from "js-sha512";
var Buffer = require("buffer/").Buffer;

const Apaylo = () => {
  const apiKey = "b7b3c8f06cc7fbfa679bcbfb92c51c63918f4cf8";
  const secretKey = "kJGRhl4uRsVUTjgg/ftMnw==";
  const time = new Date();
  const formatTime = time.toISOString().split("T")[0];
  var concatinatedValue = `${apiKey}${secretKey}${formatTime}`;
  var bytes = utf8.encode(concatinatedValue);
  const hashingBytes = Buffer.from(sha512(bytes), "hex");
  const base64Value = Buffer.from(hashingBytes).toString("base64");
  console.log(base64Value);

  return <div>Apaylo</div>;
};

export default Apaylo;
