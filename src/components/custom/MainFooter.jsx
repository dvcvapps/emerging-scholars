/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-undef */
/* eslint-disable max-len */
import React from 'react';

import Footer from '../Footer';

import { NAVBAR_SCHEMA } from '../../schemas/navbar_schema';

function MainFooter() {
  return (
    <Footer
      title={NAVBAR_SCHEMA.home.text}
      desc="Emerging Leaders and Scholars in STEM Academy"
      schema={NAVBAR_SCHEMA}
      location="Southern California"
    />
  );
}

export default MainFooter;
