import React from 'react';
import { useForm } from 'react-hook-form';
import { useForm as formSpreeUseForm } from '@formspree/react';
import Spacer from '../components/Spacer';
import TextInput from '../components/utils/inputs/text-input';
import validation from '../components/utils/validation';

function Contact() {
  const {
    register,
    handleSubmit: formSubmitHandler,
    formState: { errors },
  } = useForm();
  const [state, handleSubmit] = formSpreeUseForm('process.env.FORM_SPREE');
  console.log(process.env.FORM_SPREE);
  const onSubmit = (data) => handleSubmit(data);
  return (
    <>
      <Spacer />
      <div className="container" style={{ minHeight: 1000 }}>
        <h1 className="text-center text-primary">Contact Us</h1>
        { state.succeeded ? <p className="text-center"> Thank you!</p> : (
          <form className="" onSubmit={formSubmitHandler(onSubmit)}>
            <TextInput
              label="First Name"
              name="firstName"
              register={register}
              validation={{
                required: {
                  value: true,
                  message: 'Please include your first name',
                },
              }}
              error={errors.firstName}
            />
            <TextInput
              label="Last Name"
              name="lastName"
              register={register}
              validation={{
                required: {
                  value: true,
                  message: 'Please include your last name',
                },
              }}
              error={errors.lastName}
            />
            <TextInput
              label="Email"
              name="email"
              register={register}
              validation={{
                required: {
                  value: true,
                  message: 'Please include your email',
                },
                pattern: {
                  value: validation.EMAIL_REGEX,
                  message: 'Please provide a valid email',
                },
              }}
              error={errors.email}
            />
            <TextInput
              label="Message"
              name="message"
              register={register}
              validation={{
                required: {
                  value: true,
                  message: 'Please provide a message',
                },
              }}
              error={errors.message}
              placeholder="I want to learn more about Emerging scholars..."
              useTextArea
            />
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
