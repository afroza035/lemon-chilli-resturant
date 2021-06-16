import React from "react";
import { useForm } from "react-hook-form";
import "./QuickReservation.css";
import Fade from "react-reveal/Fade";

const QuickReservation = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div className="my-5 quick-reservation-style">
      <div className="quick-bg-style">
        <div className="container text-center quick-main-part">
          <Fade bottom cascade>
            <div className="text-center p-4">
              <h2 className="quick-title">Quick Reservation</h2>
              <p className="ubuntu-text quick-sub-title text-white">
                RESERVATION FOR YOUR COMFORT!
              </p>
            </div>
          </Fade>
          <div className="container">
            <form className="row" onSubmit={handleSubmit(onSubmit)}>
              <Fade bottom>
                <div className="col-md-4 pb-4">
                  <input
                    className=" w-100 form-control"
                    placeholder="Your Name*"
                    {...register("name", { required: true })}
                  />
                </div>
              </Fade>
              <Fade bottom>
                <div className="col-md-4 pb-4">
                  <input
                    className=" w-100 form-control"
                    placeholder="Your Email*"
                    {...register("email", { required: true })}
                  />
                </div>
              </Fade>
              <Fade bottom>
                <div className="col-md-4 pb-4">
                  <input
                    className="w-100 form-control "
                    placeholder="Phone Number*"
                    {...register("phone", { required: true })}
                  />
                </div>
              </Fade>
              <Fade bottom>
                <div className="col-md-4 pb-4">
                  <input
                    className="w-100 form-control"
                    placeholder="Time*"
                    {...register("time", { required: true })}
                  />
                </div>
              </Fade>
              <Fade bottom>
                <div className="col-md-4 pb-4">
                  <input
                    className=" w-100 form-control"
                    placeholder="Date*"
                    {...register("date", { required: true })}
                  />
                </div>
              </Fade>
              <Fade bottom>
                <div className="col-md-4 pb-4">
                  <input
                    className="w-100 form-control input-style"
                    placeholder="Guest*"
                    {...register("guest", { required: true })}
                  />
                </div>
              </Fade>
              <Fade bottom>
                <div className="text-center">
                  <input
                    className="btn btn-danger btn-background"
                    type="submit"
                  />
                </div>
              </Fade>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickReservation;
