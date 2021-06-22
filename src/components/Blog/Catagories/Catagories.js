import React from "react";
import "./Catagories.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Catagories = () => {
  return (
    <div className="my-5">
      <div className="">
        <div className="blog-search d-flex">
          <input type="text" name="search" placeholder="Search foods..." />
          <button className="blog-search-btn">
            <FontAwesomeIcon className="text-white" icon={faSearch} />
          </button>
        </div>

        <div className="border mt-5">
          <h2 className="blog-tittle text-start">CATEGORIES</h2>
          <div className="blog-sidebar-categories p-4">
            <ul className="Categories-blog list-unstyled">
              <li>Cooking</li>
              <li>Delicious</li>
              <li>Fry Types</li>
              <li>Recipes</li>
              <li>Starters</li>
              <li>Cooked</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
