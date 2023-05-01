import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthStore';

function Layout({ children }) {
  const { establishment } = useContext(AuthContext)
  const [establishmentId, setEstablishmentId] = useState()

  useEffect(() => {
    setEstablishmentId(localStorage.getItem('current-establishment'))
  }, [establishment])


  return (
    <div className='d-flex flex-row'>
      <div className="page-layout text-center">
        <div className="nav-item">
          <NavLink to="/establishments" className="nav-link active" aria-current="page" href="#">Establishments</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to={`/products/${establishmentId}`} className="nav-link active" aria-current="page" href="#">Products</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to={`/staff/${establishmentId}`} className="nav-link active" aria-current="page" href="#">Staff</NavLink>
        </div> 
        <div className="nav-item">
          <NavLink to={`/services/${establishmentId}`} className="nav-link active" aria-current="page" href="#">Services</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to={`/orders/${establishmentId}`} className="nav-link active" aria-current="page" href="#">Orders</NavLink>
        </div> 
      </div>

      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default Layout