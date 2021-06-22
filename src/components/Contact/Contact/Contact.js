import React from "react";
import Footer from "../../Shared/Footer/Footer";
import ContactAbout from "../ContactAbout/ContactAbout";
import ContactForm from "../ContactForm/ContactForm";
import ContactHeader from "../ContactHeader/ContactHeader";
import ContactMap from "../ContactMap/ContactMap";

const Contact = () => {
  return (
    <div>
      <ContactHeader />
      <ContactAbout />
      <ContactMap />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
