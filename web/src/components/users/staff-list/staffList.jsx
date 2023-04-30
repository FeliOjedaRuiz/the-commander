import React from 'react';
import StaffItem from '../staff-item/StaffItem';


function StaffList({ staffList }) {  
  
  return (
    <div>
      <h3>Staff</h3>
      <div>
        {staffList.map((user) => (
          <StaffItem user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}

export default StaffList;