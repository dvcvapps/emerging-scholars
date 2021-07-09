import React from 'react';
import _ from 'lodash';
import Navbar from '../Navbar';

import { NAVBAR_SCHEMA } from '../../schemas/navbar_schema';

function MainNavbar() {
  return (
    <Navbar>
      <Navbar.Item
        text={NAVBAR_SCHEMA.home.text}
        href={NAVBAR_SCHEMA.home.href}
      />
      {
        _.map(NAVBAR_SCHEMA.items, (item) => (
          <Navbar.Item
            text={item.text}
            href={item.href}
          />
        ))
      }
    </Navbar>
  );
}
export default MainNavbar;
