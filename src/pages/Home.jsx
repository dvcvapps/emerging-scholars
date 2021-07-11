import React from 'react';
import Hero from '../components/Hero';

function Home() {
  return (
    <>
      <Hero height={500} image="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60">
        <div>
          <h4 className="text-white d-block text-center">Emerging Leaders</h4>
          <h4 className="text-white d-block text-center">and</h4>
          <h4 className="text-white d-block text-center">Scholars in STEM Academy</h4>
        </div>
      </Hero>
      <div className="container" style={{ minHeight: 1000 }}>
        <h1>Emerging Leaders and Scholars in STEM Academy</h1>
      </div>
    </>
  );
}

export default Home;
