import React from 'react'
import { meat,  menu2, menu1, restaurant, romance, coffee, waiter1, waiter2, couple } from '../assets'

const Reasons = () => {
  return (
    <section className={`bg-gray-50 sm:py-16 lg:py-24`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
       <div className="max-w-2xl mx-auto text-center">
         <h2 className="text-xl font-normal italic leading-tight text-black lg:text-3xl">
           Why Choose Us<br/> <span  className='text-xl font-semibold text-gray-400'>FOR ALL YOU EVENTS & CATERING THINGS</span>
         </h2>
         
       </div>

       <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
        {/* r1 */}
        <div className="overflow-hidden  shadow-xl border-gray-300 rounded-md">             
          <div className="p-8 xl:px-12 flex flex-row items-center justify-center">
             <div className='flex flex-col'>
               <img src={waiter1} className="h-1/2 w-1/2"/>
             </div>
             <div className='flex flex-col'>
               <h1 className='text-2xl font-semibold text-black'>EXCLUSIVE DESIGN</h1>
               <p className='text-xl font-normal text-gray-400'>Apparently we had reached a great height in the atmosphere</p>
             </div>
          </div>   
        </div>
        {/* r2 */}
        <div className="overflow-hidden  shadow-xl border-gray-300 rounded-md">             
          <div className="p-8 xl:px-12 flex flex-row items-center justify-center">
             <div className='flex flex-col'>
               <img src={waiter2} className="h-1/2 w-1/2"/>
             </div>
             <div className='flex flex-col'>
               <h1 className='text-2xl font-semibold text-black'>CLIENT FOCUSED</h1>
               <p className='text-xl font-normal text-gray-400'>Apparently we had reached a great height in the atmosphere</p>
             </div>
          </div>   
        </div>
        {/* r3 */}
        <div className="overflow-hidden  shadow-xl border-gray-300 rounded-md">             
          <div className="p-8 xl:px-12 flex flex-row items-center justify-center">
             <div className='flex flex-col'>
               <img src={meat} className="h-1/2 w-1/2"/>
             </div>
             <div className='flex flex-col'>
               <h1 className='text-2xl font-semibold text-black'>FRESH INGREDIENTS</h1>
               <p className='text-xl font-normal text-gray-400'>Apparently we had reached a great height in the atmosphere</p>
             </div>
          </div>   
        </div>
        {/* r4 */}
        <div className="overflow-hidden  shadow-xl border-gray-300 rounded-md">             
          <div className="p-8 xl:px-12 flex flex-row items-center justify-center">
             <div className='flex flex-col'>
               <img src={couple} className="h-1/2 w-1/2"/>
             </div>
             <div className='flex flex-col'>
               <h1 className='text-2xl font-semibold text-black'>DIVERSE CLIENT TASTE</h1>
               <p className='text-xl font-normal text-gray-400'>Apparently we had reached a great height in the atmosphere</p>
             </div>
          </div>   
        </div>
        {/* r5 */}
        <div className="overflow-hidden  shadow-xl border-gray-300 rounded-md">             
          <div className="p-8 xl:px-12 flex flex-row items-center justify-center">
             <div className='flex flex-col'>
               <img src={coffee} className="h-1/2 w-1/2"/>
             </div>
             <div className='flex flex-col'>
               <h1 className='text-2xl font-semibold text-black'>FLEXIBLE SERVICES</h1>
               <p className='text-xl font-normal text-gray-400'>Apparently we had reached a great height in the atmosphere</p>
             </div>
          </div>   
        </div>
        {/* r6 */}
        <div className="overflow-hidden  shadow-xl border-gray-300 rounded-md">             
          <div className="p-8 xl:px-12 flex flex-row items-center justify-center">
             <div className='flex flex-col'>
               <img src={romance} className="h-1/2 w-1/2"/>
             </div>
             <div className='flex flex-col'>
               <h1 className='text-2xl font-semibold text-black'>RESPONSIBLE SOURCING</h1>
               <p className='text-xl font-normal text-gray-400'>Apparently we had reached a great height in the atmosphere</p>
             </div>
          </div>   
        </div>

       </div>
      </div>
    </section>
  )
}

export default Reasons