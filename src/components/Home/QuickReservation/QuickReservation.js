import React from "react";
import { useForm } from "react-hook-form";
import "./QuickReservation.css";

const QuickReservation = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div className="my-5 quick-reservation-style">
      <div className="quick-bg-style">
        <div className="container text-center quick-main-part">
          <div className="text-center p-4">
            <h2 className="quick-title">Quick Reservation</h2>
            <p className="ubuntu-text quick-sub-title text-white">RESERVATION FOR YOUR COMFORT!</p>
          </div>
          <div className="container">
            <form className="row" onSubmit={handleSubmit(onSubmit)}>
              <div className="col-md-4 pb-4">
                <input
                  className=" w-100 form-control"
                  placeholder="Your Name*"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="col-md-4 pb-4">
                <input
                  className=" w-100 form-control"
                  placeholder="Your Email*"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="col-md-4 pb-4">
                <input
                  className="w-100 form-control "
                  placeholder="Phone Number*"
                  {...register("phone", { required: true })}
                />
              </div>
              <div className="col-md-4 pb-4">
                <input
                  className="w-100 form-control"
                  placeholder="Time*"
                  {...register("time", { required: true })}
                />
              </div>
              <div className="col-md-4 pb-4">
                <input
                  className=" w-100 form-control"
                  placeholder="Date*"
                  {...register("date", { required: true })}
                />
              </div>
              <div className="col-md-4 pb-4">
                <input
                  className="w-100 form-control input-style"
                  placeholder="Guest*"
                  {...register("guest", { required: true })}
                />
              </div>
              <div className="text-center">
                <input className="btn btn-danger" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickReservation;
