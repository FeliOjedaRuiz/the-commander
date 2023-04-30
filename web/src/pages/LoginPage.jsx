import React from 'react'
import UsersLogin from './../components/users/users-login/UsersLogin';
import Layout from '../components/layout/Layout';

function LoginPage() {
  return (
    <Layout>
    <div>
      <div>
        <UsersLogin />
      </div>
    </div>
    </Layout>
  )
}

export default LoginPage