/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-undef */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../Navbar';

import { NAVBAR_SCHEMA } from '../../schemas/navbar_schema';
import useWindowSize from '../../hooks/useWindowSize';
import useScrollPosition from '../../hooks/useScrollPosition';

const WIDTH_BREAKPOINT = 576;
const SCROLL_BREAKPOINT = 300;

function MainNavbar() {
  const [open, setOpen] = useState(false);
  const [width] = useWindowSize();
  const [scroll] = useScrollPosition();
  const [nav, setNav] = useState(scroll < SCROLL_BREAKPOINT);
  const [mobile, setMobile] = useState(width < WIDTH_BREAKPOINT);

  useEffect(() => {
    setNav(scroll < SCROLL_BREAKPOINT);
    setMobile(width < WIDTH_BREAKPOINT);
    console.log(scroll);
  }, [width, scroll]);

  const renderMenuIcon = () => (
    <button type="button" className="d-sm-none btn btn-secondary" onClick={() => { setOpen(!open); }}>
      {open
        ? <FontAwesomeIcon className="text-white" icon={faTimes} />
        : <FontAwesomeIcon className="text-white" icon={faBars} />}
    </button>
  );

  return (
    <Navbar>
      <Navbar.Main
        bgColor={`${nav ? 'bg-primary' : 'bg-light-gray'}`}
      >
        <Navbar.Item
          text={NAVBAR_SCHEMA.home.text}
          href={NAVBAR_SCHEMA.home.href}
          classNames="text-white p-1 nounderline me-auto"
        />
        { _.map(NAVBAR_SCHEMA.items, (item) => (
          !mobile && (
          <Navbar.Item
            key={item.text}
            text={item.text}
            href={item.href}
            classNames="d-block text-white p-1 nounderline"
          />
          )
        ))}
        <Navbar.Item
          text={NAVBAR_SCHEMA.donate.text}
          href={NAVBAR_SCHEMA.donate.href}
          classNames="text-warning p-1 nounderline"
        />
        { renderMenuIcon() }
      </Navbar.Main>
      { mobile && open
        && (
        <Navbar.Mobile>{_.map(NAVBAR_SCHEMA.items, (item) => (
          mobile && open && (
          <Navbar.Item
            key={item.text}
            text={item.text}
            href={item.href}
            classNames="d-block p-1 nounderline text-white"
          />
          )
        ))}
        </Navbar.Mobile>
        )}
    </Navbar>
  );
}
export default MainNavbar;
