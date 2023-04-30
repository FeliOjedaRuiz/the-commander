import React from 'react'

function StaffItem({ user }) {
  return (
    <div>
      <h4>{user.username}</h4>
      <h6>{user.role} </h6>
    </div>
  )
}

export default StaffItem