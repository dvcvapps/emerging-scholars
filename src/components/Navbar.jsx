/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Item({
  text, href, classNames, onClick,
}) {
  const mainClasses = `${classNames}`;
  return (
    <Link onClick={onClick} className={mainClasses} to={href}>
      {text}
    </Link>
  );
}
Item.propTypes = {
  classNames: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
  onClick: () => {},
};
Item.defaultProps = {
  classNames: '',
  text: '',
  href: '',
  onClick: () => {},
};

function Main({ children, classNames }) {
  return (
    <div className={`container-xxl d-flex align-items-center p-1 ${classNames}`}>
      {children}
    </div>
  );
}
Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]),
  classNames: PropTypes.string,
};
Main.defaultProps = {
  children: [],
  classNames: '',
};

function Mobile({ children, classNames }) {
  return (
    <div className={`border-top ${classNames}`}>
      {children}
    </div>
  );
}
Mobile.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]),
  classNames: PropTypes.string,
};
Mobile.defaultProps = {
  children: [],
  classNames: '',
};

function Navbar({ children, classNames }) {
  return (
    <div className={`fixed-top ${classNames}`}>
      {children}
    </div>
  );
}

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]),
  classNames: PropTypes.string,
};

const defaultProps = {
  children: [],
  classNames: '',
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

Navbar.Item = Item;
Navbar.Mobile = Mobile;
Navbar.Main = Main;

export default Navbar;
