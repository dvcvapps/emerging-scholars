/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const propTypes = {
  links: PropTypes.array,
  title: PropTypes.string,
  desc: PropTypes.string,
  location: PropTypes.string,
  phone: PropTypes.string,
};
const defaultProps = {
  links: {},
  title: '',
  desc: '',
  location: '',
  phone: '',
};

function Footer({
  title, links, desc, location, phone,
}) {
  const [year, setYear] = useState('');
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <div className="mt-1 pt-5 pb-5 bg-grullo text-light no-list-style">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xs-12">
            <h2>{title}</h2>
            <p className="pr-5 text-white-50">{desc}</p>
          </div>
          <div className="col-lg-3 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3">Links</h4>
            <ul className="m-0 p-0">
              {_.map(links, (link) => (
                <li key={link.text}>
                  <FontAwesomeIcon
                    icon={['fa', link.icon]}
                  />
                  <Link className="ml-2 text-white nounderline" to={link.href}>{(` ${link.text}`)}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 col-xs-12">
            <h4 className="mt-lg-0 mt-sm-4">Location</h4>
            <p>{location}</p>
            {phone && (
            <p className="mb-0">
              <FontAwesomeIcon
                icon={['fa', 'phone']}
              />
              {phone}
            </p>
            )}
          </div>
        </div>
        <div className="row mt-5">
          <hr className="text-dark" />
          <div className="col">
            <p>
              <small className="text-white-50">
                ©
                {(year)}
                . All Rights Reserved.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
