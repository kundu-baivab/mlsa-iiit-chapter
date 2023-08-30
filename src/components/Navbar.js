import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top pt-3 pb-3">
        <button className="navbar-brand mx-3 header-name">
          <a href="/">RKS</a>
        </button>
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
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto mx-3 links">
            <li className="nav-item active">
              <a className="nav-link text-white" href="/about">
                About Me
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-white" href="/projects">
                Projects
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-white" href="/contact">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
