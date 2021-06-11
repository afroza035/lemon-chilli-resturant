import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./HomeHeader.css";
import './SliderAnimation.css';
import pic1 from '../../../images/headerSliderImg/pic1.jpg';
import pic2 from '../../../images/headerSliderImg/pic2.jpg';
import pic3 from '../../../images/headerSliderImg/pic3.jpg';

const HomeHeader = () => {
  const content = [
    {
      title: "Welcome To",
      description:
        "The Lemon Chilli Restaurant",
      button: "Read More",
      image: pic1,
      user: "Luan Gjokaj",
      userProfile: "https://i.imgur.com/JSW6mEk.png",
    },
    {
      title: "Welcome To",
      description:
        "The Lemon Chilli Restaurant",
      button: "Discover",
      image: pic2,
      user: "Erich Behrens",
      userProfile: "https://i.imgur.com/0Clfnu7.png",
    },
    {
      title: "Welcome To",
      description:
        "The Lemon Chilli Restaurant",
      button: "Buy now",
      image: pic3,
      user: "Bruno Vizovskyy",
      userProfile: "https://i.imgur.com/4KeKvtH.png",
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
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeHeader;
