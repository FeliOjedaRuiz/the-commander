import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/TC-icon-small.png';
import { AuthContext } from '../../contexts/AuthStore';

function LayoutNavbar2({ establishment, children }) {
  const { logout, user } = useContext(AuthContext)
  


  return (
    <>      
      <div className="bg-white h-11 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <NavLink to="/" className="flex items-center">          
            <img className=' h-6 mx-3' src={logo} alt="The Commander logo"/>            
            <div className="fixed -top-20 sm:visible sm:static   self-center text-xl font-semibold whitespace-nowrap ">The Commander</div>          
          </NavLink>
          <div className=" text-xs  text-teal-600 sm:text-lg">
            {!establishment && <span className=' text-pink-700 font-bold uppercase'>None</span> } {establishment && <span className=' text-pink-700 font-bold uppercase'>{establishment.name}</span>}
          </div>
          <div className='flex'>
            <NavLink to={`/services/${user.id}/service`} className=" text-white bg-teal-700 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-2 py-1.5 text-center mr-3">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fill-rule="evenodd" d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z" clip-rule="evenodd" />
            </svg> */}Services
            </NavLink>
            <button onClick={() => logout()} className=" text-white bg-pink-700 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-2 py-1.5 text-center mr-3">Logout</button>             
          </div>
        </div>
        
      </div>
      <div>
        {children}
      </div>
      
    </>
  )
}

export default LayoutNavbar2