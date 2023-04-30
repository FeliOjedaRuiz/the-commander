import React from 'react'
import ServiceItem from '../service-item/ServiceItem'

function ServicesList({ services }) {
  
  return (
    <div>
      <h3>Services List</h3>
      <div>
        {services.map((service) => (
          <ServiceItem service={service} key={service.id} />
        ))}
      </div>
    </div>
  )
}

export default ServicesList;