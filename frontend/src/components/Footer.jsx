import React from 'react'
import { assets, footer_data } from '../assets/assets'

function Footer() {
  return (
   <>
   <div className=' px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>

    <div className=' flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/50 text-gray-500'>

    <div>
        <img src={assets.logo} className='w-32 sm:w-44'/>
        <p className='max-w-[410px] mt-6'>
           Creating an effective helps you turn an idea into a structured, actionable plan. It gives clarity on what to build, when to build it 
        </p>
    </div>

    <div className=' flex flex-wrap justify-between w-full md:w-[45%] text-gray-5'>
     {footer_data.map((section , index)=>(
        <div key={index}>
           <h3 className=' font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>
           <ul className=' text-sm space-y-1'>
            {section.links.map((link ,i)=>(
                <li key={i}> 
                <a href='#' className=' hover:underline transition'/>
                {link}
                </li>
            ))}
           </ul>
        </div>
     ))}
    </div>

    </div>

   </div>
   </>
  )
}

export default Footer