import React from 'react';
import PropTypes from 'prop-types';

function Spacer({ height }) {
  const styles = { height: height };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={styles} />
  );
}

Spacer.propTypes = {
  height: PropTypes.number,
};
Spacer.defaultProps = {
  height: 100,
};

export default Spacer;
