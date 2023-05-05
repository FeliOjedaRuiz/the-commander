import React from 'react'
import OrdersList from '../components/orders/order-list/OrdersList';
import Layout from '../components/layout/Layout';
import OrderForm from './../components/orders/order-form/OrderForm';

function OrdersPage() {
  
  return (
    <Layout>
      {/* <div className="p-3 rounded-xl bg-teal-200">
        <OrderForm />
      </div> */}
      <div className="min-h-screen justify-center rounded-xl bg-teal-50">
        <OrdersList/>              
      </div>
      
    </Layout>
  )
}

export default OrdersPage