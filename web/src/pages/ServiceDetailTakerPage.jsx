import React, { useState } from 'react'
import OrderForm from '../components/orders/order-form/OrderForm'
import ServiceOrdersList from '../components/orders/service-orders-list/ServiceOrdersList';
import Layout2 from '../components/layout/Layout2';

function ServiceDetailTakerPage() {
  const [reload, setReload] = useState(false);

  const onOrderCreation = () => {
    setReload(!reload)
  }


  return (
    <Layout2>
      <div className="p-3 rounded-xl bg-teal-100">
        <OrderForm onOrderCreation={onOrderCreation}/>
      </div>
      <div className="min-h-screen justify-center rounded-xl bg-teal-50">
        <ServiceOrdersList reload={reload} />
      </div>      
    </Layout2>
  )
}

export default ServiceDetailTakerPage