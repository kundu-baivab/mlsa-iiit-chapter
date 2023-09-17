// import { Link } from "react-router-dom";

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
    bottom: "15px", // Adjust as needed
    right: "15px", // Adjust as needed
    width: "80px", // Adjust as needed
    height: "80px", // Adjust as needed
  };

  const btnStyle = {
    position: "absolute",
    bottom: "20px", // Adjust as needed
    left: "15px", // Adjust as needed
    width: "190px", // Adjust as needed
    height: "57.3px", // Adjust as needed
  };

  return (
    <div>
      <div style={containerStyle}>
        <a href="/home">
          <img
            src="./assets/btnLetsBegin.png" // Provide the correct path to your logo
            alt="Button"
            style={btnStyle}
          />
        </a>
        <img
          src="./assets/iiit_logo.png" // Provide the correct path to your logo
          alt="Logo"
          style={logoStyle}
        />
      </div>
    </div>
  );
}

export default Zero;
