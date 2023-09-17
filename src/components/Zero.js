import React from "react";

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
    top: "10px",
    right: "10px",
    width: "150px",
    height: "150px",
  };

  const logoStyle = {
    position: "absolute",
    bottom: "15px",
    right: "15px",
    width: "80px",
    height: "80px",
  };

  const btnStyle = {
    position: "absolute",
    bottom: "20px",
    left: "15px",
    width: "190px",
    height: "57.3px",
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
