import React from 'react';
import ProductItem from '../product-item/ProductItem';

function ProductsList({ products }) {  
  
  return (
    <>
      <h2 className='m-4 pt-4 text-center text-pink-700'>Products</h2>
      <div className='grid gap-4 mx-6 md:grid-cols-2 lg:grid-cols-3'>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default ProductsList;