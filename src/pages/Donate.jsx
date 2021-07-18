/* eslint-disable no-alert */
/* eslint-disable no-undef */
import React from 'react';
import Spacer from '../components/Spacer';

function Donate() {
  return (
    <>
      <Spacer />
      <div className="container" style={{ minHeight: 1000 }}>
        <div className="">
          <h1 className="display-4 text-primary text-center">DONATE</h1>
          <p className="lead">Lorem ipsum dolor.</p>
          <hr className="my-4" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu
            smod tempor incididunt ut labore et dolore magna aliqua. Vel elit scelerisque
            mauris pellentesque. Dolor sit amet consectetur adipiscing elit duis tristique. Enim
            tortor at auctor urna nunc id cursus metus. Sit amet nulla facilisi morbi
            tempus iaculis urn.
          </p>
          <button type="button" className="btn btn-primary btn-lg" onClick={() => alert('This will redirect to donate page')}>DONATE</button>
        </div>
      </div>
    </>
  );
}

export default Donate;
