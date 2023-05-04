import React from 'react'
import UsersLogin from './../components/users/users-login/UsersLogin';
import logoColor from '../../src/images/the-commander-color.png'
import Navbar from '../components/navbar/Navbar';
import Image1 from '../images/cerrar-mujer-sosteniendo-smartphone.jpg'


function LoginPage() {
  return (
    <>
      <Navbar/>
      <div className='flex h-screen fixed pt-11'>
        <div className='w-screen h-full p-6 bg-white border-r sm:w-80'>
          <div>
            <div className='  flex flex-col justify-center items-center m-6'>
              <img className=' w-28' src={logoColor} alt="The Commander logo"/>            
              <div className=" text-xl font-bold mt-2 text-teal-600 ">The Commander</div>
              <h2 className=' mt-8 mb-6'>Log in to your account!</h2>
            </div>
          </div>
          <UsersLogin />
        </div>
        <div>
          <img
            src={Image1} alt="Mujer utilizando the comander en móvil"
            className='fixed h-screen object-cover '
          />
        </div>      
      </div>
    </>

    
  )
}

export default LoginPage