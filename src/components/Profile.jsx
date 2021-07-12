/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

function Profile({
  header, image, desc, name, schools,
}) {
  return (
    <div className="d-flex justify-content-around flex-column">
      <h4 className="text-center my-0 open-sans-font">{header}</h4>
      <h4 className="text-center pb-3">{name}</h4>
      <img
        className="align-self-center rounded-circle z-depth-2"
        alt="100x100"
        height={200}
        width={200}
        src={image}
        data-holder-rendered="true"
      />
      {_.map(schools, (school) => (
        <div key={school} className="text-center mt-1">
          <small>
            {school}
          </small>
          {schools[schools.length - 1] !== school && <hr className="text-black my-0" />}
        </div>
      ))}
      <p className="text-center my-3">{desc}</p>
    </div>
  );
}

Profile.propTypes = {
  header: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  desc: PropTypes.string,
  schools: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
};

Profile.defaultProps = {
  header: '',
  name: '',
  image: '',
  desc: '',
  schools: [],
};

export default Profile;
