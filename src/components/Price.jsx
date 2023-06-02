import React, { useState } from 'react'
import Card from './Card'
import Button from './Button'
import tiendaSVG from '../img/tienda.svg'

const Price = () => {

  const [frequency, setFrequency] = useState('mensual')

  const switchMensual = () => {
    if (frequency === 'mensual') {
      setFrequency('trimestral')
    }
  }

  const switchTrimestral = () => {
    if (frequency === 'trimestral') {
      setFrequency('mensual')
    }
  }

  return (
    <div className='flex flex-col bg-[#2c3357] text-white font-poppins gap-10 py-16'>
      <div>
        <h2 className='text-4xl font-semibold mb-6'>Una solución para potenciar cada negocio</h2>
        <h4>Tu tienda online con la mejor opción de herramientas para seguir creciendo. ¡Sin importar el tamaño de tu negocio!</h4>
      </div>

      <div className='relative flex justify-center items-center'>
        <span className='absolute -top-3 right-[46%] rounded-xl bg-green-600 px-2 text-sm'>-5%</span>
        <ul className='inline-flex justify-center items-center gap-4 bg-white text-gray-400 rounded-full px-4 py-2 cursor-pointer [&>li]:rounded-full [&>li]:p-2'>
          <li onClick={switchTrimestral} className={frequency === 'mensual' ? 'bg-[#4b5fa0] text-white' : ''}>Mensual</li>
          <li onClick={switchMensual} className={frequency === 'trimestral' ? 'bg-[#4b5fa0] text-white' : ''}>Trimestral</li>
        </ul>
      </div>

      <div>
        <p></p>
        <div className='flex justify-center text-gray-900 max-w-6xl mx-auto flex-wrap md:flex-nowrap'>
          <Card
            frequency={frequency}
            title={'Tienda Inicial'}
            price={0}
            description={'Comenzá a vender online gratis, conectando tus redes sociales y WhatsApp a tu tienda.'}
            buttonText={'Crear gratis'}
          />
          <Card
            frequency={frequency}
            title={'Tienda Esencial'}
            price={2699}
            description={'Profesionalizá tu negocio, sumá promociones y aumentá tus ventas en distintos canales.'}
          />
          <Card
            frequency={frequency}
            title={'Tienda Impulso'}
            price={7299}
            description={'Llevá tu negocio al siguiente nivel, optimizando tu tienda de manera flexible.'}
          />
          <Card
            frequency={frequency}
            title={'Tienda Escala'}
            price={23599}
            description={'Expandí tu negocio con herramientas que mejoran el rendimiento de tu tienda.'}
          />
          <div className='bg-white min-h-[410px] flex flex-col justify-evenly w-[280px] items-center p-2'>
            <div className='flex justify-center items-center scale-90'>
              <img src={tiendaSVG} alt='logoPrice' />
            </div>
            <h2 className={`flex text-2xl font-semibold text-[#473c41]`}>Consultar precio</h2>
            <p className='text-sm px-4'>Un servicio premium para el crecimiento de tu e-commerce. Ideal para negocios con facturación superior a $7 millones por mes.</p>
            <p className='text-sm font-semibold text-[#111827] px-4'>Sin costo por venta con Pago Nube</p>
            <Button bgColor={'bg-gray-200'} textColor={'text-[#2c3357]'} text={'Conocer más'} extraClass={'hover:bg-gray-300 font-semibold'} />
          </div>
        </div>
      </div>

      <p className='text-sm'>*Para todos los planes tenemos política de ajuste de precios en los siguientes meses: enero, abril, julio y octubre.</p>
    </div>
  )
}

export default Price