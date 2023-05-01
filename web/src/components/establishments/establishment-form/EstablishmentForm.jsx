import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import establishmentsService from '../../../services/establishments'

function EstablishmentForm({ onEstabCreation }) {
  const { register, handleSubmit, watch, setError, formState: { errors }} = useForm({ mode: 'onBlur'});
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
    <form onSubmit={handleSubmit(onEstablishmentSubmit)}>
      {serverError && <div>{serverError}</div>}
      <div>
        <input type='text' placeholder='Name' {...register('name', {
          required: 'Esablishment name is required'
        })} />
        {errors.name && <div>{errors.name?.message}</div>}
      </div>
      <button type='submit'>Crear</button>
    </form>
  )
}

export default EstablishmentForm