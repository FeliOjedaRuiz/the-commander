import React, { useContext, useEffect, useState } from 'react';
import servicesService from '../services/services';
import Layout2 from '../components/layout/Layout2';
import ServiceForm2 from '../components/services/service-form/ServiceForm2';
import { AuthContext } from '../contexts/AuthStore';
import ServicesList2 from '../components/services/service-list/ServicesList2';

function ServiceServicesPage() {
  const [services, setServices] = useState([]);
  const [reload, setReload] = useState(false);
  const { user } = useContext(AuthContext)  
  const userId = user.id


  useEffect(() => {
    servicesService.list2(userId)
      .then((services) => {
        setServices(services)     
      })
      .catch(error => console.error(error));
  }, [reload]);

  const onServiceCreation = () => {
    setReload(!reload)
  }



  return (
    <Layout2>      
        <div className="p-3 rounded-xl bg-amber-100">
          <ServiceForm2 onServiceCreation={onServiceCreation} />
        </div>
        <div className="min-h-screen justify-center rounded-xl bg-amber-50">
          <ServicesList2 services={services} />              
        </div>      
    </Layout2>
  )
}

export default ServiceServicesPage