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
        <div className="p-3 mb-4 rounded-xl bg-lime-100 dark:bg-gray-800">
          <StaffForm onStaffCreation={onStaffCreation} />
        </div>
        <div className="min-h-screen justify-center rounded-xl bg-lime-50 dark:bg-gray-800">
          <StaffList staffList={staffList} />
        </div>      
    </Layout>
  )
}

export default StaffPage