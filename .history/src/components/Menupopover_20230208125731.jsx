import React from 'react'
import { navLinks } from '../constants'
import { menu } from '../assets/menu.svg'

const Menupopover = () => {
  return (
    <div className='sm:hidden flex justify-between
     items-center relative'>
      <div className='w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex
          justify-center items-center cursor-pointer'>
              <img src={thirdweb} alt='user' className='w-[60%] h-[60%] object-contain' />
      </div>
      <img 
        src={menu} 
        alt="menu"
        className='w-[34px] h-[34px] object-contain cursor-pointer'
        onClick={() => setToggleDrawer((prev) => !prev)}
      />
      <div className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4
       ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
        <ul className='mb-4'>
          {navLinks.map((nav, index) => (
             <li
              key={nav.id}
              className={`font-bold cursor-pointer text-[16px] hover:text-blue-400
                ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
               text-white `}
             >
                 <a>{nav.title}</a>
             </li>
          ))}
        </ul>
       </div>
   </div>
  )
}

export default Menupopover