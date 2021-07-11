import React from 'react';
import _ from 'lodash';
import Spacer from '../components/Spacer';
import Profile from '../components/Profile';
import { MEMBERS_SCHEMA } from '../schemas/members_schema';

function BoardMembers() {
  return (
    <>
      <Spacer />
      <div className="container" style={{ minHeight: 1000 }}>
        <h1 className="text-center">Board Members</h1>
        <div className="row">
          { _.map(MEMBERS_SCHEMA.members, (member) => (
            <div className="col-6 col-lg-4">
              <Profile
                header={member.header}
                image={member.image}
                desc={member.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BoardMembers;
