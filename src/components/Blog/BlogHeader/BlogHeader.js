import React from "react";
import "./BlogHeader.css";
const BlogHeader = () => {
  return (
    <div className="blog-header">
      <div className="blog-bg d-flex justify-content-center align-items-center">
        <div className="text-center w-50 mt-5">
          <h2 className="text-white">Our Blog</h2>
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

export default BlogHeader;
