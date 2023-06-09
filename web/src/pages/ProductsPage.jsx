import React, { useEffect, useState } from 'react';
import ProductsList from '../components/products/products-list/ProductsList';
import ProductForm from '../components/products/product-form/ProductForm';
import productsService from '../services/products';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';

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
    <Layout>   
        <div className="p-3 rounded-xl bg-pink-200">
          <ProductForm onProductCreation={onProductCreation} />
        </div>
        <div className="min-h-screen justify-center rounded-xl bg-pink-50">
          <ProductsList products={products} />
        </div>      
    </Layout>
  )
}

export default ProductsPage;