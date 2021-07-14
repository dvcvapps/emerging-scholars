/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const propTypes = {
  schema: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]),
  title: PropTypes.string,
  desc: PropTypes.string,
  location: PropTypes.string,
  phone: PropTypes.string,
};
const defaultProps = {
  schema: {},
  title: '',
  desc: '',
  location: '',
  phone: '',
};

function Footer({
  title, schema, desc, location, phone,
}) {
  const [year, setYear] = useState('');
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <div className="mt-5 pt-5 pb-5 bg-grullo footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xs-12 about-company">
            <h2>{title}</h2>
            <p className="pr-5 text-white-50">{desc}</p>
            <p>
              <a href="/dkslfj"><i className="fa fa-facebook-square mr-1" /></a>
              <a href="/skfdljsf"><i className="fa fa-linkedin-square" /></a>
            </p>
          </div>
          <div className="col-lg-3 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3">Links</h4>
            <ul className="m-0 p-0">
              {_.map(schema.items, (item) => (
                <li>
                  <FontAwesomeIcon
                    icon={['fa', item.icon]}
                  />
                  <Link className="ml-2 nounderline" to={item.href}>{(` ${item.text}`)}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 col-xs-12 location">
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
          <div className="col copyright">
            <p className="">
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
