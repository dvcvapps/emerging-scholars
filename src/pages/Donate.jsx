import React from 'react';
import Spacer from '../components/Spacer';

function Donate() {
  return (
    <>
      <Spacer />
      <div className="container" style={{ minHeight: 1000 }}>
        <h1 className="text-center text-secondary">Donate</h1>
        <p className="text-center text-danger">TEST DO NOT DONATE</p>
        <div className="d-flex justify-content-center">
          <div className="gfm-embed" style={{ maxWidth: 'max-content' }} data-url="https://www.gofundme.com/f/emerging-scholars/widget/medium/" />
        </div>
        <p className="text-center text-danger">TEST DO NOT DONATE</p>
      </div>
    </>
  );
}

export default Donate;
