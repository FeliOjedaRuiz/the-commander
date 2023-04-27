import React, { useEffect, useState } from 'react';
import EstablishmentItem from '../establishment-item/EstablishmentItem';

function EstablishmentsList({ establishments }) {  
  
  return (
    <div>
      <h3>EstablishmentsList</h3>
      <div>
        {establishments.map((establishment) => (
          <EstablishmentItem establishment={establishment} key={establishment.id} />
        ))}
      </div>
    </div>
  );
}

export default EstablishmentsList;