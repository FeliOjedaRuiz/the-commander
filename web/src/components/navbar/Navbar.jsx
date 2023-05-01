import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthStore';

function Navbar() {
  const { establishment, logout } = useContext(AuthContext)
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
            <NavLink to="/login" className="nav-link active" aria-current="page" href="#">Login</NavLink>
          </li>
          <li className="nav-item"><button className='nav-link' onClick={() => logout()}>Logout</button></li> 

        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar