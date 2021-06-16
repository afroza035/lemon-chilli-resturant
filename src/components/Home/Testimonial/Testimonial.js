import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import testimonialData from "../../../fakeData/TestimonialData/TestimonialData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(testimonialData);
  }, []);
  return (
    <div className="my-5">
      <Fade bottom cascade>
        <div className="text-center container">
          <h2 className="our-testimonial-title">Testimonial</h2>
          <p className="our-testimonial-sub-title">MEET WITH OUR COOK</p>
          <div className="row">
            {testimonials.map((testimonial) => (
              <Fade bottom>
                <div style={{ margin: "40px auto" }} className="col-md-4 p-3">
                  <div className="testimonial-profile rounded">
                    <img
                      className="img-fluid testimonial-img-style "
                      src={testimonial.img}
                      alt=""
                    />
                    <blockquote className="openSans-text">
                      <FontAwesomeIcon icon={faQuoteLeft} />
                      {testimonial.description}
                      <FontAwesomeIcon icon={faQuoteRight} />
                    </blockquote>
                    <h4 className="ubuntu-text">{testimonial.name}</h4>
                    <small className="openSans-text">
                      ({testimonial.title})
                    </small>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Testimonial;
