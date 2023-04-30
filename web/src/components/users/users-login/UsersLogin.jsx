import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import usersService from '../../../services/users';
import { AuthContext } from '../../../contexts/AuthStore';

function UsersLogin() {
  const navigate = useNavigate();
  const { register, handleSubmit, setError, formState: { errors } } = useForm({ mode: 'onBlur'})
  const [serverError, setServerError] = useState(undefined);
  const { onUserChange } = useContext(AuthContext);

  const onLoginSubmit = async (user) => {
    try {
      setServerError();
      user = await usersService.login(user);
      onUserChange(user);
      navigate('/establishments');
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
        <div>
          <input type="text"
            placeholder="username" {...register('username', {
              required: 'Username is required'
            })} />
          {errors.username && <div> {errors.username?.message} </div>}
        </div>
        <div>
          <input type="text"
            placeholder="password" {...register('password', {
              required: 'Password is required'
          })} />
        </div>
        <button type='submit'>Login</button>
      </form>
    </>

  )
}

export default UsersLogin