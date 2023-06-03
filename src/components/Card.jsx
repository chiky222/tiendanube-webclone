import React from 'react'
import Button from './Button'

const Card = ({frequency, title, price, description, buttonText = 'Probar gratis'}) => {
  return (
    <div className='bg-white min-h-[410px] flex flex-col justify-between w-[280px] items-center p-6 border-2'>      
      <h4 className='text-[#2c3357] font-semibold text-xl'>{title}</h4>
      <h2 className={`flex text-3xl font-semibold text-[#4b5fa0]`}>
        <p className='text-sm self-center mr-1'>
          {price !== 0 ? 'AR$' : ''}
        </p>
        {((frequency === 'mensual') ? (price !== 0 ? price : 'Gratis') : (price !== 0 ? Math.trunc(price*0.95) : 'Gratis'))}
        <p className='text-sm self-end pb-1'>
          {price !== 0 ? '/mes' : ''}
        </p>
      </h2>
      <p className={`${frequency === 'mensual' ? 'hidden' : 'text-green-600 font-semibold text-sm'}`}>
        {price !== 0 ? '$' : ''}
        {price !== 0 ? Math.trunc(price*0.95*3) : ''}
        {price !== 0 ? ' por 3 meses' : ''}
      </p>
      <p className='text-sm'>{description}</p>
      <p className='text-sm font-semibold text-[#111827]'>Sin costo por venta con Pago Nube</p>
      <Button bgColor={'bg-gray-200'} textColor={'text-[#2c3357]'} text={buttonText} extraClass={'hover:bg-gray-300 font-semibold'} />
    </div>
  )
}

export default Card