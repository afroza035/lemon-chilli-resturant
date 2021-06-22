import React, { useEffect, useState } from "react";
import "./AllBlog.css";
import allBlogDataa from "../../../fakeData/AllBlogData/AllBlogData.json";
import { Link } from "react-router-dom";

const AllBlog = () => {
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    setAllBlogs(allBlogDataa);
  }, []);

  return (
    <div className="my-5">
      {allBlogs.map((allBlog) => (
        <div className="mt-5">
          <div className="photo-box">
            <div className="photo">
              <img className="img-fluid" src={allBlog.allImg} alt="" />
            </div>
          </div>
          <div className="">
            <span className="latest-date">{allBlog.allDate}</span>
            <h3 className="latest-title">{allBlog.allTitle}</h3>
            <p className="latest-des">{allBlog.allDescription}</p>
            <Link className="Read-btn" to="">
              read more
            </Link>
          </div>
        </div>
      ))}
      <div className="container mt-4">
        <ul className="pagination d-flex">
          <Link className="list-page col-md-3" to="">
            1
          </Link>
          <Link className="list-page col-md-3" to="">
            2
          </Link>
          <Link className="list-page col-md-3" to="">
            3
          </Link>
          <Link className="next col-md-3" to="">
            Next
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default AllBlog;
