import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import productsService from '../../../services/products'
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthStore';


function ProductForm({ onProductCreation }) {
  const { register, handleSubmit, watch, setError, formState: { errors }} = useForm({ mode: 'onBlur'});
  const [serverError, setServerError] = useState(undefined);
  const { establishmentId } = useParams();
  const { currEstab } = useContext(AuthContext)


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
      <h2 className='mb-2 text-center text-pink-700'>Create a new product for {currEstab.name}</h2>   
      <form onSubmit={handleSubmit(onProductSubmit)}>
        {serverError && <div>{serverError}</div>}

        <div className='flex m-3 justify-center'>
          <div className='mx-2 relative w-full'>
            <input type='text' placeholder='Name' className="w-full bg-gray-50 border border-pink-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block  pl-4 p-2.5  "
            {...register('name', { required: 'Product name is required'
            })} />            
          </div>
          <div className='mx-2 relative w-full'>
            <input type='number' placeholder='Price' className=" w-full bg-gray-50 border border-pink-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block  pl-4 p-2.5  "
            {...register('price', { required: 'Product price is required'
            })} />
            
          </div>
          <div className='mx-2 relative w-full'>
            <input type='text' placeholder='Category' className=" w-full bg-gray-50 border border-pink-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block  pl-4 p-2.5"
            {...register('category', { required: 'Product category is required'
            })} />
            
          </div>
          <button type="submit" class="px-4 py-2 w-1/24 text-sm font-medium text-white bg-pink-500 border border-pink-300 rounded-lg hover:bg-pink-600 hover:text-white focus:z-10 focus:ring-2 mx-2 focus:ring-pink-700 focus:text-pink-700 ">
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