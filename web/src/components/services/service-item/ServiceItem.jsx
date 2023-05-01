import React from 'react'
import { NavLink } from 'react-router-dom'

function ServiceItem({ service }) {
  return (
    <div>
      <h4>Table: {service.table}</h4>
      <h6> {service.taker.username} </h6>
      <button><NavLink to={`/service/${service.id}`} >Edit</NavLink></button>
    </div>
  )
}

export default ServiceItem