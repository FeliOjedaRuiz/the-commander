import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import productsService from '../../../services/products'

function ProductForm({ onProductCreation }) {
  const { register, handleSubmit, watch, setError, formState: { errors }} = useForm({ mode: 'onBlur'});
  const [serverError, setServerError] = useState(undefined);

  console.debug(`Tags: ${watch('tags')}`);

  const onProductSubmit = async (product) => {
    try {
      setServerError(undefined);
      console.debug('Creating product...')      
      product = await productsService.create(product)
      onProductCreation();
    } catch (error) {
      const errors = error.response?.date?.errors;
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
      <button type='submit'>Crear</button>
    </form>
  )
}

export default ProductForm