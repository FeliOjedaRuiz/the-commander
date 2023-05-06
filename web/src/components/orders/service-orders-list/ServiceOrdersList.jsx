import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ordersService from '../../../services/orders';
import servicesService from '../../../services/services'
import ServiceOrderItem from '../service-order-item/ServiceOrderItem';

function ServiceOrdersList({ reload }) {
  const [orders, setOrders] = useState([])
  const [service, setService] = useState({})
  const [count, setCount] = useState(0)
  const { serviceId }= useParams()
  

  useEffect(() => {
    servicesService.detail(serviceId)
      .then((service) => {
        setService(service)
      })
      .catch(error => console.error(error));
  }, [])

  useEffect(() => {
    const pricesArray = []
    ordersService.list(serviceId)
      .then((orders) => {
        setOrders(orders)
        orders.map((order) => {
          pricesArray.push(order.product.price)
        })
        setCount(pricesArray.reduce((partialSum, a) => partialSum + a, 0))        
      })
      .catch(error => console.error(error));
  }, [reload]);




  return (
    <>
      <div className='m-4 pt-4 flex'>
        <h2 className='m-4 pt-4  text-teal-700'>"{service.table}" orders:</h2>
        <h2 className='m-4 pt-4  text-teal-700'>Total acount: € {count}</h2>
      </div>

      <hr />
      
      <div className='grid gap-4 m-6 md:grid-cols-2 lg:grid-cols-3'>
        {orders.map((order) => (
            <ServiceOrderItem order={order} key={order.id} />
          ))}
      </div>
    </>
  )
}

export default ServiceOrdersList