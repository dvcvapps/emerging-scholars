/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-undef */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Navbar from '../Navbar';

import { NAVBAR_SCHEMA } from '../../schemas/navbar_schema';
import useWindowSize from '../../hooks/useWindowSize';
import useScrollPosition from '../../hooks/useScrollPosition';

const WIDTH_BREAKPOINT = 576;
const SCROLL_BREAKPOINT = 50;

function MainNavbar() {
  const [open, setOpen] = useState(false);
  const [width] = useWindowSize();
  const [scroll] = useScrollPosition();
  const [nav, setNav] = useState(scroll < SCROLL_BREAKPOINT);
  const [mobile, setMobile] = useState(width < WIDTH_BREAKPOINT);

  useEffect(() => {
    if (open) {
      setNav(false);
    } else {
      setNav(scroll < SCROLL_BREAKPOINT);
    }
    setMobile(width < WIDTH_BREAKPOINT);
  }, [width, scroll]);

  const renderMenuIcon = () => {
    const setNavColor = () => {
      if (!open) {
        setNav(false);
      } else if (scroll < SCROLL_BREAKPOINT) {
        setNav(true);
      }
      setOpen(!open);
    };
    return (
      <button type="button" className="d-sm-none btn btn-secondary m-2" onClick={setNavColor}>
        {open
          ? <FontAwesomeIcon className="text-white" icon={['fa', 'times']} />
          : <FontAwesomeIcon className="text-white" icon={['fa', 'bars']} />}
      </button>
    );
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <Navbar classNames={`${!nav ? 'bg-primary-trans' : 'bg-transparent'}`}>
      <Navbar.Main>
        <Navbar.HomeItem
          text={NAVBAR_SCHEMA.home.text}
          href={NAVBAR_SCHEMA.home.href}
          classNames="h1 d-block text-secondary m-1 nounderline me-auto"
          onClick={closeMenu}
        />
        { _.map(NAVBAR_SCHEMA.items, (item) => (
          !mobile && (
          <Navbar.MenuItem
            key={item.text}
            text={item.text}
            href={item.href}
            classNames="h5 text-white d-block p-1 nounderline"
            onClick={closeMenu}
          />
          )
        ))}
        <Navbar.MenuItem
          text={NAVBAR_SCHEMA.donate.text}
          href={NAVBAR_SCHEMA.donate.href}
          classNames="h5 text-warning p-1 nounderline"
          onClick={closeMenu}
        />
        { renderMenuIcon() }
      </Navbar.Main>
      { mobile && open
        && (
        <Navbar.Mobile>
          {_.map(NAVBAR_SCHEMA.items, (item) => (
            mobile && open && (
            <Navbar.MobileItem
              key={item.text}
              text={item.text}
              href={item.href}
              classNames="d-block h5 m-0 p-1 border-bottom nounderline text-white"
              onClick={closeMenu}
            />
            )
          ))}
        </Navbar.Mobile>
        )}
    </Navbar>
  );
}
export default MainNavbar;
