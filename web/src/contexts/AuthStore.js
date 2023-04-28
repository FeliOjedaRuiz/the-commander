import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext();

function AuthStore({ children }) {
  const [user, setUser] = useState();
  const [establishment, setEstablishment] = useState();
  const navigate = useNavigate();

  const handleUserChange = (user) => {
    console.log('Updating user context', user);
    if (!user) {
      localStorage.removeItem('user-access-token');
    } else {
      localStorage.setItem('user-access-token', user.token);
    }
    setUser(user);
    console.log("paso por aqui")
  }

  const logout = () => {
    handleUserChange();
    navigate('/')
  }

  const handleEstabSelect = (establishment) => {
    console.log('Updating establishment context', establishment)
    setEstablishment(establishment)
  }

  return (
    <AuthContext.Provider value={{ user, establishment, onUserChange: handleUserChange, logout, onEstabSelect: handleEstabSelect }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthStore as default, AuthContext}