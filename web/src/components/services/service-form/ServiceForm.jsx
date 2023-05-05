import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import servicesService from '../../../services/services'
import { useParams } from 'react-router-dom';

function ServiceForm({ onServiceCreation }) {
  const { register, handleSubmit, watch, setError, formState: { errors }} = useForm({ mode: 'onBlur'});
  const [serverError, setServerError] = useState(undefined);
  const { establishmentId } = useParams();
  const currentUser = JSON.parse(localStorage.getItem('current-user'))


  console.debug(`Tags: ${watch('tags')}`);

  const onServiceSubmit = async (service) => {
    service.taker = currentUser.id
    service.establishment = establishmentId    
    try {
      setServerError(undefined);
      console.debug('Creating service...')           
      service = await servicesService.create(service)
      onServiceCreation();
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
      <h2 className='mb-2 text-center text-amber-600'>Take new service</h2> 
      <form onSubmit={handleSubmit(onServiceSubmit)}>
        {serverError && <div>{serverError}</div>}

        <div className='flex m-3'>
          <div className='relative  w-full'>
            <input type='text' placeholder='Table' className="w-full bg-gray-50 border border-amber-300 text-gray-900 text-sm rounded-l-lg focus:ring-amber-500 focus:border-amber-500  block p-2.5"
            {...register('table', {
              required: 'Service table is required'
            })} />            
          </div>
          <button type="submit" class="px-4 py-2 text-sm font-medium text-white bg-amber-500 border border-amber-300 rounded-r-lg hover:bg-amber-600 hover:text-white focus:z-10 focus:ring-2 focus:ring-amber-700 focus:text-white ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
        </button>
        </div>
        {errors.table && <p class="m-1 pl-3 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops! </span>{errors.table?.message}</p>}        
      </form>
    </>
  )
}

export default ServiceForm