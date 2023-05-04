import React from 'react'
import Navbar from './../components/navbar/Navbar';
import logoColor from '../images/the-commander-color.png'
import img1 from '../images/cerrar-mujer-sosteniendo-smartphone.jpg'
import './HomePage.css'


function HomePage() {
  return (
    <>
      <Navbar/>
      <div className=' mt-11'>
        <section className=' h-96 bg-gray-50 flex flex-row items-center justify-center'>
          <div className='  flex flex-col justify-center items-center mr-10'>
            <img className=' w-40' src={logoColor} alt="The Commander logo"/>            
            <div className=" text-3xl font-bold mt-3 text-teal-600 ">The Commander</div>
          </div>
          <div className=' bg-gray-500 h-40 w-2'> </div>
          <div className='ml-10'>
            <p className=' text-pink-700 font-extrabold text-3xl uppercase'>The best friend for</p>
            <p className=' text-teal-600 font-extrabold text-4xl uppercase'>catering businesses </p>
          </div>
        </section>
        <hr />
        <section className='bg-teal-100'>
        <div className="container">          
          <div className="slider-container"> 
            <ul>
              <li><img src={img1} alt=""/></li>
              <li><img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80" alt=""/></li>
              <li><img src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt=""/></li>
              <li><img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt=""/></li>
            </ul>
          </div>
        </div>
          
        </section>
  
      </div>

      
    </>
    
  )
}

export default HomePage