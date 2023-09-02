import React from "react";
import "../CSS_files/Zero.css";
import Lottie from "lottie-react";
import robot from "../images/robot.json";
import { Link } from "react-router-dom";

function Zero() {
  return (
    <div className="container1">
      <div className="centered-content">
        <Lottie animationData={robot} alt="..." className="robot-animation" />
      </div>
      <div>
        <Link to="/home">
          <button class="button-29" role="button">
            Go To HomePage
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Zero;
