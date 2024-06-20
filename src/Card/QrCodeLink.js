import React from "react";
import "../App.css";
import qr from "../Assets/adobe-express-qr-code.png";

function QrCodeLink() {
  return (
  <div className="qr-container">
    <div className="qr-link-container">
      <img src={qr} height={200} width={200} alt="" />
      <p>Follow this link to download <br/>business Card </p>
    </div>
  </div>
  )
}

export default QrCodeLink;
