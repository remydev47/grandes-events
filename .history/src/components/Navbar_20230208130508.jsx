import React from 'react'
import { navLinks } from '../constants'
import Menupopover from './Menupopover'
import { logo } from '../assets/logo3.png'

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 bg-[#e1a984] z-20 flex justify-between items-center py-2 px-2 shadow-lg dark:bg-slate-900 sm:py-3 sm:px-8">
      {/* <div className='flex grow-0 basis-1/3 md:hidden'>
        <Menupopover />
      </div> */}

     <div className='flex grow-0 ml-2 justify-center md:justify-start'>
       <img src={logo} alt='user' className='w-[60%] h-[60%] object-contain' />
     </div> 


     <ul className="list-none sm:flex hidden justify-center items-center flex-1">
     {navLinks.map((nav, index) => (
        <li
        key={nav.id}
        className={`font-bold cursor-pointer text-[16px
           ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
          text-white `}
        >
            <a>{nav.title}</a>
        </li>
      ))}
      </ul>

    </header>
  )
}

export default Navbar