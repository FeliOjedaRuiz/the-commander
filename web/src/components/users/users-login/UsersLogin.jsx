import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import usersService from '../../../services/users';
import establishmentsService from '../../../services/establishments';
import { AuthContext } from '../../../contexts/AuthStore';
import establishments from '../../../services/establishments';

function UsersLogin() {
  const navigate = useNavigate();
  const { register, handleSubmit, setError, formState: { errors } } = useForm({ mode: 'onBlur'})
  const [serverError, setServerError] = useState(undefined);
  const { onUserChange, onEstabSelect } = useContext(AuthContext);

  const onLoginSubmit = async (user) => {
    try {
      setServerError();
      user = await usersService.login(user);
      onUserChange(user);
      if (user.role === "admin") {
        navigate('/establishments');
      } else if (user.role === "service" ) {
        establishmentsService.detail(user.establishments)
          .then((establishment) => {
            onEstabSelect(establishment)
          })
          .catch(error => console.error(error))        
        navigate(`/services/${user.id}/service`);
      } else {
        establishmentsService.detail(user.establishments)
          .then((establishment) => {
            onEstabSelect(establishment)
          })
          .catch(error => console.error(error))        
        navigate(`/orders/${user.establishments}/kitchen`);
      }
      
    } catch (error) {
      const errors = error.response?.data?.errors;
      if (errors) {
        Object.keys(errors)
          .forEach((inputName) => setError(inputName, { message: errors[inputName] }))        
      } else {
        setServerError(error.message)
      }
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onLoginSubmit)}>
        {serverError && <div>{serverError}</div>}
        <div className='mb-6'>
        <label for="username" class="block mb-2 text-sm font-medium text-gray-900">Your username</label>
          <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5'
            placeholder="username" {...register('username', {
              required: 'Username is required'
            })} />
          {errors.username && <div> {errors.username?.message} </div>}
        </div>
        <div className='mb-6'>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your password</label>
          <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5'
            placeholder="password" {...register('password', {
              required: 'Password is required'
          })} />
        </div>
        <button type='submit' className='text-white bg-pink-700 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto  px-4 py-1.5 text-center '>Login</button>
      </form>
    </>

  )
}

export default UsersLogin