import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import usersService from '../../../services/users';

function UsersFom() {
  const { register, handleSubmit, watch, setError, formState: { errors }} = useForm({ mode: 'onBlur' })
  const [serverError, setServerError] = useState(undefined);
  const navigate = useNavigate();

  console.debug(`Tags: ${watch('tags')}`);

  const onUserSubmit = async (user) => {
    try {
      setServerError(undefined);
      console.debug('Registering...')
      user = await usersService.create(user);
      navigate('/login');
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
    <form onSubmit={handleSubmit(onUserSubmit)}>
      {serverError && <div>{serverError}</div>}

      <div className='mb-6'>
      <label for="username" class="block mb-2 text-sm font-medium text-gray-900">Your username</label>
        <input type='text' placeholder='Username' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5'
        {...register('username', {
          required: 'Username is required'
        })} />
        {errors.username && <div>{errors.username?.message}</div>}
      </div>
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
      <div className='mb-6'>
        <input type='email' placeholder='Email' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5'
        {...register('email')} />
      </div>
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your password</label>
      <div className='mb-6'>
        <input type='password' placeholder='Password' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5'
        {...register('password')} />
      </div>
      <button type='submit' className='text-white bg-teal-500 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-1.5 text-center '>Register</button>
    </form>
  )
}

export default UsersFom