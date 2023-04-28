import React from 'react';
import ProductItem from '../product-item/ProductItem';

function ProductsList({ products }) {  
  
  return (
    <div>
      <h3>Products List</h3>
      <div>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;