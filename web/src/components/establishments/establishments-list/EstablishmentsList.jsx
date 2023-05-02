import React from 'react';
import EstablishmentItem from '../establishment-item/EstablishmentItem';

function EstablishmentsList({ establishments }) {  
  
  return (
    <div>
      <h2 className='m-2 text-center text-lime-700'>EstablishmentsList</h2>
      <div className='grid  md:grid-cols-2 lg:grid-cols-3'>
        {establishments.map((establishment) => (
          <EstablishmentItem establishment={establishment} key={establishment.id} />
        ))}
      </div>
    </div>
  );
}

export default EstablishmentsList;