import React from "react";
import Lottie from "lottie-react";
import ms1 from "../images/microsoft1.json";
import ms2 from "../images/microsoft2.json";
import "../CSS_files/Title.css";

function Title() {
  return (
    <div>
      <div className="home-container">
        <div className="animation-left">
          <Lottie animationData={ms1} alt="..." />
        </div>
        <div className="text-center">
          <img
            src="/assets/iiit_logo.png"
            className="title-logo"
            alt="iiit_logo"
          />
          <br />
          <br />
          <h1>Microsoft Learn Student Ambassador</h1>
          <h3>@</h3>
          <h1>IIIT Bhubaneswar</h1>
          <br />
          <br />
        </div>
        <div className="animation-right">
          <Lottie animationData={ms2} alt="..." />
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Title;
