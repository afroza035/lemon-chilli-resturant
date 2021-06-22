import React from "react";
import AllBlog from "../AllBlog/AllBlog";
import BlogHeader from "../BlogHeader/BlogHeader";
import Catagories from "../Catagories/Catagories";
import Gallery from "../Gallery/Gallery";
import RecentPost from "../RecentPost/RecentPost";
import Tag from "../Tag/Tag";
const Blog = () => {
  return (
    <div>
      <BlogHeader></BlogHeader>
      <div className="d-flex justify-content-center">
        <div className="row container">
          <div className="col-md-4">
            <Catagories></Catagories>
            <Gallery></Gallery>
            <Tag></Tag>
            <RecentPost></RecentPost>
          </div>
          <div className="col-md-8">
            <AllBlog></AllBlog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
