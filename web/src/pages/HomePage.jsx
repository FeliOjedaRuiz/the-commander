import React from 'react'
import Navbar from './../components/navbar/Navbar';
import logoColor from '../images/the-commander-color.png'
import img1 from '../images/cerrar-mujer-sosteniendo-smartphone.jpg'


function HomePage() {
  return (
    <>
      <Navbar/>
      <div className=' mt-11'>
        <section className='h-screen p-6 md:h-96 bg-gray-50 md:flex content-center items-center align-middle flex-row md:items-center md:justify-center'>
          <div className='  flex flex-col justify-center items-center m-6 mr-10'>
            <img className=' w-40' src={logoColor} alt="The Commander logo"/>            
            <div className=" text-3xl font-bold mt-3 text-teal-600 ">The Commander</div>
          </div>
          <div className=' bg-gray-500 m-6 md:h-40 w-2'> </div>
          <div className=' ml-10'>
            <p className=' text-pink-700 font-extrabold text-xl md:text-3xl uppercase'>The best friend for</p>
            <p className=' text-teal-600 font-extrabold text-xl md:text-4xl uppercase'>catering businesses </p>
          </div>
        </section>
        <hr />
        <section className="flex">
        <div className=" w-6/12">
          <img src={img1} alt="Mujer Smarthphone" />
        </div>
        <div className='flex-col text-center m-10'>
        <div className=' text-pink-700 font-extrabold text-xl md:text-5xl uppercase'>Your bussisnes</div>
        <div className=' text-teal-600 font-extrabold text-xl md:text-7xl uppercase'>everywhere</div>
        </div>          
        </section>
  
      </div>

      
    </>
    
  )
}

export default HomePage