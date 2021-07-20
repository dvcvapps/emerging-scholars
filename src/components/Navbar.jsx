/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

function HomeItem({
  text, href, classNames, onClick,
}) {
  return (
    <Link onClick={onClick} className={classNames} to={href}>
      {text}
    </Link>
  );
}
HomeItem.propTypes = {
  classNames: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
  onClick: () => {},
};
HomeItem.defaultProps = {
  classNames: '',
  text: '',
  href: '',
  onClick: () => {},
};

function MenuItem({
  text, href, classNames, onClick,
}) {
  return (
    <NavLink activeClassName="border-primary border-bottom" onClick={onClick} className={classNames} to={href}>
      {text}
    </NavLink>
  );
}
MenuItem.propTypes = {
  classNames: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
  onClick: () => {},
};
MenuItem.defaultProps = {
  classNames: '',
  text: '',
  href: '',
  onClick: () => {},
};

function MobileItem({
  text, href, classNames, onClick,
}) {
  return (
    <NavLink activeClassName="" onClick={onClick} className={classNames} to={href}>
      {text}
    </NavLink>
  );
}
MobileItem.propTypes = {
  classNames: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
  onClick: () => {},
};
MobileItem.defaultProps = {
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

Navbar.HomeItem = HomeItem;
Navbar.MenuItem = MenuItem;
Navbar.Mobile = Mobile;
Navbar.MobileItem = MobileItem;
Navbar.Main = Main;

export default Navbar;
