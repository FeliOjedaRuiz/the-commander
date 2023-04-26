import React, { useEffect, useState } from 'react';
import establishmentsService from '../../../services/establishments';
import EstablishmentItem from '../establishment-item/EstablishmentItem';

function EstablishmentsList() {
  const [establishments, setEstablishments] = useState([]);

  useEffect(() => {
    establishmentsService.list()
      .then((establishments) => setEstablishments(establishments))
      .catch(error => console.error(error))
  }, []);

  
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