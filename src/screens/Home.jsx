import React from 'react';

function Home() {
  const image = 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${image})`, height: 400 }}>
        <h1 className="text-white">HOME</h1>
      </div>
      <div className="container" style={{ minHeight: 1000 }} />
    </>
  );
}

export default Home;
