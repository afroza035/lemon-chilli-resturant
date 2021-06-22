import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo/logo.png";
import "./MainNavbar.css";

const MainNavbar = () => {
  const [navbarScroll, setNavbarScroll] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 100) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };
  window.addEventListener("scroll", scrollHeader);

  return (
    <div
      className={
        navbarScroll
          ? "fixed-top navbar-bg-color active"
          : "fixed-top navbar-bg-color"
      }
    >
      <nav className="navbar navbar-expand-lg navbar-light container p-0 navbar-style-bg-color">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler bg-danger"
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
            <div className="navbar-nav text-center">
              <Link className="nav-link ms-md-4 navbar-font-style" to="/home">
                Home
              </Link>
              <Link className="nav-link ms-md-4 navbar-font-style" to="/menu">
                Menu
              </Link>
              <Link className="nav-link ms-4 navbar-font-style" to="/blog">
                Blog
              </Link>
              <Link
                className="nav-link ms-md-4 navbar-font-style"
                to="/aboutUs"
              >
                About Us
              </Link>
              <Link
                className="nav-link ms-md-4 navbar-font-style"
                to="/contact"
              >
                Contact
              </Link>
              <Link
                className="nav-link ms-md-4 text-body navbar-font-style"
                to="/login"
              >
                Log In
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
