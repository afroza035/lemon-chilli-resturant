/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const ContactMap = () => {
  return (
    <div className="container my-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21845.770450760243!2d90.38201695005486!3d23.99310449007931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755db7ad7c5c725%3A0x27e0d0ea04467a22!2sJagroto%20Chowrongi!5e0!3m2!1sen!2sbd!4v1624273375907!5m2!1sen!2sbd"
        style={{ border: "0", width: "100%", height: "500px" }}
        className='rounded'
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ContactMap;
