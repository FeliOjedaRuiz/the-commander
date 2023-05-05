import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import usersService from '../../../services/users';
import { useParams } from 'react-router-dom';
import Select from 'react-select';


function StaffForm({ onStaffCreation }) {
  const { register, handleSubmit, control, watch, setError, formState: { errors }} = useForm({ mode: 'onBlur' })
  const [serverError, setServerError] = useState(undefined);
  const { establishmentId } = useParams();


  console.debug(`Tags: ${watch('tags')}`);

  const onUserSubmit = async (user) => {
    user.establishment = establishmentId
    try {
      setServerError(undefined);
      console.debug('Registering...')
      user = await usersService.createStaff(establishmentId, user);
      onStaffCreation()      
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

  const roleSelectOptions = ['admin', 'service', 'kitchen', 'bar'].map(role => ({ value: role, label: role }));

  return (
    <>
      <h2 className='mb-2 text-center text-red-700'>Create a new staff user</h2>
      <form className='flex-col' onSubmit={handleSubmit(onUserSubmit)}>
        {serverError && <div>{serverError}</div>}
        <div className='m-1 md:flex'>
          <div className='m-2 sm:w-full'>
            <input type='text' placeholder='Username' className="w-full  bg-gray-50 border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('username', { required: 'Username is required'
            })} />
            {errors.username && <p class="m-1 pl-3 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops! </span>{errors.username?.message}</p>}
          </div>

          <div className='m-2 sm:w-full'>
            <input type='email' placeholder='Email' className="w-full flex-grow bg-gray-50 border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('email', { required: 'Email is required'
            })} />
            {errors.email && <p class="m-1 pl-3 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops! </span>{errors.email?.message}</p>}
          </div>

          <div className='m-2 sm:w-full'>
            <input type='password' placeholder='Password' className="w-full  bg-gray-50 border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('password', { required: 'Password is required'
            })} />
            {errors.password && <p class="m-1 pl-3 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops! </span>{errors.password?.message}</p>}
          </div>
        </div>

        <div className='m-1 flex'>
          <div className='m-2 w-full'>
            <Controller
              control={control}
              name="role"
              rules={{
                required: 'Staff role is required'
              }}
              render={({ field: { onChange, value, ref } }) => (
                
                <Select
                  inputRef={ref}
                  className="w-full uppercase"
                  options={roleSelectOptions}
                  // https://react-select.com/styles
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      border: '1px',          
                    }),
                  }}
                  value={roleSelectOptions.find(option => option.value === value)}
                  onChange={(option) => onChange(option.value)}
                />
                
              )}
            />
          </div>          
          <div className='flex justify-end'>
            <button type="submit" class="px-2 py-2 m-2 w-1/24 text-sm font-medium text-white bg-red-600 border border-red-300 rounded-lg hover:bg-red-500 hover:text-white focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
            </button>
          </div>
        </div>
        
      </form>
    </>
  )
}

export default StaffForm