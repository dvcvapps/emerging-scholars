/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function ErrorMessage({ error }) {
  return (
    <div className="text-danger">
      {error.type === 'required' && (error.message || 'This field is required')}
      {error.type === 'pattern' && (error.message || 'This field does not meet the required pattern')}
    </div>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.object.isRequired,
};

export default ErrorMessage;
