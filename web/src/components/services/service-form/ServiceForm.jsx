import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import servicesService from '../../../services/services'
import { useParams } from 'react-router-dom';

function ServiceForm({ onServiceCreation }) {
  const { register, handleSubmit, watch, setError, formState: { errors }} = useForm({ mode: 'onBlur'});
  const [serverError, setServerError] = useState(undefined);
  const { establishmentId } = useParams();
  const currentUser = JSON.parse(localStorage.getItem('current-user'))


  console.debug(`Tags: ${watch('tags')}`);

  const onServiceSubmit = async (service) => {
    service.taker = currentUser.id
    service.establishment = establishmentId    
    try {
      setServerError(undefined);
      console.debug('Creating service...')           
      service = await servicesService.create(service)
      onServiceCreation();
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
    <form onSubmit={handleSubmit(onServiceSubmit)}>
      {serverError && <div>{serverError}</div>}
      <span>
        <input type='text' placeholder='Table' {...register('table', {
          required: 'Service table is required'
        })} />
        {errors.table && <div>{errors.table?.message}</div>}
      </span>
           
      <button type='submit'>Crear</button>
    </form>
  )
}

export default ServiceForm