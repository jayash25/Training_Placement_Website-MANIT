import React from "react";
import manit_img from "../images/manit.jpg";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <img id="manit-logo" src={logo} width="45" />
          <div className="nav-heading">
            <h3 className="hindi-text">
              मौलाना आज़ाद राष्ट्रीय प्रौद्योगिकी संस्थान, भोपाल
            </h3>
            <h3>Maulana Azad National Institute Of Technology, Bhopal</h3>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#aboutUs">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => {
                    props.setClickForLogin(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Login
                </span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <img className="manit-main-image" src={manit_img} alt="" />

      <hr />
    </div>
  );
}

export default Header;
