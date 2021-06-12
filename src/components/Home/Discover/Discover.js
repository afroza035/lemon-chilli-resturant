import React from "react";
import "./Discover.css";
import breakfast from "../../../images/homeDiscover/breakfast.png";
import lunch from "../../../images/homeDiscover/serving-dish.png";
import dinner from "../../../images/homeDiscover/dish.png";

const Discover = () => {
  const famous = [
    {
      logoImage: breakfast,
      title: "Breakfast",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      logoImage: lunch,
      title: "Lunch",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      logoImage: dinner,
      title: "Dinner",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div className="container my-5">
      <div className="discover-main text-center p-3">
        <h3>Discover</h3>
        <h4>MOST FAMOUS RESTAURANT</h4>
        <div className="row">
          {famous.map((discover) => (
            <div className="col-md-4 mt-3 px-4">
              <img
                style={{ height: "70px", width: "70px" }}
                alt=""
                className="card-img-top rounded-circle"
                src={discover.logoImage}
              />
              <h5 className="discover-tittle">{discover.title}</h5>
              <p className="discover-description">{discover.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
