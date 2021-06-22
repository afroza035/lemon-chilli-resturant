import React from "react";
import OurTeam from "../../Home/OurTeam/OurTeam";
import Testimonial from "../../Home/Testimonial/Testimonial";
import Footer from "../../Shared/Footer/Footer";
import AboutDiscover from "../AboutDiscover/AboutDiscover";
import AboutHeader from "../AboutHeader/AboutHeader";

const AboutUs = () => {
  return (
    <div>
      <AboutHeader></AboutHeader>
      <AboutDiscover></AboutDiscover>
      <OurTeam></OurTeam>
      <Testimonial></Testimonial>
      <Footer />
    </div>
  );
};

export default AboutUs;
