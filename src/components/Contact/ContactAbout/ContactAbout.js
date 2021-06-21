import React from "react";
import "./ContactAbout.css";

const ContactAbout = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div style={{}} className="col-md-4 p-3">
          <div className="contact-about-profile rounded text-center">
            <img
              className="img-fluid contact-about-img-style"
              src="https://i.ibb.co/Yb4881C/phone-call.png"
              alt=""
            />
            <div className="p-4">
              <h4 className="dancing-text">Phone</h4>
              <p className="openSans-text">+8801841181011</p>
              <p className="openSans-text">+8801841181011</p>
            </div>
          </div>
        </div>
        <div style={{}} className="col-md-4 p-3">
          <div className="contact-about-profile rounded text-center">
            <img
              className="img-fluid contact-about-img-style"
              src="https://i.ibb.co/qB8RQ7V/placeholder.png"
              alt=""
            />
            <div className="p-4">
              <h4 className="dancing-text">Address</h4>
              <p className="openSans-text">
                121 King Street, MelbourneVictoria 3000
              </p>
              <p className="openSans-text">Australia ABN 11 119 159 741</p>
            </div>
          </div>
        </div>
        <div style={{}} className="col-md-4 p-3">
          <div className="contact-about-profile rounded text-center">
            <img
              className="img-fluid contact-about-img-style"
              src="https://i.ibb.co/jkvxkh8/email.png"
              alt=""
            />
            <div className="p-4">
              <h4 className="dancing-text">Email</h4>
              <p className="openSans-text">order@gmail.com</p>
              <p className="openSans-text">sels@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAbout;
