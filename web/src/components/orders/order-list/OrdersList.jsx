import React, { useEffect, useState } from 'react'
import OrderItem from '../order-item/OrderItem'
import { useParams } from 'react-router-dom';
import ordersService from '../../../services/orders'

function OrdersList() {
  const [orders, setOrders] = useState([]);
  const { establishmentId }= useParams();

  useEffect(() => {
    ordersService.listAll(establishmentId)
      .then((orders) => {
        console.log(orders)
        setOrders(orders)        
      })
      .catch(error => console.error(error));
  }, []);


  return (
    <div>
      <h3>Orders List</h3>
      <div>
        {orders.map((order) => (
          <OrderItem order={order} key={order.id} />
        ))}
      </div>
    </div>
  )
}

export default OrdersList