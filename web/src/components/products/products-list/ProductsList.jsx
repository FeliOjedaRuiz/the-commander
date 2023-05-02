import React from 'react';
import ProductItem from '../product-item/ProductItem';

function ProductsList({ products }) {  
  
  return (
    <div>
      <h2 className='m-2 text-center text-lime-700'>Products</h2>
      <div className='grid  md:grid-cols-2 lg:grid-cols-3'>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;