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

function Main({ children, bgColor }) {
  return (
    <div className={`d-flex p-1 ${bgColor}`}>
      {children}
    </div>
  );
}
Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]),
  bgColor: PropTypes.string,
};
Main.defaultProps = {
  children: [],
  bgColor: '',
};

function Mobile({ children }) {
  return (
    <div className="bg-primary border-top">
      {children}
    </div>
  );
}
Mobile.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]),
};
Mobile.defaultProps = {
  children: [],
};

function Navbar({ children }) {
  return (
    <div className="sticky-top">
      {children}
    </div>
  );
}

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]),
};

const defaultProps = {
  children: [],
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

Navbar.Item = Item;
Navbar.Mobile = Mobile;
Navbar.Main = Main;

export default Navbar;
