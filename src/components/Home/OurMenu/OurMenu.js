import React, { useEffect, useState } from "react";
import foodItemData from "../../../fakeData/FoodItemData/foodItemData.json";
import "./OurMenu.css";

const OurMenu = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [visible, setVisible] = useState(6);

  useEffect(() => {
    setFoodItems(foodItemData);
  }, [foodItems]);

  const showMoreItems = () => {
    setVisible((previousValue) => previousValue * 4);
  };

  return (
    <div className="my-5">
      <div className="container">
        <div className="our-menu text-center">
          <h2 className="our-menu-title">Our Menu</h2>
          <p className="our-menu-sub-title">EXPLORE OUR FOODS</p>
          <div className="mt-5 row">
            {foodItems.slice(0, visible).map((food) => (
              <div className="col-md-6 pb-3">
                <div className="border p-4 rounded border-danger menu-hover-color">
                  <div className="row">
                    <div className="col-4">
                      <img
                        className="img-fluid rounded-2"
                        src={food.foodImg}
                        alt=""
                      />
                    </div>
                    <div className="col-8">
                      <div className="d-flex justify-content-between">
                        <h2 className='food-name'>{food.foodName}</h2>
                        <h3 className='food-price'>{food.price}$</h3>
                      </div>
                      <p className="text-start food-description">{food.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="">
              <button onClick={showMoreItems} className="btn btn-danger btn-background">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
