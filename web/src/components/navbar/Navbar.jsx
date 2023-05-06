import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthStore';
import logo from '../../images/TC-icon-small.png'

function Navbar() {
  const { establishment, logout } = useContext(AuthContext)
  const [establishmentId, setEstablishmentId] = useState()

  useEffect(() => {
    setEstablishmentId(localStorage.getItem('current-establishment'))
  }, [establishment])


  return (

    <>      
      <div className="bg-white h-11 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <NavLink to="/" className="flex items-center">          
            <img className=' h-6 mx-3' src={logo} alt="The Commander logo"/>            
            <div className="fixed -top-20 sm:visible sm:static   self-center text-xl font-semibold whitespace-nowrap ">The Commander</div>          
          </NavLink>
          <div className="flex">            
            <NavLink to="/register" className={" text-white bg-teal-500 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-1.5 text-center mr-3"} href="#">Register</NavLink>
            <NavLink to="/login" className={" text-white bg-teal-500 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-6 py-1.5 text-center mr-3"} href="#">Login</NavLink>
          </div>                    
        </div>        
      </div>      
    </>

    
  )
}

export default Navbar