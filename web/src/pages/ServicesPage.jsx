import React, { useEffect, useState } from 'react'
import ServicesList from '../components/services/service-list/ServicesList';
import ServiceForm from '../components/services/service-form/ServiceForm';
import servicesService from '../services/services';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';


function ServicesPage() {
  const [services, setServices] = useState([]);
  const [reload, setReload] = useState(false);
  const { establishmentId }= useParams();

  useEffect(() => {
    servicesService.list(establishmentId)
      .then((services) => {
        setServices(services)        
      })
      .catch(error => console.error(error));
  }, [reload]);

  const onServiceCreation = () => {
    setReload(!reload)
  }


  return (
    <Layout>
      
        <div className="p-3 mb-4 rounded-xl bg-lime-100 dark:bg-gray-800">
          <ServiceForm onServiceCreation={onServiceCreation} />
        </div>
        <div className="min-h-screen rounded-xl bg-lime-50 dark:bg-gray-800">
          <ServicesList services={services} />              
        </div>
      
    </Layout>
  )
}

export default ServicesPage