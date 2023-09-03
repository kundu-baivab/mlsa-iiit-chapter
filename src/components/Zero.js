import React, { useEffect, useRef } from "react";
import "../CSS_files/Zero.css";
import Lottie from "lottie-react";
import robot from "../images/robot.json";
import { Link } from "react-router-dom";
import Typed from "typed.js";

function Zero() {
  // Create a ref to store the Typed.js instance
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["MLSA @ IIIT BBSR"],
      typeSpeed: 50,
      showCursor: false,
    };

    // Create a new Typed.js instance with the options
    typedRef.current = new Typed("#typed-text", options);

    // Clean up the Typed.js instance when the component unmounts
    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="container1">
      <div className="centered-content">
        <Lottie animationData={robot} alt="..." className="robot-animation" />
      </div>
      <div>
        <Link to="/home">
          <button className="button-29" role="button">
            Let's Begin!
          </button>
        </Link>
      </div>
      <div id="typed-text"></div> {/* Add an empty div to display Typed text */}
    </div>
  );
}

export default Zero;
