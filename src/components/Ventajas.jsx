import React from 'react'

const Ventajas = () => {
  return (
    <div className='bg-[#ecebec] flex justify-center mx-auto gap-6 py-10 font-poppins flex-wrap'>
      <div className='flex flex-col bg-[#2c3357] items-start justify-arround rounded-xl text-left h-[300px] w-[360px] gap-4 p-6'>
        <p className='text-[#ecebec] text-sm font-medium'>Todas las funcionalidades.</p>
        <h2 className='font-semibold text-xl text-white'>Conocé todo lo que ofrecemos desde Tiendanube para potenciar tu negocio.</h2>
        <a className='text-[#006bc8] hover:text-[#00427c] transition-all' href='#funcionalidades'><p>Funcionalidades</p></a>
      </div>
      <div className='flex flex-col bg-[#2c3357] items-start justify-arround rounded-xl text-left flex-wrap h-[300px] w-[360px] gap-4 p-6'>
        <p className='text-[#ecebec] text-sm font-medium'>Un catálogo. Todos los canales de venta.</p>
        <h2 className='font-semibold text-xl text-white'>Integrá tu Tiendanube con otros canales de venta de tu marca y tené tu stock y ventas sincronizadas.</h2>
        <a className='text-[#006bc8] hover:text-[#00427c] transition-all' href='#canales'><p>Canales de venta sincronizados</p></a>
      </div>
      <div className='flex flex-col bg-[#2c3357] items-start justify-arround rounded-xl text-left flex-wrap h-[300px] w-[360px] gap-4 p-6'>
        <p className='text-[#ecebec] text-sm font-medium'>¡Estamos con vos!</p>
        <h2 className='font-semibold text-xl text-white'>Ofrecemos una variedad de canales para que elijas cómo querés ser atendido.</h2>
        <a className='text-[#006bc8] hover:text-[#00427c] transition-all' href='#ayuda'><p>Necesito ayuda</p></a>
      </div>
    </div>
  )
}

export default Ventajas