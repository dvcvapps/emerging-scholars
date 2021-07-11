/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';

function Profile({ header, image, desc }) {
  return (
    <div className="d-flex justify-content-around flex-column">
      <h2 className="text-center my-5 h2">{header}</h2>
      <img
        className="align-self-center rounded-circle z-depth-2"
        alt="100x100"
        height={200}
        width={200}
        src={image}
        data-holder-rendered="true"
      />
      <p className="text-center my-5">{desc}</p>
    </div>
  );
}

Profile.propTypes = {
  header: PropTypes.string,
  image: PropTypes.string,
  desc: PropTypes.string,

};

Profile.defaultProps = {
  header: '',
  image: '',
  desc: '',

};

export default Profile;
