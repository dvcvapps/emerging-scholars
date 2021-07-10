import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Item({ text, href }) {
  return (
    <Link to={href}>{text}</Link>
  );
}
Item.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
};
Item.defaultProps = {
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
    <div className="text-white bg-dark">
      {children}
    </div>
  );
}
Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

Navbar.Item = Item;
export default Navbar;
