import React, { useEffect, useState } from "react";
import foodItemsData from "../../../../fakeData/FoodItemData/foodItemData.json";

const Dinner = () => {
  const [dinnerData, setDinnerData] = useState([]);
  useEffect(() => {
    setDinnerData(foodItemsData);
  }, []);
  const filterDinner = dinnerData.filter((item) => item.category === "Dinner");
  // console.log(filterBreakfast);
  return (
    <div className="row">
      {filterDinner.map((dinner) => (
        <div className="col-md-6 p-3">
          <div className="border border-danger rounded p-4">
            <div className="row d-flex align-items-center">
              <div className="col-4">
                <img
                  className="img-fluid rounded"
                  src={dinner.foodImg}
                  dinner
                  alt=""
                />
              </div>
              <div className="col-8 text-start">
                <div className="d-flex justify-content-between">
                  <h2 className='ubuntu-text'>{dinner.foodName}</h2>
                  <h1 className='dancing-text'>{dinner.price}$</h1>
                </div>
                <h6 className='openSans-text text-muted'>Category: {dinner.category}</h6>
                <p className='openSans-text'>{dinner.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dinner;
