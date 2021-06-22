import React, { useEffect, useState } from "react";
import "./Gallery.css";
import galleryData from "../../../fakeData/GalleryData/GalleryData.json";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [gallerias, setGallerias] = useState([]);

  useEffect(() => {
    setGallerias(galleryData);
  }, []);
  return (
    <div className="">
      <h2 className="gallery border py-4 text-start">GALLERY</h2>
      <div className="mt-3 row">
        {gallerias.map((gallery) => (
          <div className="blog-gallery-box col-4 py-2">
            <Link to="">
              <img src={gallery.galleryImg} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
