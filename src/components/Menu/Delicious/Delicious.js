import React from "react";
import Breakfast from "./Breakfast/Breakfast";
import "./Delicious.css";
import DeliciousAllItems from "./DeliciousAllItems/DeliciousAllItems";
import Dinner from "./Dinner/Dinner";
import Lunch from "./Lunch/Lunch";

const Delicious = () => {
  return (
    <div className='my-5'>
      <div className="container text-center">
        <h2>Delicious</h2>
        <p>FOUR COURSE TASTING MENU</p>
        <div className="">
          <div className="d-flex justify-content-center">
            <div className="pill-main-navbar p-3">
              <ul
                className="nav nav-pills mb-3 bg-danger rounded-pill row d-flex pill-navbar align-items-center"
                id="pills-tab"
                role="tablist"
              >
                <li
                  className="nav-item pill-navbar-item p-0 col-3"
                  role="presentation"
                >
                  <button
                    className="nav-link active text-white rounded-pill delicious-button"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-all-items"
                    role="tab"
                  >
                    All Items
                  </button>
                </li>
                <li
                  className="nav-item pill-navbar-item p-0 col-3"
                  role="presentation"
                >
                  <button
                    className="nav-link text-white rounded-pill delicious-button"
                    id="pills-breakfast-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-breakfast"
                    role="tab"
                  >
                    Breakfast
                  </button>
                </li>
                <li
                  className="nav-item pill-navbar-item p-0 col-3"
                  role="presentation"
                >
                  <button
                    className="nav-link text-white rounded-pill delicious-button"
                    id="pills-lunch-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-lunch"
                    role="tab"
                  >
                    Lunch
                  </button>
                </li>
                <li
                  className="nav-item pill-navbar-item p-0 col-3"
                  role="presentation"
                >
                  <button
                    className="nav-link text-white rounded-pill delicious-button"
                    id="pills-dinner-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-dinner"
                    role="tab"
                  >
                    Dinner
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className="tab-content d-block" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-all-items">
                <DeliciousAllItems></DeliciousAllItems>
              </div>
              <div className="tab-pane fade" id="pills-breakfast">
                <Breakfast></Breakfast>
              </div>
              <div className="tab-pane fade" id="pills-lunch">
                <Lunch></Lunch>
              </div>
              <div className="tab-pane fade" id="pills-dinner">
                <Dinner></Dinner>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delicious;
