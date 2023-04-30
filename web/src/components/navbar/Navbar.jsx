import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthStore';

function Navbar() {
  const { establishment } = useContext(AuthContext)
  const [establishmentId, setEstablishmentId] = useState()

  useEffect(() => {
    setEstablishmentId(localStorage.getItem('current-establishment'))
  }, [establishment])


  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
    <div className="container-fluid">
      <NavLink to="/" className="navbar-brand" >TC</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link active" aria-current="page" href="#">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/establishments" className="nav-link active" aria-current="page" href="#">Establishments</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`/products/${establishmentId}`} className="nav-link active" aria-current="page" href="#">Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`/staff/${establishmentId}`} className="nav-link active" aria-current="page" href="#">Staff</NavLink>
          </li> 
          <li className="nav-item">
            <NavLink to={`/services/${establishmentId}`} className="nav-link active" aria-current="page" href="#">Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`/orders/${establishmentId}`} className="nav-link active" aria-current="page" href="#">Orders</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" className="nav-link active" aria-current="page" href="#">Login</NavLink>
          </li>  
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar