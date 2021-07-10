import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Item({ text, href, classNames }) {
  const mainClasses = `${classNames}`;
  return (
    <Link className={mainClasses} to={href}>{text}</Link>
  );
}
Item.propTypes = {
  classNames: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
};
Item.defaultProps = {
  classNames: '',
  text: '',
  href: '',
};

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]),
};

const defaultProps = {
  children: [],
};

function Navbar({ children }) {
  return (
    <div className="d-flex">
      {children}
    </div>
  );
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

Navbar.Item = Item;
export default Navbar;
