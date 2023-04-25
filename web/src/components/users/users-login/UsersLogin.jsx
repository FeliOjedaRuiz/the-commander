import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import usersService from '../../../services/users';

function UsersLogin() {
  const navigate = useNavigate();
  const { register, handleSubmit, setError, formState: { errors } } = useForm({ mode: 'onBlur'})
  const [serverError, setServerError] = useState(undefined);

  const onLoginSubmit = async (user) => {
    try {
      setServerError();
      user = await usersService.login(user);
      navigate('/');
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
    <form onSubmit={handleSubmit(onLoginSubmit)}>
      <div>
        <input type="text"
          placeholder="username" {...register('username', {
            required: 'Username is required'
        })} />
      </div>
      <div>
        <input type="text"
          placeholder="password" {...register('password', {
            required: 'Password is required'
        })} />
      </div>
      <button type='submit'>Login</button>
    </form>
  )
}

export default UsersLogin