import React from 'react'
import image1 from '../img/image1.png'
import image2 from '../img/image2.png'

const Product = () => {
  return (
    <div className='flex flex-col bg-white'>
      <div className='flex flex-col lg:flex-row items-center max-w-[60%] justify-evenly mx-auto -mb-20'>
        <div>
          <img className='p-20 max-w-lg' src={image1} alt="producto" />
        </div>
        <div>
          <div className='flex gap-4 items-center'>
            <img className='w-[40px] h-[40px] self-start mt-6' src='//d2r9epyceweg5n.cloudfront.net/assets/insti/img/home/why_nube/icons/layouts.jpg' alt='tienda' />
            <div>
              <h2 className='font-poppins font-semibold text-2xl text-gray-700 text-left mt-6'>Diseños personalizables</h2>
              <p className='font-poppins font-normal text-left max-w-sm py-6'>Encontrá diseños personalizables para usar en tu tienda que se adaptan a lo que tu negocio necesita.</p>
            </div>
          </div>
          <div className='flex gap-4 items-center'>
            <img className='w-[40px] h-[40px] self-start mt-6' src='//d2r9epyceweg5n.cloudfront.net/assets/insti/img/home/why_nube/icons/apps.jpg' alt='negocio' />
            <div>
              <h2 className='font-poppins font-semibold text-2xl text-gray-700 text-left mt-6'>Tu negocio, tus aplicaciones</h2>
              <p className='font-poppins font-normal text-left max-w-sm py-6'>Potenciá tu tienda con herramientas de marketing y gestión o integrá tus propias soluciones.</p>
            </div>
          </div>
          <div className='flex gap-4 items-center'>
            <img className='w-[40px] h-[40px] self-start mt-6' src='//d2r9epyceweg5n.cloudfront.net/assets/insti/img/home/why_nube/icons/ecosystem.jpg' alt='red' />
            <div>
              <h2 className='font-poppins font-semibold text-2xl text-gray-700 text-left mt-6'>Red de aliados</h2>
              <p className='font-poppins font-normal text-left max-w-sm py-6'>Nos conectamos con los mejores servicios del mercado para que puedas potenciar tu tienda online. Accedé a aplicaciones, agencias y una variedad de profesionales y servicios que van a mejorar la experiencia de tu cliente.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row-reverse items-center max-w-[80%] justify-evenly lg:mx-auto py-20'>
        <div className='flex lg:max-w-[45%] justify-center items-center mx-auto box-border'>
          <img className='lg:p-20 max-w-lg box-border scale-50 md:scale-100' src={image2} alt="envio" />
        </div>
        <div className='flex flex-col justify-end ml-20'>
          <div className='flex gap-4 items-center'>
            <img className='w-[40px] h-[40px] self-start mt-6' src='//d2r9epyceweg5n.cloudfront.net/assets/insti/img/business/blocks/shipping.png' alt='envio' />
            <div>
              <h2 className='font-poppins font-semibold text-2xl text-gray-700 text-left mt-6'>Medios de envío locales</h2>
              <p className='font-poppins font-normal text-left max-w-sm py-6'>Enviá tus ventas con las opciones de envío que Tiendanube tiene para tu negocio. OCA, Correo Argentino, Shipnow, Envío pack, Moova y más.</p>
            </div>
          </div>
          <div className='flex gap-4 items-center'>
            <img className='w-[40px] h-[40px] self-start mt-6' src='//d2r9epyceweg5n.cloudfront.net/assets/insti/img/business/blocks/payments.png' alt='pago' />
            <div>
              <h2 className='font-poppins font-semibold text-2xl text-gray-700 text-left mt-6'>Medios de pago reconocidos</h2>
              <p className='font-poppins font-normal text-left max-w-sm py-6'>Podés empezar a cobrar rápidamente, gracias a las integraciones que ofrecemos con pasarelas de pago reconocidas. Mercado Pago, Todo Pago, PayU, Paypal o uno personalizado.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product