/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useForm as formSpreeUseForm } from '@formspree/react';
import Spacer from '../components/Spacer';

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function Contact() {
  const {
    register,
    handleSubmit: handle,
    formState: { errors },
  } = useForm();
  const [state, handleSubmit] = formSpreeUseForm('xayadeed');
  const onSubmit = (data) => handleSubmit(data);
  return (
    <>
      <Spacer />
      <div className="container" style={{ minHeight: 1000 }}>
        <h1 className="text-center text-primary">Contact Us</h1>
        { state.succeeded ? <p className="text-center"> Thank you!</p> : (
          <form className="" onSubmit={handle(onSubmit)}>
            <div className="row d-flex justify-content-center">
              <div className="form-group col-lg-8">
                <label htmlFor="firstName">
                  First Name:
                </label>
                <input id="firstName" className="form-control" {...register('firstName', { required: true })} />
                {errors.firstName && errors.firstName.type === 'required' && <span className="text-danger">Please include your first name</span>}
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="form-group col-lg-8">
                <label htmlFor="lastName">
                  Last Name:
                </label>
                <input id="lastName" className="form-control input-medium" {...register('lastName', { required: true })} />
                {errors.lastName && errors.lastName.type === 'required' && <span className="text-danger">Please include your last name</span>}
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="form-group col-lg-8">
                <label htmlFor="email">
                  Email:
                </label>
                <input id="email" className="form-control" {...register('email', { required: true, pattern: emailRegex })} />
                {errors.email && errors.email.type === 'required' && <span className="text-danger">Please provide an email</span>}
                {errors.email && errors.email.type === 'pattern' && <span className="text-danger">Please provide a valid email</span> }
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="form-group col-lg-8">
                <label htmlFor="message">
                  Message:
                </label>
                <textarea id="message" className="form-control" type="message" {...register('message', { required: true })} placeholder="I want to learn more about Emerging scholars..." />
                {errors.message && errors.message.type === 'required' && <span className="text-danger">Please provide a message</span> }
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="form-group col-lg-8">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        )}
      </div>
    </>
  );
}

export default Contact;
