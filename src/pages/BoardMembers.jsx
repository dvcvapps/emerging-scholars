import React from 'react';
import Spacer from '../components/Spacer';
import Profile from '../components/Profile';

function BoardMembers() {
  return (
    <>
      <Spacer />
      <div className="container" style={{ minHeight: 1000 }}>
        <h1 className="text-center">Board Members</h1>
        <div className="row">
          <div className="col-4">
            <Profile
              header="Fake Name"
              image="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
              desc="Description of person."
            />
          </div>
          <div className="col-4">
            <Profile
              header="Fake Name"
              image="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
              desc="Description of person."
            />
          </div>
          <div className="col-4">
            <Profile
              header="Fake Name"
              image="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
              desc="Description of person."
            />
          </div>
          <div className="col-4">
            <Profile
              header="Fake Name"
              image="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
              desc="Description of person."
            />
          </div>
          <div className="col-4">
            <Profile
              header="Fake Name"
              image="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
              desc="Description of person."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BoardMembers;
