import React from "react";
import "../CSS_files/Zero.css";

function Zero() {
  const containerStyle = {
    backgroundImage: 'url("./assets/mlsa_bg.png")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    minHeight: "100vh",
    position: "relative",
  };

  const gifStyle = {
    position: "absolute",
    top: "2%",
    right: "2%",
    width: "15%",
    maxWidth: "150px",
  };

  const logoStyle = {
    position: "absolute",
    bottom: "2%",
    right: "2%",
    width: "8%",
    maxWidth: "80px",
  };

  const btnStyle = {
    position: "absolute",
    bottom: "3%",
    left: "2%",
    width: "30%",
    maxWidth: "190px",
  };

  return (
    <div>
      <div style={containerStyle}>
        <a href="/home">
          <img src="./assets/btnLetsBegin.png" alt="Button" style={btnStyle} />
        </a>
        <img src="./assets/iiit_logo.png" alt="Logo" style={logoStyle} />
      </div>
    </div>
  );
}

export default Zero;
