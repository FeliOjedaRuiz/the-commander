import React, { useEffect, useState } from 'react';
import EstablishmentsList from '../components/establishments/establishments-list/EstablishmentsList';
import EstablishmentForm from '../components/establishments/establishment-form/EstablishmentForm';
import establishmentsService from '../services/establishments';
import Layout from '../components/layout/Layout';
import Navbar from '../components/navbar/Navbar';


function EstablishmentsPage() {
  const [establishments, setEstablishments] = useState([]);
  const [reload, setReload] = useState(false)

  useEffect(() => {
    establishmentsService.list()
      .then((establishments) => {
        setEstablishments(establishments)        
      })
      .catch(error => console.error(error));
  }, [reload]);

  const onEstabCreation = () => {
    setReload(!reload)
  }

  return (
    <Layout>
      
      <div>
        <h1>Establishments</h1>
        <div>
          <EstablishmentForm onEstabCreation={onEstabCreation} />
        </div>
        <div>
          <EstablishmentsList establishments={establishments} />
        </div>
      </div>
      
    </Layout>  
  )
}

export default EstablishmentsPage;