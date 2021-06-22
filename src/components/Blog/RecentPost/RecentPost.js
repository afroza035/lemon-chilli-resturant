import React, { useEffect, useState } from "react";
import "./RecentPost.css";
import recentData from "../../../fakeData/RecentData/RecentData.json";
import { Link } from "react-router-dom";
const RecentPost = () => {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    setRecentPosts(recentData);
  }, []);
  return (
    <div className="blog-categories mt-3">
      <h2 className="recent border py-4">RECENT POSTS</h2>
      <div className="recent-blog">
        {recentPosts.map((recentPost) => (
          <Link className="recent-link" to="">
            <div className="row py-3">
              <div className="col-4">
                <img className="img-fluid" src={recentPost.recentImg} alt="" />
              </div>
              <div className="box-head col-8">
                {recentPost.recentTitle}
                <div className="recent-description">
                  {recentPost.recentDescription}
                </div>
                <span className="recent-date">{recentPost.recentDate}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentPost;
