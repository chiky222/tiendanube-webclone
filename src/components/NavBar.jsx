// import logo from '../img/logo.svg'
import Button from './Button'

const NavBar = () => {

  const handleClick = (e) => {
    if (e.target.nodeName === 'A') {
      e.target.querySelector('svg').classList.toggle('rotate-180')
    } else if (e.target.nodeName === 'svg') {
      e.target.classList.toggle('rotate-180')
    } else if (e.target.nodeName === 'span') {
      e.target.querySelector('svg').classList.toggle('rotate-180')
    }
  }

  const showMobile = (e) => {
    document.getElementById('mobile-menu').classList.toggle('hidden')
  }

  return (
    <div className='bg-white py-4 font-poppins font-medium text-sm' >
      <div className="flex sm:hidden justify-between w-full">
        <h4 className='flex py-6 font-poppins font-bold text-2xl text-blue-950 ml-6'>tiendanube</h4>
        <button onClick={showMobile} type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 mr-8">
          <span className="sr-only">Abrir menú principal</span>
          <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <div id='mobile-menu' className='fixed hidden flex-col bg-white w-full z-10 top-0 h-full justify-evenly py-2'>
        <div className='flex justify-between w-full mr-6'>
          <h4 className='flex py-6 font-poppins font-bold text-2xl text-blue-950 ml-6'>tiendanube</h4>
          <button className="w-8 mr-6"  onClick={showMobile}>
            <svg aria-hidden="true" data-prefix="fal" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
              <path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path>
            </svg>
          </button>
        </div>

        <div>
          <nav>
            <ul className='flex flex-col gap-6 font-semibold text-xl px-6'>
              <li>
                <a href='#soluciones' className='flex gap-1' onClick={handleClick}>
                  Soluciones para vos
                  <span className='flex items-center w-[10px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='transition-all' fill="currentColor" width="16" height="16" viewBox="0 0 16 16"><path d="M8 10.18L2.39 4.52l-.89.87 5.59 5.71a1.18 1.18 0 00.86.39 1.13 1.13 0 00.85-.39l5.7-5.7-.88-.89z"></path></svg>
                  </span>
                </a>
              </li>
              <li>
                <a href='#ofrecemos' className='flex gap-1' onClick={handleClick}>
                  Qué ofrecemos
                  <span className='flex items-center w-[10px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='transition-all' fill="currentColor" width="16" height="16" viewBox="0 0 16 16"><path d="M8 10.18L2.39 4.52l-.89.87 5.59 5.71a1.18 1.18 0 00.86.39 1.13 1.13 0 00.85-.39l5.7-5.7-.88-.89z"></path></svg>
                  </span>
                </a>
              </li>
              <li>
                <a href='#ofrecemos' className='flex gap-1' onClick={handleClick}>
                  Socios
                  <span className='flex items-center w-[10px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='transition-all' fill="currentColor" width="16" height="16" viewBox="0 0 16 16"><path d="M8 10.18L2.39 4.52l-.89.87 5.59 5.71a1.18 1.18 0 00.86.39 1.13 1.13 0 00.85-.39l5.7-5.7-.88-.89z"></path></svg>
                  </span>
                </a>
              </li>
              <li className='flex'>Precios</li>
              <li>
                <a href='#ofrecemos' className='flex gap-1' onClick={handleClick}>
                  Aprendé
                  <span className='flex items-center w-[10px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='transition-all' fill="currentColor" width="16" height="16" viewBox="0 0 16 16"><path d="M8 10.18L2.39 4.52l-.89.87 5.59 5.71a1.18 1.18 0 00.86.39 1.13 1.13 0 00.85-.39l5.7-5.7-.88-.89z"></path></svg>
                  </span>
                </a>
              </li>
              <span className='flex items-center flex-col gap-6'>
                <span className='h-[1px] bg-gray-300 w-[95%]'></span>
                <Button bgColor={'bg-blue-700'} textColor={'text-white'} text='Crear tienda gratis' />
                <a className='text-gray-400' href='#login'>Login</a>
              </span>
            </ul>
          </nav>
        </div>
      </div>

      <div>
        <nav className='md:flex-row hidden sm:flex flex-col items-center justify-center w-full'>
          <div>
            {/* <img className='p-4 h-20 mr-32 shadow-xl bg-green-600 rounded-full' src={logo} alt='logo' /> */}
            <h4 className='py-6 font-poppins font-bold mr-32 text-2xl text-blue-950'>tiendanube</h4>
          </div>
          <ul className='text-black flex gap-8 items-center hover:[&>li]:text-blue-500 cursor-pointer'>
            <li>
              <a href='#soluciones' className='flex gap-1' onClick={handleClick}>
                Soluciones para vos
                <span className='flex items-center w-[10px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='transition-all' fill="currentColor" width="16" height="16" viewBox="0 0 16 16"><path d="M8 10.18L2.39 4.52l-.89.87 5.59 5.71a1.18 1.18 0 00.86.39 1.13 1.13 0 00.85-.39l5.7-5.7-.88-.89z"></path></svg>
                </span>
              </a>
            </li>
            <li>
              <a href='#ofrecemos' className='flex gap-1' onClick={handleClick}>
                Qué ofrecemos
                <span className='flex items-center w-[10px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='transition-all' fill="currentColor" width="16" height="16" viewBox="0 0 16 16"><path d="M8 10.18L2.39 4.52l-.89.87 5.59 5.71a1.18 1.18 0 00.86.39 1.13 1.13 0 00.85-.39l5.7-5.7-.88-.89z"></path></svg>
                </span>
              </a>
            </li>
            <li>
              <a href='#ofrecemos' className='flex gap-1' onClick={handleClick}>
                Socios
                <span className='flex items-center w-[10px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='transition-all' fill="currentColor" width="16" height="16" viewBox="0 0 16 16"><path d="M8 10.18L2.39 4.52l-.89.87 5.59 5.71a1.18 1.18 0 00.86.39 1.13 1.13 0 00.85-.39l5.7-5.7-.88-.89z"></path></svg>
                </span>
              </a>
            </li>
            <li>Precios</li>
            <li>
              <a href='#ofrecemos' className='flex gap-1' onClick={handleClick}>
                Aprendé
                <span className='flex items-center w-[10px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='transition-all' fill="currentColor" width="16" height="16" viewBox="0 0 16 16"><path d="M8 10.18L2.39 4.52l-.89.87 5.59 5.71a1.18 1.18 0 00.86.39 1.13 1.13 0 00.85-.39l5.7-5.7-.88-.89z"></path></svg>
                </span>
              </a>
            </li>
            <span className='flex items-center gap-6'>
              <span className='w-[1px] bg-gray-300 h-[30px]'></span>
              <a className='text-gray-400' href='#login'>Login</a>
              <Button bgColor={'bg-blue-700'} textColor={'text-white'} text='Crear tienda gratis' />
            </span>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavBar