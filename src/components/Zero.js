import React, { useEffect, useRef } from "react";
import "../CSS_files/Zero.css";
import Lottie from "lottie-react";
import robot from "../images/robot.json";
import { Link } from "react-router-dom";
import Typed from "typed.js";

function Zero() {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["MLSA @ IIIT BBSR"],
      typeSpeed: 70,
      showCursor: false,
      loop: false,
    };

    typedRef.current = new Typed("#typed-text", options);
    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
    
    
      <div id="typed-text"></div> {/* Typed text at the top */}
      <div className="container1">
        <div className="centered-content ">
          <Lottie animationData={robot} alt="..." className="robot-animation" />
        </div>
        <div>
          <Link to="/home">
            <button className="button-29" role="button">
              Let's Begin!
            </button>
          </Link> 
        </div>
      </div>
     
    </>
  );
}

export default Zero;
