import React from 'react'

function OrderItem({ order }) {
  return (
    <div>
      <span>{order.product.name} - </span>
      <span>{order.service.table} - </span>
      <span>{order.ready.toString()} - </span>
    </div>    
  )
}

export default OrderItem