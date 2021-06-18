import React, { useEffect, useState } from "react";
import foodItemsData from "../../../../fakeData/FoodItemData/foodItemData.json";

const Breakfast = () => {
  const [breakfastData, setBreakfastData] = useState([]);
  useEffect(() => {
    setBreakfastData(foodItemsData);
  }, []);
  const filterBreakfast = breakfastData.filter(
    (item) => item.category === "Breakfast"
  );
  // console.log(filterBreakfast);
  return (
    <div className="row">
      {filterBreakfast.map((breakfast) => (
        <div className="col-md-6 p-3">
          <div className="border border-danger rounded p-4">
            <div className="row d-flex align-items-center">
              <div className="col-4">
                <img
                  className="img-fluid rounded"
                  src={breakfast.foodImg}
                  alt=""
                />
              </div>
              <div className="col-8 text-start">
                <div className="d-flex justify-content-between">
                  <h2>{breakfast.foodName}</h2>
                  <h1>{breakfast.price}$</h1>
                </div>
                <h6>Category: {breakfast.category}</h6>
                <p>{breakfast.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Breakfast;
