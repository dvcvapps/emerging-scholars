import React, { useState } from 'react';
import _ from 'lodash';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../Navbar';

import { NAVBAR_SCHEMA } from '../../schemas/navbar_schema';

function MainNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="d-flex bg-dark p-1 sticky-top">
      <Navbar.Item
        text={NAVBAR_SCHEMA.home.text}
        href={NAVBAR_SCHEMA.home.href}
        classNames=" text-white m-2 p-1 nounderline me-auto"
      />
      {
        _.map(NAVBAR_SCHEMA.items, (item) => (
          <Navbar.Item
            text={item.text}
            href={item.href}
            classNames=" text-white m-2 p-1 nounderline"
          />
        ))
      }
      <Navbar.Item
        text={NAVBAR_SCHEMA.donate.text}
        href={NAVBAR_SCHEMA.donate.href}
        classNames="text-warning m-2 p-1 nounderline"
      />
      <button type="button" className="d-sm-none btn btn-secondary " onClick={() => { setOpen(!open); }}>
        {
          open
            ? <FontAwesomeIcon className="text-white" icon={faBars} />
            : <FontAwesomeIcon className="" icon={faBars} />
        }
      </button>
    </div>
  );
}
export default MainNavbar;
