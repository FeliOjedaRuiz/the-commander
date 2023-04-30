import React, { useEffect, useState } from 'react'
import StaffForm from '../components/users/staff-form/StaffForm'
import StaffList from '../components/users/staff-list/staffList'
import usersService from '../services/users';

function StaffPage() {
  const [staffList, setStaffList] = useState([]);
  const [reload, setReload] = useState(false)

  useEffect(() => {
    usersService.list()
      .then((staffList) => {
        setStaffList(staffList)        
      })
      .catch(error => console.error(error));
  }, [reload]);

  const onStaffCreation = () => {
    setReload(!reload)
  }


  return (
    <div>
      <h1>Staff</h1>
      <div>
        <StaffForm onStaffCreation={onStaffCreation} />
        <StaffList staffList={staffList} />
      </div>
    </div>
  )
}

export default StaffPage