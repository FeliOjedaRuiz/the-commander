import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import usersService from '../../../services/users';
import { useParams } from 'react-router-dom';
import Select from 'react-select';


function StaffForm() {
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
      <h2 className='mb-2 text-center text-lime-700'>Create a new user for</h2>
      <form className='flex-col' onSubmit={handleSubmit(onUserSubmit)}>
        {serverError && <div>{serverError}</div>}
        <div className='flex m-3 justify-center'>
          <div>
            <input type='text' placeholder='Username' className="w-full  bg-gray-50 border-lime-300 text-gray-900 text-sm rounded-l-lg focus:ring-lime-500 focus:border-lime-500 block pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('username', { required: 'Username is required'
            })} />
            {errors.username && <div>{errors.username?.message}</div>}
          </div>

          <div>
            <input type='email' placeholder='Email' className="w-full flex-grow bg-gray-50 border-lime-300 text-gray-900 text-sm focus:ring-lime-500 focus:border-lime-500 block pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('email', { required: 'Email is required'
            })} />
            {errors.email && <div>{errors.email?.message}</div>}
          </div>

          <div>
            <input type='password' placeholder='Password' className="w-full  bg-gray-50 rounded-r-lg border-lime-300 text-gray-900 text-sm focus:ring-lime-500 focus:border-lime-500 block pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('password', { required: 'Password is required'
            })} />
            {errors.password && <div>{errors.password?.message}</div>}
          </div>
        </div>

        <div className='flex m'>          
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
                      border: 'none',
                    }),
                  }}
                  value={roleSelectOptions.find(option => option.value === value)}
                  onChange={(option) => onChange(option.value)}
                />
              )}
            />
          
          <button type="submit" class="px-4 py-2 w-1/24 text-sm font-medium text-white bg-lime-500 border border-lime-300 rounded-r-lg hover:bg-lime-600 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
          </button>
        </div>
        
      </form>
    </>
  )
}

export default StaffForm