import React from 'react';
import { NavLink } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div>
      <div className="page-layout">
        <h5>MENU</h5>
        <NavLink>link</NavLink>
      </div>
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default Layout