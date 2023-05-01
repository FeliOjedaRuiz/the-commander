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

      <div>
        <input type='text' placeholder='Username' {...register('username', {
          required: 'Username is required'
        })} />
        {errors.username && <div>{errors.username?.message}</div>}
      </div>
      <div>
        <input type='email' placeholder='Email' {...register('email')} />
      </div>
      <div>
        <input type='password' placeholder='Password' {...register('password')} />
      </div>
      <button type='submit'>Register</button>
    </form>
  )
}

export default UsersFom