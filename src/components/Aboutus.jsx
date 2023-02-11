import React from 'react'
import { menu1 } from '../assets'

const Aboutus = () => {
  return (
    <section className="py-6 bg-gray-50 sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
         <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
            <div className="">
                <h1 className='text-3xl italic text-[#e1a984] text-center'>AboutUs</h1>
                <h2 className="text-4xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">Event Planning Services We Provide.</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600 font-semibold">
                 Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside…
                </p>
            </div>

            <div className=" pl-20 pr-6 sm:pl-6 md:px-0">
                <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                 <img className="relative -top-4 -left-4" src={menu1} alt="" />
                

                    
                    <div className="absolute -bottom-10 -left-16 m-2">
                        
                         
                          <div className="px-8 py-8 bg-[#e1a984]">
                               <span className="block text-4xl font-bold text-white lg:text-5xl"> 50+ </span>
                                <span className="block mt-2 text-base leading-tight text-white"> Team<br />Member</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>  
  )
}

export default Aboutus