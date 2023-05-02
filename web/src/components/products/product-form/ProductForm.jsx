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
    <>
      <h2 className='mb-2 text-center text-lime-700'>Create a new product for</h2>   
      <form onSubmit={handleSubmit(onProductSubmit)}>
        {serverError && <div>{serverError}</div>}

        <div className='flex m-3 justify-center'>
          <div>
            <input type='text' placeholder='Name' className="w-full  bg-gray-50 border border-lime-300 text-gray-900 text-sm rounded-l-lg focus:ring-lime-500 focus:border-lime-500 block pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('name', { required: 'Product name is required'
            })} />            
          </div>
          <div>
            <input type='number' placeholder='Price' className="w-full  bg-gray-50 border border-lime-300 text-gray-900 text-sm focus:ring-lime-500 focus:border-lime-500 block pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('price', { required: 'Product price is required'
            })} />
            
          </div>
          <div>
            <input type='text' placeholder='Category' className="w-full  bg-gray-50 border border-lime-300 text-gray-900 text-sm focus:ring-lime-500 focus:border-lime-500 block pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('category', { required: 'Product category is required'
            })} />
            
          </div>
          <button type="submit" class="px-4 py-2 w-1/24 text-sm font-medium text-white bg-lime-500 border border-lime-300 rounded-r-lg hover:bg-lime-600 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
          </button>
        </div>
      </form>
      <div className='flex justify-center'>
          {errors.name && <div className='m-2 '>{errors.name?.message}</div>}
          {errors.price && <div className='m-2 '>{errors.price?.message}</div>}
          {errors.category && <div className='m-2 '>{errors.category?.message}</div>}
      </div>
    </>
  )
}

export default ProductForm