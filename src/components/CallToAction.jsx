import React from 'react'
import Button from './Button'

const CallToAction = () => {
  return (
    <div className='flex flex-wrap bg-white justify-center items-center gap-48 h-[336px] mb-56 lg:mb-0'>
      <h2 className='text-6xl font-semibold text-[#2c3357] max-w-sm text-left flex-grow-0'>¿Decidiste abrir tu Tiendanube?</h2>
      <div className='flex flex-col gap-8'>
        <h3 className='font-semibold text-lg text-left max-w-lg'>Completá el formulario y empezá a crear la vidriera digital de tu negocio.</h3>
        <Button bgColor={'bg-[#006bc8]'} textColor={'text-white'} text='Crear tienda gratis' extraClass={'grow-0 max-w-[200px] font-semibold mb-56 lg:mb-0'} />
      </div>
    </div>
  )
}

export default CallToAction