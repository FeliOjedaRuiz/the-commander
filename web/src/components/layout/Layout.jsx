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
    <>    
      <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-lime-500 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li>
                  <NavLink to="/establishments" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-lime-600 dark:hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 w-8 h-8 text-lime-200 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                      <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.549H5.223z" />
                      <path fill-rule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 009.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 002.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3zm3-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm8.25-.75a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-5.25a.75.75 0 00-.75-.75h-3z" clip-rule="evenodd" />
                    </svg>
                    <span className="ml-3">Establishments</span>
                  </NavLink>
                  

              </li>
              
              <li>
                  <NavLink to={`/products/${establishmentId}`} className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-lime-600 dark:hover:bg-gray-700" >
                    <svg aria-hidden="true" className="flex-shrink-0 w-8 h-8 text-lime-200 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
                  </NavLink>
              </li>              
              <li>
                  <NavLink to={`/staff/${establishmentId}`} className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-lime-600 dark:hover:bg-gray-700" >                  
                      <svg aria-hidden="true" className="flex-shrink-0 w-8 h-8 text-lime-200 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                      <span className="flex-1 ml-3 whitespace-nowrap">Staff</span>
                  </NavLink>
              </li>
              <li>
              <NavLink to={`/services/${establishmentId}`} className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-lime-600 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" className="flex-shrink-0 w-8 h-8 text-lime-200 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Services</span>                    
              </NavLink>
              </li>
              <li>
                  <NavLink to={`/orders/${establishmentId}`} className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-lime-600 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" className="flex-shrink-0 w-8 h-8 text-lime-200 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Orders</span>
                  </NavLink>
              </li>
              <li>
                  <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-lime-600 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" className="flex-shrink-0 w-8 h-8 text-lime-200 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                  </a>
              </li>
            </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 h-screen border-2 border-lime-300 rounded-lg dark:border-gray-700"> 
          {children}
        </div>
      </div>




    {/* // <div className='d-flex flex-row'>
    //   <div className="page-layout text-center">
    //     <div className="nav-item">
    //       <NavLink to="/establishments" className="nav-link active" aria-current="page" href="#">Establishments</NavLink>
    //     </div>
    //     <div className="nav-item">
    //       <NavLink to={`/products/${establishmentId}`} className="nav-link active" aria-current="page" href="#">Products</NavLink>
    //     </div>
    //     <div className="nav-item">
    //       <NavLink to={`/staff/${establishmentId}`} className="nav-link active" aria-current="page" href="#">Staff</NavLink>
    //     </div> 
    //     <div className="nav-item">
    //       <NavLink to={`/services/${establishmentId}`} className="nav-link active" aria-current="page" href="#">Services</NavLink>
    //     </div>
    //     <div className="nav-item">
    //       <NavLink to={`/orders/${establishmentId}`} className="nav-link active" aria-current="page" href="#">Orders</NavLink>
    //     </div> 
    //   </div>

    //   <div className="container">
    //     {children}
    //   </div>

    
    // </div> */}
    </>
  )
}

export default Layout