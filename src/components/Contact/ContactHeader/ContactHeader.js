import React from "react";
import './ContactHeader.css';

const ContactHeader = () => {
  return (
    <div className="contact-header">
      <div className="contact-bg d-flex justify-content-center align-items-center">
        <div className="text-center w-50 mt-5">
          <h2 className="text-white dancing-text display-1">Contact Us</h2>
          <p className="text-white text-center ubuntu-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            laborum nam recusandae dolores voluptates quae et harum vitae cumque
            aperiam, libero odio cupiditate, eum aliquid odit inventore ratione,
            cum perspiciatis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
