import React from 'react'
import UsersForm from '../components/users/users-form/UsersForm';
import logoColor from '../../src/images/the-commander-color.png'
import Navbar from '../components/navbar/Navbar';
import RegisterBg from '../images/cerrar-panadero-maquina.jpg'

function RegisterPage() {
  return (
    <>
      <Navbar/> 
        <div className='flex h-screen fixed pt-11'>
        <div className='w-screen h-full p-6 bg-white border-r sm:w-80'>
          <div>
            <div className='  flex flex-col justify-center items-center m-6'>
              <img className=' w-28' src={logoColor} alt="The Commander logo"/>            
              <div className=" text-xl font-bold mt-2 text-teal-600 ">The Commander</div>
              <h2 className=' mt-8 mb-6'>Register your account!</h2>
            </div>
          </div>
          <UsersForm/>
        </div>
        <div>
        <img
            src={RegisterBg} alt="Mujer utilizando the comander en móvil"
            className='fixed h-screen w-screen -z-10 left-0 object-cover '
          />
        </div>        
      </div>
    </>
  )
}

export default RegisterPage