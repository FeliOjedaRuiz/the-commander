import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import productsService from '../../../services/products'
import { useParams } from 'react-router-dom';


function ProductForm({ onProductCreation }) {
  const { register, handleSubmit, watch, setError, formState: { errors }} = useForm({ mode: 'onBlur'});
  const [serverError, setServerError] = useState(undefined);
  const { establishmentId } = useParams();


  console.debug(`Tags: ${watch('tags')}`);

  const onProductSubmit = async (product) => {
    product.establishment = establishmentId
    try {
      setServerError(undefined);
      console.debug('Creating product...')           
      product = await productsService.create(product)
      onProductCreation();
    } catch (error) {
      const errors = error.response?.data?.errors;
      if (errors) {
        console.error(error.message, errors);
        Object.keys(errors)
          .forEach((inputName) => setError(inputName, { message: errors[inputName] }));       
      } else {
        console.error(error);
        setServerError(error.message);
      }
    }
  }


  return (
    <form onSubmit={handleSubmit(onProductSubmit)}>
      {serverError && <div>{serverError}</div>}
      <div>
        <input type='text' placeholder='Name' {...register('name', {
          required: 'Product name is required'
        })} />
        {errors.name && <div>{errors.name?.message}</div>}
      </div>
      <div>
        <input type='number' placeholder='Price' {...register('price', {
          required: 'Product price is required'
        })} />
        {errors.price && <div>{errors.price?.message}</div>}
      </div>
      <div>
        <input type='text' placeholder='Category' {...register('category', {
          required: 'Product category is required'
        })} />
        {errors.category && <div>{errors.category?.message}</div>}
      </div>
      
      <button type='submit'>Crear</button>
    </form>
  )
}

export default ProductForm