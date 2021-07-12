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
        <h1 className="text-center text-primary">Board Members</h1>
        <div className="row">
          { _.map(MEMBERS_SCHEMA.members, (member) => (
            <div key={member.header} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Profile
                header={member.header}
                name={member.name}
                image={member.image}
                schools={member.schools}
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
