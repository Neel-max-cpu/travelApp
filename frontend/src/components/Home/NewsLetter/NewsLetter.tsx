import React from 'react'
import { BsEnvelopePaper } from 'react-icons/bs'

const NewsLetter = () => {
  return (
    <div className="bg-black pt-16 pb-16 flex items-center justify-center w-full flex-col">
        <div className="flex items-center justify-center w-full flex-col"  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <BsEnvelopePaper className='w-16 h-16 text-white mt-20'/>
          <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold mt-10 tracking-widest">Your Travel Journey Starts here!</h1>
          <p className="mt-3 text-white text-xs sm:text-sm">SignUp and we'll send the best deals to you!</p>
        </div>
        {/* subscription info */}
        <div className="w-full" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-delay="200">
            <input type="text" className="px-6 py-3.5 bg-white mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none" placeholder="Email" />
            
            <button className="relative overflow-hidden px-6 py-3.5 group bg-green-600 hover:bg-gradient-to-r hover:from-green-800 hover:to-yellow-400 hover:ring-2 hover:ring-white hover:ring-offset-2 hover:cursor-pointer text-white transition-all ease-in-out duration-300 mt-3 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none">
                <span className="absolute opacity-20 right-0 w-8 h-32 -mt-12 bg-white transition-all duration-1000 transform translate-x-12 rotate-12 group-hover:-translate-x-70 ease "></span>
                <span className="">Subscribe</span>
            </button>
        </div>
    </div>
  )
}

export default NewsLetter