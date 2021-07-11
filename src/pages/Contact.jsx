/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useForm } from 'react-hook-form';
import Spacer from '../components/Spacer';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Spacer />
      <div className="container" style={{ minHeight: 1000 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="form-group col-lg-8">
              <label htmlFor="firstName">
                First Name:
              </label>
              <input id="firstName" className="form-control" {...register('firstName', { required: true })} placeholder="FirstName" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-8">
              <label htmlFor="lastName">
                Last Name:
              </label>
              <input id="lastName" className="form-control input-medium" {...register('lastName', { required: true })} placeholder="LastName" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-8">
              <label htmlFor="email">
                Email:
              </label>
              <input id="email" className="form-control" type="email" {...register('email', { required: true })} placeholder="Email" />
              {errors.email && <p>Please include email</p>}
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-8">
              <label htmlFor="message">
                Message:
              </label>
              <textarea id="message" className="form-control" type="message" {...register('message', { required: true })} placeholder="Message" rows="3" />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
