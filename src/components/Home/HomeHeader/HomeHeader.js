import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./HomeHeader.css";
import "./SliderAnimation.css";
import pic1 from "../../../images/headerSliderImg/pic1.jpg";
import pic2 from "../../../images/headerSliderImg/pic2.jpg";
import pic3 from "../../../images/headerSliderImg/pic3.jpg";

const HomeHeader = () => {
  const content = [
    {
      sliderTextHeader: "Welcome To",
      title: "Lemon Chilli",
      description: "WE HAVE THE GLORY BEGINNING IN RESTAURANT BUSINESS.",
      button: "Read More",
      image: pic1,
    },
    {
      sliderTextHeader: "Welcome To",
      title: "Lemon Chilli",
      description: "WE HAVE THE GLORY BEGINNING IN RESTAURANT BUSINESS.",
      button: "Discover",
      image: pic2,
    },
    {
      sliderTextHeader: "Welcome To",
      title: "Lemon Chilli",
      description: "WE HAVE THE GLORY BEGINNING IN RESTAURANT BUSINESS.",
      button: "Buy now",
      image: pic3,
    },
  ];
  return (
    <div>
      <Slider className="slider-wrapper" autoplay={5000}>
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="inner">
              <p className='slider-header-text'>{item.sliderTextHeader}</p>
              <h1>
                The <span className="slider-title">{item.title}</span>
              </h1>
              <p className='slider-description'>{item.description}</p>
              {/* <button>{item.button}</button> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeHeader;
