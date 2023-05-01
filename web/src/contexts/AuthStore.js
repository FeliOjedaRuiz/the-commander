import React, { createContext, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext();

const restoreUserFromLocalStorage = () => {
  const user = localStorage.getItem('current-user');
  if (user) {
    return JSON.parse(user);
  } else {
    return undefined;
  }
}

function AuthStore({ children }) {
  const [user, setUser] = useState(restoreUserFromLocalStorage());
  const [establishment, setEstablishment] = useState();
  const navigate = useNavigate();

  const handleUserChange = useCallback((user) => {
    console.log('Updating user context', user);
    if (!user) {
      localStorage.removeItem('user-access-token');
      localStorage.removeItem('current-user');
      localStorage.removeItem('current-establishment');
    } else {
      localStorage.removeItem('current-establishment');
      localStorage.setItem('user-access-token', user.token);
      localStorage.setItem('current-user', JSON.stringify(user));
    }
    setUser(user);
  }, []);

  const logout = () => {
    handleUserChange();
    navigate('/')
  }

  const handleEstabSelect = (establishment) => {
    console.log('Updating establishment context', establishment)
    if (!establishment) {
      localStorage.removeItem('current-establishment');
    } else {
      localStorage.setItem('current-establishment', establishment.id)
    }
    setEstablishment(establishment);
  }

  return (
    <AuthContext.Provider value={{ user, establishment, onUserChange: handleUserChange, logout, onEstabSelect: handleEstabSelect }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthStore as default, AuthContext}