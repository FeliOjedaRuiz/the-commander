import React, { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthStore';

function EstablishmentItem({ establishment }) {
  const { onEstabSelect } = useContext(AuthContext)

  const handleClick = () => {
    onEstabSelect(establishment)
    console.log({ establishment })
  }

  return (
    <div className=" max-w-md m-2 flex justify-between p-3 bg-white border border-gray-200 rounded-lg shadow ">
      <h5 className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{establishment.name}</h5>
      <button className="focus:outline-none m-1 text-white bg-fuchsia-700 hover:bg-fuchsia-500 focus:ring-4 focus:ring-fuchsia-300 font-medium rounded-lg text-xs px-4 py-2.5 mr-1 "
      onClick={handleClick}>Select</button>
    </div>
    
  )
}

export default EstablishmentItem