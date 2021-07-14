/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from './input-error';

function TextInput({
  label,
  name,
  placeholder,
  register,
  validation,
  error,
  useTextArea,
}) {
  return (
    <div className="row d-flex justify-content-center">
      <div className="form-group col-lg-8">
        <label htmlFor={name}>
          {label}
        </label>
        { useTextArea ? (
          <textarea
            id={name}
            className="form-control"
            name={name}
            placeholder={placeholder || ''}
            {...register(name, validation)}
          />
        ) : (
          <input
            id={name}
            className="form-control"
            name={name}
            placeholder={placeholder || ''}
            {...register(name, validation)}
          />
        )}
        {error && <ErrorMessage error={error} />}
      </div>
    </div>
  );
}

TextInput.propTypes = {
  error: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func.isRequired,
  useTextArea: PropTypes.bool,
  validation: PropTypes.object,
};

TextInput.defaultProps = {
  error: null,
  label: '',
  placeholder: '',
  name: '',
  useTextArea: false,
  validation: {},
};

export default TextInput;
