import React from 'react'
import OrdersList from '../components/orders/order-list/OrdersList';

import OrderForm from '../components/orders/order-form/OrderForm';
import Layout2 from '../components/layout/Layout2';

function OrdersPageKitchen() {
  
  return (
    <Layout2>
      {/* <div className="p-3 rounded-xl bg-teal-200">
        <OrderForm />
      </div> */}
      <div className="min-h-screen justify-center rounded-xl bg-teal-50">
        <OrdersList/>              
      </div>
      
    </Layout2>
  )
}

export default OrdersPageKitchen