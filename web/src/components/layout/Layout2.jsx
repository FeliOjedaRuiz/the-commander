import React, { useContext, useEffect, useState } from 'react';
import establishmentsService from '../../services/establishments'
import LayoutNavbar2 from './LayoutNavbar2';


function Layout2({ children }) {
  const [estab, setEstab] = useState(undefined)
  const currentUser = localStorage.getItem('current-user')
  const user = JSON.parse(currentUser) 

  const id = user.establishments


  useEffect( () => {
    establishmentsService.detail(id)
      .then((establishment) => {
        setEstab(establishment)
      })
      .catch(error => console.error(error))    
  }, [])


  return (
    <>
      <div>
        <LayoutNavbar2 establishment={estab} />
      </div>      

      <div className="p-4 pt-16 ">
        <div className="p-4 border-2 min-h-screen bg-white border-gray-300 rounded-lg"> 
          {children}
        </div>
      </div>
      

    </>
  )
}

export default Layout2