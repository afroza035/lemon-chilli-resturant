import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container my-5">
      <h2 className="dancing-text display-5 text-red text-center">
        Contact Form
      </h2>
      <form className="row mt-3 g-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-6">
          <input
            {...register("name", { required: true })}
            type="text"
            className="form-control"
            placeholder="Name*"
          />
        </div>
        <div className="col-6">
          <input
            {...register("email", { required: true })}
            type="text"
            className="form-control"
            placeholder="Email*"
          />
        </div>
        <div className="col-6">
          <input
            {...register("subject", { required: true })}
            type="text"
            className="form-control"
            placeholder="Subject*"
          />
        </div>
        <div className="col-6">
          <input
            {...register("phoneNumber", { required: true })}
            type="text"
            className="form-control"
            placeholder="Phone Number*"
          />
        </div>
        <div className="col-12">
          <textarea
            {...register("message")}
            placeholder="Message"
            class="form-control"
            rows="4"
          ></textarea>
        </div>
        <div className="col-12 text-center">
          <input className="btn btn-danger rounded-pill" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
