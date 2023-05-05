import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import establishmentsService from '../../../services/establishments'

function EstablishmentForm({ onEstabCreation }) {
  const { register, handleSubmit, watch, setError, formState: { errors }} = useForm({ mode: 'onSubmit'});
  const [serverError, setServerError] = useState(undefined);

  console.debug(`Tags: ${watch('tags')}`);

  const onEstablishmentSubmit = async (establishment) => {
    try {
      setServerError(undefined);
      console.debug('Creating establishment...')      
      establishment = await establishmentsService.create(establishment)
      onEstabCreation();
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
      
        <h2 className='mb-2 text-center text-fuchsia-700'>Create a new establishment</h2>
        <form onSubmit={handleSubmit(onEstablishmentSubmit)}>
          {serverError && <div>{serverError}</div>}
          <div className='flex m-3'>
            <div className="relative  w-full">
              <div className="absolute flex-1 w-full inset-y-0 left-0 flex items-center pl-3 pointer-events-none">              
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6  text-fuchsia-700 dark:text-gray-400">
                  <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.549H5.223z" />
                  <path fill-rule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 009.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 002.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3zm3-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm8.25-.75a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-5.25a.75.75 0 00-.75-.75h-3z" clip-rule="evenodd" />
                </svg>
              </div>
              <input type='text' placeholder='Name' className="w-full  bg-gray-50 border border-fuchsia-300 text-gray-900 text-sm rounded-l-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 block pl-12 p-2.5 "
                {...register('name', { required: 'Esablishment name is required'
                })} />                        
            </div>
            <button type="submit" class="px-4 py-2 text-sm font-medium text-white bg-fuchsia-700 border border-fuchsia-300 rounded-r-lg hover:bg-fuchsia-600 hover:text-white focus:z-10 focus:ring-2 focus:ring-fuchsia-700 focus:text-white ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
            </button>
          </div>
          {errors.name && <p class="m-1 pl-3 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops! </span>{errors.name?.message}</p>}
        </form>
      
    </>
  )
}

export default EstablishmentForm