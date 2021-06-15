import React, { useEffect, useState } from "react";
import "./OurBlog.css";
import blogData from "../../../fakeData/BlogData/blogData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

import SwiperCore, { Autoplay } from "swiper/core";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

SwiperCore.use([Autoplay]);

const OurBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogData);
  }, []);
  return (
    <div
      style={{ backgroundColor: "#F7F7F7", padding: "100px 0" }}
      className="my-5"
    >
      <Fade bottom cascade>
        <div className="text-center container">
          <h2 className="our-blog-title">Our Blog</h2>
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
                  <div className="row d-flex align-items-center h-25 our-blog-style">
                    <div className="col-5 image-hover">
                      <img
                        className="rounded ourBlogImg"
                        src={blog.img}
                        alt=""
                      />
                    </div>
                    <div className="col-7 text-start p-3">
                      <h6 style={{ color: "red" }} className="ubuntu-text">
                        {blog.date}
                      </h6>
                      <Link to="/" className="our-blog-heading-title">
                        <h5 className="ubuntu-text">{blog.title}</h5>
                      </Link>
                      <p className="openSans-text">
                        {blog.description.slice(0, 80)}...
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default OurBlog;
