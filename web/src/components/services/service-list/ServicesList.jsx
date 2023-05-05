import React from 'react'
import ServiceItem from '../service-item/ServiceItem'

function ServicesList({ services }) {
  
  return (
    <>
      <h2 className='m-4 pt-4 text-center text-amber-600'>Services</h2>
      <div className='grid gap-4 mx-6 md:grid-cols-2 lg:grid-cols-3'>
        {services.map((service) => (
          <ServiceItem service={service} key={service.id} />
        ))}
      </div>
    </>
  )
}

export default ServicesList;