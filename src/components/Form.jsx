import React from 'react'
import Button from './Button'

const Form = () => {
  return (
    <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 shrink-1/2">
      <div className='flex flex-col mb-4'>
        <label htmlFor="user" className='block text-gray-700 text-sm font-bold mb-2 self-start'>Nombre de tú marca</label>
        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name='user' placeholder='Escribí el nombre de tú marca'/>
      </div>
      <div className='flex flex-col items-center justify-start mb-4'>
        <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2 self-start'>E-mail</label>
        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="email" name='email' placeholder='Escribí el e-mail que más usas'/>
      </div>
      <div className='flex flex-col items-center justify-start mb-4'>
        <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2 self-start'>Contraseña</label>
        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="password" name='password' placeholder='Definí la contraseña'/>
      </div>
      <div className='flex items-center self-start w-full mb-6 justify-center gap-2 md:gap-0'>
        <input className='border focus:shadow-outline focus:outline-none  border-black rounded w-16 h-8 ml-0 mt-2 self-start' type="checkbox" name='terms' />
        <label htmlFor='terms' className='text-sm flex-wrap max-h-8 self-align [&>a]:text-blue-600 hover:[&>a]:text-blue-800 text-left'>Acepto <a href='#terminos'>Términos y Condiciones</a> y las <a href='#politicas'>Políticas de Privacidad</a> de Tiendanube.</label>
      </div>
      <div className='flex-2 font-semibold -mb-8'>
        <Button bgColor={'bg-blue-700'} textColor={'text-white'} text='Crear tienda gratis' />
      </div>
  </form>
  )
}

export default Form