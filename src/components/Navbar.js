import React from "react";
import "../CSS_files/Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-design">
        <a className="navbar-brand" style={{ color: "white" }} href="#">
          MLSA - IIIT
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mx-3 p-1">
            <li className="nav-item ">
              <a className="nav-link" href="#" style={{ color: "white" }}>
                How to Apply
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "white" }}>
                Milestones
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "white" }}>
                IIIT-BBSR Chapter
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Navbar;
