import React, { useState } from 'react'
import OrderForm from '../components/orders/order-form/OrderForm'
import ServiceOrdersList from '../components/orders/service-orders-list/ServiceOrdersList';
import Layout from '../components/layout/Layout';

function ServiceDetailPage() {
  const [reload, setReload] = useState(false);

  const onOrderCreation = () => {
    setReload(!reload)
  }


  return (
    <Layout>
      <div>
        <h1>ServiceDetailPage</h1>
        <div>
          <OrderForm onOrderCreation={onOrderCreation}/>
        </div>
        <div>
          <ServiceOrdersList reload={reload} />
        </div>
      </div>
    </Layout>
  )
}

export default ServiceDetailPage