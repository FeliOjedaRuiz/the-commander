import React, { useEffect, useState } from 'react'
import StaffForm from '../components/users/staff-form/StaffForm'
import StaffList from '../components/users/staff-list/staffList'
import usersService from '../services/users';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';

function StaffPage() {
  const [staffList, setStaffList] = useState([]);
  const [reload, setReload] = useState(false);
  const { establishmentId }= useParams()

  useEffect(() => {
    usersService.list(establishmentId)
      .then((staffList) => {
        setStaffList(staffList)        
      })
      .catch(error => console.error(error));
  }, [reload]);

  const onStaffCreation = () => {
    setReload(!reload)
  }


  return (
    <Layout>
      <div>
        <h1>Staff</h1>
        <div>
          <StaffForm onStaffCreation={onStaffCreation} />
          <StaffList staffList={staffList} />
        </div>
      </div>
    </Layout>
  )
}

export default StaffPage