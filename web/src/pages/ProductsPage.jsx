import React, { useEffect, useState } from 'react';
import ProductsList from '../components/products/products-list/ProductsList';
import ProductForm from '../components/products/product-form/ProductForm';
import productsService from '../services/products';
import { useParams } from 'react-router-dom';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);
  const { establishmentId } = useParams(); 

  useEffect(() => {
    productsService.list(establishmentId)
      .then((products) => {
        setProducts(products)        
      })
      .catch(error => console.error(error));
  }, [reload, establishmentId]);

  const onProductCreation = () => {
    setReload(!reload)
  }

  
  return (
    <div>
      <h1>Products</h1>
      <div>
        <ProductForm onProductCreation={onProductCreation} />
      </div>
      <div>
        <ProductsList products={products} />
      </div>
    </div>
  )
}

export default ProductsPage;