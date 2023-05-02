import React, { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthStore';

function EstablishmentItem({ establishment }) {
  const { onEstabSelect } = useContext(AuthContext)

  const handleClick = () => {
    onEstabSelect(establishment)
  }

  return (
    <div className=" max-w-md m-2 flex justify-between p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{establishment.name}</h5>
      <button className="focus:outline-none m-1 text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-xs px-4 py-2.5 mr-1  dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
      onClick={handleClick}>Select</button>
    </div>
    
  )
}

export default EstablishmentItem