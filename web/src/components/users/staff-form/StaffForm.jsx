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
      const errors = error.response?.date?.errors;
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
    <form onSubmit={handleSubmit(onUserSubmit)}>
      {serverError && <div>{serverError}</div>}
      <div>
        <span>
          <input type='text' placeholder='Username' {...register('username', {
            required: 'Username is required'
          })} />
          {errors.username && <div>{errors.username?.message}</div>}
        </span>

        <span>
          <input type='email' placeholder='Email' {...register('email', {
            required: 'Email is required'
          })} />
          {errors.email && <div>{errors.email?.message}</div>}
        </span>

        <span>
          <input type='password' placeholder='Password' {...register('password', {
            required: 'Password is required'
          })} />
          {errors.password && <div>{errors.password?.message}</div>}
        </span>

        <span>
          <Controller
            control={control}
            name="role"
            rules={{
              required: 'Staff role is required'
            }}
            render={({ field: { onChange, value, ref } }) => (
              <Select
                inputRef={ref}
                className={`form-control p-0 ${errors.role ? 'is-invalid' : ''}`}
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
        </span>
        <button type='submit'>Create</button>
      </div>
      
    </form>
  )
}

export default StaffForm