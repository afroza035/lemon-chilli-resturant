import React, { useEffect, useState } from "react";
import "./OurBlog.css";
import blogData from "../../../fakeData/BlogData/blogData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

import SwiperCore, { Autoplay } from "swiper/core";

SwiperCore.use([Autoplay]);

const OurBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogData);
  }, []);
  return (
    <div style={{backgroundColor:"#F7F7F7", padding:"100px 0"}} className="my-5">
      <div className="text-center container">
        <h2 className="our-blog-title">Our Team</h2>
        <p className="our-blog-sub-title">MEET WITH OUR COOK</p>
        <div className="mt-5">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            loop={true}
            loopFillGroupWithBlank={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {blogs.map((blog) => (
              <SwiperSlide className="bg-white rounded">
                <div className="row d-flex align-items-center p-4">
                  <div className="col-5">
                    <img className="rounded img-fluid" src={blog.img} alt="" />
                  </div>
                  <div className="col-7 text-start">
                    <h6 className='ubuntu-text'>{blog.date}</h6>
                    <h5 className='ubuntu-text'>{blog.title}</h5>
                    <p className='openSans-text'>{blog.description.slice(0, 80)}...</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
