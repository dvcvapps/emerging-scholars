import React from 'react';
import PropTypes from 'prop-types';

function Hero({ children, image, height }) {
  const styles = { backgroundImage: `url(${image})`, height: height };

  return (
    <div className="d-flex justify-content-center align-items-center" style={styles}>
      {children}
    </div>
  );
}

Hero.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]),
  image: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
Hero.defaultProps = {
  children: [],
  image: '',
  height: 100,
};

export default Hero;
