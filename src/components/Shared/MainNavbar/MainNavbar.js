import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo/logo.png";
import "./MainNavbar.css";

const MainNavbar = () => {
  return (
    <div className="fixed-top bg-white">
      <nav className="navbar navbar-expand-lg navbar-light container p-0">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link className="nav-link ms-4 navbar-font-style" to="/home">
                Home
              </Link>
              <Link className="nav-link ms-4 navbar-font-style" to="#">
                Menu
              </Link>
              <Link className="nav-link ms-4 navbar-font-style" to="#">
                Blog
              </Link>
              <Link className="nav-link ms-4 navbar-font-style" to="#">
                About Us
              </Link>
              <Link className="nav-link ms-4 navbar-font-style" to="#">
                Contact
              </Link>
              <Link className="nav-link ms-4 navbar-font-style" to="#">
                Dashboard
              </Link>
              <Link className="nav-link ms-4 navbar-font-style" to="#">
                Admin
              </Link>
              <Link
                className="nav-link ms-4 navbar-font-style btn btn-danger text-white"
                to="#"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <hr style={{ padding: "0", margin: "0" }} />
    </div>
  );
};

export default MainNavbar;
