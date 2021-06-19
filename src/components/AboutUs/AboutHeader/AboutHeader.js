import React from "react";
import './AboutHeader.css';

const AboutHeader = () => {
  return (
    <div className="about-header">
      <div className="about-bg d-flex justify-content-center align-items-center">
        <div className="text-center w-50 mt-5">
          <h2 className="text-white">About Us</h2>
          <p className="text-white text-center">
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

export default AboutHeader;
