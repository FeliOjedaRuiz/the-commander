import React from 'react'

function ServiceOrderItem({ order }) {
  return (
    <div>
      <span>{order.product.name}</span>
    </div>
  )
}

export default ServiceOrderItem