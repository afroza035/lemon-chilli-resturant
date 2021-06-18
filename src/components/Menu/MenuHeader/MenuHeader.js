import React from "react";
import "./MenuHeader.css";

const MenuHeader = () => {
  return (
    <div className="menu-header">
      <div className="menu-bg d-flex justify-content-center align-items-center">
        <div className="menu-text text-center w-50 mt-5">
          <h2 className='text-white'>Our Menu</h2>
          <p className='text-white text-center'>
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

export default MenuHeader;
