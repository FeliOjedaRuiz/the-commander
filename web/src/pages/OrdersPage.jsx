import React from 'react'
import OrdersList from '../components/orders/order-list/OrdersList';
import Layout from '../components/layout/Layout';

function OrdersPage() {
  
  return (
    <Layout>
      <div className="min-h-screen rounded-xl bg-lime-50 dark:bg-gray-800">
        <OrdersList/>              
      </div>
      
    </Layout>
  )
}

export default OrdersPage