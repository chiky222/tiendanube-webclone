import React from 'react'
import Form from './Form'

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row bg-white justify-center p-12 gap-16 md:w-2/3 items-center mx-auto'>
      <div className='flex flex-col gap-5 flex-wrap justify-center items-center w-[80%] md:w-full'>
        <h1 className='text-[#2c3357] text-5xl md:text-7xl font-poppins font-semibold flex-wrap flex-grow-1 max-w-lg text-start leading-[76px] -ml-6 md:ml-0'>¡Creá tu Tiendanube y multiplicá tus ventas!</h1>
        <h4 className='text-gray-700 text-xl font-poppins font-normal flex-wrap flex-grow-1 max-w-lg text-start leading-9'>Emprendedores, PyMEs y grandes negocios. Acompañamos el crecimiento de cada marca.</h4>
      </div>
      <div className='flex max-w-lg mx-auto my-0 p-6 rounded-lg bg-white dark:bg-gray-700 item-center w-full drop-shadow-2xl min-w-fit'>
        <Form />
      </div>
    </section>
  )
}

export default Hero