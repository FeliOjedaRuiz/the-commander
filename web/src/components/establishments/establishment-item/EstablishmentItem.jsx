import React, { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthStore';

function EstablishmentItem({ establishment }) {
  const { onEstabSelect } = useContext(AuthContext)

  const handleClick = () => {
    onEstabSelect(establishment)
  }

  return (
    <div>
      <h4>Establishment {establishment.name}</h4>
      <button onClick={handleClick}>Select</button>
    </div>
  )
}

export default EstablishmentItem