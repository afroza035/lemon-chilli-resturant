import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo/logo.png";

const MainNavbar = () => {
  return (
    <div className="">
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
              <Link className="nav-link ms-5" to="#">
                Home
              </Link>
              <Link className="nav-link ms-5" to="#">
                Menu
              </Link>
              <Link className="nav-link ms-5" to="#">
                Blog
              </Link>
              <Link className="nav-link ms-5" to="#">
                About Us
              </Link>
              <Link className="nav-link ms-5" to="#">
                Contact
              </Link>
              <Link className="nav-link ms-5" to="#">
                Dashboard
              </Link>
              <Link className="nav-link ms-5" to="#">
                Admin
              </Link>
              <Link className="nav-link ms-5 btn btn-danger text-white" to="#">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default MainNavbar;
