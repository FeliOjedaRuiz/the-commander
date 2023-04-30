import React from 'react'

function ServiceItem({ service }) {
  return (
    <div>
      <h4>Table: {service.table}</h4>
      <h6> {service.taker.username} </h6>
    </div>
  )
}

export default ServiceItem