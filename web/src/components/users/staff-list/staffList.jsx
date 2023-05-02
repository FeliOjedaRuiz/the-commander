import React from 'react';
import StaffItem from '../staff-item/StaffItem';


function StaffList({ staffList }) {  
  
  return (
    <>
      <h2 className='m-4 pt-4 text-center text-lime-700'>Staff</h2>
      <div className='grid gap-4 mx-4 md:grid-cols-2 '>
        {staffList.map((user) => (
          <StaffItem user={user} key={user.id} />
        ))}
      </div>
    </>
  );
}

export default StaffList;