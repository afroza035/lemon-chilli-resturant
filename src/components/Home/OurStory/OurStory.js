import React from "react";
import chefStory from "../../../images/ourStoryImg/shefImg.jpeg";
import "./OurStory.css";
import Fade from "react-reveal/Fade";

const OurStory = () => {
  return (
    <div
      style={{ backgroundColor: "#F7F7F7", height: "100%" }}
      className="row p-0 m-0"
    >
      <Fade left>
        <div left className="col-md-5 d-none d-md-block p-0">
          <img
            style={{ height: "600px", width: "100%" }}
            className="img-fluid"
            src={chefStory}
            alt=""
          />
        </div>
      </Fade>
      <Fade right>
        <div className="col-md-7 col-sm-12">
          <div
            style={{ height: "100%" }}
            className="px-5 d-flex align-items-center"
          >
            <div className="text-center p-5">
              <h3 className="p-1 story-title">Our Story</h3>
              <h4 className="p-1 story-sub-title">
                THE PERFECT THE LIFE AND FOOD.
              </h4>
              <p className="p-2 story-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="btn btn-danger btn-background ">
                Read More
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default OurStory;
