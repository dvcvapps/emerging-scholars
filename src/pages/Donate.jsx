import React from 'react';
import Spacer from '../components/Spacer';

function Donate() {
  return (
    <>
      <Spacer />
      <div className="container" style={{ minHeight: 1000 }}>
        <h1 className="text-center text-secondary">Donate</h1>
        <p className="text-center text-danger">DOES NOT WORK YET</p>
        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-warning">DONATE</button>
        </div>
      </div>
    </>
  );
}

export default Donate;
