/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

function Card({
  header, subHeader, desc, classNames,
}) {
  return (
    <div className={`card ${classNames}`}>
      <div className="card-body">
        <h5 className="card-title">{header}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{subHeader}</h6>
        <p className="card-text">
          {desc}
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  header: PropTypes.string,
  subHeader: PropTypes.string,
  desc: PropTypes.string,
  classNames: PropTypes.string,
};

Card.defaultProps = {
  header: '',
  subHeader: '',
  desc: '',
  classNames: '',
};

export default Card;
