import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import ordersService from '../../../services/orders'
import productsService from '../../../services/products'
import servicesService from '../../../services/services'
import Select from 'react-select';

function OrderForm({ onOrderCreation }) {
  const { handleSubmit, watch, control, setError, formState: { errors }} = useForm({ mode: 'onBlur'});
  const [serverError, setServerError] = useState(undefined);
  const { serviceId } = useParams();
  const [products, setProducts] = useState([]);
  const currentEstablishment = localStorage.getItem('current-establishment')
  const currentEstab = JSON.parse(currentEstablishment)
  const [service, setService] = useState({})


  useEffect(() => {
    servicesService.detail(serviceId)
      .then((service) => {
        setService(service)
      })
      .catch(error => console.error(error));
  }, [])

  useEffect(() => {
    productsService.list(currentEstab.id)
      .then((products) => {
        setProducts(products)})
      .catch(error => console.error(error))      
  }, [])


  console.debug(`Tags: ${watch('tags')}`);

  const onOrderSubmit = async (order) => {
    try {
      setServerError(undefined);
      console.debug('Creating order...')           
      order = await ordersService.create(serviceId, order)
      onOrderCreation();
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

  const productSelectOptions = products.map(product => ({ value: product.id, label: `${product.name}` }));

  return (
    <>
      <h2 className='mb-2 text-center text-teal-700'>Take a new order for "{service.table}" </h2>
      <form onSubmit={handleSubmit(onOrderSubmit)}>
        {serverError && <div>{serverError}</div>}
        <div className='m-1 flex'>
          <div className='m-2 w-full'>
            <Controller
              control={control}
              name="product"
              rules={{
                required: 'Product is required'
              }}
              render={({ field: { onChange, value, ref } }) => (
                <Select
                  inputRef={ref}
                  className="w-full uppercase"
                  options={productSelectOptions}
                  // https://react-select.com/styles
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      border: 'none',
                    }),
                  }}
                  value={productSelectOptions.find(option => option.value === value)}
                  onChange={(option) => onChange(option.value)}
                />
              )}
            />
          </div>
          <div className='flex justify-end'>
          <button type="submit" class="px-2 py-2 m-2 w-1/24 text-sm font-medium text-white bg-teal-600 border border-teal-300 rounded-lg hover:bg-teal-500 hover:text-white focus:z-10 focus:ring-2 focus:ring-teal-700 focus:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
          </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default OrderForm