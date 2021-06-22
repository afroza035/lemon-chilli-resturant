import React from "react";
import Testimonial from "../../Home/Testimonial/Testimonial";
import Footer from "../../Shared/Footer/Footer";
import Delicious from "../Delicious/Delicious";
import MenuHeader from "../MenuHeader/MenuHeader";

const Menu = () => {
  return (
    <div>
      <MenuHeader />
      <Delicious />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Menu;
