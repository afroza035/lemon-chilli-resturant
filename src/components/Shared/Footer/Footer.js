import {
  faFacebook,
  faPinterest,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo/logo.png";
import "./Footer.css";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <div className="main-footer-style text-white">
      <div className="main-footer-bg-style">
        <Fade bottom cascade>
          <div className="container p-5">
            <div className="row m-0 border p-5">
              <div className="col-md-6 text-center">
                <h3 className="ubuntu-text">SUBSCRIBE TO OUR NEWS LETTER</h3>
              </div>
              <div className="col-md-6 text-center">
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Your Email Address"
                />
                <Link
                  style={{ backgroundColor: "rgb(33, 36, 39, 0.5)" }}
                  className="py-2 px-3 rounded-pill arrow-style"
                  to="/"
                >
                  <FontAwesomeIcon
                    className="text-white"
                    icon={faArrowRight}
                    size="lg"
                  />
                </Link>
              </div>
            </div>
            <div className="row p-2 d-flex justify-content-between align-items-center">
              <div className="col-md-4 ">
                <Link to="/">
                  <img className="" src={logo} alt="" />
                </Link>
                <p className="mt-4 openSans-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam,
                  consequuntur magni dolores eos qui rationet.
                </p>
                <div className="mt-3">
                  <Link to="/" className="rounded-circle p-2 footer-icon me-2">
                    <FontAwesomeIcon
                      className="text-white"
                      icon={faFacebook}
                      size="lg"
                    />
                  </Link>
                  <Link to="/" className="rounded-circle p-2 footer-icon me-2">
                    <FontAwesomeIcon
                      className="text-white"
                      icon={faTwitter}
                      size="lg"
                    />
                  </Link>
                  <Link to="/" className="rounded-circle p-2 footer-icon me-2">
                    <FontAwesomeIcon
                      className="text-white"
                      icon={faPinterest}
                      size="lg"
                    />
                  </Link>
                  <Link to="/" className="rounded-circle p-2 footer-icon">
                    <FontAwesomeIcon
                      className="text-white"
                      icon={faWhatsapp}
                      size="lg"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-8 py-3">
                <div className="row footer-link p-4 rounded-3">
                  <div className="col-6 col-md-4">
                    <h4>Useful Links</h4>
                    <p>
                      <Link
                        className="text-muted openSans-text link-text-style"
                        to="/"
                      >
                        Brand
                      </Link>
                    </p>
                    <p>
                      <Link
                        className="text-muted openSans-text link-text-style"
                        to="/"
                      >
                        Brand
                      </Link>
                    </p>
                    <p>
                      <Link
                        className="text-muted openSans-text link-text-style"
                        to="/"
                      >
                        Brand
                      </Link>
                    </p>
                    <p>
                      <Link
                        className="text-muted openSans-text link-text-style"
                        to="/"
                      >
                        Brand
                      </Link>
                    </p>
                  </div>
                  <div className="col-6 col-md-4">
                    <h4>Useful Links</h4>
                    <p>
                      <Link
                        className="text-muted openSans-text link-text-style"
                        to="/"
                      >
                        Brand
                      </Link>
                    </p>
                    <p>
                      <Link
                        className="text-muted openSans-text link-text-style"
                        to="/"
                      >
                        Brand
                      </Link>
                    </p>
                    <p>
                      <Link
                        className="text-muted openSans-text link-text-style"
                        to="/"
                      >
                        Brand
                      </Link>
                    </p>
                    <p>
                      <Link
                        className="text-muted openSans-text link-text-style"
                        to="/"
                      >
                        Brand
                      </Link>
                    </p>
                  </div>
                  <div className="col-6 col-md-4">
                    <h4>Useful Links</h4>
                    <p>
                      <Link
                        className="text-muted openSans-text link-text-style"
                        to="/"
                      >
                        Brand
                      </Link>
                    </p>
                    <p>
                      <Link
                        className="text-muted openSans-text link-text-style"
                        to="/"
                      >
                        Brand
                      </Link>
                    </p>
                    <p>
                      <Link
                        className="text-muted openSans-text link-text-style"
                        to="/"
                      >
                        Brand
                      </Link>
                    </p>
                    <p>
                      <Link
                        className="text-muted openSans-text link-text-style"
                        to="/"
                      >
                        Brand
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <p className="text-center p-0 m-0 openSans-text">
              The Lemon Chilli all Rights Reserved.Designed By{" "}
              <Link style={{ color: "red" }} to="/">
                Afroza
              </Link>
              |
              <Link style={{ color: "red" }} to="/">
                Nayem
              </Link>
              .
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Footer;
