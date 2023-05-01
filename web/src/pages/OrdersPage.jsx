import React from 'react'
import OrdersList from '../components/orders/order-list/OrdersList';
import Layout from '../components/layout/Layout';

function OrdersPage() {
  
  return (
    <Layout>
      <div>
        <h1>Orders</h1>
        <div>
          <OrdersList/>              
        </div>
      </div>
    </Layout>
  )
}

export default OrdersPage