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
    <>
      <h2 className=' p-4 text-center text-teal-700'>Actual establishment orders</h2>
      <div className='grid gap-4 mx-6 md:grid-cols-2 lg:grid-cols-3'>
        {orders.map((order) => (
          <OrderItem order={order} key={order.id} />
        ))}
      </div>
    </>
  )
}

export default OrdersList