import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import ordersService from '../../../services/orders'
import productsService from '../../../services/products'
import Select from 'react-select';

function OrderForm({ onOrderCreation }) {
  const { register, handleSubmit, watch, control, setError, formState: { errors }} = useForm({ mode: 'onBlur'});
  const [serverError, setServerError] = useState(undefined);
  const { serviceId } = useParams();
  const [products, setProducts] = useState([]);
  const establishmentId = localStorage.getItem('current-establishment')

  useEffect(() => {
    productsService.list(establishmentId)
      .then((products) => {
        console.log(products)
        setProducts(products)})
      .catch(error => console.error(error))
      
  }, [])


  console.debug(`Tags: ${watch('tags')}`);

  const onOrderSubmit = async (order) => {
    order.service = serviceId
    try {
      setServerError(undefined);
      console.debug('Creating order...')           
      order = await ordersService.create(order)
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
    <form onSubmit={handleSubmit(onOrderSubmit)}>
      {serverError && <div>{serverError}</div>}
      <span>
          <Controller
            control={control}
            name="product"
            rules={{
              required: 'Product is required'
            }}
            render={({ field: { onChange, value, ref } }) => (
              <Select
                inputRef={ref}
                className={`form-control p-0 ${errors.product ? 'is-invalid' : ''}`}
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
        </span>
      
           
      <button type='submit'>Añadir</button>
    </form>
  )
}

export default OrderForm