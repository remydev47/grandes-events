import React, { useState } from 'react'
import { navLinks } from '../constants'
import { logo, menu } from '../assets'

const Menupopover = () => {
    const [toggleDrawer, setToggleDrawer] = useState(false);

  return (
    <div className='sm:hidden flex justify-between
     items-center relative'>
      <div className='w-[40px] h-[40px] rounded-[10px] bg-[#e1a984] flex
          justify-center items-center cursor-pointer'>
              {/* <img src={logo} alt='user' className='w-[60%] h-[60%] object-contain' /> */}
      </div>
      <img 
        src={menu}
        alt="menu"
        className='w-[34px] h-[34px] object-contain cursor-pointer'
        onClick={() => setToggleDrawer((prev) => !prev)}
      />
      <div className={`fixed top-[60px] bg-[#e1a984] w-full
       ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
        <ul className='mb-4'>
          {navLinks.map((nav, index) => (
             <li
              key={nav.id}
              className={`font-bold cursor-pointer text-[16px]
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

const styles = {
  container:`fixed top-0 bottom-0 left-0 w-full max-w-xs rounded-r-xl bg-[#e1a984] p-6 shadow-lg dark:bg-gray-800`,
  container2:`absolute top-[60px] right-0 left-0 bg-[#e1a984] z-10 shadow-secondary py-4`
}