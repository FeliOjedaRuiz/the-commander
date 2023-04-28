import React from 'react'

function ProductItem({ product }) {
  return (
    <div>
      <h4>Product {product.name}</h4>
      <h6>€ {product.price} </h6>
    </div>
  )
}

export default ProductItem