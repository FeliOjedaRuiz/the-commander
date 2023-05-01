import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ordersService from '../../../services/orders';
import ServiceOrderItem from '../service-order-item/ServiceOrderItem';

function ServiceOrdersList({ reload }) {
  const [orders, setOrders] = useState([])
  const { serviceId }= useParams()

  useEffect(() => {
    ordersService.list(serviceId)
      .then((orders) => {
        setOrders(orders)        
      })
      .catch(error => console.error(error));
  }, [reload]);

  return (
    <div>
      {orders.map((order) => (
          <ServiceOrderItem order={order} key={order.id} />
        ))}
    </div>
  )
}

export default ServiceOrdersList