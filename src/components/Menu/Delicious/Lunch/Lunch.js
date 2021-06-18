import React, { useEffect, useState } from "react";
import foodItemsData from "../../../../fakeData/FoodItemData/foodItemData.json";

const Lunch = () => {
  const [lunchData, setLunchData] = useState([]);
  useEffect(() => {
    setLunchData(foodItemsData);
  }, []);
  const filterLunch = lunchData.filter(
    (item) => item.category === "Lunch"
  );
  // console.log(filterBreakfast);
  return (
    <div className="row">
      {filterLunch.map((lunch) => (
        <div className="col-md-6 p-3">
          <div className="border border-danger rounded p-4">
            <div className="row d-flex align-items-center">
              <div className="col-4">
                <img
                  className="img-fluid rounded"
                  src={lunch.foodImg}
                  alt=""
                />
              </div>
              <div className="col-8 text-start">
                <div className="d-flex justify-content-between">
                  <h2>{lunch.foodName}</h2>
                  <h1>{lunch.price}$</h1>
                </div>
                <h6>Category: {lunch.category}</h6>
                <p>{lunch.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lunch;
