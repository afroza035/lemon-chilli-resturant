import React from "react";
import "./Tag.css";
const Tag = () => {
  return (
    <div className="mt-5">
      <h2 className="tag border py-4">TAGS</h2>
      <div className="blog-tag mt-3">
        <ul className="blog-list row">
          <li className="col-4 py-2">Home Offices</li>
          <li className="col-4 py-2">Swimming Pools</li>
          <li className="col-4 py-2">Patios</li>
          <li className="col-4 py-2">Kitchens</li>
          <li className="col-4 py-2">Libraries</li>
          <li className="col-4 py-2">Living Rooms</li>
        </ul>
      </div>
    </div>
  );
};

export default Tag;
