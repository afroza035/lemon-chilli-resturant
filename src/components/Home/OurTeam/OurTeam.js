import React, { useEffect, useState } from "react";
import "./OurTeam.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import SwiperCore, { Navigation, Scrollbar } from "swiper/core";
import Fade from "react-reveal/Fade";

SwiperCore.use([Navigation, Scrollbar]);

const allChef = [
  {
    id: 1,
    name: "Jeaf Hardy",
    img: "https://static.cordonbleu.edu/Files/MediaFile/61794.jpg",
    title: "Senior Chef",
  },
  {
    id: 2,
    name: "Jeaf Hardy",
    img: "https://static.cordonbleu.edu/Files/MediaFile/61794.jpg",
    title: "Senior Chef",
  },
  {
    id: 3,
    name: "Jeaf Hardy",
    img: "https://static.cordonbleu.edu/Files/MediaFile/61794.jpg",
    title: "Senior Chef",
  },
  {
    id: 4,
    name: "Jeaf Hardy",
    img: "https://static.cordonbleu.edu/Files/MediaFile/61794.jpg",
    title: "Senior Chef",
  },
  {
    id: 5,
    name: "Jeaf Hardy",
    img: "https://static.cordonbleu.edu/Files/MediaFile/61794.jpg",
    title: "Senior Chef",
  },
  {
    id: 6,
    name: "Jeaf Hardy",
    img: "https://static.cordonbleu.edu/Files/MediaFile/61794.jpg",
    title: "Senior Chef",
  },
  {
    id: 7,
    name: "Jeaf Hardy",
    img: "https://static.cordonbleu.edu/Files/MediaFile/61794.jpg",
    title: "Senior Chef",
  },
];

const OurTeam = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    setChefs(allChef);
  }, []);
  return (
    <div className="">
      <div className="our-team-style container">
        <Fade bottom cascade>
          <div className="text-center">
            <h2 className="our-team-title">Our Team</h2>
            <p className="our-team-sub-title">MEET WITH OUR COOK</p>
            <div className="px-5 py-2">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                slidesPerGroup={1}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                className="mySwiper"
              >
                {chefs.map((chef) => (
                  <SwiperSlide className="">
                    <img className="img-fluid rounded" src={chef.img} alt="" />
                    <h2 className="ubuntu-text chef-name-color mt-2">
                      {chef.name}
                    </h2>
                    <p className="ubuntu-text">{chef.title}, TLCR</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default OurTeam;
