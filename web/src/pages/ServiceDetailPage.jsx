import React from 'react'
import OrderForm from '../components/orders/order-form/OrderForm'
import OrdersList from '../components/orders/order-list/OrdersList'

function ServiceDetailPage() {
  return (
    <div>
      <h1>ServiceDetailPage</h1>
      <div>
        <OrderForm/>
      </div>
      <div>
        {/* <OrdersList/> */}
      </div>
    </div>
  )
}

export default ServiceDetailPage