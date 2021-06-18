import React, { useEffect, useState } from "react";
import foodItemsData from "../../../../fakeData/FoodItemData/foodItemData.json";

const DeliciousAllItems = () => {
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    setAllItems(foodItemsData);
  }, []);
  return (
    <div className="row">
      {allItems.map((allItem) => (
        <div className="col-md-6 p-3">
          <div className="border border-danger rounded p-4">
            <div className="row d-flex align-items-center">
              <div className="col-4">
                <img className="img-fluid rounded" src={allItem.foodImg} alt="" />
              </div>
              <div className="col-8 text-start">
                <div className="d-flex justify-content-between">
                  <h2>{allItem.foodName}</h2>
                  <h1>{allItem.price}$</h1>
                </div>
                <h6>Category: {allItem.category}</h6>
                <p>{allItem.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeliciousAllItems;
