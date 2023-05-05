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
      <h2 className='mb-2 text-center text-pink-700'>Create a new product</h2>   
      <form onSubmit={handleSubmit(onProductSubmit)}>
        {serverError && <div>{serverError}</div>}

        <div className=' m-1 md:flex '>
          <div className='m-2 sm:w-full'>
            <input type='text' placeholder='Name' className="w-full bg-gray-50 border border-pink-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block    "
            {...register('name', { required: 'Product name is required'
            })} />
            {errors.name && <p class="m-1 pl-3 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops! </span>{errors.name?.message}</p>}            
          </div>
          <div className='m-2 sm:w-full'>
            <input type='number' placeholder='Price' className=" w-full bg-gray-50 border border-pink-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block  "
            {...register('price', { required: 'Product price is required'
            })} />
            {errors.price && <p class="m-1 pl-3 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops! </span>{errors.price?.message}</p>}
          </div>
          <div className='m-2 sm:w-full'>
            <input type='text' placeholder='Category' className=" w-full bg-gray-50 border border-pink-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block "
            {...register('category', { required: 'Product category is required'
            })} />
            {errors.category && <p class="m-1 pl-3 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops! </span>{errors.category?.message}</p>}
          </div>          
        </div>
        <div className='flex justify-end'>
        <button type="submit" className="px-4 py-2 w-1/24 text-sm font-medium text-white bg-pink-500 border border-pink-300 rounded-lg hover:bg-pink-600 hover:text-white focus:z-10 focus:ring-2 m-4 focus:ring-pink-700 focus:text-pink-700 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
        </button>
        </div>

      </form>

    </>
  )
}

export default ProductForm