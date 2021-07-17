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

function Main({ children, bgColor }) {
  return (
    <div className={`d-flex align-items-center p-1 ${bgColor}`}>
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

function Mobile({ children, bgColor }) {
  return (
    <div className={`bg-primary border-top ${bgColor}`}>
      {children}
    </div>
  );
}
Mobile.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]),
  bgColor: PropTypes.string,
};
Mobile.defaultProps = {
  children: [],
  bgColor: '',
};

function Navbar({ children }) {
  return (
    <div className="fixed-top">
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
