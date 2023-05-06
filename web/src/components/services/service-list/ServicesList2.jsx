import React from 'react'
import ServiceItem2 from '../service-item/ServiceItem2';

function ServicesList2({ services }) {

  return (
    <>
      <h2 className='m-4 pt-4 text-center text-amber-600'>Services</h2>
      <div className='grid gap-4 mx-6 md:grid-cols-2 lg:grid-cols-3'>
        {services.map((service) => (
          <ServiceItem2 service={service} key={service.id} />
        ))}
      </div>
    </>
  )
}

export default ServicesList2;