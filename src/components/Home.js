import React from "react";
import Lottie from "lottie-react";
import ms1 from "../images/microsoft1.json";
import ms2 from "../images/microsoft2.json";
import "../CSS_files/Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="animation-left">
        <Lottie animationData={ms1} alt="..." />
      </div>
      <div className="text-center">
        <h1>Welcome to MLSA - IIIT BBSR</h1>
      </div>
      <div className="animation-right">
        <Lottie animationData={ms2} alt="..." />
      </div>
    </div>
  );
}

export default Home;
