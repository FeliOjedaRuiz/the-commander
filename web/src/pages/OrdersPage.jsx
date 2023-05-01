import React from 'react'
import OrdersList from '../components/orders/order-list/OrdersList';

function OrdersPage() {
  
  return (
    <div>
      <h1>Orders</h1>
      <div>
        <OrdersList/>              
      </div>
    </div>
  )
}

export default OrdersPage