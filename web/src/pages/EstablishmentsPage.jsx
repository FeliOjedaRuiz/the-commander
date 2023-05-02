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

      <div className="p-3 mb-4 rounded-xl bg-lime-100 dark:bg-gray-800">
        <EstablishmentForm onEstabCreation={onEstabCreation} />
      </div>      
      
      <div className="min-h-screen rounded-xl bg-lime-50 dark:bg-gray-800">
        <EstablishmentsList establishments={establishments} />
      </div>
      
      
    </Layout>  
  )
}

export default EstablishmentsPage;